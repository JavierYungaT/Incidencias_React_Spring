import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon
import { faEye } from '@fortawesome/free-solid-svg-icons'; // Importa el icono que necesitas
import "../styles/IncidentesIngresados.css";

export function IncidentesPendientes() {
  const [incidentes, setIncidentes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const handleFilter = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/v1/incidentesPendientes`, {
        params: {
          estado: "PENDIENTE"
        }
      });
      setIncidentes(response.data);
      console.log("DATOS", response.data);
    } catch (error) {
      console.error("Error al filtrar los incidentes:", error);
    }
  };

  useEffect(() => {
    handleFilter(); // Llama a handleFilter cuando el componente se monta
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleViewDetails = (id) => {
    console.log("ID del incidente seleccionado:", id);
    navigate(`/detalles/${id}`);
  };

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="container">
      <div className="border border-primary col-md-8">
        <h1 className="titulo">INCIDENTES PENDIENTES</h1>
      </div>
      <br></br>
      <br></br>

      {/* <div className="filter-container row">
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
      </div> */}

      {/* <br /> */}
      <table className="datatable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Estado</th>
            <th>Descripción</th>
            <th>Prioridad</th>
            <th>Fecha Inicio</th>
            <th>Revisar</th>
          </tr>
        </thead>
        <tbody>
          {incidentes.slice(startIndex, endIndex).map((incidente) => (
            <tr key={incidente.id}>
              <td>{incidente.id}</td>
              <td>{incidente.estado}</td>
              <td>{incidente.descripcion}</td>
              <td>{incidente.prioridad}</td>
              <td>{incidente.fechaCreacion}</td>
              <td>
                <button onClick={() => handleViewDetails(incidente.id)}>
                  <FontAwesomeIcon icon={faEye} /> {/* Usa el icono de FontAwesome */}
                </button>
              </td>
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
