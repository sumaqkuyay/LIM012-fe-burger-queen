import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import MainButton from '../components/MainButton';
import AddOrder from '../components/AddOrder';
import '../sass/Waiter.scss';

const productList = data.products;

const waiter = () => (
  <>
    <Header />
    <div className="body-waiter">
      <div className="grid-left">
        <AddOrder />
      </div>
      <div className="grid-right">
        <div className="content-groups">
          <MainButton classbtn="btn btn-waiter" name="Desayuno" reference="/mozo" />
          <MainButton classbtn="btn btn-waiter" name="Hamburguesas" reference="/mozo" />
          <MainButton classbtn="btn btn-waiter" name="Acompañamiento" reference="/mozo" />
          <MainButton classbtn="btn btn-waiter" name="Bebidas" reference="/mozo" />
        </div>
        <div className="content-products">
          {
          productList.map((p) => (<ProductsCard key={p.id} tittle={p.title} image={p.image} price={p.price} productName={p.productName} />))
        }
        </div>
      </div>
    </div>
  </>
);
export default waiter;
