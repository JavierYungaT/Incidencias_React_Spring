import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { RegistrarIncidente } from "../pages/RegistrarIncidente";
import { IncidentesIngresados } from "../pages/IncidentesIngresados";
import {IncidentesPendientes} from "../pages/IncidentesPendientes";
import {Reportes} from "../pages/Reportes";
import { DetallesIncidente } from "../pages/DetallesIncidente"; 

export function MyRoutes() {
  return (
   
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/IncidentesIngresados" element={<IncidentesIngresados />} />
        <Route path="/RegistrarIncidente" element={<RegistrarIncidente />} />
        <Route path="/IncidentesPendientes" element={<IncidentesPendientes />} />
        <Route path="/detalles/:id" element={<DetallesIncidente />} /> {/* Ruta de detalles */}
        {/* <Route path="/reportes" element={<Reportes />} /> */}
      </Routes>
    
  );
}
