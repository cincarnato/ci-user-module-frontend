import Vue from 'vue';
import Vuetify, { VApp, VForm, VTextField, VBtn } from 'vuetify/lib';
import i18n from '../i18n'
Vue.use(Vuetify, {
    components: {
        VApp, VForm, VTextField, VBtn
    }
});



export default new Vuetify({
    lang: {
        t: (key, ...params) => i18n.t(key, params),
    },
});
