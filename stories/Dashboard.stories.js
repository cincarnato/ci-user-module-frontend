import { withKnobs} from "@storybook/addon-knobs";

//PageComponents
import AdminGroupsCard from "../src/pages/DashboardPage/AdminGroupsCard";
import AdminUsersCard from "../src/pages/DashboardPage/AdminUsersCard";
import AdminRolesCard from "../src/pages/DashboardPage/AdminRolesCard";

import store from '../src/store'
import i18n from '../src/i18n'
import router from '../src/router'

export default {
    title: "PageComponents/Dashboard",
    decorators: [withKnobs]
};

export const adminGroupsCard = () => ({
    components: {AdminGroupsCard},
    template: '<admin-groups-card></admin-groups-card>',
    i18n, store, router
})

export const adminUsersCard = () => ({
    components: {AdminUsersCard},
    template: '<admin-users-card></admin-users-card>',
    i18n, store, router
})

export const adminRolesCard = () => ({
    components: {AdminRolesCard},
    template: '<admin-roles-card></admin-roles-card>',
    i18n, store, router
})