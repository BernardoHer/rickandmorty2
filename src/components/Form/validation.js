  export const validate = (inputs) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /\d/;

    if (!inputs.username) {
      errors.username = "No puede estar vacío";
    } else if (!regexEmail.test(inputs.username)) {
      errors.username =
        "Debe ser un correo electrónico válido";
    }

    if (!inputs.password) {
      errors.password = "No puede estar vacío";
    } else if (inputs.password.length < 6 || inputs.password.length > 10) {
      errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    } else if (!regexPassword.test(inputs.password)) {
      errors.password = "La contraseña debe contener al menos un número";
    }

    return errors;
  };