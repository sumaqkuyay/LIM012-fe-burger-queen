import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const ProductList = ({products, handleIncrementItem}) => {
  // const [cantProduct, setCantProduct] = useState(1);

  // const increaseProduct = () => {
  //   const cant = cantProduct + 1;
  //   setCantProduct(cant);
  // };

  // const decrementProduct = () => {
  //   const cant = cantProduct - 1;
  //   setCantProduct(cant);
  // };

  // const deleteProduct = (e) => {
  //   e.preventDefault();
  //   console.log('productos-id: ', product.id);
  //   console.log('Eliminar producto');
  // };
  // const onremove = (e) => {
  //   // console.log(this.props.id);
  //   e.preventDefault();
  //   props.onremove('p.id');
  // };

  return (
    <>
      {products.map((p)=> (
        <tr className="listPedidoOrder" key={p.id}>
          <td>
            <button className="btn-increaseProduct" type="button" onClick={(() => handleIncrementItem(p.id))}>+</button>
            <span>{p.quantity}</span>
            <button className="btn-decreaseProduct" type="button" disabled={p.quantity === 1 ? true : false}>-</button>
          </td>
          <td>{p.productName}</td>
          <td>{`S/. ${(p.price * p.quantity).toFixed(2)}`}</td>
          <td>
            <button className="btn-delete" type="button">
              <img src="https://cdn1.iconfinder.com/data/icons/toolbar-signs/512/trash-512.png" alt="eliminar" />
            </button>
          </td>
        </tr>
      ),
      )}
    </>
  );
};

export default ProductList;
