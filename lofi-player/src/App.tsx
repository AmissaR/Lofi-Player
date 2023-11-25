//import {emit, listen} from "@tauri-apps/api/event";
// import { invoke } from "@tauri-apps/api/tauri";
import DD_Menu from "./DD_Menu/DD_Menu.tsx";
import "./App.css";

function App() {
  // invoke("scan_dir", { path: "../../Music/" })
  //   .then((res: any) => {
  //     for (let i = 0; i <= 0; i++) {
  //       console.log(` 
  //         path: ${res[i].path} \n
  //         name: ${res[i].name} \n
  //         in_queue: ${res[i].in_queue} \n
  //         is_dir: ${res[i].is_dir} \n
  //       `);
  //     }
  //   })
  //   .catch((e) => console.error(e));

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              {/* Music list */}
              <DD_Menu name="Music" />
            </td>
            <td>
              {/* Noise list */}
              <DD_Menu name="Noise" />
            </td>
          </tr>
          <tr>
            <td>
              {/* Music control panel */}
              <div className="m_control_panel">Music Control Panel</div>
            </td>
            <td>
              {/* Noise control panel */}
              <div className="m_control_panel">Noise Control Panel</div>
            </td>
          </tr>
          <tr>
            {/* Current track */}
            <td>Current track</td>
            <td rowSpan={3}>List of active noises</td>
          </tr>
          <tr>
            {/* Queue */}
            <td>Queue</td>
          </tr>
          <tr>
            {/* Visualizer */}
            <td>Visualizer</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
