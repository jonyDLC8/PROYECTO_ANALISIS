import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./PIEstilo.css";

export default function PartidaInicial() {
  
  
  const [cuentas, setCuentas] = useState([]);
  const [tipoCuenta, setTipoCuenta] = useState("Capital");
  const [tipoEstado, setTipoEstado] = useState("Activo");
  const [monto, setMonto] = useState("");

  const agregarCuenta = () => {
    if (monto.trim() === "") {
      alert("Ingrese un monto válido.");
      return;
    }

    const nuevaCuenta = { tipoCuenta, tipoEstado, monto };
    setCuentas([...cuentas, nuevaCuenta]);
    setMonto("");
  };

  const agregarPartida = () => {
    if (cuentas.length === 0){
        alert("No existen cuentas para guardar la Partida Inicial");
        return;
    }
    localStorage.setItem("PartidaInicial", JSON.stringify(cuentas));
    alert("Partida Inicial Guardada");
    setCuentas([]);
};

  const eliminarCuenta = (index) => {
    setCuentas(cuentas.filter((_, i) => i !== index));
  };

  return (  
    
    <div className="PartidaInicial">

    <title>FASE 1</title>
   

   <h1>PARTIDA INICIAL</h1>


      <div class = "caja" >
        <div class="grupo">
          <label>Tipo de cuenta:</label>
          <select value={tipoCuenta} onChange={(e) => setTipoCuenta(e.target.value)}>
            <option value="Capital">Capital</option>
            <option value="Inversor">Inversor</option>
            <option value="Mercaderia">Mercadería</option>
          </select>
        </div>
        <div class="grupo">
          <label>Estado:</label>
          <select value={tipoEstado} onChange={(e) => setTipoEstado(e.target.value)}>
            <option value="Activo">ACTIVO</option>
            <option value="Pasivo">PASIVO</option>
          </select>
        </div>
        <div class="grupo">
          <label >Monto:</label>
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="Ingrese monto"
          />
        </div >
        <div class="grupo">
          <button onClick={agregarCuenta}>
            AGREGAR
          </button>
          <button onClick={agregarPartida}>
            FINALIZAR
          </button>
        </div>
      </div>
      <div class = "cajaT">
        <table>
          <thead>
            <tr>
              <th >TIPO DE CUENTA</th>
              <th >A / C</th>
              <th >MONTO</th>
              <th >ACCIÓN</th>
            </tr>
          </thead>
          <tbody>
            {cuentas.map((cuenta, index) => (
              <tr key={index}>
                <td >{cuenta.tipoCuenta}</td>
                <td >{cuenta.tipoEstado}</td>
                <td >{cuenta.monto}</td>
                <td>
                  <button onClick={() => eliminarCuenta(index)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    
  );
}