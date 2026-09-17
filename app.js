// app.js - lógica de la lista de tareas
const listaTareas = document.getElementById("lista-tareas");
function renderizarTareas(tareas) {
  listaTareas.innerHTML = "";
  tareas.forEach(function (tarea, indice) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = tarea;

    const btnBorrar = document.createElement("button");
    btnBorrar.className = "btn btn-sm btn-danger";
    btnBorrar.textContent = "X";
    btnBorrar.addEventListener("click", function () {
      tareas.splice(indice, 1);
      renderizarTareas(tareas);
    });

    li.appendChild(btnBorrar);
    listaTareas.appendChild(li);
  });
}
li.addEventListener("click", function () {
  li.classList.toggle("text-decoration-line-through");
});
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