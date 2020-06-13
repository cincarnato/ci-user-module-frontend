import {withKnobs} from "@storybook/addon-knobs";
//PageComponents
import AdminGroupsCard from "../src/pages/DashboardPage/AdminGroupsCard";
import AdminUsersCard from "../src/pages/DashboardPage/AdminUsersCard";
import AdminRolesCard from "../src/pages/DashboardPage/AdminRolesCard";
import SessionsByUserCard from "../src/pages/DashboardPage/SessionsByUserCard/SessionsByUserCard";
import SessionsByHttpClientCard from "../src/pages/DashboardPage/SessionsByHttpClientCard/SessionsByHttpClientCard";
import SessionsByOsCard from "../src/pages/DashboardPage/SessionsByOsCard/SessionsByOsCard";
import SessionsByDeviceTypeCard from "../src/pages/DashboardPage/SessionsByDeviceTypeCard/SessionsByDeviceTypeCard";

import SessionsByCountryCard from "../src/pages/DashboardPage/SessionsByCountryCard/SessionsByCountryCard";
import SessionsByCityCard from "../src/pages/DashboardPage/SessionsByCityCard/SessionsByCityCard";
import UserAuditsCard from "../src/pages/DashboardPage/UserAuditsCard/UserAuditsCard";
import LoginFailCard from "../src/pages/DashboardPage/LoginFailCard/index";

//Data
import sessionsByUserData from './data/sessions-by-user'
import sessionsByHttpClientData from './data/sessions-by-http-client'
import sessionsByOsData from './data/sessions-by-os'
import sessionsByDeviceTypeData from './data/sessions-by-device-type'
import sessionsByCountryData from './data/sessions-by-country'
import sessionsByCityData from './data/sessions-by-city'
import userAuditData from './data/user-audit'
import loginFailData from './data/login-fail-data'

//Resources
import store from '../src/store'
import i18n from '../src/i18n'
import router from '../src/router'

const containerDecorator = () => `<v-container fluid><v-row><story/></v-row></v-container>`

export default {
    title: "PageComponents/Dashboard",
    decorators: [withKnobs, containerDecorator]
};

export const adminGroupsCard = () => ({
    components: {AdminGroupsCard},
    template: '<v-col cols="12" md="5"> <admin-groups-card></admin-groups-card> </v-col>',
    i18n, store, router
})

export const adminUsersCard = () => ({
    components: {AdminUsersCard},
    template: '<v-col cols="12" md="5"> <admin-users-card></admin-users-card> </v-col>',
    i18n, store, router
})

export const adminRolesCard = () => ({
    components: {AdminRolesCard},
    template: '<v-col cols="12" md="5"> <admin-roles-card></admin-roles-card> </v-col>',
    i18n, store, router
})

export const sessionsByUserCard = () => ({
    components: {SessionsByUserCard},
    props: {
        data: {default: sessionsByUserData}
    },
    template: '<v-col cols="12" md="8"> <sessions-by-user-card :data="data"></sessions-by-user-card> </v-col> ',
    i18n, store, router
})

export const sessionByHttpClientCard = () => ({
    components: {SessionsByHttpClientCard},
    props: {
        data: {default: sessionsByHttpClientData}
    },
    template: '<v-col cols="12" md="4"> <sessions-by-http-client-card :data="data"></sessions-by-http-client-card> </v-col>',
    i18n, store, router
})

export const sessionsByOsCard = () => ({
    components: {SessionsByOsCard},
    props: {
        data: {default: sessionsByOsData}
    },
    template: '<v-col cols="12" md="4"> <sessions-by-os-card :data="data"></sessions-by-os-card> </v-col>',
    i18n, store, router
})

export const sessionsByDeviceTypeCard = () => ({
    components: {SessionsByDeviceTypeCard},
    props: {
        data: {default: sessionsByDeviceTypeData}
    },
    template: '<v-col cols="12" md="4"> <sessions-by-device-type-card :data="data"></sessions-by-device-type-card> </v-col>',
    i18n, store, router
})


export const sessionsByCountryCard = () => ({
    components: {SessionsByCountryCard},
    props: {
        data: {default: sessionsByCountryData}
    },
    template: '<v-col cols="12" md="8"> <sessions-by-country-card :data="data"></sessions-by-country-card> </v-col>',
    i18n, store, router
})

export const sessionsByCityCard = () => ({
    components: {SessionsByCityCard},
    props: {
        data: {default: sessionsByCityData}
    },
    template: '<v-col cols="12" md="4"> <sessions-by-city-card :data="data"></sessions-by-city-card> </v-col>',
    i18n, store, router
})


export const userAuditsCard = () => ({
    components: {UserAuditsCard},
    props: {
        data: {default: userAuditData}
    },
    template: '<v-col cols="12" md="6"> <user-audits-card :data="data"></user-audits-card> </v-col>',
    i18n, store, router
})



export const loginFailCard = () => ({
    components: {LoginFailCard},
    props: {
        data: {default: loginFailData}
    },
    template: '<v-col cols="12" md="6"> <login-fail-card :data="data"></login-fail-card> </v-col>',
    i18n, store, router
})

export const loginFailCardNoData = () => ({
    components: {LoginFailCard},
    props: {
        data: {default: []}
    },
    template: '<v-col cols="12" md="6"> <login-fail-card :data="data"></login-fail-card> </v-col>',
    i18n, store, router
})
