import React from 'react';

const OrderCard = (getOrder) => (
  <div className="status">
    <p className="">
      <span>Nº Pedido: </span>
      <span className="info">Hola</span>
    </p>
    <p className="">
      <span>Cliente:</span>
      <span className="info">{getOrder.client}</span>
    </p>
    <p className="">
      <span>N° de Mesa: </span>
      <span className="info">{getOrder.table}</span>
    </p>
    <p className="">
      <span>Hora de Pedido: </span>
      <span className="info">6:19</span>
    </p>
    <p>
      <span>Tiempo Transcurrido: </span>
      <span className="info">03 min</span>
    </p>
    <table className="tableOrderCard">
      <thead>
        <tr>
          <td>CANT.</td>
          <td>DESCRIPCIÓN</td>
          <td>PRECIO</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Hamburguesa de Pollo</td>
          <td>15.00</td>
        </tr>
      </tbody>
    </table>
    <p className="tot">
      TOTAL = S/.
    </p>
    <button type="button">
      LISTO!
    </button>
  </div>
);
export default OrderCard;
