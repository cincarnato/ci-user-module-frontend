import RegisterForm from "./RegisterForm"
import i18n from "../../../i18n"
import router from "../../../router"
import store from "../../../store"

export default {
    title: "PageComponents/Register"
};


const data = []

export const registerForm = () => ({
    components: {RegisterForm},
    props: {
        data: {default: data}
    },
    template: '<v-container fluid><v-row><v-col cols="12" md="6" offset-md="3"> <register-form :data="data"></register-form> </v-col></v-row></v-container>',
    i18n, router, store
})
