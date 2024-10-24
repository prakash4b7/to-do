const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

function renderTaskList() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;

      
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => {
            tasks.splice(index, 1);
            renderTaskList();
        };
        taskItem.appendChild(deleteBtn);
      
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.onclick = () => {
            const newTask = prompt('Enter new task:', task);
            if (newTask !== null) {
                tasks[index] = newTask;
                renderTaskList();
            }
        };
        taskItem.appendChild(editBtn);

        taskList.appendChild(taskItem);
    });
}

addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();

    if (task !== '') {
        tasks.push(task);
        renderTaskList();
        taskInput.value = ''; 
    }
});

renderTaskList();
