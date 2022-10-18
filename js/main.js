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

const header = document.getElementById("header");
const logo = document.getElementById("logo");
const arrowUp = document.getElementById("arrowUp");
const menuBurguer = document.getElementById("menuBurguer");
const sidebar = document.getElementById("sidebar");

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

mostrarDatos(tecnologias);
mostrarHobbies(hobbies);
mostrarInstitutos(institutos);
mostrarProyectos(proyectos);
