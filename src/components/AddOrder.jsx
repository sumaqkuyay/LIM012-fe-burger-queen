import React, { useState, useEffect } from 'react';
// import MainButton from './MainButton';
import ListPedido from './ListPedido';
import firestore from '../controller/firestore';

const AddOrder = (props) => {
  const getOrderFirestore = () => {
    firestore.getOrder();
  };

  useEffect(() => {
    getOrderFirestore();
    console.log('Saludo');
  }, []);

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
                <ListPedido
                  key={p.id}
                  product={p}
                />
                // <td> {p.productName}</td>
                // <td>{`S/. ${p.price}`}</td>
              ))
            }
        </tbody>
      </table>
      <div className="total">
        <p>Total:</p>
        <span> S/.10.00</span>
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
        <button className="btn btn-order" type="button">Cancelar pedido</button>
        {/* <MainButton classbtn="btn btn-order" name="Enviar a cocina" reference="/mozo" />
        <MainButton classbtn="btn btn-order" name="Cancelar pedido" reference="/mozo" /> */}
      </div>
    </div>
  );
};

export default AddOrder;
