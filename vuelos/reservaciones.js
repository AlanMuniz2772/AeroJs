import { readCoordinates, readFlights, updateFlight } from "./firebase.js";

let flightsText = document.getElementById("flights");
let flights = [];

window.addEventListener("DOMContentLoaded", async () => {
  flights = await readFlights();
  // console.log(flights);

  flights.forEach((flight, index) => {
    flight.salida = new Date(flight.salida.seconds * 1000).toLocaleString();
    flightsText.innerHTML += `
      <div>
        <p>Salida: ${flight.salida}</p>
        <p>Origen: ${flight.origen}</p>
        <p>Destino: ${flight.destino}</p>
        <p>Espacio: ${flight.espacio}</p>
        <button id="track-btn-${index + 1}">Hacer reservación</button>
        <p id="coordinates-txt-${index + 1}"></p>
        <hr>
      </div>
    `;
  });

  let trackButton1 = document.getElementById("track-btn-1");
  let trackButton2 = document.getElementById("track-btn-2");
  let trackButton3 = document.getElementById("track-btn-3");
  let trackButton4 = document.getElementById("track-btn-4");
  let trackButton5 = document.getElementById("track-btn-5");

  trackButton1.addEventListener("click", async () => {
    // TODO: Obtener el número de pasajeros
    await updateFlight(1, numPasajeros);
    alert(`El vuelo 1 fue reservado para ${numPasajeros} pasajeros`);
  });
  trackButton2.addEventListener("click", async () => {
    await updateFlight(2, numPasajeros);
    alert(`El vuelo 2 fue reservado para ${numPasajeros} pasajeros`);
  });
  trackButton3.addEventListener("click", async () => {
    await updateFlight(3, numPasajeros);
    alert(`El vuelo 3 fue reservado para ${numPasajeros} pasajeros`);
  });
  trackButton4.addEventListener("click", async () => {
    await updateFlight(4, numPasajeros);
    alert(`El vuelo 4 fue reservado para ${numPasajeros} pasajeros`);
  });
  trackButton5.addEventListener("click", async () => {
    await updateFlight(5, numPasajeros);
    alert(`El vuelo 5 fue reservado para ${numPasajeros} pasajeros`);
  });
});

var menu = document.getElementById("menu");

function showHideMenu() {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
}

// document.getElementById("menuButton").onclick = showHideMenu;

// coordinates = await readCoordinates();
// trackButton.addEventListener("click", () => {console.log(coordinates.pop())});

// trackButton.addEventListener("click", async () => {
//   setInterval(() => {
//     console.log(coordinates.pop());
//   }, 1000);
// });

// trackButton.addEventListener("click", () => {
//   setInterval(async () => {
//     coordinates = await readCoordinates();
//     // console.log(coordinates.pop());
//     console.log(coordinatesText.innerHTML);
//     coordinatesText.innerHTML =
//       coordinatesText.innerHTML + JSON.stringify(coordinates.pop()) + "<br>";
//   }, 1000);
// });
