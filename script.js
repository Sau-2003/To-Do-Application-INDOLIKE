const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.querySelector("button");

addButton.addEventListener("click", addTask);

// 👉 Listen for Enter key press in the input box
inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // Toggle checkmark
    li.addEventListener("click", () => {
        li.classList.toggle("checked");
    });

    // Create delete button
    const span = document.createElement("span");
    span.textContent = "×";
    span.className = "close";
    span.onclick = (event) => {
        event.stopPropagation(); // prevent toggling the check on delete
        li.remove();
    };

    li.appendChild(span);
    listContainer.appendChild(li);
    inputBox.value = "";
}
