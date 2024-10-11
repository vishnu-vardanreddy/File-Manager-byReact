import firebase from "firebase/compat/app"
import "firebase/compat/auth"
// import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDCuZ8_-74TsK6vyAaNQc5_lQm2w5wKeVg",
  authDomain: "vodo-file-manager.firebaseapp.com",
  projectId: "vodo-file-manager",
  storageBucket: "vodo-file-manager.appspot.com",
  messagingSenderId: "173989724379",
  appId: "1:173989724379:web:2109bce76defcc9dfbccfe",
  measurementId: "G-JE5V7F603B"
};
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;