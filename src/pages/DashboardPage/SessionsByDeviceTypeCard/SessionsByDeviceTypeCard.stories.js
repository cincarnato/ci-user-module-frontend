import SessionsByDeviceTypeCard from "./SessionsByDeviceTypeCard"
import i18n from "../../../i18n"


export default {
    title: "PageComponents/Dashboard"
};


const data = [
    {
        devicetype: "desktop",
        sum: 80,
        __typename: "SessionsByDeviceType"
    },
    {
        devicetype: "tablet",
        sum: 10,
        __typename: "SessionsByDeviceType"
    }
]

export const sessionsByDeviceTypeCard = () => ({
    components: {SessionsByDeviceTypeCard},
    props: {
        data: {default: data}
    },
    template: '<v-container fluid><v-row><v-col cols="12" md="4"> <sessions-by-device-type-card :data="data"></sessions-by-device-type-card> </v-col></v-row></v-container>',
    i18n
})
