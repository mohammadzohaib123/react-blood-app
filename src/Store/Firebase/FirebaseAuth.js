import fire from "./FirebaseConfig";
  //This function is for firebse signup
  export function createUser(payload) {
    return fire.auth().createUserWithEmailAndPassword(payload.email, payload.pass);
  }
  export function updateUserProfile(payload) {
    return fire.auth().currentUser.updateProfile({
      displayName: payload.name
    });
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
          console.log(' if In authstate')
            res(user)
        }
        else{
          console.log('else of on authstate')
            res(null)
        }
      });
    });  
  }
  //This function is for firebase signout  
  export function signOutUser(){
    return fire.auth().signOut();
  }

