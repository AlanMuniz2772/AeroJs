import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// Import the functions you need from the SDKs you need
import {
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    collection,
    getFirestore,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkaRnmIhPa6PY5062RMou4tNVkRm7My28",
  authDomain: "tecport-d1527.firebaseapp.com",
  projectId: "tecport-d1527",
  storageBucket: "tecport-d1527.appspot.com",
  messagingSenderId: "383605169871",
  appId: "1:383605169871:web:4c97f5d14d0a362aec61ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// TODO: Añadir lógica para crear un vuelo
export const createFlight = () => {
  addDoc(collection(db, "flights"), {  })
};

// TODO: Añadir lógica para leer un vuelo
export const readFlight = () => {
  getDoc(collection(db, "flights"), {  })
};

// TODO: Añadir lógica para leer los vuelos
export const readFlights = () => {
  getDocs(collection(db, "flights"), {  })
};

// TODO: Añadir lógica para actualizar un vuelo
export const updateFlight = () => {
  updateDoc(collection(db, "flights"), {  })
};

// TODO: Añadir lógica para borrar un vuelo
export const deleteFlight = () => {
  deleteDoc(collection(db, "flights"), {  })
};