mod tests;

use std::fs;
use std::path::Path;
//use rodio;


#[derive(Debug, Clone, serde::Serialize)]
pub struct AudioElement {
    path: String,
    name: String,
    in_queue: bool,
    is_dir: bool,
    //	duration: Option<std::time::Duration>,
    //	is_playing_now: bool,
    //	volume: u8,
}

impl AudioElement {
	/// Takes mp3 file or directory and makes an object of the AudioElement structure from it.
	///
	/// Has all the necessary metadata to render an item in a Music/Noises drop-down menus.
    fn new(file: &Path) -> Option<AudioElement> {
        let extension = file.extension();
        let is_dir = file.is_dir();

        if extension != Some("mp3".as_ref()) && !is_dir {
            //eprintln!("Error: Is not an 'mp3' or dir file.");
            return None;
        }

        let path = file.to_str()?.to_string();
        let name = file.file_name()?.to_str()?.to_string();

        Some(AudioElement {
            path,
            name,
            in_queue: false,
            is_dir,
        })
    }

	/// Takes vector to collect AudioElement objects and dir to scan for child dirs and mp3 files.
	///
	/// Return the result of the scan (child dirs and mp3 files).
    pub fn generate_content(elems_vec: &mut Vec<AudioElement>, root_dir: &Path) -> std::io::Result<()> {
        if root_dir.is_dir() {
            let dir_iter = match fs::read_dir(root_dir) {
                Ok(iter) => iter,
                Err(e) => {
                    eprintln!("Error: Can't read directory: {}", e);
                    return Err(e);
                }
            };
            for entry in dir_iter {
                let entry = entry?;
                let path = entry.path();

                match AudioElement::new(&path) {
                    Some(e) => {
                        elems_vec.push(e);
                        if path.is_dir() {
                            AudioElement::generate_content(elems_vec, &path)?; // HANDLE ERROR
                        }
                    }
                    None => {
                        //eprintln!("Error: Can't create AudioElement object from {:?}!", path);
                    }
                };
            }
        } else {
            eprintln!("Error: Directory does not exist!")
        }

        Ok(())
    }
}
