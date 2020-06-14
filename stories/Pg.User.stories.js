import {storiesOf} from '@storybook/vue';

//Activation
import UserDataTable from '../src/pages/UserManagementPage/UserDataTable/UserDataTable';

import store from '../src/store'
import i18n from '../src/i18n'
import router from '../src/router'

import userProvider from '../src/providers/UserProvider'
import roleProvider from '../src/providers/RoleProvider'
import mockGqlClient from '../gqlc-mock/gqlc-mock'
userProvider.setGqlc(mockGqlClient)
roleProvider.setGqlc(mockGqlClient)

storiesOf('PageComponents/User', module)
    .add('UserDataTable',
        () => ({
            components: {UserDataTable},
            template: '<user-data-table ></user-data-table>',
            i18n, store, router
        }))