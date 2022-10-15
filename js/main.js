let tecnologias = [
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

let hobbies = [
  {
    img: "../assets/img/juego.svg",
    title: "Jugar Videojuegos",
  },
  {
    img: "../assets/img/musica.svg",
    title: "Escuchar Música",
  },
  {
    img: "../assets/img/tv.svg",
    title: "Ver Series",
  },
  {
    img: "../assets/img/programacion.svg",
    title: "Programar",
  },
  {
    img: "../assets/img/libro.svg",
    title: "Leer Libros",
  },
  {
    img: "../assets/img/correr.svg",
    title: "Salir a Caminar",
  },
];

const mostrarDatos = (tecnologias) => {
  const cards = document.getElementById("cardContainer");
  const templateCards = document.getElementById("templateCard").content;
  const fragment = document.createDocumentFragment();

  tecnologias.map((item) => {
    const clone = templateCards.cloneNode(true);

    clone.querySelector("img").setAttribute("src", item.img);
    clone.querySelector(".skills__card--content_title").textContent =
      item.title;
    clone.querySelector(".skills__card--content_description").textContent =
      item.description;

    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

const mostrarHobbies = (hobbies) => {
  const cards = document.getElementById("cardContainerHobbies");
  const templateCards = document.getElementById("templateCardHobbies").content;
  const fragment = document.createDocumentFragment();

  hobbies.map((item) => {
    const clone = templateCards.cloneNode(true);

    clone.querySelector("img").setAttribute("src", item.img);
    clone.querySelector(".skills__card--content_title").textContent =
      item.title;

    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

mostrarDatos(tecnologias);
mostrarHobbies(hobbies);
