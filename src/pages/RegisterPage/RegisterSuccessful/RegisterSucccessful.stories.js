import RegisterSuccessful from "./RegisterSuccessful"
import i18n from "../../../i18n"
import router from "../../../router"
import store from "../../../store"

export default {
    title: "PageComponents/Register"
};


const data = "someone@somehost.com"

export const registerSuccessful = () => ({
    components: {RegisterSuccessful},
    props: {
        data: {default: data}
    },
    template: '<v-container fluid><v-row><v-col cols="12" md="6" offset-md="3"> <register-successful :email="data"></register-successful> </v-col></v-row></v-container>',
    i18n, router, store
})
