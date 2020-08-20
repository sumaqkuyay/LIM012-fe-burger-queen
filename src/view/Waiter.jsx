import React, { useState } from 'react';
import data from '../data.json';
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import AddOrder from '../components/AddOrder';
import MainButton from '../components/MainButton';

const productList = data.products;

const Waiter = () => {
  // const [miProducto, setMiProducto] = useState('Desayuno');
  const [products, setProducts] = useState([]);
  const [group, setGroup] = useState('Desayuno');

  const addAproduct = (product) => {
    // setProductos(product);
    setProducts((prevState) => [...prevState, product]);

  };
  return (
    <>
      <Header name="ORDEN DE PEDIDO" />
      <MainButton classbtn="btn btn-header" name="Estados de Pedido" reference="/mozo" />
      <div className="body-waiter">
        <div className="grid-left">
          <AddOrder product={products} />
        </div>
        <div className="grid-right">
          <div className="content-groups">
            <button className="btn btn-waiter" onClick={() => setGroup('Desayuno')} type="button">DESAYUNO</button>
            <button className="btn btn-waiter" onClick={() => setGroup('Hamburguesas')} type="button">HAMBURGUESA</button>
            <button className="btn btn-waiter" onClick={() => setGroup('Acompañamientos')} type="button">ACOMPAÑAMIENTO</button>
            <button className="btn btn-waiter" onClick={() => setGroup('Bebidas')} type="button">BEBIDAS</button>
          </div>
          <div className="content-products">
            {
              productList.filter((product) => (product.group === group)).map((p) => (
                <ProductsCard
                  key={p.id}
                  product={p}
                  miVariable={addAproduct}
                />
              ))
          }
          </div>
        </div>
      </div>
    </>
  );
};
export default Waiter;
