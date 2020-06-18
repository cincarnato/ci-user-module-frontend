<template>
    <div>
        <v-card class="elevation-6">
            <v-card-title v-t="'role.title'"/>
            <v-card-subtitle class="" v-t="'role.description'"></v-card-subtitle>


            <v-card-text>

                <role-list :roles="roles"
                           :permissions="permissions"
                           @update=""
                ></role-list>

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



            <v-dialog :value="creating" width="850" persistent>
                <role-create
                        v-if="creating"
                        v-on:createRole="createRole"
                        v-on:closeDialog="creating=false"
                        :permissions="permissions"
                />
            </v-dialog>

            <v-dialog :value="!!roleToDelete" width="500" persistent>
                <role-delete
                        v-if="!!roleToDelete"
                        :role="roleToDelete"
                        v-on:roleDeleted="onRoleDeleted"
                        v-on:closeDialog="roleToDelete=null"
                />
            </v-dialog>

            <v-dialog :value="!!roleToUpdate" width="850" persistent>
                <role-update
                        v-if="!!roleToUpdate"
                        :role="roleToUpdate"
                        :permissions="permissions"
                        v-on:closeDialog="roleToUpdate=null"
                        v-on:roleUpdated="onRoleUpdated"

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
    import RoleDelete from "./RoleDelete/RoleDelete";
    import RoleUpdate from "./RoleUpdate/RoleUpdate";
    import RoleProvider from "../../providers/RoleProvider";
    import RoleList from "./RoleList";
    import Vue from "vue";

    export default {
        name: "RoleCrud",
        components: {RoleList, RoleCreate, RoleDelete, RoleUpdate},
        data() {
            return {
                permissions: [],
                roles: [],
                roleToUpdate: null,
                roleToDelete: null
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
            openUpdate(role) {
                this.roleToUpdate = role
            },
            openDelete(role){
                this.roleToDelete = role
            },
            onRoleCreated(role) {
                this.roles.push(role);
            },
            onRoleDeleted(role){
                let index = this.roles.findIndex(i => i.id == role.id)
                this.roles.splice(index,1)
            },
            onRoleUpdated(role){
                let index = this.items.findIndex(i => i.id == role.id)
                Vue.set(this.roles, index, role)
            }
        }
    }
</script>

<style scoped>

</style>