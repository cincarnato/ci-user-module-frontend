import LoginForm from "./LoginForm"
import i18n from "../../../i18n"
import router from "../../../router"
import store from "../../../store"


//GraphQlClient Mock
import {createMockClient} from 'mock-apollo-client';
const mockGqlClient = createMockClient();
const badCredentialsError = {"errors":[{"message":"BadCredentials","locations":[{"line":2,"column":3}],"path":["auth"],"extensions":{"code":"UNAUTHENTICATED","exception":{"stacktrace":["AuthenticationError: BadCredentials","    at /app/dist/modules/security/graphql/resolvers/UserResolvers.js:64:18","    at runMicrotasks (<anonymous>)","    at processTicksAndRejections (internal/process/task_queues.js:97:5)"]}}}],"data":{"auth":null}}
mockGqlClient.setRequestHandler(
    require('../../../providers/gql/auth.graphql'),
    () => Promise.resolve(badCredentialsError)
);
import authProvider from "../../../providers/AuthProvider";
authProvider.setGqlc(mockGqlClient)

const decorator = () => `
        <v-container fluid>
            <v-row>
                <v-col cols="12" md="6" offset-md="3">
                    <story/>
                </v-col>
            </v-row>
        </v-container>`

export default {
    title: "PageComponents/Login",
    decorators: [decorator]
};


export const loginForm = () => ({
    components: {LoginForm},
    template: ' <login-form></login-form>',
    i18n, router, store
})
