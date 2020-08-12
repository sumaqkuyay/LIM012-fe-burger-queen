import React, { useState } from 'react';
import data from '../data.json';
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import AddOrder from '../components/AddOrder';
import '../sass/Waiter.scss';

const productList = data.products;

const Waiter = () => {
  const [group, setGroup] = useState('Desayuno');

  return (
    <div>
      <Header name="ORDEN DE PEDIDO" />
      <div className="body-waiter">
        <div className="grid-left">
          <AddOrder />
        </div>
        <div className="grid-right">
          <div className="content-groups">
            <button className="btn btn-waiter" onClick={() => setGroup('Desayuno')} type="button">DESAYUNO</button>
            <button className="btn btn-waiter" onClick={() => setGroup('Hamburguesas')} type="button">HAMBURGUESAS</button>
            <button className="btn btn-waiter" onClick={() => setGroup('Acompañamientos')} type="button">ACOMPAÑAMIENTOS</button>
            <button className="btn btn-waiter" onClick={() => setGroup('Bebidas')} type="button">BEBIDAS</button>
          </div>
          <div className="content-products">
            {
              productList.filter((product) => (product.group === group)).map((p) => (
                <ProductsCard
                  key={p.id}
                  tittle={p.title}
                  image={p.image}
                  price={p.price}
                  productName={p.productName}
                />
              ))
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waiter;
