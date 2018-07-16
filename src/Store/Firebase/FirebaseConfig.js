import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyDzYVdQ1_3WUGciGjZImqtb_bJ1fTPXwmg",
  authDomain: "react-blood-app-a3d1e.firebaseapp.com",
  databaseURL: "https://react-blood-app-a3d1e.firebaseio.com",
  projectId: "react-blood-app-a3d1e",
  storageBucket: "react-blood-app-a3d1e.appspot.com",
  messagingSenderId: "379899325038"
};
var firebaseObject=firebase.initializeApp(config);
 export default firebaseObject;