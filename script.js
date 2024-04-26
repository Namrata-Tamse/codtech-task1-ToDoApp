function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.innerText = taskInput.value;
    li.addEventListener("click", function() {
        this.classList.toggle("done");
    });

    taskList.appendChild(li);
    taskInput.value = "";
}



