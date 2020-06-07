import {storiesOf} from '@storybook/vue';
import LoginForm from '../src/modules/Auth/pages/LoginPage/LoginForm';
import LoginCard from '../src/modules/Auth/pages/LoginPage/LoginCard';
import LoginPage from '../src/modules/Auth/pages/LoginPage';
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

storiesOf('Auth/Components', module)
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

