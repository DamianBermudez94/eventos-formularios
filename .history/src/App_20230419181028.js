import logo from './logo.svg';
import './App.css';
import { EventosFormularios } from './components/EventosFormularios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <EventosFormularios/>
      </header>
    </div>
  );
}

export default App;
