const validar = values => {
    const errors = {}

    const expString = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+$/;
    const expEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    if (!values.nombre || !values.email || !values.asunto || !values.mensaje) {
        errors.default = "Se deben completar todos los campos"
    }


    if (values.nombre && !values.nombre.match(expString)) {
        errors.nombre = "Carácter no valido"
    }

    if (values.email && !values.email.match(expEmail)) {
        errors.email = "Email invalido"
    }

    return errors;
}
export default validar;
//export * (exporta todo)