import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import OrderCard from '../components/OrderCard';
import firestore from '../controller/firestore';

const ChiefChef = () => {
  const [orders, getOrders] = useState([]);
  // console.log(orders);
  // const getOrderFirestore = () => {
  //   firestore.getOrder((getOrder) => {
  //     getOrder.forEach((order) => {
  //       console.log(order);
  //     });
  //   });
  // };

  useEffect(() => {
    // getOrderFirestore();
    firestore.getOrder((item) => {
      getOrders(item);
      console.log('item: ', item);
    });
    console.log('Saludo');
  }, []);

  return (
    <>
      <Header name="JEFE DE COCINA" />
      <NavigationBar />
      {
        orders.map((order) => (
          <OrderCard key={order.id} getOrder={order} />
        ))
      }
    </>
  );
};
export default ChiefChef;
