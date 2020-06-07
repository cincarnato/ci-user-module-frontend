import {storiesOf} from '@storybook/vue';

//Activation
import Activation from '../src/modules/Auth/pages/ActivationPage/Activation';
import ActivationError from '../src/modules/Auth/pages/ActivationPage/ActivationError';
import ActivationInProgress from '../src/modules/Auth/pages/ActivationPage/ActivationInProgress';
import ActivationSuccessful from '../src/modules/Auth/pages/ActivationPage/ActivationSuccessful';



import store from '../src/store'
import i18n from '../src/i18n'
import router from '../src/router'

storiesOf('Auth/Activation', module)
    .add('Activation',
        () => ({
            components: {Activation},
            template: '<activation ></activation>',
            i18n, store, router
        }))
    .add('ActivationError',
        () => ({
            components: {ActivationError},
            template: '<activation-error ></activation-error>',
            i18n, store, router
        }))
    .add('ActivationInProgress',
        () => ({
            components: {ActivationInProgress},
            template: '<activation-in-progress ></activation-in-progress>',
            i18n, store, router
        }))
    .add('ActivationSuccessful',
        () => ({
            components: {ActivationSuccessful},
            template: '<activation-successful ></activation-successful>',
            i18n, store, router
        }))