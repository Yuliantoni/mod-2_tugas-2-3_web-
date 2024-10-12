let todoList = document.getElementById('todo-list');

// Fungsi untuk menambah tugas ke daftar
function addTask() {
    let taskInput = document.getElementById('todo-input');
    let task = taskInput.value;

    if (task.trim() !== "") {
        // Membuat elemen list baru
        let li = document.createElement('li');
        li.innerHTML = `<span>${task}</span> <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
        
        // Menambahkan list ke dalam ul
        todoList.appendChild(li);

        // Mengosongkan input setelah menambah tugas
        taskInput.value = '';
    } else {
        alert("Please enter a task.");
    }
}

// Fungsi untuk menghapus tugas dari daftar
function deleteTask(button) {
    let li = button.parentElement;
    todoList.removeChild(li);
}
