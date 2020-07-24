import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

class MainCocina extends React.Component {
    render() {
        return(
            <div>
                <h1> COCINAAAAAAAAAAAAAAAA!</h1>
                <Link to="/main">
                    <Logo />
                </Link>
            </div>
        )
    }
}

export default MainCocina;