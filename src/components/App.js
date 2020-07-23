import React from 'react';
import {  BrowserRouter, Route } from 'react-router-dom'
import Main from '../pages/Main';
import MainMesero from '../pages/MainMesero';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/main" component={Main}/>
            <Route exact path="/mesero" component={MainMesero}/>
        </BrowserRouter>
    )
}

export default App;