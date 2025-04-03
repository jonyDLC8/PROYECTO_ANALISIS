import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




export default function PartidaDiario(){
  const [cuentas, setCuentas] = useState([]);
  const [tipoCuenta, setTipoCuenta] = useState("Capital");
  const [tipoEstado, setTipoEstado] = useState("Activo");
  const [monto, setMonto] = useState("");
  const [FechaD, setFechaD] = useState("");

  const agregarCuenta = () => {
    if (monto.trim() === "") {
      alert("Ingrese un monto válido.");
      return;
    }

    if (FechaD.trim() === "") {
      alert("Ingrese fecha para partida de diario");
      return;
    }

    const nuevaCuenta = { FechaD, tipoCuenta, tipoEstado, monto };
    setCuentas([...cuentas, nuevaCuenta]);
    setMonto("");
    setFechaD("");
    };

  const agregarPartida = () => {
    if (cuentas.length === 0){
        alert("No existen cuentas para guardar la Partida Inicial");
        return;
    }
    localStorage.setItem("PartidaDiario", JSON.stringify(cuentas));
    alert("Partida Inicial Guardada");
    setCuentas([]);
    };

  const eliminarCuenta = (index) => {
    setCuentas(cuentas.filter((_, i) => i !== index));
    };

  return (

    <div className="PartidaDiario">

    <title>FASE 1</title>

<h1>PARTIDA INICIAL</h1>

      <div class = "caja" >
      <div class="grupo">
          <label >FECHA:</label>
          <input
            type="date"
            value={FechaD}
            onChange={(e) => setFechaD(e.target.value)}
            placeholder="Fecha"
          />
        </div>
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
        </div>
        <div class="grupo">
          <button onClick={agregarCuenta}>
            AGREGAR
          </button>

        </div>
      </div>
      <div class = "cajaT">
        <table>
          <thead>
            <tr>
              <th class="encabezado">FECHA </th>
              <th class="encabezado">TIPO DE CUENTA</th>
              <th class="encabezado">A / C</th>
              <th class="encabezado">MONTO</th>
              <th class="encabezado">ACCIÓN</th>
            </tr>
          </thead>
          <tbody>
            {cuentas.map((cuenta, index) => (
              <tr key={index}>
                <td class="fila">{cuenta.FechaD}</td>
                <td class="fila">{cuenta.tipoCuenta}</td>
                <td class="fila">{cuenta.tipoEstado}</td>
                <td class="fila">{cuenta.monto}</td>
                <td >
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