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
li.addEventListener("click", function () {
  li.classList.toggle("text-decoration-line-through");
});
renderizarTareas(["Ejemplo de tarea inicial"]);
