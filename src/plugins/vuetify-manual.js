import Vue from 'vue';
import Vuetify, {
    VApp, VForm, VTextField, VBtn, VSelect,
    VCard, VCardText, VCardTitle, VCardActions,
    VContent, VContainer, VRow, VCol, VSpacer,
    VToolbar, VToolbarItems, VToolbarTitle, VProgressLinear, VMenu,
    VAlert, VIcon,
    VDialog, VDataTable, VAvatar,
    VColorPicker, VChip, VChipGroup,
    VList, VListItem, VListGroup, VListItemIcon, VListItemTitle, VListItemSubtitle, VListItemContent
} from 'vuetify/lib';
import i18n from '../i18n'

Vue.use(Vuetify, {
    components: {
        VApp, VForm, VTextField, VBtn, VSelect,
        VCard, VCardText, VCardTitle, VCardActions,
        VContent, VContainer, VRow, VCol, VSpacer,
        VToolbar, VToolbarItems, VToolbarTitle, VProgressLinear, VMenu,
        VAlert, VIcon,
        VDialog, VDataTable, VAvatar,
        VColorPicker, VChip, VChipGroup,
        VList, VListItem, VListGroup, VListItemIcon, VListItemTitle, VListItemSubtitle, VListItemContent
    }
});


export default new Vuetify({
    lang: {
        t: (key, ...params) => i18n.t(key, params),
    },
});
