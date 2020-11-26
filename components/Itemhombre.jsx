import React, {useContext} from 'react'
import man1 from '../img/man1.jpg'
import man2 from '../img/man2.jpg'
import man3 from '../img/man3.jpg'
import man4 from '../img/man4.jpg'
import man5 from '../img/man5.jpg'
import man6 from '../img/man6.jpg'
import fondo1 from '../img/fondo1.jpg'
import Hombrepag from '../components/Hombrepag'
// import Products from '../ basedatos/Basedatos'
// context
import CarContext from '../context/CarContext'

const Itemhombre = () => {
    const {carData} = useContext(CarContext)
    console.log(carData);
    return (
        <>

        <div className="contimg">
        <img src={fondo1} className="fondo1item"/>
        <div>
            <a href="producto1" onClick="" id="1"><img src={man1} className="fotoprin"/></a>
            <h2 className="precio">$ 70.000{}</h2>
            <h2 className="infoproducto">Camiseta Blanca</h2>
        </div>
        <div>
            <a href="producto1" onClick="" id="2"><img src={man2} className="fotoprin"/></a>
            <h2 className="precio">$ 70.000{}</h2>
            <h2 className="infoproducto">Camiseta Blanca</h2>
        </div>
        <div>
            <a href="producto1" onClick="" id="3"><img src={man3} className="fotoprin"/></a>
            <h2 className="precio">$ 70.000{}</h2>
            <h2 className="infoproducto">Camiseta Blanca</h2>
        </div>
        <div>
            <a href="producto1" onClick="" id="4"><img src={man4} className="fotoprin"/></a>
            <h2 className="precio">$ 70.000{}</h2>
            <h2 className="infoproducto">Camiseta Blanca</h2>
        </div>
        <div>
            <a href="producto1" onClick="" id="5"><img src={man5} className="fotoprin"/></a>
            <h2 className="precio">$ 70.000{}</h2>
            <h2 className="infoproducto">Camiseta Blanca</h2>
        </div>
        <div>
            <a href="producto1" onClick="" id="6"><img src={man6} className="fotoprin"/></a>
            <h2 className="precio">$ 70.000{}</h2>
            <h2 className="infoproducto">Camiseta Blanca</h2>
        </div>
        </div>
        </>
    )
}
export default Itemhombre
