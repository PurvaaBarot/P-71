import firebase from 'firebase'
require("@firebase/firestore")



 var firebaseConfig = {
  apiKey: "AIzaSyDVInlv2c8FjF5CEkRbefyMG1Ml47O-xyQ",
  authDomain: "p-71-b6054.firebaseapp.com",
  projectId: "p-71-b6054",
  storageBucket: "p-71-b6054.appspot.com",
  messagingSenderId: "231715228713",
  appId: "1:231715228713:web:e14d0202fd752da6c2a038"
}
// Initialize Firebase

 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

