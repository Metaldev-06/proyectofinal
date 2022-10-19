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

  if (nombre && email && asunto && mensaje) {
    form.reset();
    modal.classList.add("activeModal");

    setTimeout(() => {
      modal.classList.remove("activeModal");
    }, 2000);
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

export { validaCampos };
