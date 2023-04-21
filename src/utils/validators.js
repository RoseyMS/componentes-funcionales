export const nameValidations = {
    required: {
        value: true,
        message: "Nombre requerido"
    }, minLength: {
        value: 3,
        message: "Minimo 3 caracteres"
    }
}

export const lastNameValidations = {
    required: {
        value: true,
        message: "Apellido requerido"
    }, minLength: {
        value: 3,
        message: "Minimo 3 caracteres"
    }
}

export const emailValidations = {
    required: {
        value: true,
        message: "Correo requerido"
    }, pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: "Correo inválido"
    }
}