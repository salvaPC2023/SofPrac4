import { saludoPersonalizado } from "./saludador";

const nombre_input = document.querySelector("#nombre");
const genero_input = document.querySelector("#generos");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const genero = genero_input.value;

  let saludo = "";

  saludo = saludoPersonalizado(nombre,genero);
  div.innerHTML = saludo;
});