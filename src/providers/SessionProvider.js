import {gqlc} from '../index'

class SessionProvider {
    constructor(gqlc) {
        this.gqlc = gqlc
    }

    setGqlc(gqlc){
        this.gqlc = gqlc
    }

    sessionsByUser() {
        return  this.gqlc.query({query: require('./gql/sessionsByUser.graphql'), fetchPolicy:"network-only"})
    }

    dashboardData() {
        return  this.gqlc.query({query: require('./gql/dashboardData.graphql'), fetchPolicy:"network-only"})
    }
    


}
const sessionProvider = new SessionProvider(gqlc)
export default sessionProvider


