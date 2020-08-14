import React, { useState } from 'react';
// import firebase from 'firebase/app';
import 'firebase/firestore';

const AddOrder = () => {
  const [group, setGroup] = useState('Hola');
  console.log(group);
  return (
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
            <td>Hamburguesa Doble Vegetariana</td>
            <td>S/.10.00</td>
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
        <button className="btn btn-order" type="button" onClick={() => setGroup('Guerra')}>
          Enviar a cocina
        </button>
        <button className="btn btn-order" type="button" onClick={() => setGroup('Cancelar pedido')}>
          Cancelar pedido
        </button>
        {/* <MainButton classbtn="btn btn-order" name="Cancelar pedido2" reference="/mozo" /> */}
      </div>
    </div>
  );
};

export default AddOrder;
