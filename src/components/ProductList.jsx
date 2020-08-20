import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const ProductList = (props) => {
  const [cantProduct, setCantProduct] = useState(1);

  const increaseProduct = () => {
    const cant = cantProduct + 1;
    setCantProduct(cant);
  };

  const decrementProduct = () => {
    const cant = cantProduct - 1;
    setCantProduct(cant);
  };

  // const deleteProduct = (e) => {
  //   e.preventDefault();
  //   console.log('productos-id: ', product.id);
  //   console.log('Eliminar producto');
  // };
  const onremove = (e) => {
    // console.log(this.props.id);
    e.preventDefault();
    props.onremove('props.product.id');
  };

  return (
    <>
      <tr className="listPedidoOrder">
        <td>
          <button className="btn-increaseProduct" type="button" onClick={increaseProduct}>+</button>
          <span>{cantProduct}</span>
          <button className="btn-decreaseProduct" type="button" onClick={decrementProduct} disabled={cantProduct === 1 ? true : false}>-</button>
        </td>
        <td>{props.product.productName}</td>
        <td>{`S/. ${(props.product.price * cantProduct).toFixed(2)}`}</td>
        <td>
          <button className="btn-delete" type="button" onClick={props.onremove}>
            <img src="https://cdn1.iconfinder.com/data/icons/toolbar-signs/512/trash-512.png" alt="eliminar" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductList;
