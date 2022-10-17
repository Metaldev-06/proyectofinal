const header = document.getElementById("header");
const arrowUp = document.getElementById("arrowUp");

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

  console.log(window.scrollY);
});

const tecnologias = [
  {
    img: "../assets/img/icons8-html-5.svg",
    title: "HTML",
    description:
      "HTML es el lenguaje de marcado de contenido para la creación de páginas web, permite la creación de páginas web dinámicas y estándarizadas.",
  },
  {
    img: "../assets/img/icons8-css3.svg",
    title: "CSS",
    description:
      "CSS es un lenguaje de presentación de una página web, que define las presentaciones de los elementos de una página web.",
  },
  {
    img: "../assets/img/icons8-oreja.svg",
    title: "Bootstrap",
    description:
      "Bootstrap es un framework css de desarrollo de páginas web para el desarrollo de aplicaciones web.",
  },
  {
    img: "../assets/img/icons8-sass.svg",
    title: "Sass",
    description:
      "Sass es un lenguaje de diseño de páginas web para el desarrollo de aplicaciones web.",
  },
  {
    img: "../assets/img/icons8-javascript.svg",
    title: "JavaScript",
    description:
      "JavaScript es un lenguaje de programación de alto nivel que se utiliza en la creación de páginas web interactivas y de aplicaciones web.",
  },
  {
    img: "../assets/img/icons8-typescript.svg",
    title: "TypeScript",
    description:
      "TypesScript es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript.",
  },
  {
    img: "../assets/img/angular.svg",
    title: "Angular",
    description:
      "Angular es una plataforma de desarrollo de aplicaciones web y móviles multiplataforma que se basa en una arquitectura de componentes.",
  },
  {
    img: "../assets/img/icons8-node-js.svg",
    title: "NodeJS",
    description:
      "NodeJS es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript.",
  },
  {
    img: "../assets/img/icons8-express-js.svg",
    title: "Express",
    description:
      "Express es un entorno de trabajo para aplicaciones web para el programario Node.js, de código abierto y con licencia MIT. Se utiliza para desarrollar aplicaciones web y APIs.",
  },
  {
    img: "../assets/img/php-svgrepo-com.svg",
    title: "PHP",
    description:
      "PHP es un lenguaje de programación de alto nivel de uso general que se adapta especialmente al desarrollo web.",
  },
  {
    img: "../assets/img/icons8-postgresql.svg",
    title: "PostgreSQL",
    description:
      "PostgreSQL es un sistema gestor de base de datos relacional de código abierto.",
  },
  {
    img: "../assets/img/icons8-logo-de-mysql.svg",
    title: "MySQL",
    description:
      "MySQL es un sistema gestor de base de datos relacional de código abierto.",
  },
];

const hobbies = [
  {
    img: "../assets/img/juego.svg",
    title: "Jugar Videojuegos",
    description:
      "Me gusta jugar videojuegos en mis tiempos libres, para poder relajarme y desconectarme de la rutina diaria.",
  },
  {
    img: "../assets/img/musica.svg",
    title: "Escuchar Música",
    description:
      "Siempre que estudio, juego o programo me gusta escuchar música",
  },
  {
    img: "../assets/img/tv.svg",
    title: "Ver Series",
    description:
      "Los fines de semanas o antes de dormir me gusta ver unos capítulos de mis series favoritas",
  },
  {
    img: "../assets/img/programacion.svg",
    title: "Programar",
    description:
      "Básicamente es lo que hago en la totalidad del día, programar y aprender nuevas tecnologías",
  },
  {
    img: "../assets/img/libro.svg",
    title: "Leer Libros",
    description:
      "Aunque ahora es menos frecuente que antes, de vez en cuando me gusta leer un buen libro",
  },
  {
    img: "../assets/img/correr.svg",
    title: "Salir a Caminar",
    description:
      "Actualmente me gusta salir a caminar por la mañana o a la tarde - noche, cuando el sol no está tan fuerte",
  },
];

const institutos = [
  {
    img: "../assets/img/ucp.png",
    title: "Lic.En Sistemas de Información",
    description: "2020 - 2022",
  },
  {
    img: "../assets/img/teclab.png",
    title: "Técnico Superior en Programación",
    description: "2022 - 2023",
  },
  {
    img: "../assets/img/alura.svg",
    title: "Oracle Next - Formación en UX Design",
    description: "2022 - 2023",
  },
  {
    img: "../assets/img/nucba.png",
    title: "Programación Web Full Stack",
    description: "2022 - 2023",
  },
];

const proyectos = [
  {
    img: "../assets/img/proyecto1.jpg",
    title: "GifTify",
    description:
      "Es una página web para buscar gif, usando la API de Giphy. Desarrollada con Angular, Sass y TypeScript.",
    repositorio: "https://github.com/Metaldev-06/buscador-gif-app",
    demo: "https://giftify-app.netlify.app/",
  },
  {
    img: "../assets/img/proyecto2.jpg",
    title: "Cande Fest",
    description:
      "Es una tarjeta de invitación digital para un XI años de Candela Rojas. Desarrollada con HTML, JavaScript y Sass.",
    repositorio: "https://github.com/Metaldev-06/invitacion-cande-15",
    demo: "https://candela-fest.netlify.app/",
  },
  {
    img: "../assets/img/proyecto3.jpg",
    title: "Juego del Ahorcado",
    description:
      "Es el clásico juego del ahorcado, este es un proyecto de Oracle Next Education. Desarrollado con HTML, CSS y JavaScript.",
    repositorio:
      "https://github.com/Metaldev-06/Juego-del-ahorcado-Alura-Challenges-Oracle-ONE",
    demo: "https://metaldev-06.github.io/Juego-del-ahorcado-Alura-Challenges-Oracle-ONE/",
  },
  {
    img: "../assets/img/proyecto4.jpg",
    title: "Desencriptador de Texto",
    description:
      "Es un sencillo encriptador y desencriptador de texto, este es un proyecto de Oracle Next Education. Desarrollado con HTML, CSS y JavaScript.",
    repositorio:
      "https://github.com/Metaldev-06/Encriptador-de-texto-Alura-Challenges-Oracle-ONE",
    demo: "https://metaldev-06.github.io/Encriptador-de-texto-Alura-Challenges-Oracle-ONE/",
  },
];

const mostrarDatos = (tecnologias) => {
  const cards = document.getElementById("cardContainer");
  const templateCards = document.getElementById("templateCard").content;
  const fragment = document.createDocumentFragment();

  tecnologias.map((item) => {
    const clone = templateCards.cloneNode(true);

    clone.querySelector("img").setAttribute("src", item.img);
    clone.querySelector(".template__card--content_title").textContent =
      item.title;
    clone.querySelector(".template__card--content_description").textContent =
      item.description;

    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

const mostrarHobbies = (hobbies) => {
  const cards = document.getElementById("cardContainerHobbies");
  const templateCards = document.getElementById("templateCard").content;
  const fragment = document.createDocumentFragment();

  hobbies.map((item) => {
    const clone = templateCards.cloneNode(true);

    clone.querySelector("img").setAttribute("src", item.img);
    clone.querySelector(".template__card--content_title").textContent =
      item.title;
    clone.querySelector(".template__card--content_description").textContent =
      item.description;

    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

const mostrarInstitutos = (institutos) => {
  const cards = document.getElementById("cardContainerEstudios");
  const templateCards = document.getElementById("templateCard").content;
  const fragment = document.createDocumentFragment();

  institutos.map((item) => {
    const clone = templateCards.cloneNode(true);

    clone.querySelector("img").setAttribute("src", item.img);
    clone.querySelector(".template__card--content_title").textContent =
      item.title;
    clone.querySelector(".template__card--content_description").textContent =
      item.description;

    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

const mostrarProyectos = (proyectos) => {
  const cards = document.getElementById("sectionProyectos");
  const templateCards = document.getElementById("templateExperiencia").content;
  const fragment = document.createDocumentFragment();

  proyectos.map((item) => {
    const clone = templateCards.cloneNode(true);

    clone.getElementById("templateImg").setAttribute("src", item.img);
    clone.getElementById("templateTitle").textContent = item.title;
    clone.getElementById("templateDescription").textContent = item.description;

    clone
      .getElementById("templateRepositorio")
      .setAttribute("href", item.repositorio);
    clone.getElementById("templateDemo").setAttribute("href", item.demo);

    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

mostrarDatos(tecnologias);
mostrarHobbies(hobbies);
mostrarInstitutos(institutos);
mostrarProyectos(proyectos);
