//Mock
import mockGqlClient from "./gqlc-mock";

//Resolvers
import dashboardData from "./resolves/dashboardData";
import groupsPaginate from "./resolves/groupsPaginate";
import users from "./resolves/users";
import userPaginate from "./resolves/userPaginate";
import changePasswordAdmin from "./resolves/changePasswordAdmin";
import roles from "./resolves/roles";
import groups from "./resolves/groups";
import permissions from "./resolves/permissions";
import avatarUpload from "./resolves/avatarUpload";
import authSuccessful from "./resolves/auth-successful";
import recoveryByEmail from "./resolves/recoveryByEmail";


//Helpers
import uuidv4 from "./helpers/uuidv4";
import getRoleById from "./helpers/getRoleById";
import getUserById from "./helpers/getUserById";



mockGqlClient.setRequestHandler(
    require('../src/providers/gql/recoveryByEmail.graphql'),
    () => {
        return new Promise((resolve) => {
            setTimeout(()=>resolve(recoveryByEmail),800)
        })
    }
);


mockGqlClient.setRequestHandler(
    require('../src/providers/gql/avatarUpload.graphql'),
    () => {
        return new Promise((resolve) => {
            setTimeout(()=>resolve(avatarUpload),2000)
        })
    }
);



mockGqlClient.setRequestHandler(
    require('../src/providers/gql/dashboardData.graphql'),
    () => {
        return new Promise((resolve) => {
            setTimeout(()=>resolve(dashboardData),800)
        })
    }
);


mockGqlClient.setRequestHandler(
    require('../src/providers/gql/groupsPaginate.graphql'),
    () => {
        return new Promise((resolve) => {
            setTimeout(()=>resolve(groupsPaginate),800)
        })
    }
);

mockGqlClient.setRequestHandler(
    require('../src/providers/gql/groupCreate.graphql'),
    ({ name, color, users}) => {
        return new Promise((resolve) => {
            let id =uuidv4()
            users = users.map(user => getUserById(user))
            let r = {data: {groupCreate: {id, name, color, users} } }
            setTimeout(()=>resolve(r),800)
        })
    }
);

mockGqlClient.setRequestHandler(
    require('../src/providers/gql/groupUpdate.graphql'),
    ({ id, name, color, users}) => {
        return new Promise((resolve) => {
            users = users.map(user => getUserById(user))
            let r = {data: {groupUpdate: {id,  name, color, users} } }
            setTimeout(()=>resolve(r),800)
        })
    }
);

mockGqlClient.setRequestHandler(
    require('../src/providers/gql/groupDelete.graphql'),
    (id) => {
        return new Promise((resolve) => {
            let r = {data: {groupDelete: {id: id, deleteSuccess: true}}}
            setTimeout(()=>resolve(r),800)
        })
    }
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
    ({ username, password, name, email, phone, role, groups, active}) => {
        let id =uuidv4()
        role = getRoleById(role)
        let avatarurl = null
        let r = {data: {createUser: {id, username, password, name, email, phone, role, groups, active,avatarurl} } }
        return Promise.resolve(r)
    }
);

mockGqlClient.setRequestHandler(
    require('../src/providers/gql/userUpdate.graphql'),
    ({id, username, password, name, email, phone, role, groups, active}) => {
        role = getRoleById(role)
        let avatarurl = null
        let r = {data: {updateUser: {id, username, password, name, email, phone, role, groups, active,avatarurl} } }
        return Promise.resolve(r)
    }
);

mockGqlClient.setRequestHandler(
    require('../src/providers/gql/userDelete.graphql'),
    (id) => {
        let r = {data: {deleteUser:    {id: id, success: true}}}
        return Promise.resolve(r)
    }
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


mockGqlClient.setRequestHandler(
    require('../src/providers/gql/auth.graphql'),
    () => Promise.resolve(authSuccessful)
);

export default mockGqlClient