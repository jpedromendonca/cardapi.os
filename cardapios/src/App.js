import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './components/Menu';
import Login from './components/Login';
import Cadastro from './components/Cadastro';

export default function App() {
  return (
    <div>
      <nav
        className="orange darken-4
"
      >
        <ul>
          <li>
            <Link to="/">CARDÁPI.OS</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}
