import SessionsByCityCard from "./SessionsByCityCard"
import i18n from "../../../i18n"


export default {
    title: "PageComponents/Dashboard"
};


const data = [
    {
        city: "Buenos Aires",
        sum: 80,
        __typename: "SessionsByCity"
    },
    {
        city: "San Paulo",
        sum: 50,
        __typename: "SessionsByCity"
    },
    {
        city: "Montevideo",
        sum: 25,
        __typename: "SessionsByCity"
    }

]

export const sessionsByCityCard = () => ({
    components: {SessionsByCityCard},
    props: {
        data: {default: data}
    },
    template: '<v-container fluid><v-row><v-col cols="12" md="4"> <sessions-by-city-card :data="data"></sessions-by-city-card> </v-col></v-row></v-container>',
    i18n
})
