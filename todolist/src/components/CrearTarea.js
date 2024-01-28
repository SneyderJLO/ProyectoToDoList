import React from 'react'
import { useState } from 'react';

const CrearTarea = ( props ) => {
  console.log(props.bCrear)
  const [tarea, setTarea] = useState('');
  const [responsable, setResponsable] = useState('');
  const _setTarea = (e) => {
    setTarea(e.target.value);
  };

  const _setResponsable = (e) => {
    setResponsable(e.target.value);
  };
    return (
      <div className={`modal ${props.bCrear ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: props.bCrear ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Nueva Tarea</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={props.ocultarCrear}></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="tarea" className="form-label">Tarea:</label>
                <input type="text" className="form-control" id="tarea" value={tarea} onChange={_setTarea} />
              </div>
              <div className="mb-3">
                <label htmlFor="responsable" className="form-label">Responsable:</label>
                <input type="text" className="form-control" id="responsable" value={responsable} onChange={_setResponsable} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={props.ocultarCrear}>Cancelar</button>
              <button type="button" className="btn btn-primary" onClick={() => props.crearTarea(tarea, responsable)}>Crear</button>
            </div>
          </div>
        </div>
      </div>
      );
}

export default CrearTarea
