import React from 'react'

const NavBar = ( props ) => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <h1 className="navbar-brand">ToDoList</h1>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary" onClick={props.mostrarCrear}>Crear</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
