import firebase from "./FirebaseConfig";
var fire = firebase.database().ref("/");
export function pushData(payload) {
  return new Promise((res, rej) => {
    console.log('in promise firebase')
    fire.child("donors/"+payload.uid).set({
          name: payload.name,
          email: payload.email,
          phoneNumber: payload.phoneNumber,
          bloodGroup: payload.bloodGroup
        },
        () => {
          console.log('in resolve')
          res({
            name: payload.name,
            email: payload.email,
            phoneNumber: payload.phoneNumber,
            bloodGroup: payload.bloodGroup
          });//res end
        }//() end
      );//.set end
  });//promise end
}
export function getData(){
  return new Promise((res,rej)=>{
      fire.child('donors').once("value",(snapshot)=>{
          res(snapshotToArray(snapshot));
      })
  })
}
function snapshotToArray(snapshot) {
  var Arr = [];

  snapshot.forEach(function(childSnapshot) {
      console.log(childSnapshot.val())
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      Arr.push(item);
      console.log(Arr)
  });

  return Arr;
};
