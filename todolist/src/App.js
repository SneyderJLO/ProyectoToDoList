import logo from './logo.svg';
import './App.css';
import Algo from './components/Algo';
import NavBar from './components/NavBar';
import { useState, useEffect} from 'react';
import CrearTarea from './components/CrearTarea';
import Tarea from './components/Tarea';

function App() {
  const [bCrear, setMostrarCrear] = useState(false);
  const [tareas, setTareas] = useState([]);
  useEffect(() => {
    const storedTareas = JSON.parse(localStorage.getItem('tareas')) || [];
    setTareas(storedTareas);
  }, []);

  const mostrarCrear = () => {
    setMostrarCrear(true);
  };

  const ocultarCrear = () => {
    setMostrarCrear(false);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);

    // Guardar tareas en el almacenamiento local (opcional)
    localStorage.setItem('tareas', JSON.stringify(nuevasTareas));
  };

  const crearTarea = (tarea, responsable) => {
    const nuevaTarea = { tarea, responsable };
    const nuevasTareas = [...tareas, nuevaTarea];
    setTareas(nuevasTareas);
    localStorage.setItem('tareas', JSON.stringify(nuevasTareas));
    ocultarCrear()
  };
  return (
    <div className="App">
      {console.log("App render")}
      <NavBar mostrarCrear={mostrarCrear}/>
      <CrearTarea bCrear={bCrear} ocultarCrear={ocultarCrear} crearTarea={crearTarea}/>
      
       <div className="container-fluid">
        <div className="row">
          {tareas.map((tarea, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <Tarea
                tareaIndex={index}
                onEliminar={eliminarTarea}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
