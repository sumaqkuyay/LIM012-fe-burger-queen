import React from 'react';
import Header from '../components/Header';
import GetOrder from '../components/GetOrder';
import OrderCard from '../components/OrderCard';

const ChiefChef = () => (
  <>
    <Header name="JEFE DE COCINA" />
    <GetOrder />
    <OrderCard />
  </>
);
export default ChiefChef;
