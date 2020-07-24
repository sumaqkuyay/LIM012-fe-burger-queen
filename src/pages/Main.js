import React from 'react';
import MainBotones from '../components/Botones';

const Main = () => {
 
        return(
            <div>
                <MainBotones name="Mesero" referencia="/mesero"/>
                <MainBotones name="Jefe de Cocina" referencia="/cocina"/>
            </div>
        )    
}

export default Main;