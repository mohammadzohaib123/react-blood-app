import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDzYVdQ1_3WUGciGjZImqtb_bJ1fTPXwmg",
    authDomain: "react-blood-app-a3d1e.firebaseapp.com",
    databaseURL: "https://react-blood-app-a3d1e.firebaseio.com",
    projectId: "react-blood-app-a3d1e",
    storageBucket: "react-blood-app-a3d1e.appspot.com",
    messagingSenderId: "379899325038"
  };
  var fire=firebase.initializeApp(config);
  //This function is for firebse signup
  export function createUser(payload) {
    return fire.auth().createUserWithEmailAndPassword(payload.email, payload.pass);
  }
    //This function is for firebse login
  export function sigInWithEmailAndPass(payload){
    return fire.auth().signInWithEmailAndPassword(payload.email,payload.pass);
  }
    //This function is for firebse check if the user login or not
  export function checkUser() {
    return new Promise((res, rej) => {
      fire.auth().onAuthStateChanged(user => {
        if (user) {
            res(user)
        }
        else{
            res(null)
        }
      });
    });  
  }
  //This function is for firebase signout  
  export function signOutUser(){
    return fire.auth().signOut();
  }