import React from 'react';
import logo from '../images/logo-principal.png';

const Header = ({history, name}) => {
  return (
    <header className="head-waiter">
      <img src={logo} alt="imagen de product" className="logo-header" onClick={()=> history.push('/')} />
      <h1>{name}</h1>
    </header>
  );
};
export default Header;
