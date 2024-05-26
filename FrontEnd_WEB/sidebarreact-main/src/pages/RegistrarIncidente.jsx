import React, { useState } from "react";
import axios from 'axios';
import '../styles/RegistrarIncidente.css';
import { text } from "@fortawesome/fontawesome-svg-core";

export function RegistrarIncidente() {
  const [tipoIncidencia, setTipoIncidencia] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaCreacion, setFecha] = useState('');
  const [prioridad, setPrioridad] = useState('');
  const [departamento, setDepartamento] = useState('');

  const handleRegistro = async () => {
    try {
      await axios.post('http://localhost:8081/api/v1/incidentes', {
        tipoIncidencia,
        descripcion,
        fechaCreacion,
        prioridad,
        departamento
      });
      alert('Incidencia registrada correctamente.');
    } catch (error) {
      console.error('Error al registrar la incidencia:', error);
      alert('Hubo un error al registrar la incidencia. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    
    
    <div className="container">
      {/* <h1>CREAR UNA NUEVA INCIDENCIA</h1> */}
      <div className="border border-primary col-md-8">
        <h1 className="titulo">CREAR UNA NUEVA INCIDENCIA</h1>
      </div>
      <br></br>
      <br></br>

      <div className="row col-md-8">

        <div className="row mb-3">

          <div className="col-md-6">
            <label htmlFor="tipoIncidencia" className="form-label">Tipo de Incidencia:</label>
            <select className="form-select" id="tipoIncidencia" value={tipoIncidencia} onChange={(e) => setTipoIncidencia(e.target.value)} >
              <option value="">Seleccionar tipo de incidencia</option>
              <option value="Core Financiero">Core Financiero</option>
              <option value="Impresoras - escanner">Impresoras - escanner</option>
              <option value="Reportes">Reportes</option>
              <option value="Teléfonos">Teléfonos</option>
              <option value="Cajeros Automáticos">Cajeros Automáticos</option>
              <option value="Problemas de Computadoras">Problemas de Computadoras</option>
              <option value="Apertura de Cuentas">Apertura de Cuentas</option>
              <option value="Depósitos">Depósitos</option>
              <option value="Retiros">Retiros</option>
              <option value="Créditos">Créditos</option>
              <option value="TD - TC">TD - TC</option>
              <option value="Otros">Otros</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="prioridad" className="form-label">Prioridad:</label>
            <select className="form-select" id="prioridad" value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
              <option value="">Seleccionar Prioridad</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>

        </div>

        <div className="row mb-3">

          <div className="col-md-6">
            <label htmlFor="departamento" className="form-label">Departamento:</label>
            <select className="form-select" id="departamento" value={departamento} onChange={(e) => setDepartamento(e.target.value)} >
              <option value="">Seleccionar departamento</option>
              <option value="Sistemas">Sistemas</option>
              <option value="Operaciones">Operaciones</option>
              <option value="Negocios">Negocios</option>
              <option value="Sercivios Electrónicos">Sercivios Electrónicos</option>
              <option value="Cobranzas">Cobranzas</option>
              <option value="Seguridad Informática">Seguridad Informática</option>
              <option value="Recursos Humanos">Recursos Humanos</option>
              <option value="Finanzas">Finanzas</option>
              <option value="Otros">Otros</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="fechaCreacion" className="form-label">Fecha:</label>
            <input type="date" className="form-control" id="fechaCreacion" value={fechaCreacion} onChange={(e) => setFecha(e.target.value)} />
          </div>

        </div>

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripcion:</label>
          <textarea className="form-control" id="observacion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleRegistro}>Registrar</button>

      </div>

    </div>
  );
}
