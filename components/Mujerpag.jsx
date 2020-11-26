import React from 'react'
import './styles/mixpag.css'
import woman1 from '../img/woman1.jpg'
import woman1frame1 from '../img/woman1frame1.jpg'
import woman1frame2 from '../img/woman1frame2.jpg'
import woman1frame3 from '../img/woman1frame3.jpg'
import woman1frame4 from '../img/woman1frame4.jpg'
import fondo1 from '../img/fondo1.jpg'

const Mujerpag = () => {
    
    return (
        <div className="conthombre">
            <img src={fondo1} className="fondo1item"/>
            <div className="imgbig">
                <img src={woman1} alt="" className="imgprinhombre"/>
                <h2>Descripcion</h2>
                <li>
                    <ol>talla del modelo: L</ol>
                    <ol>Atura del modelo: 6.14ft/ 187 cm</ol>
                    <ol>Color: gris</ol>
                    <ol>Composicion:
                        Exterior 100% algodon
                    </ol>
                </li>
            </div>
            <div className="cont4img">
                <div className="margen">
                    <img src={woman1frame1} className="imgcont4"/>
                    <img src={woman1frame2} className="imgcont4"/><br/>
                    <img src={woman1frame3} className="imgcont4"/>
                    <img src={woman1frame4} className="imgcont4"/>
                </div>
                <div className="contcolors">
                    <h2>colores</h2>
                    <div className="blanco">
                    <input type="checkbox" className="colorblanco"/> 
                    </div>
                    <div className="negro">
                    <input type="checkbox" className="colornegro"/> 
                    </div>
                    <div className="azul">
                    <input type="checkbox" className="colorazul"/> 
                    </div>
                    <div className="gris">
                    <input type="checkbox" className="colorgris"/> 
                    </div>
                    <div className="rojo">
                    <input type="checkbox" className="colorrojo"/>
                    </div>
                    <div className="amarillo">
                    <input type="checkbox" className="coloramarillo"/>  
                    </div>                                   
                </div>
                <div className="botones">
                        <button className="botoncompras">Agregar al carrito</button>
                        <button className="botoncompras">Ir a comprar</button>
                    </div>     
            </div>
        </div>
    )
}
export default Mujerpag
