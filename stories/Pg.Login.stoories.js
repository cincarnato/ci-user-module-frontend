import {storiesOf} from '@storybook/vue';
//Login
import LoginForm from '../src/pages/LoginPage/LoginForm/LoginForm';
import LoginCard from '../src/pages/LoginPage/LoginCard/LoginCard';

import store from '../src/store'
import i18n from '../src/i18n'
import router from '../src/router'

storiesOf('PageComponents/Login', module)
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
