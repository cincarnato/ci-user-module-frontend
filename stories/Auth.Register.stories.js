import {storiesOf} from '@storybook/vue';

//Register
import RegisterForm from '../src/modules/Auth/pages/RegisterPage/RegisterForm';
import RegisterCard from '../src/modules/Auth/pages/RegisterPage/RegisterCard';


import store from '../src/store'
import i18n from '../src/i18n'
import router from '../src/router'

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