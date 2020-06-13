import SessionsByCountryCard from "./SessionsByCountryCard"
import i18n from "../../../i18n"


export default {
    title: "PageComponents/Dashboard"
};


const data = [
    {
        country: "AR",
        sum: 80,
        __typename: "SessionsByCountry"
    },
    {
        country: "BR",
        sum: 50,
        __typename: "SessionsByCountry"
    },
    {
        country: "UY",
        sum: 25,
        __typename: "SessionsByCountry"
    }
]

export const sessionsByCountryCard = () => ({
    components: {SessionsByCountryCard},
    props: {
        data: {default: data}
    },
    template: '<v-container fluid><v-row><v-col cols="12" md="4"> <sessions-by-country-card :data="data"></sessions-by-country-card> </v-col></v-row></v-container>',
    i18n
})
