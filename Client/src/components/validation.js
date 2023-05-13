export default function validation(inputs){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=\w*\d)/;
    const regexNumber = /^(?=.*\d)\S{6,10}$/
    const errors = {}
    
    if (!regexEmail.test(inputs.username)){
        errors.username = 'El nombre de usuario tiene que ser un email'
    }
    if (inputs.username.lenght > 35) {
        errors.username = 'El nombre de usuario no puede tener más de 35 caracteres.'
    }
    if (!inputs.username) {
        errors.username = 'El nombre de usuario no puede estar vacío.'
    }
    if (!regexNumber.test(inputs.password)){
        errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres.'
    }
    if(!regexPassword.test(inputs.password)){
        errors.password = 'La contraseña tiene que tener al menos un número.';
    }
    return errors
}