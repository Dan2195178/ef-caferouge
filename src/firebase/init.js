import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import objeConfit from "./config";

//Initialiser Firebase
export const firebaseApp = initializeApp(objeConfit);

//Initiliser Firestore

export const bdFirestore = getFirestore();
