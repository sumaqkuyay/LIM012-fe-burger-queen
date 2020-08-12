import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-principal.png';
import '../sass/Header.scss';
import MainButton from '../components/MainButton';

const Header = (props) => (
  <header className="head-waiter">
    <Link to="/"><img src={logo} alt="imagen de product" className="logo-header" /></Link>
    <h1>{props.name}</h1>
  </header>
);
export default Header;

/* <MainButton classbtn="btn btn-header" name="Estados de Pedido" reference="/mozo" /> */
