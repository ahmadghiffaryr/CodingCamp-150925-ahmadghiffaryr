let todos = [];

function addTodo() {
    /// get input values
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    if (validateInput(todoInput.value, todoDate.value)) {
        /// Add to array
        const formTodo = {
            task: todoInput.value,
            date: todoDate.value,
        }
        todos.push(formTodo);

        /// Display updated list
        displayTodos();

        /// Clear input fields
        todoInput.value = "";
        todoDate.value = "";
    }
}

function displayTodos() {
    /// clear existing list
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    /// display all todos
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
            <li class="border-b border-gray-300 py-2">${todo.task} - <span
                        class="text-sm text-gray-500">${todo.date}</span>
        </li>`;
    });
}

/// mandatory functions
function deleteTodo() { }

/// mandatory functions
function filterTodos() { }

/// simple validation function
function validateInput(todo, date) {
    if (todo === "" || date === "") {
        alert("Please fill in both fields.");
        return false;
    }
    return true;
}