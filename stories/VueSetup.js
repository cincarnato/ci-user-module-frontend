import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'


import {messages} from '../src/i18n/messages'
import userStore from '../src/store/UserModule'


//i18n
Vue.use(VueI18n)
export const i18n = new VueI18n({
    locale: 'en', // set locale
    messages, // set locale messages
})


//Vuex
Vue.use(Vuex)
export const store = new Vuex.Store({
    modules:{
        user: userStore
    }
})