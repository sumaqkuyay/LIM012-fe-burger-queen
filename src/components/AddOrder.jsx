import React, { useState, useEffect } from 'react';
// import MainButton from './MainButton';
import ProductList from './ProductList';
import firestore from '../controller/firestore';

// const [name, setName] = useState('');
// const [mesa, setMesa] = useState('');

/* const functionName = (e) => {
    setName(e.target.value);
  };
  const functionMesa = (e) => {
    setMesa(e.target.value);
}; */
const AddOrder = ({product, order, handleInputChange, handleClick, handleClear, handleIncrementItem}) => {
  const getOrderFirestore = () => {
    firestore.getOrder();
  };

  // useEffect(() => {
  //   getOrderFirestore();
  //   console.log('Saludo');
  // }, []);
  // const remove = (id) => {
  //   console.log('vamos a eliminar', id);
  // };
  // const [priceTotal, setPriceTotal] = useState(0);
  let price = 0;

  return (
    <div className="add-order">
      <div className="order-header">
        <label htmlFor="user">Cliente:
          <input
            className="input-user"
            placeholder="Nombre"
            onChange={handleInputChange}
            name="client"
            value={order.client}
          />
        </label>
        <label htmlFor="table"> N° Mesa:
          <input
            className="input-user"
            placeholder="N° de Mesa"
            onChange={handleInputChange}
            name="table"
            value={order.table}
          />
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
          <ProductList products={order.products} handleIncrementItem={handleIncrementItem} />
        </tbody>
      </table>
      <div className="total">
        <p>Total:</p>
        <span>{`S/. ${order.products.map((p) =>price += p.price)}`}</span>
      </div>
      <div className="order-description">
        <p>Descripción</p>
        <textarea
          className="box"
          placeholder="Ingresa descripción"
          onChange={handleInputChange}
          name="description"
          value={order.description}
        />
      </div>
      <div>
        <button className="btn btn-order" type="button" onClick={handleClick}>Enviar a cocina</button>
        <button className="btn btn-order" type="button" onClick={handleClear}>Cancelar pedido</button>
      </div>
    </div>
  );
};

export default AddOrder;

/* return (
    <div className="add-order">
      <div className="order-header">
        <label htmlFor="user">Cliente:
          {' '}
          <input className="input-user" placeholder="Nombre" value={name} onChange={functionName} />
        </label>
        <label htmlFor="table"> N° Mesa:
          {' '}
          <input className="input-user" placeholder="N° de Mesa" value={mesa} onChange={functionMesa} />
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
  ); */
