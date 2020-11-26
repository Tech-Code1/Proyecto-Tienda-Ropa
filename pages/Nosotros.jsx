import React, { Component } from 'react';
import { Card, CardColumns } from 'react-bootstrap';

import Mision from '../img/Mision.jpg';
import Equipo from '../img/Equipo.jpg';
import Quienessomos from '../img/Quienessomos.jpg';
import './styles/Nosotros.css';

export default class Nosotros extends Component{
    render(){
        return(

            <div className="Nosotros">
                
                <CardColumns style={{filter:'opacity(84%)'}}>
                    <Card className="card1" style={{ width: '15rem', margin:'10px 0px 20px 70px', background:'#C4C4C4'}}>
                        <Card.Img variant="top" src={Quienessomos}/>
                        <Card.Body >
                        <Card.Title>
                            <p>¿Quiénes somos?</p>
                        </Card.Title>
                        <Card.Text>
                            <p>Somos la mejor empresa de ropa de latinoamérica para hombre y mujer hecha en Bogotá.</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem', margin:'10px 0px 20px 70px ', background:'#C4C4C4' }}>
                        <Card.Img variant="top" src={Mision}  />
                        <Card.Body>
                        <Card.Title>
                            <p>Nuestra misión</p>
                        </Card.Title>
                        <Card.Text>
                            <p>Proporcionar a los clientes productos de alta calidad a partir de diseños hechos en Colombia.</p>
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem', margin:'10px 40px 20px 70px ', background:'#C4C4C4' }}>
                        <Card.Img variant="top" src={Equipo}  />
                        <Card.Body>
                        <Card.Title>
                            <p >Nuestro equipo</p>
                        </Card.Title>
                        <Card.Text>
                            <p>Somos un grupo de jóvenes colombianos con mucha actitud y ganas de emprender.</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
            <div>                
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            </div>

            
        );
    }
}