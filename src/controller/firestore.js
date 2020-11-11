import firebase from './main';

// COLECCION EN FIRESTORE - ADD ORDER
const collectionOrder = () => firebase.firestore().collection('Orders');

// AGREGAR DOCS A LA COLECCION
const addOrder = (order) => {
  collectionOrder().add(order)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// LEER LOS DOCS DE LA COLECCION
const getOrder = (orderState) => new Promise((resolve, reject) => {
  collectionOrder().where('state', '==', orderState).onSnapshot((query) => {
    const docs = [];
    query.forEach((order) => {
      docs.push({ ...order.data(), id: order.id });
    });
    // console.log(docs);
    resolve(docs);
  });
});

const updateOrderState = (id, status) => {
  const deliveredDate = new Date().toISOString();
  firebase.firestore().collection('Orders').doc(id).update({
    state: status,
    deliveredDate,
  });
};

export default {
  addOrder,
  getOrder,
  updateOrderState,
};
