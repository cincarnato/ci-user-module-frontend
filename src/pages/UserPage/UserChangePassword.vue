<template>

    <v-card>
        <v-card-title class="secondary--text" v-t="'user.changePassword'"></v-card-title>


        <v-card-text>
            <v-form ref="form" autocomplete="off" v-model="valid" @submit.prevent="submit">
                <v-text-field id="password"
                              prepend-icon="lock"
                              name="password"
                              label="Nueva Contraseña"
                              :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="showNewPassword ? 'text' : 'password'"
                              @click:append="showNewPassword = !showNewPassword"
                              v-model="form.password"
                              :rules="requiredRule"
                              placeholder="Nueva Contraseña"
                              autocomplete="new-password"
                              :error="errors.password.length?true:false"
                              :error-messages="errors.password"
                              required
                />

                <v-text-field id="password_verify"
                              prepend-icon="lock"
                              name="password_verify"
                              label="Repetir Nueva Contraseña"
                              :append-icon="showRepeatPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="showRepeatPassword ? 'text' : 'password'"
                              @click:append="showRepeatPassword = !showRepeatPassword"
                              v-model="form.passwordVerify"
                              :rules="requiredRule"
                              placeholder="Repetir Nueva Contraseña"
                              autocomplete="new-password"
                              :error="errors.passwordVerify.length?true:false"
                              :error-messages="passwordMatchError"
                              required
                />
            </v-form>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn outlined color="grey" text @click="$emit('closeDialog')">
                {{$t('common.cancel')}}
            </v-btn>

            <v-btn :loading="loading" color="secondary" @click="submit" :disabled="!valid">
                {{$t('common.submit')}}
            </v-btn>

        </v-card-actions>

    </v-card>

</template>

<script>

    import UserProvider from "../../providers/UserProvider";
    import ClientError from "../../errors/ClientError";
    import InputErrors from "../../mixins/InputErrors";
    import UserValidations from "../../mixins/UserValidations";

    export default {
        name: "UserChangePassword",
        props: {
            user: Object
        },
        mixins: [InputErrors, UserValidations],
        data() {
            return {
                valid: true,
                showNewPassword: false,
                showRepeatPassword: false,
                loading: false,
                status: null,
                form: {
                    password: null,
                    passwordVerify: null,
                },
                errors: {
                    password: [],
                    passwordVerify: []
                }
            }
        },
        computed: {
            passwordMatchError() {
                return (this.form.password === this.form.passwordVerify) ? '' : this.$t('user.validation.passwordVerify')
            },
        },
        methods: {
            resetValidation: function () {
                this.errors = {
                    password: [],
                    passwordVerify: []
                }
            },
            submit() {
                if (this.$refs.form.validate()) {
                    this.loading = true
                    this.resetValidation()
                    let userId = this.user ? this.user.id : null
                    UserProvider.adminChangePassword(userId, this.form.password, this.form.passwordVerify)
                        .then(() => {
                            this.$emit('changePasswordConfirmed', this.user)
                            this.$emit('closeDialog')
                            this.status = true
                        }).catch(error => {
                        let clientError = new ClientError(error)
                        this.inputErrors = clientError.inputErrors
                        this.errorMessage = clientError.i18nMessage
                    })
                        .finally(() => this.loading = false)
                }
            },
        }
    }
</script>

<style scoped>

</style>
