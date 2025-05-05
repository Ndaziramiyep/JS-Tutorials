document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    // Get references to form, input, and task list
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText === '') return;

        const li = document.createElement("li");
        li.textContent = taskText;
        // Handle form submission
        // Toggle completed class when clicked
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✕';
        deleteBtn.className = 'delete-btn';

        // Delete task when delete button is clicked
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering parent click (complete toggle)
            li.remove(); // Remove the task
        });

        // Add delete button to the task item
        li.appendChild(deleteBtn);

        // Add the task to the list
        list.appendChild(li);

        // Clear input after adding
        input.value = '';


        // Clear input after adding
    });
});