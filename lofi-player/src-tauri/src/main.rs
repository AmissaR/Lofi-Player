// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


use crate::audio_element::AudioElement;
mod audio_element;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![scan_dir])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}



#[derive(Debug, serde::Serialize)]
struct CustomError(String);

impl From<std::io::Error> for CustomError {
    fn from(error: std::io::Error) -> Self {
        CustomError(format!("IO Error: {}", error))
    }
}

#[tauri::command]
fn scan_dir(path: String) -> Result<Vec<AudioElement>, CustomError> {
    let path = std::path::Path::new(&path);
    let mut elems_vec = Vec::new();
	match AudioElement::generate_content(&mut elems_vec, path) {
        Ok(()) => {
            for c in elems_vec.clone() {
                println!("c = {:?}", c);
            }
            Ok(elems_vec)
        }
        Err(e) => {
            Err(e.into())
        }   
    }
}
