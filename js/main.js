import {
  tecnologias,
  hobbies,
  institutos,
  proyectos,
  mostrarDatos,
  mostrarHobbies,
  mostrarInstitutos,
  mostrarProyectos,
} from "./datos.js";
import { validaCampos } from "./validaciones.js";

const header = document.getElementById("header");
const logo = document.getElementById("logo");
const menuBurguer = document.getElementById("menuBurguer");
const sidebar = document.getElementById("sidebar");

const arrowUp = document.getElementById("arrowUp");

const form = document.getElementById("form");
const nombreForm = document.getElementById("nombreForm");
const emailForm = document.getElementById("emailForm");
const asuntoForm = document.getElementById("asuntoForm");
const mensajeForm = document.getElementById("mensajeForm");
const btnEnviar = document.getElementById("btnEnviar");
const modal = document.getElementById("modal");

const cv = document.getElementById("cv");

mostrarDatos(tecnologias);
mostrarHobbies(hobbies);
mostrarInstitutos(institutos);
mostrarProyectos(proyectos);

let scroll = 0;
header.classList.remove("degradado");

window.addEventListener("scroll", () => {
  scroll = window.scrollY;
  if (scroll >= 800) {
    header.classList.add("degradado");
    arrowUp.classList.add("scrollOn");
  } else {
    header.classList.remove("degradado");
    arrowUp.classList.remove("scrollOn");
  }
});

arrowUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

logo.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

menuBurguer.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validaCampos();
});

cv.addEventListener("click", () => {
  window.open("./assets/pdf/CV-Diaz-Fernando.pdf");
});
