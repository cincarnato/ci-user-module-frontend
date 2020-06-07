<template>

    <v-form ref="form" autocomplete="off" v-model="valid">
        <v-row>
            <v-col cols="12" sm="6">
                <v-text-field

                        prepend-icon="account_box"
                        name="name"
                        type="text"
                        v-model="form.name"
                        :label="$t('user.form.fullname')"
                        :placeholder="$t('user.form.fullname')"
                        :rules="requiredRule"
                        :error="hasInputErrors('name')"
                        :error-messages="getInputErrors('name')"
                        required
                />
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field
                        xs6
                        prepend-icon="person"
                        name="username"
                        type="text"
                        v-model="form.username"
                        :label="$t('user.form.username')"
                        :placeholder="$t('user.form.username')"
                        autocomplete="new-password"
                        :rules="requiredRule"
                        :error="hasInputErrors('username')"
                        :error-messages="getInputErrors('username')"
                        required
                />
            </v-col>

            <v-col cols="12" sm="6">
                <v-text-field prepend-icon="email"
                              name="email"
                              type="text"
                              v-model="form.email"
                              :label="$t('user.form.email')"
                              :placeholder="$t('user.form.email')"
                              :rules="emailRules"
                              :error="hasInputErrors('email')"
                              :error-messages="getInputErrors('email')"
                              required
                />
            </v-col>

            <v-col cols="12" sm="6">
                <v-text-field prepend-icon="email"
                              name="email_verify"
                              type="text"
                              v-model="form.email_verify"
                              :label="$t('user.form.repeatEmail')"
                              :placeholder="$t('user.form.repeatEmail')"
                              onPaste="return false"
                              :rules="requiredRule"
                              :error="emailMatchError == '' ? false : true"
                              :error-messages="emailMatchError"
                              required
                />
            </v-col>


            <v-col cols="12" sm="6">
                <v-text-field id="password"
                              prepend-icon="lock"
                              name="password"
                              type="password"
                              v-model="form.password"
                              :label="$t('user.form.password')"
                              :placeholder="$t('user.form.password')"
                              autocomplete="new-password"
                              ref="password"
                              :rules="requiredRule"
                              :error="hasInputErrors('password')"
                              :error-messages="getInputErrors('password')"
                              required
                />
            </v-col>

            <v-col cols="12" sm="6">
                <v-text-field id="password_verify"
                              prepend-icon="lock"
                              name="password_verify"
                              type="password"
                              v-model="form.password_verify"
                              :label="$t('user.form.repeatPassword')"
                              :placeholder="$t('user.form.repeatPassword')"
                              autocomplete="new-password"
                              :rules="requiredRule"
                              :error="passwordMatchError == '' ? false : true"
                              :error-messages="passwordMatchError"
                />
            </v-col>

            <v-col cols="12" sm="6">
                <v-text-field prepend-icon="phone"
                              name="phone"
                              type="text"
                              v-model="form.phone"
                              :label="$t('user.form.phone')"
                              :placeholder="$t('user.form.phone')"
                              :error="hasInputErrors('phone')"
                              :error-messages="getInputErrors('phone')"
                />
            </v-col>

            <v-col cols="12">
                <v-btn :loading="loading" color="secondary" @click="register" v-t="'user.signUp'"></v-btn>
            </v-col>
        </v-row>
    </v-form>

</template>

<script>
    import AuthProvider from '../../providers/AuthProvider';
    import ClientError from '../../../Shared/errors/ClientError'
    import InputErrors from "../../../Shared/mixins/InputErrors";


    export default {
        name: "RegisterForm",
        mixins: [InputErrors],
        data: () => ({
                loading: false,
                error: null,
                form: {
                    name: null,
                    username: null,
                    password: null,
                    password_verify: null,
                    email: null,
                    email_verify: null,
                    phone: null,
                },
                errors: {
                    name: [],
                    username: [],
                    password: [],
                    password_verify: [],
                    email: [],
                    phone: [],
                },

            }
        ),
        computed: {
            requiredRule() {
                return [v => !!v || this.$t('shared.validation.required')];
            },
            emailRules(){
                return [
                    v => !!v || this.$t('shared.validation.required'),
                    v => /.+@.+/.test(v) || this.$t('shared.validation.emailFormat')
                ]
            },
            passwordMatchError() {
                return (this.form.password === this.form.password_verify) ? '' : this.$t('shared.validation.passwordVerify')
            },
            emailMatchError() {
                return (this.form.email === this.form.email_verify) ? '' : this.$t('shared.validation.emailVerify')
            }
        },
        methods: {
            required(v) {
                return !!v || this.$t('shared.validation.required')
            },
            register() {
                if (this.$refs.form.validate()) {
                    this.loading = true
                    AuthProvider.register(this.form).then(res => {
                        if (res.data.register.status) {
                            this.$emit("userRegistered", res.data.register.email)
                        }
                    }).catch(err => {
                        let clientError = new ClientError(err)
                        this.error = clientError.i18nMessage
                        this.inputErrors = clientError.inputErrors
                    }).finally(() => this.loading = false)
                }
            },
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>
