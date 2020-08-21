import React, { useState, useEffect } from 'react';
// import MainButton from './MainButton';
import ProductList from './ProductList';
// import firestore from '../controller/firestore';

const AddOrder = (props) => {

  const initialStateOrder = {
    client: '',
    table: '',
    products: [],
    total: '',
    description: '',
    date: new Date().toLocaleString(),
    state: 'pendiente',
  };

  const [order, setOrder] = useState(initialStateOrder);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
    // console.log(name, value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(order);
    props.addOrderFirestore(order);
    setOrder({ ...initialStateOrder });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setOrder({ ...initialStateOrder });
    console.log('Clear');
  };

  const remove = (id) => {
    console.log('vamos a eliminar', id);
  };
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
          {
              props.product.map((p) => (
                <ProductList
                  key={p.id}
                  product={p}
                  onremove={remove}
                />
              ))
            }
        </tbody>
      </table>
      <div className="total">
        <p>Total:</p>
        <span>{`S/. ${props.product.map((p) =>price += p.price)}`}</span>
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
