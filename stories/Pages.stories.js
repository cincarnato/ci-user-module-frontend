import {storiesOf} from '@storybook/vue';

import GroupManagementPage from '../src/pages/GroupManagementPage';
import RolePage from '../src/pages/RolePage';
import UserManagementPage from '../src/pages/UserManagementPage';

import LoginPage from '../src/pages/LoginPage';
import RegisterPage from '../src/pages/RegisterPage';
import ActivationPage from '../src/pages/ActivationPage';


import DashboardPage from '../src/pages/DashboardPage';


import store from '../src/store'
import i18n from '../src/i18n'
import router from '../src/router'

//MOCK GQLC PROVIDERS
import groupProvider from '../src/providers/GroupProvider'
import userProvider from '../src/providers/UserProvider'
import roleProvider from '../src/providers/RoleProvider'
import sessionProvider from '../src/providers/SessionProvider'
import mockGqlClient from '../gqlc-mock/gqlc-mock-data'
groupProvider.setGqlc(mockGqlClient)
userProvider.setGqlc(mockGqlClient)
roleProvider.setGqlc(mockGqlClient)
sessionProvider.setGqlc(mockGqlClient)

storiesOf('Pages', module)
    .add('UserManagementPage',
        () => ({
            components: {UserManagementPage},
            template: '<user-management-page></user-management-page>',
            i18n, store, router
        }))
    .add('RolePage',
        () => ({
            components: {RolePage},
            template: '<role-page></role-page>',
            i18n, store, router
        }))
    .add('GroupManagementPage',
        () => ({
            components: {GroupManagementPage},
            template: '<group-management-page></group-management-page>',
            i18n, store, router
        }))
    .add('LoginPage',
        () => ({
            components: {LoginPage},
            template: '<login-page></login-page>',
            i18n, store, router
        }))
    .add('RegisterPage',
        () => ({
            components: {RegisterPage},
            template: '<register-page></register-page>',
            i18n, store, router
        }))
    .add('ActivationPage',
        () => ({
            components: {ActivationPage},
            template: '<activation-page></activation-page>',
            i18n, store, router
        }))
    .add('DashboardPage',
        () => ({
            components: {DashboardPage},
            template: '<dashboard-page></dashboard-page>',
            i18n, store, router
        }))