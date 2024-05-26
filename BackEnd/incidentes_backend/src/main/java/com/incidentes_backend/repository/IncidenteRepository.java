package com.incidentes_backend.repository;


import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.incidentes_backend.model.Incidente;





@Repository
public interface IncidenteRepository extends JpaRepository<Incidente, Long> {
    List<Incidente> findByEstado(String estado);
    List<Incidente> findByFechaCreacionBetween(LocalDate fechaInicio, LocalDate fechaFin);
}


