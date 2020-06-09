import {createMockClient} from 'mock-apollo-client';
import groupsPaginate from './resolves/groupsPaginate'
import users from './resolves/users'
import createUser from './resolves/createUser'
import updateUser from './resolves/updateUser'
import deleteUser from './resolves/deleteUser'
import userPaginate from './resolves/userPaginate'
import changePasswordAdmin from './resolves/changePasswordAdmin'
import roles from './resolves/roles'
import groups from './resolves/groups'
import permissions from './resolves/permissions'

import dashboardData from './resolves/dashboardData'

const mockGqlClient = createMockClient();

mockGqlClient.setRequestHandler(
    require('../src/providers/gql/dashboardData.graphql'),
    () => Promise.resolve(dashboardData)
);


mockGqlClient.setRequestHandler(
    require('../src/providers/gql/groupsPaginate.graphql'),
    () => Promise.resolve(groupsPaginate)
);


mockGqlClient.setRequestHandler(
    require('../src/providers/gql/users.graphql'),
    () => Promise.resolve(users)
);


mockGqlClient.setRequestHandler(
    require('../src/providers/gql/userPaginate.graphql'),
    () => Promise.resolve(userPaginate)
);

mockGqlClient.setRequestHandler(
    require('../src/providers/gql/userCreate.graphql'),
    () => Promise.resolve(createUser)
);

mockGqlClient.setRequestHandler(
    require('../src/providers/gql/userUpdate.graphql'),
    () => Promise.resolve(updateUser)
);

mockGqlClient.setRequestHandler(
    require('../src/providers/gql/userDelete.graphql'),
    () => Promise.resolve(deleteUser)
);

mockGqlClient.setRequestHandler(
    require('../src/providers/gql/userAdminChangePassword.graphql'),
    () => Promise.resolve(changePasswordAdmin)
);


mockGqlClient.setRequestHandler(
    require('../src/providers/gql/roles.graphql'),
    () => Promise.resolve(roles)
);

mockGqlClient.setRequestHandler(
    require('../src/providers/gql/groups.graphql'),
    () => Promise.resolve(groups)
);

mockGqlClient.setRequestHandler(
    require('../src/providers/gql/permissions.graphql'),
    () => Promise.resolve(permissions)
);


export default mockGqlClient;