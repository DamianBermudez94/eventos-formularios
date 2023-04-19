import logo from './logo.svg';
import './App.css';
import { EventosFormularios } from './components/EventosFormularios';
import {EventosFormulariosOnChange} from "./components/EventosFormulariosOnChange"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <EventosFormularios/>
        <EventosFormulariosOnChange/>
      </header>
    </div>
  );
}

export default App;
