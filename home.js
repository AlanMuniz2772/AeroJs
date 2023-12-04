import { readFlightsBy } from "./vuelos/firebase";


let filteredFlightsText = document.getElementById("filtered-flights");
let flights = [];
window.addEventListener("DOMContentLoaded", async () => {
    flights = await readFlightsBy();
});