<template>
    <v-card>

        <v-toolbar flat color="primary">
            <v-toolbar-title class="onPrimary--text">{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn icon dark @click="$emit('closeDialog')">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-card-text>
            <v-alert v-if="errorMessage" type="error" dense text>{{errorMessage}}</v-alert>
        </v-card-text>

        <v-card-text>
            <v-form ref="form" autocomplete="off">

                <v-row row wrap>

                    <v-col cols="12" sm="6">
                        <v-text-field
                                prepend-icon="account_box"
                                name="name"
                                :label="$t('user.label.fullname')"
                                :placeholder="$t('user.label.fullname')"
                                type="text"
                                v-model="form.name"
                                class="pa-3"
                                :rules="requiredRule"
                                :error="hasInputErrors('name')"
                                :error-messages="getInputErrors('name')"
                                required
                                color="secondary"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field prepend-icon="person"
                                      name="username"
                                      :label="$t('user.label.username')"
                                      :placeholder="$t('user.label.username')"
                                      type="text"
                                      v-model="form.username"
                                      class="pa-3"
                                      autocomplete="new-password"
                                      :rules="requiredRule"
                                      :error="hasInputErrors('username')"
                                      :error-messages="getInputErrors('username')"
                                      required
                                      color="secondary"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field prepend-icon="email"
                                      name="email"
                                      :label="$t('user.label.email')"
                                      :placeholder="$t('user.label.email')"
                                      type="text"
                                      class="pa-3"
                                      v-model="form.email"
                                      :rules="emailRules"
                                      :error="hasInputErrors('email')"
                                      :error-messages="getInputErrors('email')"
                                      required
                                      color="secondary"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-text-field prepend-icon="phone"
                                      name="phone"
                                      :label="$t('user.label.phone')"
                                      :placeholder="$t('user.label.phone')"
                                      type="text"
                                      class="pa-3"
                                      v-model="form.phone"
                                      :error="hasInputErrors('phone')"
                                      :error-messages="getInputErrors('phone')"
                                      required
                                      color="secondary"
                        >

                        </v-text-field>
                    </v-col>


                    <v-col cols="12" sm="6">
                        <v-select
                                prepend-icon="account_box"
                                class="pa-3"
                                :items="roles"
                                :item-text="'name'"
                                :item-value="'id'"
                                v-model="form.role"
                                :label="$t('user.label.role')"
                                :placeholder="$t('user.label.role')"
                                :loading="loadingRoles"
                                :rules="requiredRule"
                                :error="hasInputErrors('role')"
                                :error-messages="getInputErrors('role')"
                                required
                                color="secondary"
                                item-color="secondary"
                        ></v-select>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-select
                                v-model="form.groups"
                                :loading="loadingGroups"
                                :items="groups"
                                :item-text="'name'"
                                :item-value="'id'"
                                attach
                                chips
                                :label="$t('user.label.groups')"
                                :placeholder="$t('user.label.groups')"
                                multiple
                        ></v-select>
                    </v-col>

                    <v-col cols="12" sm="6" class="pl-4">
                        Activo
                        <v-switch color="success" input-value="0" v-model="form.active"></v-switch>
                    </v-col>

                </v-row>


            </v-form>
        </v-card-text>


        <v-card-actions>

            <v-btn tile outlined color="grey" text @click="$emit('closeDialog')" v-t="'common.close'">
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn color="secondary" class="onSecondary--text" @click="saveUser" :loading="loading"
                   v-t="'common.update'">
            </v-btn>

        </v-card-actions>

    </v-card>
</template>

<script>
    import UserProvider from "../../providers/UserProvider";
    import GroupProvider from "../../providers/GroupProvider";
    import RoleProvider from "../../providers/RoleProvider";
    import ClientError from "../../errors/ClientError";
    import InputErrors from "../../mixins/InputErrors";
    import UserValidations from "../../mixins/UserValidations";

    export default {
        name: "UserUpdate",
        props: {
            user: Object
        },
        mixins: [InputErrors,UserValidations],
        data() {
            return {
                title: this.$t('user.updateTitle'),
                errorMessage: null,
                loading: false,
                loadingRoles: false,
                loadingGroups: false,
                roles: [],
                groups: [],
                form: {
                    id: null,
                    username: '',
                    name: '',
                    email: '',
                    phone: '',
                    role: null,
                    active: false
                },

            }
        },
        created() {
            this.loadRoles()
            this.loadGroups()

            this.form = {
                id: this.user.id,
                username: this.user.username,
                name: this.user.name,
                email: this.user.email,
                phone: this.user.phone,
                role: this.user.role ? this.user.role.id : null,
                groups: this.user.groups.map(group => group.id),
                active: this.user.active
            };

        },
        methods: {
            loadRoles(){
                this.loadingRoles = true
                RoleProvider.roles().then(r => {
                        this.roles = r.data.roles
                    }
                ).catch(err => {
                    console.error(err)
                }).finally(() => this.loadingRoles = false)
            },
            loadGroups(){
                this.loadingGroups = true
                GroupProvider.groups().then(r => {
                        this.groups = r.data.groups
                    }
                ).catch(err => {
                    console.error(err)
                }).finally(() => this.loadingGroups = false)
            },
            saveUser() {
                if (this.$refs.form.validate()) {
                    this.loading=true
                    UserProvider.updateUser(this.form).then(r => {
                            if (r) {
                                this.$emit('itemUpdate', r.data.updateUser)
                                this.$emit('closeDialog')
                            }
                        }
                    ).catch(error => {
                        let clientError = new ClientError(error)
                        this.inputErrors = clientError.inputErrors
                        this.errorMessage = clientError.i18nMessage
                    }).finally(()=>this.loading=false)
                }
            }
        },
    }
</script>

<style scoped>

</style>
