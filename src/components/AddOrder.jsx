import React from 'react';
import MainButton from './MainButton';

const AddOrder = ({product}) => (
  <div className="add-order">
    <div className="order-header">
      <label htmlFor="user">Cliente:
        <input className="input-user" placeholder="Nombre" />
      </label>
      <label htmlFor="table"> N° Mesa:
        <input className="input-user" placeholder="N° de Mesa" />
      </label>
    </div>
    <table>
      <thead>
        <tr>
          <td>Cantidad.</td>
          <td>Descripcion</td>
          <td>Precio</td>
          <td>Borrar</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <button className="btn-increaseProduct" type="button">+</button>
            <span>1</span>
            <button className="btn-decreaseProduct" type="button">-</button>
          </td>
          <td>{product.productName}</td>
          <td>{`S/. ${product.price}`}</td>
          <td>
            <button className="btn-delete" type="button">
              <img src="https://cdn1.iconfinder.com/data/icons/toolbar-signs/512/trash-512.png" alt="eliminar" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="total">
      <p>Total:</p>
      <span> S/.10.00</span>
    </div>
    <div className="order-description">
      <p>Descripción</p>
      <textarea className="box" placeholder="Ingresa descripción"> </textarea>
    </div>
    <div>
      <MainButton classbtn="btn btn-order" name="Enviar a cocina" reference="/mozo" />
      <MainButton classbtn="btn btn-order" name="Cancelar pedido" reference="/mozo" />
    </div>
  </div>
);

export default AddOrder;
