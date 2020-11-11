import React from 'react';

const NavigationBar = ({ filterByState }) => (
  <div>
    <nav className="nav-order">
      <ul>
        <li className="nav-btn" onClick={() => filterByState('pendiente')}>Pendientes</li>
        <li className="nav-btn" onClick={() => filterByState('listo')}>Listos</li>
        <li className="nav-btn" onClick={() => filterByState('entregado')}>Entregados</li>
      </ul>
    </nav>
  </div>
);
export default NavigationBar;
