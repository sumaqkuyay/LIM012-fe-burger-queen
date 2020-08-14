// import 'firebase/performance';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQ-l-ktaFpPR78yJldDCLGMVnF3kVw-_g',
  authDomain: 'mikuy-burger.firebaseapp.com',
  databaseURL: 'https://mikuy-burger.firebaseio.com',
  projectId: 'mikuy-burger',
  storageBucket: 'mikuy-burger.appspot.com',
  messagingSenderId: '869639968024',
  appId: '1:869639968024:web:4026f9761e086377787a6d',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;