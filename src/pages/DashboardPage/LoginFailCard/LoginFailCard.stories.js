import LoginFailCard from "./index";
import i18n from "../../../i18n";

export default {
    title: "PageComponents/Dashboard"
};


const data = [
    {
        username: "admin",
        attempts: 8,
    },
    {
        username: "jhon.doe",
        attempts: 3,
    },
]

export const loginFailCard = () => ({
    components: {LoginFailCard},
    props: {
        data: {default: data}
    },
    template: '<v-container fluid><v-row><v-col cols="12" md="4"> <login-fail-card :data="data"></login-fail-card> </v-col></v-row></v-container>',
    i18n
})

export const loginFailCardNoData = () => ({
    components: {LoginFailCard},
    props: {
        data: {default: []}
    },
    template: '<v-container fluid><v-row><v-col cols="12" md="4"> <login-fail-card :data="data"></login-fail-card> </v-col></v-row></v-container>',
    i18n
})