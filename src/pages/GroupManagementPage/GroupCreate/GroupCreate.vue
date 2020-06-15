<template>
    <v-card>
        <toolbar-dialog-card :title="title"></toolbar-dialog-card>

        <v-card-text class="pt-3">
            <v-alert v-if="errorMessage" type="error" dense text>{{$t(errorMessage)}}</v-alert>
        </v-card-text>

        <v-card-text>
            <v-form ref="form" autocomplete="off" @submit.prevent="save" >

                <v-row>
    
                   
                    <v-col cols="12" sm="6">
                        <v-text-field
                                prepend-icon="account_box"
                                name="name"
                                type="text"
                                v-model="form.name"
                                :label="$t('group.label.name')"
                                :placeholder="$t('group.label.name')"
                                class="pa-3"
                                :rules="[rules.required]"
                                :error="hasErrors('name')"
                                :error-messages="getMessageErrors('name')"
                                required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <group-color-input
                                v-model="form.color"
                                           :label="$t('group.label.color')"
                                           :get-message-errors="getMessageErrors('color')"
                                           :has-errors="hasErrors('color')"
                                           :rules="rules.hexcode"
                        />
                    </v-col>

                    <v-col cols="12" sm="12">
                        <v-select
                                v-model="form.users"
                                :loading="loadingUsers"
                                :items="users"
                                :item-text="'name'"
                                :item-value="'id'"
                                attach
                                chips
                                :label="$t('group.label.users')"
                                :placeholder="$t('group.label.users')"
                                multiple
                        ></v-select>
                    </v-col>

                </v-row>


            </v-form>
        </v-card-text>


        <v-card-actions>
            <close-button @click="$emit('closeDialog')"></close-button>
            <v-spacer></v-spacer>
            <submit-button @click="save" :loading="loading" text="common.create"></submit-button>
        </v-card-actions>

    </v-card>
</template>

<script>
    import GroupProvider from "../../../providers/GroupProvider";
    import UserProvider from "../../../providers/UserProvider";
    import ClientError from '../../../errors/ClientError'
    import GroupColorInput from "../GroupColorInput/GroupColorInput";
    import SubmitButton from "../../../components/SubmitButton/SubmitButton";
    import CloseButton from "../../../components/CloseButton/CloseButton";
    import ToolbarDialogCard from "../../../components/ToolbarDialogCard/ToolbarDialogCard";



    export default {
        name: "GroupCreate",
        components: {ToolbarDialogCard, CloseButton, SubmitButton, GroupColorInput},
        data() {
            return {
                modal: false,
                title: this.$t('group.createTitle'),
                errorMessage: '',
                inputErrors: {},
                loading: false,
                loadingUsers: false,
                users: [],
                form: {
                    name: '',
                    color: '#37474F',
                    users: []
                },
                rules: {
                    required: value => !!value || 'Requerido',
                    hexcode: [v => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(v) || 'hexcode invalid ']
                },
                
            }
        },
        created() {
            this.loadingUsers = true
            UserProvider.users().then(r => {
                    this.users = r.data.users
                }
            ).catch(err => {
                console.error(err)
            }).finally(() => this.loadingUsers = false)
        },
        computed: {
             hasErrors() {
                return field => this.inputErrors[field] != undefined
            },
            getMessageErrors() {
                return field => {
                    if (this.inputErrors[field] != undefined) {
                        let message = this.inputErrors[field].message
                        return [message]
                    }
                    return []
                }
            },
        },
        methods: {
            save() {
                if (this.$refs.form.validate()) {
                    GroupProvider.createGroup(this.form).then(r => {
                            if (r) {
                                this.$emit('itemCreate',r.data.groupCreate)
                                this.$emit('closeDialog')
                            }
                        }
                    ).catch(error => {
                         let clientError = new ClientError(error)
                         this.inputErrors = clientError.inputErrors
                         this.errorMessage = clientError.i18nMessage
                    })
                }

            },
            

        },
    }
</script>

<style scoped>

</style>
