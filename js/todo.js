const todoControl = document.querySelector(".main-footer__todo-control");
const appWrapper = document.querySelector(".main-footer__app-wrapper");
const input = document.querySelector(".todo-app__input");
const todoList = document.querySelector(".todo-app__todo-list");

const CLASS_NAME_CONTENT = "todo-app__content";

let isPopup = false;

function handleTodoControlClick() {
    if (!isPopup) {
        appWrapper.classList.add("start-popup-animation");
        appWrapper.classList.remove("end-popup-animation");
        isPopup = true;
    } else {
        appWrapper.classList.remove("start-popup-animation");
        appWrapper.classList.add("end-popup-animation");
        isPopup = false;
    }
}

function createTodoEle() {
    const li = document.createElement("li");
    const checkBoxWrapper = document.createElement("span");
    const checkBox = document.createElement("input");
    const content = document.createElement("span");
    const more = document.createElement("sapn");
    const i = document.createElement("i");

    li.className = "todo-app__item";
    checkBoxWrapper.className = "todo-app__check-box-wrapper";
    checkBox.className = "todo-app__check-box";
    checkBox.type = "checkbox";
    content.className = CLASS_NAME_CONTENT;
    more.className = "todo-app__more";
    i.className = "fas fa-ellipsis-h fa-xs";

    li.appendChild(checkBoxWrapper);
    li.appendChild(content);
    li.appendChild(more);
    checkBoxWrapper.appendChild(checkBox);
    more.appendChild(i);

    return li;
}

function handleToDoInput(event) {
    const text = input.value;
    if (text !== "" && event.code === "Enter") {
        const li = createTodoEle();
        const content = li.querySelector(`.${CLASS_NAME_CONTENT}`);
        content.innerText = text;
        todoList.appendChild(li);

        input.value = "";
    }
}

todoControl.addEventListener("click", handleTodoControlClick);
input.addEventListener("keypress", handleToDoInput);
// const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
// const toDoList = document.getElementById("todo-list");

// let toDos = [];

// function saveToDos() {
//     localStorage.setItem("toDos", JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//     const li = event.target.parentElement;
//     toDos = toDos.filter(todo => todo.id != li.id);
//     li.remove();
//     saveToDos();
// }

// function paintToDo(newTodo) {
//     const li = document.createElement("li");
//     li.id = newTodo.id;
//     const span = document.createElement("span");
//     span.innerText = newTodo.text;
//     const button = document.createElement("button");
//     button.innerText = "❌";
//     button.addEventListener("click", deleteToDo);
//     li.appendChild(span);
//     li.appendChild(button);
//     toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
//     const newTodoObj = {
//         text: newTodo,
//         id: Date.now(),
//     };
//     toDos.push(newTodoObj);
//     paintToDo(newTodoObj);
//     saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// const savedToDos = localStorage.getItem("toDos");

// if (savedToDos) {
//     const parsedToDos = JSON.parse(savedToDos);
//     toDos = parsedToDos;
//     parsedToDos.forEach(paintToDo);
// }
