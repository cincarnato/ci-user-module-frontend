import { addDecorator } from '@storybook/vue';
import vuetify from "../src/plugins/vuetify-manual";

addDecorator(() => ({
    vuetify,
    template: '<v-app><v-content><story/></v-content></v-app>',
}));

