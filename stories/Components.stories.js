import Snackbar from "../src/components/Snackbar";
import { withKnobs, text} from "@storybook/addon-knobs";

export default {
    title: "Components",
    decorators: [withKnobs]
};

export const snackbar = () => ({
    components: {Snackbar},
    props: {
        message: {
            default: text('message', "some")
        }
    },
    template: '<snackbar :message="message"></snackbar>',
})
