import DD_Menu from "./DD_Menu/DD_Menu.tsx";
import "./App.css";


function App() {
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