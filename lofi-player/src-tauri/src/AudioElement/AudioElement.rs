use std::path::Path;
pub struct AudioElement {
	path: std::fs::File,
	name: str,
	in_queue: bool,
	duration: Option<std::time::Duration>,
	is_dir: bool,
	is_playing_now: bool,
	volume: u8,
}

// impl AudioElement {
// 	pub fn new(file: fs::Pa) -> AudioElement {
// 		let name = file.
// 		AudioElement {
// 			path: file,
// 			name:
// 		}
// 	}
// }