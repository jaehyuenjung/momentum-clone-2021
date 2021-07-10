const clock = document.querySelector(".main-screen__clock");

function getDate() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}`;
}

getDate();
// same function is setTimeout(function, ms)
setInterval(getDate, 1000);