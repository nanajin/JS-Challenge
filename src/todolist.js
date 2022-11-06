const todoForm = document.querySelector(".todolist form");
const todoInput = todoForm.querySelector("input");
const ul = document.querySelector(".list ul");
let list = []

function saveToDo(){
  localStorage.setItem("todolist", JSON.stringify(list));
}

function paintToDo(obj){
  const li = document.createElement("li");
  li.id = obj.id;
  const deleteBtn = document.createElement("button");
  li.innerText = obj.content;
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", deleteToDo);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  list = list.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}
function handleSubmit(event){
  event.preventDefault();
  const newToDo = {
    content: todoInput.value,
    id: Date.now(),
  }
  list.push(newToDo);
  saveToDo();
  paintToDo(newToDo);
  todoInput.value = "";
}

todoForm.addEventListener("submit", handleSubmit);

const savedList = localStorage.getItem("todolist");
if(savedList !== null){
  const savedTodo = JSON.parse(savedList);
  list = savedTodo;
  savedTodo.forEach(item => {
    paintToDo(item);
  });
}