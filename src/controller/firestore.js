import firebase from './main';

// COLECCION EN FIRESTORE - ADD ORDER
const collectionOrder = () => firebase.firestore().collection('addOrder');

// AGREGAR DOCS A LA COLECCION
const addOrder = (arrayOrder) => {
  collectionOrder().add({ arrayOrder })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// LEER LOS DOCS DE LA COLECCION
const getOrder = () => {
  collectionOrder().onSnapshot((query) => {
    const docs = [];
    query.forEach((order) => {
      docs.push({ ...order.data(), id: order.id });
    });
    console.log(docs);
  });
  // callback(docs);
};

export default {
  addOrder,
  getOrder,
};
