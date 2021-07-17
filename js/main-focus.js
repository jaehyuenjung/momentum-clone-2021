const mainScreenLastEle = document.querySelector(".main-screen__column:last-child");
const mainForm = document.querySelector(".main-screen__answer-form");
const mainInput = document.querySelector(".main-screen__answer-form input");
const focusQuestion = document.querySelector(".main-screen__focus-question");

const TODO_CLASS_NAME = "main-screen__todo";

let focusContent = "";

function createFocusContentEle() {
    const div = document.createElement("div");
    const today = document.createElement("span");
    const content = document.createElement("div");
    const sqaureIcon = document.createElement("i");
    const todo = document.createElement("span");
    const ellipsisIcon = document.createElement("i");

    div.className = "main-screen__focus-content";
    today.className = "main-screen__today";
    content.className = "main-screen__content";
    sqaureIcon.className = "far fa-square";
    todo.className = TODO_CLASS_NAME;
    ellipsisIcon.className = "fas fa-ellipsis-h";

    today.innerText = "Today";

    div.appendChild(today);
    div.appendChild(content);
    content.appendChild(sqaureIcon);
    content.appendChild(todo);
    content.appendChild(ellipsisIcon);

    ellipsisIcon.addEventListener("click", () => {
        focusContent.classList.remove("animation-fade-out");
        focusContent.classList.add("animation-fade-in");
    });

    div.addEventListener("animationend", (event) => {
        const { animationName } = event;

        if (animationName === "animation-fade-in") {
            focusContent.remove();
            focusContent = "";
            focusQuestion.classList.remove("animation-fade-in");
            focusQuestion.classList.add("animation-fade-out");
        }
    });

    return div;
}

function handleMainFormSubmit(event) {
    event.preventDefault();
    const todayDos = mainInput.value;
    if (todayDos !== "") {
        focusQuestion.classList.remove("animation-fade-out");
        focusQuestion.classList.add("animation-fade-in");

        focusContent = createFocusContentEle();

        const todo = focusContent.querySelector(`.${TODO_CLASS_NAME}`);

        todo.innerText = todayDos;
    }
}

function handleClearClick() {}

mainForm.addEventListener("submit", handleMainFormSubmit);
focusQuestion.addEventListener("animationend", (event) => {
    const { animationName } = event;
    if (animationName === "animation-fade-in") {
        mainInput.value = "";
        mainScreenLastEle.appendChild(focusContent);
        focusContent.classList.add("animation-fade-out");
    }
});
