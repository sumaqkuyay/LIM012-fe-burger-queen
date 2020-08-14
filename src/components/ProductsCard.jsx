import React from 'react';
import PropTypes from 'prop-types';
// import products from '../products.json';

const ProductCard = ({id, title, image, price, productName}) => (
  <div className="card">
    <img src={image} alt={title} className="width-product" />
    <p className="price">{`S/.${price}.00`}</p>
    <p className="name">{productName}</p>
  </div>
);
// const selectProduct = (name) => {
//   console.log(name);
// };

ProductCard.prototype = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  productName: PropTypes.string,
};
ProductCard.defaultProps = {
  title: 'No se encontró titulo',
  image: 'https://blogtrip.org/wp-content/uploads/2016/06/visitar-paris-ciudad-luz-fotografia-nocturna.jpg',
  price: '--',
};
export default ProductCard;
