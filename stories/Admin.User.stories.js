import {storiesOf} from '@storybook/vue';

//Activation
import UserDataTable from '../src/modules/Admin/pages/UserPage/UserDataTable';

import store from '../src/store'
import i18n from '../src/i18n'
import router from '../src/router'

import userProvider from '../src/modules/Admin/providers/UserProvider'
import roleProvider from '../src/modules/Admin/providers/RoleProvider'
import mockGqlClient from '../gqlc-mock/gqlc-mock'
userProvider.setGqlc(mockGqlClient)
roleProvider.setGqlc(mockGqlClient)

storiesOf('Admin/User', module)
    .add('UserDataTable',
        () => ({
            components: {UserDataTable},
            template: '<user-data-table ></user-data-table>',
            i18n, store, router
        }))