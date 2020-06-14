import RegisterCard from "./RegisterCard"
import i18n from "../../../i18n"
import router from "../../../router"
import store from "../../../store"

export default {
    title: "PageComponents/Register"
};


export const registerCard = () => ({
    components: {RegisterCard},
    template: '<v-container fluid><v-row><v-col cols="12" md="6" offset-md="3"> <register-card >SLOT</register-card> </v-col></v-row></v-container>',
    i18n, router, store
})
