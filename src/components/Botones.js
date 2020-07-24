import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

const MainBotones = ({name, referencia}) => {
    return (
        <div className="containerBtn">         
            <Link to={referencia}>
                <button className="btnMain">
                    {name}
                </button>
            </Link>
        </div>        
    )
}

export default MainBotones;