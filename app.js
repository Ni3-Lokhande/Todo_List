
  // Function to add a new todo
  function addTodo() {
    const activityInput = document.getElementById('activityInput');
    const todoList = document.getElementById('todoList');

    if (activityInput.value.trim() === '') {
      alert('Please enter a valid activity.');
      return;
    }

    const newTodo = document.createElement('div');
    newTodo.textContent = activityInput.value;
    newTodo.classList.add('todo-item');

    // Add event listener to remove this todo when clicked
    newTodo.addEventListener('click', function() {
      this.classList.toggle('selected');
    });

    todoList.appendChild(newTodo);
    activityInput.value = ''; // Clear the input field
  }

  // Function to remove selected todos
  function removeSelected() {
    const selectedTodos = document.querySelectorAll('.todo-item.selected');
    selectedTodos.forEach(todo => todo.remove());
  }

  // Function to remove all todos
  function removeAll() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; // Clear all todo items
  }