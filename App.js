import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contactanos from './pages/Contact';
import Nosotros from './pages/Nosotros';
import itemhombre from './components/Itemhombre'
import itemmujer from './components/Itemmujer'
import Hombrepag from './components/Hombrepag'
import Lista from './components/Lista'
import Carrito from  './components/Carrrito'

// context
import CarContext from './context/CarContext'

//import Itemshombre from'./pages/Itemshombre';// aqui esta linea dice que no se encuentra la ruta 
import Login from './pages/Login';

import './App.css';


function App() {
  const [carData, setCarData] = useState([])
  return (
    <BrowserRouter>
    <CarContext.Provider value={{carData, setCarData}}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/producto1" component={Hombrepag} /> 
          <Route exact path="/Hombres" component={itemhombre} />    
          <Route exact path="/Mujeres" component={itemmujer} />    
          <Route exact path="/Contactanos" component={Contactanos} />
          <Route exact path="/Nosotros" component={Nosotros} />
          <Route exact path="/Lista" component={Lista} />
          <Route exact path="/Carrito" component={Carrito} />
          <Route exact path="/Login" component={Login}/>
        </Switch>
      </Layout>
      </CarContext.Provider>
    </BrowserRouter>

  );
}

export default App;
