
const inputElem = document.querySelector(".todo-input");
const btnElem = document.querySelector(".todo-button");
const unorderedList = document.querySelector(".todo-list");

function addToDo(e){
    e.preventDefault();

    const todoDiv = document.createElement("div");
    const listElem = document.createElement("li");
    listElem.className = "todo-item";
    listElem.innerText = inputElem.value;

    inputElem.value = "";
    const deletebtn = document.createElement("button");
    deletebtn.className = "trash-btn";
    deletebtn.innerText = "Delete button";
    deletebtn.addEventListener("click", deletefn);
    const completebtn = document.createElement("button");
    completebtn.className = "complete-btn";
    completebtn.innerText = "Complete button";
    completebtn.addEventListener("click", strikeThroughFn);

    todoDiv.insertAdjacentElement("beforeend", listElem);
    todoDiv.insertAdjacentElement("beforeend", completebtn);
    todoDiv.insertAdjacentElement("beforeend", deletebtn);

    unorderedList.insertAdjacentElement("beforeend", todoDiv);

}

function deletefn(e){
    e.target.parentElement.remove();
}

function strikeThroughFn(e){
    e.target.parentElement.firstChild.classList.toggle("check");
}

btnElem.addEventListener('click', addToDo);