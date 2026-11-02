// A simple Todo class, just like the classes covered in Lab 4.
class Todo {
  text: string;
  completed: boolean;

  constructor(text: string) {
    this.text = text;
    this.completed = false;
  }
}

// An array of tasks. The two starting tasks match the lab screenshot.
let todos: Todo[] = [
  new Todo("See Lecture"),
  new Todo("Solve assignment")
];

let currentFilter: string = "all";
const newTodoInput = document.querySelector("input");
const todoList = document.getElementById("todo-list");
const remaining = document.getElementById("remaining");

// Add a task when the user presses Add or Enter.
function addTodo(): void {
  if (!newTodoInput) return;

  const text: string = newTodoInput.value.trim();
  if (text === "") return;

  todos.push(new Todo(text));
  newTodoInput.value = "";
  renderTodos();
}

// Allow editing by double-clicking the task name.
function editTodo(todo: Todo, textElement: HTMLElement): void {
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = todo.text;
  editInput.className = "edit-input";
  editInput.setAttribute("aria-label", "Edit task");
  textElement.replaceWith(editInput);
  editInput.focus();

  editInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const newText: string = editInput.value.trim();
      if (newText !== "") todo.text = newText;
      renderTodos();
    }
    if (event.key === "Escape") {
      renderTodos();
    }
  });
}

// Draw the list again whenever the tasks or filter change.
function renderTodos(): void {
  if (!todoList || !remaining) return;
  todoList.innerHTML = "";

  // filter() is taught on page 11 of Lab 4.
  const visibleTodos = todos.filter((todo) => {
    if (currentFilter === "active") return !todo.completed;
    if (currentFilter === "completed") return todo.completed;
    return true;
  });

  visibleTodos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = "todo-item";
    if (todo.completed) item.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", "Mark " + todo.text + " complete");
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      renderTodos();
    });

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;
    text.title = "Double-click to edit";
    text.addEventListener("dblclick", () => editTodo(todo, text));

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "🗑";
    deleteButton.setAttribute("aria-label", "Delete " + todo.text);
    deleteButton.addEventListener("click", () => {
      todos = todos.filter((item) => item !== todo);
      renderTodos();
    });

    item.append(checkbox, text, deleteButton);
    todoList.appendChild(item);
  });

  const itemsLeft: number = todos.filter((todo) => !todo.completed).length;
  remaining.textContent = itemsLeft + (itemsLeft === 1 ? " item left" : " items left");

  const allButton = document.getElementById("filter-all");
  const activeButton = document.getElementById("filter-active");
  const completedButton = document.getElementById("filter-completed");
  if (allButton) allButton.classList.toggle("selected", currentFilter === "all");
  if (activeButton) activeButton.classList.toggle("selected", currentFilter === "active");
  if (completedButton) completedButton.classList.toggle("selected", currentFilter === "completed");
}

function setFilter(filter: string): void {
  currentFilter = filter;
  renderTodos();
}

// Connect each HTML button to a simple function.
const todoForm = document.querySelector("form");
if (todoForm) {
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo();
  });
}

const allButton = document.getElementById("filter-all");
if (allButton) allButton.addEventListener("click", () => setFilter("all"));

const activeButton = document.getElementById("filter-active");
if (activeButton) activeButton.addEventListener("click", () => setFilter("active"));

const completedButton = document.getElementById("filter-completed");
if (completedButton) completedButton.addEventListener("click", () => setFilter("completed"));

const clearCompletedButton = document.getElementById("clear-completed");
if (clearCompletedButton) {
  clearCompletedButton.addEventListener("click", () => {
    todos = todos.filter((todo) => !todo.completed);
    renderTodos();
  });
}

const clearAllButton = document.getElementById("clear-all");
if (clearAllButton) {
  clearAllButton.addEventListener("click", () => {
    todos = [];
    renderTodos();
  });
}

renderTodos();
