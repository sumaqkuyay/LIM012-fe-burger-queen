import React from 'react';
import PropTypes from 'prop-types';
// import products from '../products.json';

const ProductCard = ({ product , onClick }) => (
  <div className="card" onClick={()=>onClick(product)} >
    <img src={product.image} alt={product.title} className="width-product" />
    <p className="price">{`S/.${product.price}.00`}</p>
    <p className="name">{product.productName}</p>
  </div>
);
// const selectProduct = (name) => {
//   console.log(name);
// };

ProductCard.prototype = {
  product: {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    productName: PropTypes.string,
  },
};
ProductCard.defaultProps = {
  product: {
    title: 'No se encontró titulo',
    image: 'https://blogtrip.org/wp-content/uploads/2016/06/visitar-paris-ciudad-luz-fotografia-nocturna.jpg',
    price: '--',
  },
};
export default ProductCard;
