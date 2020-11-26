import React, {useContext} from 'react'
import './styles/mixpag.css'
import man1 from '../img/man1.jpg'
import man1frame1 from '../img/man1frame1.jpg'
import man1frame2 from '../img/man1frame2.jpg'
import man1frame3 from '../img/man1frame3.jpg'
import man1frame4 from '../img/man1frame4.jpg'
import fondo1 from '../img/fondo1.jpg'

// context
import CarContext from '../context/CarContext'

export const Hombrepag = () => {
    const polo = {talla: 'M', precio: '50'}

    const {carData, setCarData} = useContext(CarContext)
    const addProductToCar = (product) => {
        setCarData([...carData, product])
    }
    return (
        <div className="conthombre">
            <img src={fondo1} className="fondo1itemman"/>
            <div className="imgbig">
                <img src={man1} alt="" className="imgprinhombre"/>
                <h2 className="descripcion">Descripcion</h2>
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
                    <img src={man1frame1} className="imgcont4"/>
                    <img src={man1frame2} className="imgcont4"/><br/>
                    <img src={man1frame3} className="imgcont4"/>
                    <img src={man1frame4} className="imgcont4"/>
                </div>
                <div className="contcolors">
                    <h2 className="textocolores">colores</h2>
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
                        <button className="botoncompras" onClick={() => addProductToCar(polo)}>Agregar al carrito</button>
                        <button className="botoncompras">Ir a comprar</button>
                    </div>                                   
            </div>
        </div>
    )
}
export default Hombrepag