import React from 'react';
import MainBotones from '../components/Botones';

class Main extends React.Component {
    render() {
        return(
            <div>
                <MainBotones name="Mesero" referencia="/mesero"/>
                <MainBotones name="Jefe de Cocina" referencia="/cocina"/>
            </div>
        )
    }
}

export default Main;