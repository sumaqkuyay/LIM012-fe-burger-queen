import firebase from './main';

/* const addOrder = (table) => {
  const firestore = firebase.firestore();
  firestore.collection('addOrder').add({
    table,
  });
}; */
// export default addOrder;

const addOrder = (name, mesa, product, date, estado, total) => firebase
  .firestore()
  .collection('order')
  .add({
    name,
    mesa,
    product,
    date,
    estado,
    total,
  });
export default addOrder;
