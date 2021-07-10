const metricStatNumber = document.querySelector(".main-header__metric-stat-number");
const metricStatName = document.querySelector(".main-header__metric-name");
const API_KEY = "6c459cdbfaca1b372cfb9237d1f5cbb0";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.dir(position);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            metricStatNumber.innerText = `${Math.round(data.main.temp)}`;
            metricStatName.innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);