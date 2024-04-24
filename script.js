"use strict";

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const boton = document.getElementById("button");

// funcion controladora
function enviarDatos() {
  if (inputBox.value === "") {
    alert("tienes que rellenar el campo antes de enviar");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
// codigo para que al hacer click en add, se añada la tarea
boton.addEventListener("click", function () {
  enviarDatos();
});

// codigo para que al presionar enter se  ejecute la tarea
inputBox.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    enviarDatos();
  }
});
// codigo para que al presioar el icono de unchecked o checked cambie de estado o para eliminar la tarea
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
// funcion para guardar la tarea en localstorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// funcion para mostrar la tarea que esta guardada en localstorage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
