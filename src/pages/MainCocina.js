import React from 'react';
import { Link } from 'react-router-dom';

class MainCocina extends React.Component {
    render() {
        return(
            <div>
                <h1> COCINAAAAAAAAAAAAAAAA!</h1>
                <Link to="/main">
                    <button>
                        LOGO
                    </button>
                </Link>
            </div>
        )
    }
}

export default MainCocina;