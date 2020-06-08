<template>
    <div>
        <v-card class="elevation-6">
            <v-card-title>
                <v-row>
                    <v-col class="text-xs-center"><h2 v-t="'user.adminTitle'"></h2></v-col>
                </v-row>
            </v-card-title>

            <v-card-text>
                <user-data-table
                        @open-change-password="openChangePassword"
                        @open-delete="openDelete"
                        @open-edit="openEdit"
                        @open-show="openShow"
                />
            </v-card-text>
        </v-card>


        <v-dialog :value="creating" width="850" persistent fullscreen>
            <user-create v-if="creating"
                         v-on:closeDialog="creating=false"
            />
        </v-dialog>


        <v-dialog :value="updating" width="850" persistent>
            <user-update v-if="updating"
                         :user="userToEdit"
                         v-on:closeDialog="updating=false"
            />
        </v-dialog>

        <v-dialog :value="deleting" width="850" persistent>
            <user-delete v-if="deleting"
                         :user="userToDelete"
                         v-on:closeDialog="deleting=false"
                         v-on:deleteConfirmed="updateList"
            />
        </v-dialog>

        <v-dialog :value="showing" width="850" persistent>
            <user-show v-if="showing"
                       :item="userToShow"
                       v-on:closeDialog="showing=false"
            />
        </v-dialog>

        <v-dialog :value="changePassword" width="500" persistent>
            <user-change-password v-if="changePassword"
                                  :user="userToEdit"
                                  v-on:closeDialog="changePassword=false"
            />
        </v-dialog>


        <snackbar :message="flashMessage"/>

        <v-btn class="elevation-8 onSecondary--text" color="secondary" fab fixed bottom right  @click="openCreate">
            <v-icon>add</v-icon>
        </v-btn>
    </div>

</template>

<script>

    import Snackbar from "./Snackbar"
    import UserCreate from "./UserCreate"
    import UserUpdate from './UserUpdate'
    import UserChangePassword from './UserChangePassword'
    import UserDelete from "./UserDelete";
    import UserShow from "./UserShow";
    import UserDataTable from "./UserDataTable";

    export default {
        name: "UserCrud",
        components: {
            UserDataTable,
            UserShow,
            UserDelete,
            UserCreate,
            UserUpdate,
            UserChangePassword,
            Snackbar
        },
        data() {
            return {
                flashMessage: null,
                loading: false,
                dialog: false,
                creating: false,
                updating: false,
                deleting: false,
                changePassword: false,
                userToEdit: null,
                userToDelete: null,

                showing: false,
                userToShow: null,
            }
        },
        methods: {
            openCreate() {
                this.creating = true
                this.dialog = true
            },
            openEdit(user) {
                this.updating = true
                this.userToEdit = user
            },
            openShow(user) {
                console.log("openShow event", user)
                this.showing = true
                this.userToShow = user
            },
            openDelete(user) {
                this.deleting = true
                this.userToDelete = user
            },
            openChangePassword(user) {
                this.changePassword = true
                this.userToEdit = user
            },
            updateList(){
                //TODO tell to data tables to refresh
            }
        },

    }
</script>

