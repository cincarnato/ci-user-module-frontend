const messages = {
    en: {
        shared: {
            validation: {
                required: 'Required field',
                emailVerify:'Email does not match',
                emailFormat:'The email has an invalid format',
                passwordVerify: 'Password does not match'
            },
            clientError: {
                unauthenticated: 'Authentication required',
                forbiden: 'Forbiden',
                validation: 'Validation Errors',
                networkError: 'networkError',
                unexpectedError: 'unexpectedError',
            }
        },
    },
    es: {
        shared: {
            validation: {
                required: 'Campo requerido',
                emailVerify:'El email no coincide',
                emailFormat:'El email tiene un formato invalido',
                passwordVerify: 'La contraseña no coincide'
            },
            clientError: {
                unauthenticated: 'Authentication required',
                forbiden: 'Forbiden',
                validation: 'Validation Errors',
                networkError: 'networkError',
                unexpectedError: 'unexpectedError',
            }
        },
    },
    pt: {
        shared: {
            validation: {
                required: 'Campo obrigatório',
                emailVerify:'O email não corresponde',
                emailFormat:'O email tem um formato inválido',
                passwordVerify: 'Senha não corresponde'
            },
            clientError: {
                unauthenticated: 'Authentication required',
                forbiden: 'Forbiden',
                validationError: 'Validation Errors',
                networkError: 'networkError',
                unexpectedError: 'unexpectedError',
            }
        },
    }

}

export default messages
