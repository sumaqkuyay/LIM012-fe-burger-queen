import firebase from './main';

const addOrder = (table) => {
  const firestore = firebase.firestore();
  firestore.collection('addOrder').add({
    table,
  });
};
export default addOrder;
