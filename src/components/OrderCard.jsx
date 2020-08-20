import React from 'react';

const OrderCard = () => (
  <div className="Status">
    <p className="">
      <span>Cliente: Sabi</span>
    </p>
    <p className="">
      <span>N° de Mesa: 2</span>
    </p>
    <p className="">
      <span>Hora de Pedido: 6:19</span>
    </p>
    <p>
      <span>Tiempo Transcurrido: </span>
    </p>
    <table className="">
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
