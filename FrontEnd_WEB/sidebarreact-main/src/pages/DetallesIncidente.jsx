import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

export function DetallesIncidente() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [incidente, setIncidente] = useState(null);
    const [observacion, setObservacion] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIncidente = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/v1/incidentes/${id}`);
                setIncidente(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener los detalles del incidente:", error);
                setLoading(false);
            }
        };
        fetchIncidente();
    }, [id]);

    const handleSolucionar = async () => {
        try {
            await axios.put(`http://localhost:8081/api/v1/incidentes/${id}/solucionar`, { observacion });
            navigate("/IncidentesPendientes");
        } catch (error) {
            console.error("Error al solucionar el incidente:", error);
        }
    };

    if (loading) {
        return <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Cargando...</span>
            </div>
        </div>;
    }

    return (
        <div className="container">
            <div className="border border-primary col-md-8">
                <h1 className="titulo">DETALLE DEL INCIDENTE</h1>
            </div>
            <br></br>
            <br></br>

            <div className="row col-md-8">

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="estado" className="form-label">Estado:</label>
                        <input type="text" className="form-control" id="estado" value={incidente.estado} disabled />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="prioridad" className="form-label">Prioridad:</label>
                        <input type="text" className="form-control" id="prioridad" value={incidente.prioridad} disabled />
                    </div>

                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="departamento" className="form-label">Departamento:</label>
                        <input type="text" className="form-control" id="departamento" value={incidente.departamento} disabled />
                        {/* <textarea className="form-control" id="descripcion" value={incidente.descripcion} disabled /> */}

                    </div>
                    <div className="col-md-6">
                        <label htmlFor="fechaCreacion" className="form-label">Fecha de Creación:</label>
                        <input type="text" className="form-control" id="fechaCreacion" value={incidente.fechaCreacion} disabled />
                    </div>
                </div>
                <div className="md-3">
                    <label htmlFor="descripcion" className="form-label">Descripción:</label>
                    {/* <input type="text" className="form-control" id="descripcion" value={incidente.descripcion} disabled /> */}
                    <textarea className="form-control" id="descripcion" value={incidente.descripcion} disabled />

                </div>

                <div className="mb-3">
                    <label htmlFor="observacion" className="form-label">Observación:</label>
                    <textarea className="form-control" id="observacion" value={observacion} onChange={(e) => setObservacion(e.target.value)} />
                </div>

            </div>

            {/* <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="observacion" className="form-label">Observación:</label>
                    <input type="text" className="form-control" id="observacion" value={observacion} onChange={(e) => setObservacion(e.target.value)} />
                </div>

                <div className="col-md-6">
                    <label htmlFor="fechaCreacion" className="form-label">Fecha de Creación:</label>
                    <input type="text" className="form-control" id="fechaCreacion" value={incidente.fechaCreacion} disabled />
                </div>
            </div> */}

            <button className="btn btn-primary" onClick={handleSolucionar}>GUARDAR</button>
        </div>
    );
}
