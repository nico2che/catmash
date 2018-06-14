import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
export default firebase.initializeApp(config);

