import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {  Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import MainMesero from './pages/MainMesero';
import MainCocina from './pages/MainCocina';

function App() {
  return (
    <Switch>
      <Route exact path="/main" component={Main}/>
      <Route exact path="/mesero" component={MainMesero}/>
      <Route exact path="/cocina" component={MainCocina}/>  
      <Route exact component={Main}/>
    </Switch>
  );
}

export default App;
