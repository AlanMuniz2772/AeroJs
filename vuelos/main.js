import { readCoordinates, readFlights, readSpaceAvailable, updateFlight } from "./firebase.js";

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
        <button id="track-btn-${index + 1}">Rastrear Vuelo</button>
        <input id="input-${index + 1}" type="number"></input>
        <button id="resev-btn-${index + 1}">Comprar boletos</button>
        <p id="id-txt-${index + 1}"></p>
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

  let resevButton1 = document.getElementById("resev-btn-1");
  let resevButton2 = document.getElementById("resev-btn-2");
  let resevButton3 = document.getElementById("resev-btn-3");
  let resevButton4 = document.getElementById("resev-btn-4");
  let resevButton5 = document.getElementById("resev-btn-5");

  resevButton1.addEventListener("click", async () => {
    let inputBoletos = document.getElementById("input-1");
    let numPasajeros = inputBoletos.value;
    let espacioDisponible = await readSpaceAvailable("1");
    await updateFlight("1", (espacioDisponible- numPasajeros));
    alert(`El vuelo 1 fue reservado para ${numPasajeros} pasajeros`);
  })

  resevButton2.addEventListener("click", async () => {
    let inputBoletos = document.getElementById("input-2");
    let numPasajeros = inputBoletos.value;
    let espacioDisponible = await readSpaceAvailable("2");
    await updateFlight("2", (espacioDisponible- numPasajeros));
    alert(`El vuelo 2 fue reservado para ${numPasajeros} pasajeros`);
  })

  resevButton3.addEventListener("click", async () => { 
    let inputBoletos = document.getElementById("input-3");
    let numPasajeros = inputBoletos.value;
    let espacioDisponible = await readSpaceAvailable("3");
    await updateFlight("3", (espacioDisponible- numPasajeros));
    alert(`El vuelo 3 fue reservado para ${numPasajeros} pasajeros`);
  })

  resevButton4.addEventListener("click", async () => {
    let inputBoletos = document.getElementById("input-4");
    let numPasajeros = inputBoletos.value;
    let espacioDisponible = await readSpaceAvailable("4");
    await updateFlight("4", (espacioDisponible- numPasajeros));
    alert(`El vuelo 4 fue reservado para ${numPasajeros} pasajeros`);
  })

  resevButton5.addEventListener("click", async () => {
    let inputBoletos = document.getElementById("input-5");
    let numPasajeros = inputBoletos.value;
    let espacioDisponible = await readSpaceAvailable("5");
    await updateFlight("5", (espacioDisponible- numPasajeros));
    alert(`El vuelo 5 fue reservado para ${numPasajeros} pasajeros`);
  })

  trackButton1.addEventListener("click", () => {
    let coordinatesText = document.getElementById("coordinates-txt-1");
    let coordinates = [];

    setInterval(async () => {
      coordinates = await readCoordinates(1);
      // console.log(coordinates.pop());
      // console.log(coordinatesText.innerHTML);
      coordinatesText.innerHTML = JSON.stringify(coordinates[coordinates.length - 1]) + "<br>";
    }, 3000);
  });
  trackButton2.addEventListener("click", () => {
    let coordinatesText = document.getElementById("coordinates-txt-2");
    let coordinates = [];

    setInterval(async () => {
      coordinates = await readCoordinates(2);
      // console.log(coordinates.pop());
      console.log(coordinatesText.innerHTML);
      coordinatesText.innerHTML = JSON.stringify(coordinates[coordinates.length - 1]) + "<br>";
    }, 3000);
  });
  trackButton3.addEventListener("click", () => {
    let coordinatesText = document.getElementById("coordinates-txt-3");
    let coordinates = [];

    setInterval(async () => {
      coordinates = await readCoordinates(3);
      // console.log(coordinates.pop());
      console.log(coordinatesText.innerHTML);
      coordinatesText.innerHTML = JSON.stringify(coordinates[coordinates.length - 1]) + "<br>";
    }, 3000);
  });
  trackButton4.addEventListener("click", () => {
    let coordinatesText = document.getElementById("coordinates-txt-4");
    let coordinates = [];

    setInterval(async () => {
      coordinates = await readCoordinates(4);
      // console.log(coordinates.pop());
      console.log(coordinatesText.innerHTML);
      coordinatesText.innerHTML = JSON.stringify(coordinates[coordinates.length - 1]) + "<br>";
    }, 3000);
  });
  trackButton5.addEventListener("click", () => {
    let coordinatesText = document.getElementById("coordinates-txt-5");
    let coordinates = [];

    setInterval(async () => {
      coordinates = await readCoordinates(5);
      // console.log(coordinates.pop());
      console.log(coordinatesText.innerHTML);
      coordinatesText.innerHTML = JSON.stringify(coordinates[coordinates.length - 1]) + "<br>";
    }, 3000);
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
