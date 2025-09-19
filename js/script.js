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
    const todoList = document.getElementById("todo-table-body");
    todoList.innerHTML = "";

    /// display all todos
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
            <tr>
                <td class="border px-4 py-2">${todo.task}</td>
                <td class="border px-4 py-2">${todo.date}</td>
                <td class="border px-4 py-2">${todo.status}</td>
                <td class="border px-4 py-2">
                    <button class="bg-green-500 text-white px-2 py-1 rounded mr-2" onclick="completeTodo()">Complete</button>
                    <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="deleteTodo()">Delete</button>
                </td>
            </tr>
        `;
    });
}

/// mandatory functions
function deleteTodo() {
    try {
        // Assuming the index of the todo to delete is passed as an argument
        const index = event.target.getAttribute('data-index');
        todos.splice(index, 1);
        displayTodos();
    } catch (error) {
        console.error("Error deleting todo:", error);
    }
}

function completeTodo() {
    try {
        // Assuming the index of the todo to complete is passed as an argument
        const index = event.target.getAttribute('data-index');
        todos[index].status = "Complete";
        displayTodos();
    } catch (error) {
        console.error("Error completing todo:", error);
    }
}

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