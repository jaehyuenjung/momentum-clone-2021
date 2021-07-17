const clock = document.querySelector(".main-screen__clock");
const message = document.querySelector(".main-screen__message");

function getDate() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}`;

    if (hour < 12) {
        message.innerText = "Good morning,";
    } else if (hour < 18) {
        message.innerText = "Good afternoon,";
    } else {
        message.innerText = "Good evening,";
    }
}

getDate();
// same function is setTimeout(function, ms)
setInterval(getDate, 1000);
