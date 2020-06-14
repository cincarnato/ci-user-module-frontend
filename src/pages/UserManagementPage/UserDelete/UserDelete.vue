<template>
    <v-card>

        <v-toolbar flat dark color="primary">
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn icon dark @click="$emit('closeDialog')">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-card-text>
        <user-show-data :item="user" />
        </v-card-text>

        <v-card-text>
            <v-alert v-if="errorMessage" type="error" dense text>{{errorMessage}}</v-alert>
        </v-card-text>

        <v-card-text>
            <v-row justify="center">
                <span class="title">{{areYouSure}}</span>
            </v-row>
        </v-card-text>


        <v-card-actions>
            <v-btn color="grey" tile outlined @click="$emit('closeDialog')">
                {{$t('common.close')}}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="deleteConfirm" :loading="loading">
                {{$t('common.delete')}}
            </v-btn>
        </v-card-actions>

    </v-card>
</template>

<script>
    import UserShowData from "../UserShow/UserShowData";
    import UserProvider from "../../../providers/UserProvider";
    import ClientError from "../../../errors/ClientError";
    export default {
        name: "UserDelete",
        components: {UserShowData},
        props: {
            user: Object
        },
        data() {
            return {
                modal: false,
                title: this.$t('user.deleteTitle'),
                areYouSure: this.$t('user.deleteConfirm'),
                errorMessage: '',
                loading: false,
            }
        },
        methods: {
            deleteConfirm() {
                this.loading=true
                UserProvider.deleteUser(this.user.id).then( () => {
                    this.$emit('deleteConfirmed',this.user)
                    this.$emit('closeDialog')
                }).catch(error => {
                    let clientError = new ClientError(error)
                    this.inputErrors = clientError.inputErrors
                    this.errorMessage = clientError.i18nMessage
                }).finally(()=>this.loading=false)
            },
        },
    }
</script>

<style scoped>

</style>

