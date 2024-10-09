import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDFWayNRO-I3wBLVLv5mVAayjEnpAYQ02g",
  authDomain: "comfy-e80f8.firebaseapp.com",
  projectId: "comfy-e80f8",
  storageBucket: "comfy-e80f8.appspot.com",
  messagingSenderId: "737261605889",
  appId: "1:737261605889:web:a3224a2cb11e5f65a1dc00",
  measurementId: "G-91KF0202KP"
};
 export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export const auth=getAuth(app)