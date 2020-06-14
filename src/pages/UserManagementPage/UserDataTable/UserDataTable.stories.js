import UserDataTable from "./UserDataTable"
import i18n from "../../../i18n"
import router from "../../../router"
import store from "../../../store"

export default {
    title: "PageComponents/User"
};


const data = []

export const userDataTable = () => ({
    components: {UserDataTable},
    props: {
        data: {default: data}
    },
    template: '<v-container fluid><v-row><v-col cols="12" md="4"> <UserDataTable :data="data"></UserDataTable> </v-col></v-row></v-container>',
    i18n, router, store
})
