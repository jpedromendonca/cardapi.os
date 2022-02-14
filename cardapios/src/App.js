import './App.css';
import Menu from './components/Menu';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
function App() {
  return (
    <div className="App">
      <header className="App-header ">CARDÁPI.OS</header>

      <main>
        <Menu />
      </main>

      <footer className="App-footer">
        <label className="Titulo">Login</label>
        <label className="Titulo">Cadastro</label>
      </footer>
    </div>
  );
}

export default App;
