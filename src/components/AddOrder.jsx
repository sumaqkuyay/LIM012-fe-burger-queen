import React, { useState } from 'react';
// import MainButton from './MainButton';
import ProductsList from './ProducstList';

// {product}
const AddOrder = (props) => {

  // const [name, setName] = useState('');
  // const [mesa, setMesa] = useState('');

  /* const functionName = (e) => {
    setName(e.target.value);
  };
  const functionMesa = (e) => {
    setMesa(e.target.value);
  }; */

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
                <ProductsList
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
