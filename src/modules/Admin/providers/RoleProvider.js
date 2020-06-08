import {gqlc} from '../../../index'

class RoleProvider {
    constructor(gqlc) {
        this.gqlc = gqlc
    }

    setGqlc(gqlc){
        this.gqlc = gqlc
    }
    permissions() {
        return this.gqlc.query({query: require('./gql/permissions.graphql')})
    }

    roles() {
        return this.gqlc.query({query: require('./gql/roles.graphql')})
    }
    

    role(id) {
        return this.gqlc.query({
            query: require('./gql/role.graphql'),
            variables: {id:id}
        })
    }
    
    

    createRole(form) {
        return this.gqlc.mutate({
            mutation: require('./gql/createRole.graphql'),
            variables: form
        })
    }
    
    roleUpdate(id,form) {
        return this.gqlc.mutate({
            mutation: require('./gql/roleUpdate.graphql'),
            variables:{id,name:form.name,permissions:form.permissions}
        })
    }
    
     roleDelete(id) {
        return this.gqlc.mutate({
            mutation: require('./gql/roleDelete.graphql'),
            variables: {id}
        })
    }

}

const roleProvider = new RoleProvider(gqlc)

export default roleProvider



