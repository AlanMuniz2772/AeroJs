let watchID;

document.getElementById("startTracking").addEventListener("click", function () {
  if ("geolocation" in navigator) {
    watchID = navigator.geolocation.watchPosition(function (position) {
      document.getElementById("latitude").textContent =
        position.coords.latitude;
      document.getElementById("longitude").textContent =
        position.coords.longitude;
    });
  } else {
    alert("La geolocalización no está disponible en este navegador.");
  }
});

document.getElementById("stopTracking").addEventListener("click", function () {
  if (watchID) {
    navigator.geolocation.clearWatch(watchID);
    watchID = undefined;
  }
});
