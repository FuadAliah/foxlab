import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAytuUmTiDwH--nbfFaxGxt-nl8W_LEuUk",
  authDomain: "pocket-design-fbec1.firebaseapp.com",
  projectId: "pocket-design-fbec1",
  storageBucket: "pocket-design-fbec1.appspot.com",
  messagingSenderId: "452121159406",
  appId: "1:452121159406:web:7c540fae51646504e275ff",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const storageRef = storage.ref();
const db = firebase.firestore();

export { storage, storageRef, db };
