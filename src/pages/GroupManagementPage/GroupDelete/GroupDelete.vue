<template>
    <v-card>

        <toolbar-dialog-card :title="title"
                             danger
                             @close="$emit('closeDialog')">
        </toolbar-dialog-card>

        <v-card-text>
            <group-show-data :item="item"/>
        </v-card-text>

        <v-card-text>
            <v-alert v-if="errorMessage" type="error" dense text>{{errorMessage}}</v-alert>
        </v-card-text>

        <v-card-text>
            <v-row justify="center">
                <span class="title" v-t="'common.areYouSureDeleteRecord'"></span>
            </v-row>
        </v-card-text>


        <v-card-actions>
            <close-button @click="$emit('closeDialog')"></close-button>

            <v-spacer></v-spacer>
            <danger-button @click="remove" :loading="loading" text="common.delete"></danger-button>
        </v-card-actions>

    </v-card>
</template>

<script>
    import GroupShowData from "../GroupShow/GroupShowData";
    import GroupProvider from "../../../providers/GroupProvider";
    import ClientError from "../../../errors/ClientError";
    import CloseButton from "../../../components/CloseButton/CloseButton";
    import DangerButton from "../../../components/DangerButton/DangerButton";
    import ToolbarDialogCard from "../../../components/ToolbarDialogCard/ToolbarDialogCard";

    export default {
        name: "GroupDelete",
        components: {ToolbarDialogCard, DangerButton, CloseButton, GroupShowData},
        props: {
            item: Object
        },
        data() {
            return {
                modal: false,
                title: "group.deleteTitle",
                errorMessage: '',
                loading: false,
            }
        },
        methods: {
            remove() {
                this.loading = true
                GroupProvider.deleteGroup(this.item.id).then(result => {
                        if (result.data.groupDelete.deleteSuccess) {
                            this.$emit('groupDeleted', this.item)
                            this.$emit('closeDialog')
                        } else {
                            this.errorMessage = 'Error on Delete'
                        }
                    }
                ).catch(error => {
                    let clientError = new ClientError(error)
                    this.errorMessage = clientError.i18nMessage
                }).finally(() => this.loading = false)
            },
        },
    }
</script>


