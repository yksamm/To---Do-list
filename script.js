function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (input.value === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  li.onclick = () => li.classList.toggle("done");

  taskList.appendChild(li);
  input.value = "";
}
