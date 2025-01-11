document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a button to mark the task as completed
        const completeButton = document.createElement('button');
        completeButton.textContent = '✔️';
        completeButton.onclick = () => {
            li.classList.toggle('completed');
        };

        // Create a button to delete the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = () => {
            taskList.removeChild(li);
        };

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = ''; // Clear the input field
    }

    // Event listener for the Add Task button
    addTaskButton.addEventListener('click', addTask);

    // Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});