const task = document.querySelector("#task");
const add = document.querySelector("#add");
const list = document.querySelector("#list");

add.addEventListener("click", addToDo);

function addToDo(e) {
  e.preventDefault();

  if (task.value === "") {
    alert("Please fill out the task");
    return;
  }

  const li = document.createElement("li");
  list.appendChild(li);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);

  let text = document.createElement("span");
  text.textContent = task.value;
  li.appendChild(text);

  const del = document.createElement("button");
  del.classList.add("delete");
  del.textContent = "X";
  li.appendChild(del);

  task.value = "";

  checkbox.addEventListener("change", (e) => {
    if (e.currentTarget.checked) {
      text.style.textDecoration = "line-through wavy red";
    } else {
      text.style.textDecoration = "none";
    }
  });

  del.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target) {
      li.remove();
    }
  });
}
