import {storiesOf} from '@storybook/vue';

import GroupsPage from '../src/modules/Admin/pages/GroupsPage';

import store from '../src/store'
import i18n from '../src/i18n'
import router from '../src/router'

//MOCK GQLC PROVIDERS
import GroupProvider from '../src/modules/Admin/providers/GroupProvider'
import UserAdminProvider from '../src/modules/Admin/providers/UserAdminProvider'
import mockGqlClient from '../gqlc-mock/gqlc-mock'
GroupProvider.setGqlc(mockGqlClient)
UserAdminProvider.setGqlc(mockGqlClient)

storiesOf('Auth/Pages', module)
    .add('GroupsPage',
        () => ({
            components: {GroupsPage},
            template: '<groups-page></groups-page>',
            i18n, store, router
        }))
