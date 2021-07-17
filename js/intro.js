const userScreen = document.querySelector(".user-screen");
const signUpScreen = document.querySelector(".sign-up-screen");
const introForm = document.querySelector(".intro-screen__answer-form");
const introInput = document.querySelector(".intro-screen__answer-form input");

function handleIntroInputSubmit(event) {
    event.preventDefault();
    const newName = introInput.value;
    if (newName !== "") {
        localStorage.setItem(USERNAME_KEY, newName);
        signUpScreen.classList.add("animation-fade-in");
    }
}

function handleScreenFade() {
    signUpScreen.remove();
    paintGreetings(localStorage.getItem(USERNAME_KEY));
    userScreen.classList.add("animation-fade-out");
}

const username = localStorage.getItem("username");

if (username) {
    signUpScreen.remove();
    userScreen.classList.add("animation-fade-out");
} else {
    introForm.addEventListener("submit", handleIntroInputSubmit);
    signUpScreen.addEventListener("animationend", handleScreenFade);
}
