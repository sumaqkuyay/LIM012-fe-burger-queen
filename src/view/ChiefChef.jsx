import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import OrderCard from '../components/OrderCard';
import firestore from '../controller/firestore';

const ChiefChef = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // getOrderFirestore();
    firestore.getOrder((orderList) => {
      setOrders(orderList);
      console.log('orders: ', orderList);
    });
  }, []);

  return (
    <>
      <Header name="JEFE DE COCINA" />
      <NavigationBar />
      {
        orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))
      }
    </>
  );
};
export default ChiefChef;
