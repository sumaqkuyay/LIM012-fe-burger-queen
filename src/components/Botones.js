import React from 'react';
import { Link } from 'react-router-dom';

const MainBotones = ({name, referencia}) => {
    return (
        <div>         
            <Link to={referencia}>
                <button>
                    {name}
                </button>
            </Link>
        </div>        
    )
}

export default MainBotones;