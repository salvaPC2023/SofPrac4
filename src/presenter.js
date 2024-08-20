import { saludar } from "./saludador";

const nombre_input = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;

  let saludo = saludar(nombre);
  div.innerHTML = saludo;
});