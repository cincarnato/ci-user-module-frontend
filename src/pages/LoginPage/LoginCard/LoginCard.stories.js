import LoginCard from "./LoginCard"
import LoginForm from "../LoginForm"
import i18n from "../../../i18n"
import router from "../../../router"
import store from "../../../store"

export default {
    title: "PageComponents/Login"
};


export const loginCard = () => ({
    components: {LoginCard,LoginForm},
    template: '<v-container fluid><v-row><v-col cols="12" md="4"> <login-card><login-form></login-form></login-card> </v-col></v-row></v-container>',
    i18n, router, store
})
