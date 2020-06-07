import {storiesOf} from '@storybook/vue';

import LoginPage from '../src/modules/Auth/pages/LoginPage';

import RegisterPage from '../src/modules/Auth/pages/RegisterPage';

import ActivationPage from '../src/modules/Auth/pages/ActivationPage';


import store from '../src/store'
import i18n from '../src/i18n'
import router from '../src/router'

storiesOf('Auth/Pages', module)
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