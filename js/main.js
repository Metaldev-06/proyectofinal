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
const menuBurguer = document.getElementById("menuBurguer");
const sidebar = document.getElementById("sidebar");

const arrowUp = document.getElementById("arrowUp");

const form = document.getElementById("form");
const nombreForm = document.getElementById("nombreForm");
const emailForm = document.getElementById("emailForm");
const asuntoForm = document.getElementById("asuntoForm");
const mensajeForm = document.getElementById("mensajeForm");
const btnEnviar = document.getElementById("btnEnviar");

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

const validaCampos = () => {
  const nombre = nombreForm.value.trim();
  const email = emailForm.value.trim();
  const asunto = asuntoForm.value.trim();
  const mensaje = mensajeForm.value;

  if (!nombre) {
    validaFalla(nombreForm, "El nombre es obligatorio");
  } else {
    validaExito(nombreForm);
  }

  if (!email) {
    validaFalla(emailForm, "El email es obligatorio");
  } else if (!validaEmail(email)) {
    validaFalla(emailForm, "El email no es valido");
  } else {
    validaExito(emailForm);
  }

  if (!asunto) {
    validaFalla(asuntoForm, "El asunto es obligatorio");
  } else {
    validaExito(asuntoForm);
  }

  if (!mensaje) {
    validaFalla(mensajeForm, "El mensaje es obligatorio");
  } else {
    validaExito(mensajeForm);
  }
};

const validaFalla = (input, msg) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.textContent = msg;
  small.className = "form__group fail";
};

const validaExito = (input) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.className = "form__group success";
};

const validaEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
