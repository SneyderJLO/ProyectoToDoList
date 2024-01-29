import React, { useState, useEffect } from 'react';

const Tarea = (props) => {
  const [nombreTarea, setNombreTarea] = useState(props.tarea);
  const [responsableTarea, setResponsableTarea] = useState(props.responsable);
  const [estadoTarea, setEstadoTarea] = useState("No Iniciada");

  useEffect(() => {
    const storedTarea = JSON.parse(localStorage.getItem(`tarea_${props.tareaIndex}`));
    if (storedTarea) {
      setNombreTarea(storedTarea.nombreTarea);
      setResponsableTarea(storedTarea.responsableTarea);
      setEstadoTarea(storedTarea.estadoTarea);
    }
  }, [props.tareaIndex]);

  const eliminar = () => {
    console.log("Eliminar tarea");
    props.onEliminar(props.tareaIndex);
    localStorage.removeItem(`tarea_${props.tareaIndex}`);
  };

  const guardarCambios = () => {
    console.log("Guardando cambios:", { nombreTarea, responsableTarea, estadoTarea });
    const updatedTarea = {
      nombreTarea,
      responsableTarea,
      estadoTarea,
    };
    localStorage.setItem(`tarea_${props.tareaIndex}`, JSON.stringify(updatedTarea));
  };

  const tareaNoIniciada = () => {
    setEstadoTarea("No Iniciada");
    guardarCambios();
  };

  const tareaEnCurso = () => {
    setEstadoTarea("En Curso");
    guardarCambios();
  };

  const tareaFinalizada = () => {
    setEstadoTarea("Finalizada");
    guardarCambios();
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-header d-flex justify-content-between">
        <span>{estadoTarea}</span>
        <button type="button" className="btn btn-danger" onClick={() => eliminar(props.tareaIndex)}>
          Eliminar
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <input
            type="text"
            value={nombreTarea}
            onChange={(e) => setNombreTarea(e.target.value)}
            onBlur={guardarCambios}
          />
        </h5>
        <p className="card-text">
          Responsable:
          <input
            type="text"
            value={responsableTarea}
            onChange={(e) => setResponsableTarea(e.target.value)}
            onBlur={guardarCambios}
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