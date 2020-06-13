import LoginForm from "./LoginForm"
import i18n from "../../../i18n"
import router from "../../../router"
import store from "../../../store"

export default {
    title: "PageComponents/Login"
};


export const loginForm = () => ({
    components: {LoginForm},
    template: '<v-container fluid><v-row><v-col cols="12" md="4"> <login-form></login-form> </v-col></v-row></v-container>',
    i18n, router, store
})
