import {gqlc} from '../../../index'

class AuthProvider {

    constructor(gqlc) {
        //GraphQLClient
        this.gqlc = gqlc
    }

    auth(username,password){
        return this.gqlc.mutate({
            mutation: require('./gql/auth.graphql'),
            variables: {
                username: username,
                password: password,

            }
        })
    }

    me(){
        return this.gqlc.query({
            query: require('./gql/me.graphql')
        })
    }


}

export default new AuthProvider(gqlc)
