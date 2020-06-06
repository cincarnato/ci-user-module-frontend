import { storiesOf } from '@storybook/vue';
import LoginForm from '../src/modules/Auth/pages/LoginPage/LoginForm';
import store from '../src/store'
import i18n from '../src/i18n'

storiesOf('Auth',module)
    .add('LoginForm',
    ()=> ({
      components: { LoginForm },
      template: '<login-form ></login-form>',
      i18n, store
    })
)
