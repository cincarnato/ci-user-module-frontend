import {mount} from '@vue/test-utils'
import { createLocalVue } from '@vue/test-utils'

export const localVue = createLocalVue()


//We need a instance of i18n, Vuetify, and router
import i18n from "../../../../i18n"
import vuetify from "../../../../plugins/vuetify-manual"
import router from "../../../../router"


const badCredentialsError = {"errors":[{"message":"BadCredentials","locations":[{"line":2,"column":3}],"path":["auth"],"extensions":{"code":"UNAUTHENTICATED","exception":{"stacktrace":["AuthenticationError: BadCredentials","    at /app/dist/modules/security/graphql/resolvers/UserResolvers.js:64:18","    at runMicrotasks (<anonymous>)","    at processTicksAndRejections (internal/process/task_queues.js:97:5)"]}}}],"data":{"auth":null}}



//GraphQlClient Mock
import {createMockClient} from 'mock-apollo-client';
const mockGqlClient = createMockClient();
mockGqlClient.setRequestHandler(
    require('../../../../providers/gql/auth.graphql'),
    () => Promise.resolve(badCredentialsError)
);
import authProvider from "../../../../providers/AuthProvider";
authProvider.setGqlc(mockGqlClient)

//Setup Vuex
import Vuex from 'vuex'
localVue.use(Vuex)
import store from "../../../../store"

import LoginForm from "../LoginForm"

describe('LoginForm.vue', () => {


    // Bad Credentials on login fail

    it('Render Bad Credentials on login fail', async () => {

        const wrapper = mount(LoginForm, {
            vuetify,
            localVue,
            store:store,
            i18n,
            router
        })

        let button = wrapper.findComponent({ref: 'loginBtn'})
        button.trigger('click')
        await wrapper.vm.$nextTick()
        console.log(wrapper.text())
        expect(wrapper.text()).toMatch('Bad credentials')
    })


    //Network Error on server fault

    it('Render Network Error on server fault', async () => {

        let actions = {
            login: jest.fn(function() {
                this.commit('SET_USER_INVALID', true);
                this.commit('SET_GENERAL_ERROR', 'common.networkError')
            })
        }

        store.actions = actions

        const wrapper = mount(Login, {
            vuetify,
            localVue,
            store: store,
            i18n,
            router
        })

        let button = wrapper.findComponent({ref: 'loginBtn'})
        button.trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toMatch('Network error. The server does not respond.')
    })


    //Go Home on Login ok

    it('Go Home on Login ok', async () => {

        let actions = {
            login: jest.fn(function() {
                //Set user. This is watch by the component Login for push to home
                this.commit('SET_ME_USER', {username: 'root'});
            })
        }
        store.actions = actions

        const wrapper = mount(Login, {
            vuetify,
            localVue,
            store: store,
            i18n,
            router
        })

        let button = wrapper.findComponent({ref: 'loginBtn'})
        button.trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.$route.name).toBe('home')
    })


})
