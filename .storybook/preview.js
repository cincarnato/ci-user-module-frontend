import { addDecorator } from '@storybook/vue';
import vuetify from "../src/plugins/vuetify-manual";
import 'material-design-icons/iconfont/material-icons.css';

addDecorator(() => ({
    vuetify,
    template: '<v-app><story/></v-app>',
}));
