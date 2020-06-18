<template>
    <div>
        <v-card class="elevation-6">
            <v-card-title v-t="'role.title'"/>
            <v-card-subtitle class="" v-t="'role.description'"></v-card-subtitle>


            <v-card-text>

                <role-list :roles="roles" :permissions="permissions"></role-list>

            </v-card-text>

        </v-card>


        <div>
            <v-btn class="mx-3" fab fixed right dark color="teal" @click="changeStateDelete">
                <v-icon dark>delete</v-icon>
            </v-btn>


            <v-btn
                    style="margin-top:70px; margin-right:12px"
                    fixed
                    right
                    fab
                    dark
                    color="cyan"
                    @click="stateEdit=!stateEdit"
            >
                <v-icon dark>edit</v-icon>
            </v-btn>

            <v-dialog :value="openDialog" width="500" persistent>
                <confirm-delete
                        :valid="true"
                        :roleId="roleId"
                        v-on:itemDelete="deleteRole"
                        v-on:closeDialog="openDialog=false"
                />
            </v-dialog>

            <v-dialog :value="creating" width="850" persistent>
                <role-create
                        v-if="creating"
                        v-on:createRole="createRole"
                        v-on:closeDialog="creating=false"
                        :permissions="permissions"
                />
            </v-dialog>

            <v-dialog :value="openEdit" width="850" persistent>
                <role-edit
                        v-if="openEdit"
                        v-on:closeDialog="openEdit=false"
                        :permissions="permissions"
                        v-on:roleUpdate="updatePage"
                        :role="role"
                />
            </v-dialog>

            <v-btn class="elevation-8" color="#D81B60" fab fixed bottom right dark @click="creating = true">
                <v-icon>add</v-icon>
            </v-btn>

        </div>
    </div>
</template>

<script>
    import RoleCreate from "./RoleCreate/RoleCreate";
    import ConfirmDelete from "./RoleDelete/RoleDelete";
    import RoleEdit from "./RoleUpdate/RoleUpdate";
    import RoleProvider from "../../providers/RoleProvider";
    import RoleList from "./RoleList";

    export default {
        name: "RoleCrud",
        components: {RoleList, RoleCreate, ConfirmDelete, RoleEdit},
        data() {
            return {
                permissions: [],
                roles: [],
            }
        },
        created() {
            this.load()
        },
        methods: {
            load() {
                RoleProvider.permissions().then(r => {
                    this.permissions = r.data.permissions.permissions;
                });
                RoleProvider.roles().then(r => {
                    this.roles = r.data.roles;
                });
            },
            createRole(role) {
                this.roles.push(role);
            },
            changeStateDelete() {
                this.statusDelete = !this.statusDelete;
                this.rolesName = [];
            },
            deleteRole: function (id) {
                const index = this.roles.findIndex(role => role.id === id);
                this.roles.splice(index, 1);
            }
        }
    }
</script>

<style scoped>

</style>