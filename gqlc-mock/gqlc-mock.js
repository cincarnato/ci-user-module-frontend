import {createMockClient} from 'mock-apollo-client';
import groupsPaginate from './resolves/groupsPaginate'
import users from './resolves/users'
import roles from './resolves/roles'

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
    require('../src/modules/Admin/providers/gql/roles.graphql'),
    () => Promise.resolve(roles)
);

export default mockGqlClient;