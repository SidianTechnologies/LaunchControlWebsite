import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6u-1bt3v1MyLGzoNKFn-7YNO1A5xlx1g",
  authDomain: "launchcontrollhs.firebaseapp.com",
  projectId: "launchcontrollhs",
  storageBucket: "launchcontrollhs.appspot.com",
  messagingSenderId: "1059434692685",
  appId: "1:1059434692685:web:5e0c8a87e25d16132d1c04",
  measurementId: "G-YFHGJFWEKD",
  sotrageBucket: "gs://launchcontrollhs.appspot.com"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);