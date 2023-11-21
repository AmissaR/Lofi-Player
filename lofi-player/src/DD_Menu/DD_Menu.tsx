import "./DD_Menu.css"
import {useRef, useState} from "react";

interface DDMenuProps {
	name: string;
	//dir_elements: custom struct;
}

// Take name of dd-menu (music/noise) and list of elements in target directory. Makes template of dd-menu and include received items.
function DD_Menu(props: DDMenuProps) {
	const name = props.name;

	const [open, setOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null)
	const handleDropDownFocus = (state: boolean) => {
		setOpen(!state);
	};

//	const drawButtonElement = () => {
//
//	}

	return (
		<div className="drop-down">
			<div className="dd-menu" ref={dropdownRef}>
				<button className="dd-menu-button" onClick={(_e) => handleDropDownFocus(open)}>
					{name}
				</button>
				{
					open && (
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
					</ul>
					)
				}
			</div>
		</div>
	);
}

export default DD_Menu;
