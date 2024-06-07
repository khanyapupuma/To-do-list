function addTask() {
    var taskInput = document.getElementById("taskInput")
    var taskText = taskInput.value.trim()
    if (taskText === "") {
        alert("Please enter a task.")
        return;
    }
    var li = document.createElement("li")
    li.textContent = taskText
    var deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.style.background = "#dc3545"
    deleteButton.style.marginLeft = "10px"
    deleteButton.onclick = function() {
        li.remove()
    };
    li.appendChild(deleteButton)
    document.getElementById("taskList").appendChild(li)
    taskInput.value = ""
}