const todoControl = document.querySelector(".main-footer__todo-control");
const appWrapper = document.querySelector(".main-footer__app-wrapper");
const input = document.querySelector(".todo-app__input");
const todoList = document.querySelector(".todo-app__todo-list");

const CLASS_NAME_CONTENT = "todo-app__content";
const CLASS_NAME_CHECKBOX = "todo-app__check-box";

let isPopup = 0;
let toDos = [];

function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function saveState() {
    localStorage.setItem("isPopup", JSON.stringify(isPopup));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(todo => todo.id != li.id);
    li.remove();
    saveToDos();
}

function paintToDo(newTodoObj) {
    const li = createTodoEle();
    li.id = newTodoObj.id;
    const content = li.querySelector(`.${CLASS_NAME_CONTENT}`);
    content.innerText = newTodoObj.text;
    const checkbox = li.querySelector(`.${CLASS_NAME_CHECKBOX}`);
    checkbox.checked = newTodoObj.isChecked;

    if (newTodoObj.isChecked) {
        content.classList.add("check-box-line");
    }
    todoList.appendChild(li);
}

function handleTodoControlClick() {
    isPopup = (isPopup + 1) % 2;

    paintPopup();
    saveState();
}

function paintPopup() {
    if (isPopup) {
        appWrapper.classList.add("start-popup-animation");
        appWrapper.classList.remove("end-popup-animation");
    } else {
        appWrapper.classList.remove("start-popup-animation");
        appWrapper.classList.add("end-popup-animation");
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
    checkBox.className = CLASS_NAME_CHECKBOX;
    checkBox.type = "checkbox";
    content.className = CLASS_NAME_CONTENT;
    more.className = "todo-app__more";
    i.className = "fas fa-ellipsis-h fa-xs";

    checkBox.addEventListener("click", handleCheckBoxClick);

    li.appendChild(checkBoxWrapper);
    li.appendChild(content);
    li.appendChild(more);
    checkBoxWrapper.appendChild(checkBox);
    more.appendChild(i);

    return li;
}

function handleToDoInput(event) {
    const newTodo = input.value;
    if (newTodo !== "" && event.code === "Enter") {
        const newTodoObj = {
            text: newTodo,
            id: Date.now(),
            isChecked: 0,
        };

        toDos.push(newTodoObj);
        saveToDos();

        paintToDo(newTodoObj);

        input.value = "";
    }
}

function handleCheckBoxClick(event) {
    const li = event.target.parentElement.parentElement;
    const content = li.querySelector(`.${CLASS_NAME_CONTENT}`);
    const checkBox = li.querySelector(`.${CLASS_NAME_CHECKBOX}`);

    const todoObj = toDos.find(e => e.id === parseInt(li.id));
    todoObj.isChecked = checkBox.checked;
    content.classList.toggle("check-box-line");

    saveToDos();
}

const savedState = localStorage.getItem("isPopup");
const savedToDos = localStorage.getItem("toDos");

if (savedState) {
    isPopup = JSON.parse(savedState);

    if (isPopup) {
        paintPopup();
    }
}

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

todoControl.addEventListener("click", handleTodoControlClick);
input.addEventListener("keypress", handleToDoInput);
