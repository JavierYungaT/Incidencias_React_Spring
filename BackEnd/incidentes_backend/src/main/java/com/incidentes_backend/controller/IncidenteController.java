package com.incidentes_backend.controller;


import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.incidentes_backend.exception.ResourceNotFoundException;
import com.incidentes_backend.model.Incidente;
import com.incidentes_backend.repository.IncidenteRepository;


//CAMBIAR EL CROSSORIGING POR 5173 
@RestController
@RequestMapping("/api/v1")
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "http://192.168.18.8:8082")
public class IncidenteController {

    @Autowired
    private IncidenteRepository incidenteRepository;

    @GetMapping("/incidentes")
    public List<Incidente> listarIncidentes() {
        return incidenteRepository.findAll();
    }

   
    @PostMapping("/incidentes")
    public Incidente guardarIncidente(@RequestBody Incidente incidente) {
        incidente.setEstado("PENDIENTE");
        return incidenteRepository.save(incidente);
    }

    
    @GetMapping("/incidentes/{id}")
    public ResponseEntity<Incidente> listarIncidentesId(@PathVariable Long id) {
        Incidente incidente = incidenteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("El incidente con el id no existe: " + id));
        return ResponseEntity.ok(incidente);
    }

    @PutMapping("/incidentes/{id}")
    public ResponseEntity<Incidente> actualizarIncidente(@PathVariable Long id, @RequestBody Incidente incidenteRequest) {
        Incidente incidente = incidenteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("El incidente con el id no existe: " + id));

        incidente.setEstado(incidenteRequest.getEstado());
        incidente.setObservacion(incidenteRequest.getObservacion());
        incidente.setFechaCreacion(incidenteRequest.getFechaCreacion());

        Incidente incidenteActualizado = incidenteRepository.save(incidente);
        return ResponseEntity.ok(incidenteActualizado);
    }

    //ACTUALIZAR POR ID EL INCIDENTE
    @PutMapping("/incidentes/{id}/solucionar")
    public ResponseEntity<Incidente> solucionarIncidente(@PathVariable Long id, @RequestBody Incidente incidenteRequest) {
        Incidente incidente = incidenteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("El incidente con el id no existe: " + id));

        incidente.setEstado("SOLUCIONADO");
        incidente.setObservacion(incidenteRequest.getObservacion());
        incidente.setFechaFin(LocalDate.now());  // Establece la fecha actual como fecha de finalización

        Incidente incidenteActualizado = incidenteRepository.save(incidente);
        return ResponseEntity.ok(incidenteActualizado);
    }

    
    @DeleteMapping("/incidentes/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarIncidente(@PathVariable Long id) {
        Incidente incidente = incidenteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("El incidente con el id no existe: " + id));

        incidenteRepository.delete(incidente);
        Map<String, Boolean> response = new HashMap<>();
        response.put("delete", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/incidentesPendientes")
    public List<Incidente> listarIncidentesPendientes(@RequestParam(required = false) String estado) {
        if (estado != null) {
            return incidenteRepository.findByEstado(estado);
        } else {
            return incidenteRepository.findAll();
        }
    }
    
    //----------------------------------------------------------------------------------------
    // PARA FILTRAR POR FECHAS LOS INCIDENTES

    @GetMapping("/incidentesIngresados")
    public List<Incidente> listarIncidentesIngresados(
        @RequestParam(required = false) String estado,
        @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
        @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate
    ) {
        if (startDate != null && endDate != null) {
            return incidenteRepository.findByFechaCreacionBetween(startDate, endDate);
        } else if (estado != null) {
            return incidenteRepository.findByEstado(estado);
        } else {
            return incidenteRepository.findAll();
        }
    }



}

