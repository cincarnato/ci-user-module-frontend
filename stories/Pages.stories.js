import {storiesOf} from '@storybook/vue';

import GroupsPage from '../src/pages/GroupsPage';
import RolePage from '../src/pages/RolePage';
import UserPage from '../src/pages/UserPage';

import LoginPage from '../src/pages/LoginPage';
import RegisterPage from '../src/pages/RegisterPage';
import ActivationPage from '../src/pages/ActivationPage';


import store from '../src/store'
import i18n from '../src/i18n'
import router from '../src/router'

//MOCK GQLC PROVIDERS
import groupProvider from '../src/providers/GroupProvider'
import userProvider from '../src/providers/UserProvider'
import roleProvider from '../src/providers/RoleProvider'
import mockGqlClient from '../gqlc-mock/gqlc-mock'
groupProvider.setGqlc(mockGqlClient)
userProvider.setGqlc(mockGqlClient)
roleProvider.setGqlc(mockGqlClient)

storiesOf('Pages', module)
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