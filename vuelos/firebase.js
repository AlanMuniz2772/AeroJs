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
  query as q,
  where,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB5fU7_pW32iz78J1Hg9P6E9RIhFUN6eU",
  authDomain: "tecport1-ec0cb.firebaseapp.com",
  projectId: "tecport1-ec0cb",
  storageBucket: "tecport1-ec0cb.appspot.com",
  messagingSenderId: "235429804495",
  appId: "1:235429804495:web:cdbff3fbd3bd1f7ee7faba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// TODO: Añadir lógica para crear un vuelo
export const createFlight = () => {
  addDoc(collection(db, "flights"), {});
};

// TODO: Añadir lógica para leer un vuelo
export const readFlight = () => {
  getDoc(collection(db, "flights"), {});
};

// export async function readCoordinates() {
//   const coordinatesRef = collection(db, "coordinates");
//   const coordinatesSnap = await getDocs(coordinatesRef);
//   return coordinatesSnap.docs.map((doc) => doc.data());
// }

export async function readCoordinates(idFlight) {
  const coordinatesRef = collection(db, "coordinates");

  // Agrega un filtro para obtener solo los documentos con id_flight igual al parámetro
  // const query = query(coordinatesRef, where("id_flight", "==", idFlight));
  const query = q(coordinatesRef, where("id_flight", "==", idFlight));

  const coordinatesSnap = await getDocs(query);

  // console.log(coordinatesSnap.docs.map((doc) => doc.data()));
  return coordinatesSnap.docs.map((doc) => doc.data());
}

// // TODO: Añadir lógica para leer los vuelos
// export const readFlights = () => {
//   getDocs(collection(db, "flights"), {});
// };

export async function readFlights() {
  const flightsRef = collection(db, "flights");
  const flightsSnap = await getDocs(flightsRef);
  return flightsSnap.docs.map((doc) => doc.data());
}

export async function readFlightsBy() {
  const flightsRef = collection(db, "flights");
  const flightsSnap = await getDocs(flightsRef);
  return flightsSnap.docs.map((doc) => doc.data());
}

// TODO: Añadir lógica para actualizar un vuelo
export async function updateFlight(id_flight, numPasajeros) {
  const flightsRef = collection(db, "flights", id_flight);
  const flightsSnap = await updateDoc(flightsRef, {
    espacio: numPasajeros,
  });
};

// TODO: Añadir lógica para borrar un vuelo
export const deleteFlight = () => {
  deleteDoc(collection(db, "flights"), {});
};
