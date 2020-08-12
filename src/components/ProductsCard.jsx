import React from 'react';
import PropTypes from 'prop-types';
import '../sass/ProductsCards.scss';
// import products from '../products.json';

const ProductCard = ({ id, title, image, price, productName }) => (
  <div className="product-card">
    <div className="card1">
      <div className="card">
        <img src={image} alt={title} className="img" />
        <p className="Name">{productName}</p>
        <p className="Name">{`S/.${price}.00`}</p>
      </div>
    </div>
  </div>
);

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
