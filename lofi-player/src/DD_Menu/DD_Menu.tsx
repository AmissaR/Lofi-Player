import "./DD_Menu.css";
import { useEffect, useRef, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

interface DDMenuProps {
  name: string;
  //dir_elements: custom struct;
}

// Take name of dd-menu (music/noise) and list of elements in target directory. Makes template of dd-menu and include received items.
function DD_Menu(props: DDMenuProps) {
  const name = props.name;

  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropDownFocus = (state: boolean) => {
    setOpen(!state);
  };

  return (
    <div className="drop-down">
      <div className="dd-menu" ref={dropdownRef}>
        <button
          className="dd-menu-button"
          onClick={(_e) => handleDropDownFocus(open)}
        >
          {name}
        </button>
        {open && (
          <ul>
			<ListItem name={props.name}/>
          </ul>
        )}
      </div>
    </div>
  );
}

export default DD_Menu;


async function fetchItems(dir_name: DDMenuProps) {

	try {
		if (dir_name.name === 'Music') {
			const elems_vec: Array<any> = await invoke('scan_dir', {
				path: '../../Music/',
			  });
			  return elems_vec;
		}
		else if (dir_name.name === 'Noise') {
			const elems_vec: Array<any> = await invoke('scan_dir', {
				path: '../../Noise/',
			  });
			  return elems_vec;
		}
	  } catch (error) {
		console.error(error);
	  }
	  return [];
	
}


function ListItem(dir: DDMenuProps) {
	const [items, setItems] = useState<any[]>([]);

	useEffect(() => {
		async function fetchData() {
			const result = await fetchItems(dir);
			setItems(result);
		}
		fetchData();
	}, []);

	return (
		<>
		{ 
			items.map((item, index) => (
				<li key={index}>{ item.name }</li>
			))
		}
		</>
	);
}


