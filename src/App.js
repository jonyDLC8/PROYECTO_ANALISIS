import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PartidaInicial from "./PartidaInicial";
import PartidaDiario from "./PartidaDiario";

function App() {
  return (
    <Router>
      <div className="encabezadodepag">
        
        <title>FASE 1</title>

        <nav>
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/PartidaInicial">PARTIDA INICIAL</Link></li>
            <li><Link to="/PartidaDiario">PARTIDAS DE DIARIO</Link></li>
            <li><Link to="#">PARTIDA MAYOR</Link></li>
            <li><Link to="#">ESTADO DE CUENTA</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/PartidaInicial" element={<PartidaInicial />} />
          <Route path="/PartidaDiario" element={<PartidaDiario />} />
        </Routes>

        
      </div>
    </Router>
  );
}

function Inicio() {
  return <h2>Bienvenido a la página de inicio.</h2>;
}

export default App;
