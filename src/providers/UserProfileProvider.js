import {gqlc} from '../index'
import gql from "graphql-tag";


class UserProfileProvider {

    constructor(gqlc) {
        this.gqlc = gqlc
    }

    setGqlc(gqlc){
        this.gqlc = gqlc
    }

    avatarUpload(file) {
        return this.gqlc.mutate({
            mutation: gql`mutation ( $file: Upload!){
                avatarUpload(file: $file){
                    filename
                    mimetype
                    encoding
                    url
                }
            }`,
            variables: {
                file: file
            },
        })
    }

    changePassword( currentPassword, newPassword) {
        return this.gqlc.mutate({
            mutation: gql`mutation ($currentPassword: String!, $newPassword: String!){
                changePassword( currentPassword: $currentPassword, newPassword: $newPassword){
                    success
                    message
                }
            }`,
            variables: {
                currentPassword: currentPassword,
                newPassword: newPassword
            },
        })
    }


}

const userProfileProvider = new UserProfileProvider(gqlc)

export default userProfileProvider

