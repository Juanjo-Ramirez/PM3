export const validateRegisterForm = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "El nombre es obligatorio";
    } else if (values.name.length < 3) {
        errors.name = "El nombre debe tener al menos 3 caracteres.";}

    if (!values.birthDate) {
        errors.birthDate = "La fecha de nacimiento es obligatoria";
    } else {
        const birthDate = new Date(values.birthDate);
        const hoy = new Date();
        const edad = hoy.getFullYear() - birthDate.getFullYear();
        const mes = hoy.getMonth() - birthDate.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < birthDate.getDate())) {
            edad;
        }
        if (edad < 13) {
            errors.birthDate = "Debes tener al menos 13 años";
        }
    }
    
    if (!values.nDni) {
        errors.nDni = "El DNI es obligatorio";
    } else if (values.nDni.length < 3) {
        errors.nDni = "El DNI debe tener al menos 3 caracteres"}



    if (!values.username) {
        errors.username = "El nombre de usuario es obligatorio";
    } else if (values.username.length < 3) {
        errors.username = "El nombre debe tener al menos 3 caracteres";
    }

    if (!values.email) {
        errors.email = "El correo es obligatorio";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Correo inválido";
    }

    if (!values.password) {
        errors.password = "La contraseña es obligatoria";
    } else if (!/(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}/.test(values.password)){
        errors.password = "La contraseña debe tener al menos un carácter especial, un número, una mayúscula, una minúscula y un mínimo de 8 caracteres";
    }


    if (!values.repeatPassword) {
        errors.repeatPassword = "La contraseña es obligatoria";
    } else if (values.repeatPassword.length < 8) {
        errors.repeatPassword = "Debe tener al menos 8 caracteres";
    } else if (values.repeatPassword !== values.password) {
        errors.repeatPassword = "Las contraseñas no coinciden";
    }

    return errors;
}
