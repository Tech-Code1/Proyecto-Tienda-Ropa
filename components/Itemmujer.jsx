import React from 'react'
import './styles/mixpag.css'
import woman1 from '../img/woman1.jpg'
import woman2 from '../img/woman2.jpg'
import woman3 from '../img/woman3.jpg'
import woman4 from '../img/woman4.jpg'
import woman5 from '../img/woman5.jpg'
import woman6 from '../img/woman6.jpg'
import fondo1 from '../img/fondo1.jpg'

const Itemmujer = () => {
    return (
        <>
        <div className="contimg">
        <img src={fondo1} className="fondo1item"/>
        <div>
            <a href=""><img src={woman1} className="fotoprin"/></a>
            <h2 className="precio">$ 70.000{}</h2>
            <h2 className="infoproducto">Camiseta Blanca</h2>
        </div>
        <div>
            <a href=""><img src={woman2} className="fotoprin"/></a>
            <h2 className="precio">$ 70.000{}</h2>
            <h2 className="infoproducto">Camiseta Blanca</h2>
        </div>
        <div>
            <a href=""><img src={woman3} className="fotoprin"/></a>
            <h2 className="precio">$ 70.000{}</h2>
            <h2 className="infoproducto">Camiseta Blanca</h2>
        </div>
        <div>
            <a href=""><img src={woman4} className="fotoprin"/></a>
            <h2 className="precio">$ 70.000{}</h2>
            <h2 className="infoproducto">Camiseta Blanca</h2>
        </div>
        <div>
            <a href=""><img src={woman5} className="fotoprin"/></a>
            <h2 className="precio">$ 70.000{}</h2>
            <h2 className="infoproducto">Camiseta Blanca</h2>
        </div>
        <div>
            <a href=""><img src={woman6} className="fotoprin"/></a>
            <h2 className="precio">$ 70.000{}</h2>
            <h2 className="infoproducto">Camiseta Blanca</h2>
        </div>
        </div>
        </>
    )
}
export default Itemmujer
