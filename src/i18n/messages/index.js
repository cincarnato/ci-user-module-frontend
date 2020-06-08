import ClientMessages from './client-messages'
import UserMessages from './user-messages'
import GroupMessages from './group-messages'
import RoleMessages from './role-messages'
import CommonMessages from './common-messages'
import VuetifyMessages from './vuetify-messages'
import AuthMessages from './auth-messages'

const en = {
    ...ClientMessages.en,
    ...UserMessages.en,
    ...GroupMessages.en,
    ...RoleMessages.en,
    ...CommonMessages.en,
    ...VuetifyMessages.en,
    ...AuthMessages.en
}
const es = {
    ...ClientMessages.es,
    ...UserMessages.es,
    ...GroupMessages.es,
    ...RoleMessages.es,
    ...CommonMessages.es,
    ...VuetifyMessages.es,
    ...AuthMessages.es
}
const pt = {
    ...ClientMessages.pt,
    ...UserMessages.pt,
    ...GroupMessages.pt,
    ...RoleMessages.pt,
    ...CommonMessages.pt,
    ...VuetifyMessages.pt,
    ...AuthMessages.pt
}

const messages = {en, es, pt}

export default messages
