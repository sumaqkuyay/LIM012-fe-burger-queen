import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../images/logo-principal.png';
import MainButton from '../components/MainButton';

const Welcome = () => {
  const history = useHistory();
  return (
    <div className="component-welcome">
      <img className="logo-welcome" src={logo} alt="Mikuy Burger" />
      <div className="prueba">
        <MainButton classbtn="btn btn-welcome" name="Mesero" reference="/mozo" history={history} />
        <MainButton classbtn="btn btn-welcome" name="Jefe de Cocina" reference="/jefecocina" history={history} />
      </div>
    </div>
  );
};
export default Welcome;
