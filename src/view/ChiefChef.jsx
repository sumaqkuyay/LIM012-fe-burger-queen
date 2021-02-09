import React, { useEffect, useState } from 'react';
// import React, { Component } from 'react';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import OrderCard from '../components/OrderCard';
import firestore from '../controller/firestore';

// class ChiefChef extends Component{
const ChiefChef = () => {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     orders:[],
  //     orderState:'pendiente',
  //   };
  // }

  // componentDidMount() {
  //   this.changeState(this.state.orderState);
  // }

  // changeState = (state) => {
  //   console.log(state);
  //   this.setState({orderState:state});
  //   firestore.getOrder(state).then((orderList) => {
  //   this.setState({orders:orderList});
  //   });
  // };

  const [orders, setOrders] = useState([]);
  const [orderState, setOrderState] = useState('pendiente');

  const filterByState = (state) => {
    console.log(state);
    setOrderState(state);
    firestore.getOrder(state).then((orderList) => {
      setOrders(orderList);
    });
  };
  const changeState = (id, state) => {
    console.log(state);
    console.log(id);
    firestore.updateOrderState(id, state);
    filterByState(orderState);
  };

  useEffect(() => {
    filterByState(orderState);
  }, []);

  // render() {
  return (
    <>
      <Header name="JEFE DE COCINA sabi" />
      <NavigationBar filterByState={filterByState} />
      {
        orders.map((order) => (
          <OrderCard key={order.id} order={order} changeState={changeState} />
        ))
      }
    </>
  );
  // }
};
export default ChiefChef;
