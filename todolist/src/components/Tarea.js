import React, { useState } from 'react';

const Tarea = (props) => {
  const [nombreTarea, setNombreTarea] = useState("Hacer algo");
  const [responsableTarea, setResponsableTarea] = useState("Juan");
  const [estadoTarea, setEstadoTarea] = useState("No Iniciada");

  const eliminar = () => {
    // Lógica para eliminar la tarea
    console.log("Eliminar tarea");
  };

  const tareaNoIniciada = () => {
    // Lógica para marcar la tarea como No Iniciada
    setEstadoTarea("No Iniciada");
  };

  const tareaEnCurso = () => {
    // Lógica para marcar la tarea como En Curso
    setEstadoTarea("En Curso");
  };

  const tareaFinalizada = () => {
    // Lógica para marcar la tarea como Finalizada
    setEstadoTarea("Finalizada");
  };

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-end">
        <button type="button" className="btn btn-danger" onClick={eliminar}>
          Eliminar
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <input
            type="text"
            value={nombreTarea}
            onChange={(e) => setNombreTarea(e.target.value)}
          />
        </h5>
        <p className="card-text">
          Responsable:
          <input
            type="text"
            value={responsableTarea}
            onChange={(e) => setResponsableTarea(e.target.value)}
          />
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={tareaNoIniciada}>
          No Iniciada
        </button>
        <button type="button" className="btn btn-warning" onClick={tareaEnCurso}>
          En Curso
        </button>
        <button type="button" className="btn btn-success" onClick={tareaFinalizada}>
          Finalizada
        </button>
      </div>
    </div>
  );
};

export default Tarea;
