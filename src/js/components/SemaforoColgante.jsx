// SemaforoColgante.jsx
import React, { useState } from "react";

export const SemaforoColgante = () => {

    const [color, setColor] = useState("lila");
   

    const cambioColor = () => {
        if (color === "lila") {
            setColor("pink");
        } else if (color === "pink") {
            setColor("blue");
        } else if (color === "blue") {
            setColor("lila");
        } else {
            setColor("white");
        }
    };
     const [tieneBlanco,setTieneBlanco]=useState(false);

    return (
        <div className="semaforoEmboltorio">

            <div className="colgador"></div>
            <div className="semaforo">
                <div onClick={() => setColor("lila")} className={color === "lila" ? "light lila on" : "light lila"}></div>
                <div onClick={() => setColor("pink")} className={color === "pink" ? "light pink on" : "light pink"}></div>
                <div onClick={() => setColor("blue")} className={color === "blue" ? "light blue on" : "light blue"}></div>

                {tieneBlanco &&  (
          <div onClick={() => setColor("white")} className={color === "white" ? "light white on" : "light white"}></div>
        )}
            </div>

            <button onClick={cambioColor}>cambia color</button>
            <button onClick={()=> setTieneBlanco(!tieneBlanco)}>PRESS</button>
        </div>
    );
};