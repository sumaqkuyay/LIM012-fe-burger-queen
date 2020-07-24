import React from 'react';
import { Link } from 'react-router-dom';

class MainMesero extends React.Component {
    render() {
        return(
            <div className="mainMesero">
                <h1> MESERO HACER PEDIDOS</h1>
                <Link to="/main">
                    <button>
                        LOGO
                    </button>
                </Link>
            </div>
        )
    }
}

export default MainMesero;