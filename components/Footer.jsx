import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <div className="footer_container1">
                    <p>¿Necesitas ayuda? 600 00 00</p>
                    <p>Lunes a Domingo - 8:00 AM a 21:00 PM</p>
                    <p>Enviar email: vdc@gmail.com</p>
                    <p>Condiciones de uso · Política de privacidad · Política de Cookies · Configurar Cookies</p>
                </div>
            </div>
        )
    }
}


export default Footer;