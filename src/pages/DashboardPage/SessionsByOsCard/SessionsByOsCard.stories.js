import SessionsByOsCard from "./SessionsByOsCard"
import i18n from "../../../i18n"


export default {
    title: "PageComponents/Dashboard"
};


const data = [
    {
        osname: "Ubuntu",
        sum: 60, "__typename": "SessionsByOs"
    },
    {
        osname: "Mac",
        sum: 20,
        __typename: "SessionsByOs"
    },
    {
        osname: "Windows",
        sum: 80,
        __typename: "SessionsByOs"
    }
]

export const sessionsByOsCard = () => ({
    components: {SessionsByOsCard},
    props: {
        data: {default: data}
    },
    template: '<v-container fluid><v-row><v-col cols="12" md="4"><sessions-by-os-card :data="data"></sessions-by-os-card> </v-col></v-row></v-container>',
    i18n
})
