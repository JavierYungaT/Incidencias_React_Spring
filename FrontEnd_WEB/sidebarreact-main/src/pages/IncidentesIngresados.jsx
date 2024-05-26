import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/IncidentesIngresados.css";

export function IncidentesIngresados() {
  const [incidentes, setIncidentes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    // const fetchIncidentes = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:8081/api/v1/incidentes");
    //     setIncidentes(response.data);
    //   } catch (error) {
    //     console.error("Error al obtener los incidentes:", error);
    //   }
    // };

    // fetchIncidentes();
  }, []);

  const handleFilter = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/v1/incidentesIngresados?startDate=${startDate}&endDate=${endDate}`
      );
      setIncidentes(response.data);
    } catch (error) {
      console.error("Error al filtrar los incidentes:", error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="container">
      <div className="border border-primary col-md-8">
        <h1 className="titulo">INCIDENTES INGRESADOS</h1>
      </div>
      <br></br>
      <br></br>

      <div className="filter-container row">
        <div className="col-md-5">
          <label htmlFor="startDate" className="form-label">Fecha Inicio:</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="endDate" className="form-label">Fecha Fin:</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="endDate" className="form-label"></label>
          <button type="button" className="btn btn-primary" onClick={handleFilter}>Filtrar</button>
        </div>
      </div>

      <br></br>
      <table className="datatable">
        <thead>
          <tr>
            <th>Estado</th>
            <th>Incidencia</th>
            <th>Descripción</th>
            <th>Prioridad</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Observación</th>
          </tr>
        </thead>
        <tbody>
          {incidentes.slice(startIndex, endIndex).map((incidente) => (
            <tr key={incidente.id}>
              <td>{incidente.estado}</td>
              <td>{incidente.tipoIncidencia}</td>
              <td>{incidente.descripcion}</td>
              <td>{incidente.prioridad}</td>
              <td>{incidente.fechaCreacion}</td>
              <td>{incidente.fechaFin}</td>
              <td>{incidente.observacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array(Math.ceil(incidentes.length / itemsPerPage))
          .fill()
          .map((_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
}
