import {storiesOf} from '@storybook/vue';

import GroupsPage from '../src/modules/Admin/pages/GroupsPage';
import RolePage from '../src/modules/Admin/pages/RolePage';
import UserPage from '../src/modules/Admin/pages/UserPage';

import store from '../src/store'
import i18n from '../src/i18n'
import router from '../src/router'

//MOCK GQLC PROVIDERS
import groupProvider from '../src/modules/Admin/providers/GroupProvider'
import userProvider from '../src/modules/Admin/providers/UserProvider'
import roleProvider from '../src/modules/Admin/providers/RoleProvider'
import mockGqlClient from '../gqlc-mock/gqlc-mock'
groupProvider.setGqlc(mockGqlClient)
userProvider.setGqlc(mockGqlClient)
roleProvider.setGqlc(mockGqlClient)

storiesOf('Auth/Pages', module)
    .add('GroupsPage',
        () => ({
            components: {GroupsPage},
            template: '<groups-page></groups-page>',
            i18n, store, router
        }))
    .add('RolePage',
        () => ({
            components: {RolePage},
            template: '<role-page></role-page>',
            i18n, store, router
        }))
    .add('UserPage',
        () => ({
            components: {UserPage},
            template: '<user-page></user-page>',
            i18n, store, router
        }))