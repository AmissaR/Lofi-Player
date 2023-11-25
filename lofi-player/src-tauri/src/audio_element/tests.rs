#[cfg(test)]
mod test {
	use crate::audio_element::AudioElement;

	#[test]
	fn check() -> std::io::Result<()>{
		let path = std::path::Path::new("../../Music/");

		let mut elems = Vec::new();
		AudioElement::generate_content(&mut elems, path).unwrap();
		for c in elems {
			println!("c = {:?}", c);
		}

		Ok(())
	}
}
