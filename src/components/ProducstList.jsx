import React from 'react';
// import PropTypes from 'prop-types';

const ProductsList = ({ product }) => (
  <>
    <tr className="listPedidoOrder">
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
  </>
);
export default ProductsList;
