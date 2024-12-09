document.addEventListener("DOMContentLoaded", () => {
  const todo = document.getElementById("Input");
  const addButton = document.querySelector(".btn");
  const todoList = document.getElementById("todoList");
  const todoCount = document.getElementById("todoCount");
  const deleteButton = document.getElementById("deleteButton");

  const updateTodoCount = () => {
    const items = todoList.getElementsByTagName("li");
    todoCount.textContent = items.length;
  };
  const createTodoItem = (todoText) => {
    const li = document.createElement("li");
    li.textContent = todoText;
    todoList.appendChild(li);
    updateTodoCount();
  };
  addButton.addEventListener("click", () => {
    const todoText = todo.value.trim();
    if (todoText !== "") {
      createTodoItem(todoText);
      todo.value = "";
    }
  });
  deleteButton.addEventListener("click", () => {
    todoList.innerHTML = ""; 
    updateTodoCount();
  });
});