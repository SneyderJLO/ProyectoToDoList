import React from 'react'
import { useState } from 'react';

const Algo = (props) => {
  console.log("Aqui");
  console.log(props.propiedad)
  const [variable, setVariable] = useState("Variable");
  //etVariable(props.propiedad);
  //let variable = "variable";
  const alterarVariable = (newValue) => {
    setVariable(newValue)
  }
  
  let arr = [
    "Value 1",
    "Value 2",
    "Value 3"
  ];
  return (
    <div>
      Variable: <strong className={variable.length >= 4 ? 'verde':'rojo'}>{variable}</strong>
      <input type="text" onChange={e => alterarVariable(e.target.value)} placeholder='Cambiar'/>
      <button onClick={ e => alterarVariable("Hola que hace")}>
        miButton
      </button>
      <ul>
      {
        arr.map((val, i)=>{
            return <li key={i}>{val}</li>
          }
        )
      }
      </ul>
    </div>
  )
}

export default Algo
