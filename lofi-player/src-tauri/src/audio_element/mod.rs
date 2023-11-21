use std::path::Path;
//use std::fs;
//use rodio;

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
	fn new(file: &str) -> Option<AudioElement> {
		let file = Path::new(file);

		let exist = file.try_exists();
		match exist {
			Ok(true) => {},
			Ok(false) => {
				eprintln!("Error: File path does not exist.");
				return None;
			},
			Err(_) => {
				eprintln!("Error: File existence can't be checked.");
				return None;
			}
		}

		let extension = file.extension();
		if extension != Some("mp3".as_ref()) {
			eprintln!("Error: Is not an 'mp3' file.");
			return None;
		}

		let path = file.to_str()?.to_string();
		let name = file.file_name()?.to_str()?.to_string();
		let is_dir = file.is_dir();

		Some (
			AudioElement {
				path,
				name,
				in_queue: false,
				is_dir,
			}
		)
	}
}
