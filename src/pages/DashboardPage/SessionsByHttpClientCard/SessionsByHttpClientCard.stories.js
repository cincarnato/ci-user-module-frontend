import SessionsByHttpClientCard from "./SessionsByHttpClientCard"
import i18n from "../../../i18n"


export default {
    title: "PageComponents/Dashboard"
};


const data = [
    {
        clientname: "Firefox",
        sum: 40,
        __typename: "SessionsByClient"
    },
    {
        clientname: "Chrome",
        sum: 90,
        __typename: "SessionsByClient"
    },
    {
        clientname: "Safari",
        sum: 10,
        __typename: "SessionsByClient"
    }
]
export const sessionsByHttpClientCard = () => ({
    components: {SessionsByHttpClientCard},
    props: {
        data: {default: data}
    },
    template: '<v-container fluid><v-row><v-col cols="12" md="4"> <sessions-by-http-client-card :data="data"></sessions-by-http-client-card> </v-col></v-row></v-container>',
    i18n
})
