import routes from './router/routes'
import store from './store/UserModule'

const userModule = {
    store: store,
    routes: routes,
    gqlc: null,
    setGqlc(gqlc){
        this.gqlc = gqlc
    }
}

export default userModule;

export const gqlc = userModule.gqlc