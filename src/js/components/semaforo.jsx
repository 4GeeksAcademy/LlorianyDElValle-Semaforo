import React, { useState } from 'react'

export const Semaforo = () => {

  const [color, setColor] = useState("red")

  const cambiarColor = () => {
    if (color === "red") {
      setColor("green");
    } else if (color === "green") {
      setColor("yellow");
    } else {
      setColor("red");
    }
  }
  const [tieneMorado, setTieneMorado] = useState(false);
  return (
    <div className="semaforo-wrapper">
      <div className="caja">
        <div onClick={() => setColor("red")} className={color === "red" ? "light red on" : "light red"}></div>
        <div onClick={() => setColor("yellow")} className={color === "yellow" ? "light yellow on" : "light yellow"}></div>
        <div onClick={() => setColor("green")} className={color === "green" ? "light green on" : "light green"}></div>
       
       
       
        {tieneMorado &&  (
          <div onClick={() => setColor("purple")} className={color === "purple" ? "light purple on" : "light purple"}></div>
        )}
        
      </div>
      <div className="palo-container">
        <div className="palo"></div>
        <button onClick={cambiarColor}>PRESS</button>
      </div>
      <button onClick={() => setTieneMorado(!tieneMorado) }>Agregar morado</button>
    </div>
  )
}