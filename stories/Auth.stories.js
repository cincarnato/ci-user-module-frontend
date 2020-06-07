import {storiesOf} from '@storybook/vue';
//Login
import LoginForm from '../src/modules/Auth/pages/LoginPage/LoginForm';
import LoginCard from '../src/modules/Auth/pages/LoginPage/LoginCard';
import LoginPage from '../src/modules/Auth/pages/LoginPage';
//Register
import RegisterForm from '../src/modules/Auth/pages/RegisterPage/RegisterForm';
import RegisterCard from '../src/modules/Auth/pages/RegisterPage/RegisterCard';
import RegisterPage from '../src/modules/Auth/pages/RegisterPage';

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

storiesOf('Auth/Login', module)
    .add('LoginForm',
        () => ({
            components: {LoginForm},
            template: '<login-form ></login-form>',
            i18n, store, router
        }))
    .add('LoginCard',
        () => ({
            components: {LoginCard,LoginForm},
            template: '<login-card><login-form></login-form></login-card>',
            i18n, store, router
        }))

storiesOf('Auth/Register', module)
    .add('RegisterForm',
        () => ({
            components: {RegisterForm},
            template: '<register-form ></register-form>',
            i18n, store, router
        }))
    .add('RegisterCard',
        () => ({
            components: {RegisterCard,RegisterForm},
            template: '<register-card><register-form></register-form></register-card>',
            i18n, store, router
        }))