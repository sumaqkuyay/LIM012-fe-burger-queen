import React from 'react';
import MainBotones from '../components/Botones';

class Main extends React.Component {
    render() {
        return(
            <div>
                <MainBotones name="MESERO" referencia="/mesero"/>
                <MainBotones name="COCINA" referencia="/cocina"/>
            </div>
        )
    }
}

export default Main;