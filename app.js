// app.js - lógica de la lista de tareas
const listaTareas = document.getElementById("lista-tareas");

function renderizarTareas(tareas) {
  listaTareas.innerHTML = "";
  tareas.forEach(function (tarea) {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = tarea;
    listaTareas.appendChild(li);
  });
}

renderizarTareas(["Ejemplo de tarea inicial"]);
let tareas = ["Ejemplo de tarea inicial"];

document.getElementById("btn-agregar").addEventListener("click", function () {
  const input = document.getElementById("input-tarea");
  if (input.value.trim() !== "") {
    tareas.push(input.value.trim());
    renderizarTareas(tareas);
    input.value = "";
  }
});