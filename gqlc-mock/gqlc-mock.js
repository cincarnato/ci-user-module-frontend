import {createMockClient} from 'mock-apollo-client';
import groupsPaginate from './resolves/groupsPaginate'
import users from './resolves/users'
import userPaginate from './resolves/userPaginate'
import roles from './resolves/roles'
import permissions from './resolves/permissions'

const mockGqlClient = createMockClient();

mockGqlClient.setRequestHandler(
    require('../src/modules/Admin/providers/gql/groupsPaginate.graphql'),
    () => Promise.resolve(groupsPaginate)
);


mockGqlClient.setRequestHandler(
    require('../src/modules/Admin/providers/gql/users.graphql'),
    () => Promise.resolve(users)
);

mockGqlClient.setRequestHandler(
    require('../src/modules/Admin/providers/gql/userPaginate.graphql'),
    () => Promise.resolve(userPaginate)
);

mockGqlClient.setRequestHandler(
    require('../src/modules/Admin/providers/gql/roles.graphql'),
    () => Promise.resolve(roles)
);

mockGqlClient.setRequestHandler(
    require('../src/modules/Admin/providers/gql/permissions.graphql'),
    () => Promise.resolve(permissions)
);


export default mockGqlClient;