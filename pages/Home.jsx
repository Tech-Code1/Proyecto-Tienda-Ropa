import React, { Component } from 'react';

import pub from '.././img/11111.png';
import mujer from '.././img/mujer.jpg';
import './styles/Home.css';

export default class Home extends Component {
    render(){
        return(
            <div className="container2">
                <img className="pub" src={pub} alt=""/>               
                    <div className="contmoda">
                        <h2 className="tt">Moda para todos</h2>
                    </div>
                <div>
                <img className="mujer" src={mujer} alt=""/> 
                </div>                            
            </div>
        );
    }
}