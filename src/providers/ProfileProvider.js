import {gqlc} from '../index'

class ProfileProvider {

    constructor(gqlc) {
        this.gqlc = gqlc
    }

    setGqlc(gqlc){
        this.gqlc = gqlc
    }

    avatarUpload(file) {
        return this.gqlc.mutate({
            mutation: require('./gql/avatarUpload.graphql'),
            variables: {
                file: file
            },
        })
    }

    changePassword( currentPassword, newPassword) {
        return this.gqlc.mutate({
            mutation: require('./gql/changePassword.graphql'),
            variables: {
                currentPassword: currentPassword,
                newPassword: newPassword
            },
        })
    }


}

const profileProvider = new ProfileProvider(gqlc)

export default profileProvider

