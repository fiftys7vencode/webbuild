// Function to load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear previous content

    tasks.forEach((taskObj, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        // Checkbox for marking the task as completed
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'form-check-input me-2';
        checkbox.disabled = taskObj.completed; // Disable if the task is completed
        checkbox.checked = taskObj.completed;  // Check if already completed

        checkbox.addEventListener('change', function () {
            completeTask(index);
        });

        const span = document.createElement('span');
        span.textContent = taskObj.task;

        li.appendChild(checkbox);
        li.appendChild(span);

        // Delete button for each task
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            deleteTask(index);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim();

    if (newTask !== '') {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ task: newTask, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = ''; // Clear input
        loadTasks(); // Reload tasks
    } else {
        alert('Please enter a task');
    }
}

// Function to delete a task
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1); // Remove the task at the given index
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks(); // Reload tasks
}

// Function to complete a task (once checked, it cannot be unchecked)
function completeTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = true; // Mark task as completed
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks(); // Reload tasks to reflect changes
}

// Load tasks when the page is loaded
window.onload = loadTasks;
