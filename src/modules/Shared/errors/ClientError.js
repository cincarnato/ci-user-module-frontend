//i18n Messages
const MESSAGE_GENERIC_ERROR = "shared.clientError.unexpectedError"
const MESSAGE_NETWORK_ERROR = "shared.clientError.networkError"
const MESSAGE_VALIDATION = "shared.clientError.validationError"
const MESSAGE_FORBIDEN = "shared.clientError.forbiden"
const MESSAGE_UNAUTHENTICATED = "shared.clientError.unauthenticated"

//Apollo Errors
const BAD_USER_INPUT = "BAD_USER_INPUT"
const FORBIDDEN = "FORBIDDEN"
const UNAUTHENTICATED = "UNAUTHENTICATED"

class ClientError extends Error {
    constructor(error) {
        super(error.message);
        this.name = "ClientError";
        this.inputErrors = {}
        this.errorsQuantity= null
        //Last error message
        this.i18nMessage = ""
        //All messages
        this.i18nMessages = []

        if (error.networkError) {
            this.i18nMessage = MESSAGE_NETWORK_ERROR
            this.i18nMessages.push(MESSAGE_NETWORK_ERROR)
        } else if (error.graphQLErrors && error.graphQLErrors.length > 0) {
            this.processFrapjQLErrors(error.graphQLErrors)
        } else {
            this.i18nMessage = MESSAGE_GENERIC_ERROR
            this.i18nMessages.push(MESSAGE_GENERIC_ERROR)
        }
    }

    processFrapjQLErrors(graphQLErrors) {
        
        this.errorsQuantity = graphQLErrors.length
        
        graphQLErrors.forEach(gqlError => {
            if (gqlError.extensions.code == BAD_USER_INPUT) {
                this.i18nMessage = MESSAGE_VALIDATION
                this.i18nMessages.push(MESSAGE_VALIDATION)
                this.inputErrors = {...this.inputErrors, ...gqlError.extensions.exception.inputErrors}
            }
            if (gqlError.extensions.code == FORBIDDEN) {
                this.i18nMessage = MESSAGE_FORBIDEN
                this.i18nMessages.push(MESSAGE_FORBIDEN)
            }

            if (gqlError.extensions.code == UNAUTHENTICATED) {
                this.i18nMessage = MESSAGE_UNAUTHENTICATED
                this.i18nMessages.push(MESSAGE_UNAUTHENTICATED)
            }

        })
    }


}

module.exports = ClientError;