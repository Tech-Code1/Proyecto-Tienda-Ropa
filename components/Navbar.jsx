import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as CloseMenu } from "../img/x.svg";
import { ReactComponent as MenuIcon } from "../img/menu.svg";
import logo from '../img/Logo.svg';
import './styles/Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    return(
        <div className="Navbar">
            <div className="logo-nav">
                <div >
                    <Link className="logo-container" to="/">
                        <img src={logo} className="logo" alt=""/>
                        <span>v d c</span>
                    </Link>
                    
                </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li onClick={closeMenu}>
                        <Link to="/Hombres" className="option">Hombres</Link>
                    </li>
                    <li  onClick={closeMenu}>
                        <Link to="/Mujeres" className="option">Mujeres</Link>
                    </li>
                    <li className="option responsive-option" onClick={closeMenu}>
                        <Link to="/Contactanos" className="option">Contáctanos </Link>
                    </li>
                    <li className="option responsive-option" onClick={closeMenu}>
                        <Link to="/Nosotros" className="option">Nosotros</Link>
                    </li>
                </ul>
            </div>
            <ul className="container_der">
                <li onClick={closeMenu}>
                    <Link to="/Contactanos" className="contactanos_menu"> Contáctanos</Link>
                </li>
                <li onClick={closeMenu}>
                    <Link className="nosotros_menu" to="/Nosotros">  Nosotros</Link>
                </li>
            </ul>
            <div className="responsive-menu" onClick={handleClick}>
            {click ? (
                <CloseMenu className="icon" />
            ) : (
                <MenuIcon className="icon" />
            )}
            </div>
    </div>
        
    );
}

    export default Navbar;