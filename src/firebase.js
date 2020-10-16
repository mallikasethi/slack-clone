import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJ11IZI5nTwT0gD33_4PMmbMNS1ozQ1Jo",
    authDomain: "slack-clone-91605.firebaseapp.com",
    databaseURL: "https://slack-clone-91605.firebaseio.com",
    projectId: "slack-clone-91605",
    storageBucket: "slack-clone-91605.appspot.com",
    messagingSenderId: "411510793538",
    appId: "1:411510793538:web:761c30c72ba2fd60b014db"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};

  export default db;




