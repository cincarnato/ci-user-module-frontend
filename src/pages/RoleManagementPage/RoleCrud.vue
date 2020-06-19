<template>
    <div>
        <v-card class="elevation-6">
            <v-card-title v-t="'role.title'"/>
            <v-card-subtitle class="" v-t="'role.description'"></v-card-subtitle>


            <v-card-text>

                <role-list :roles="roles"
                           :permissions="permissions"
                           @update="openUpdate"
                           @delete="openDelete"
                ></role-list>

            </v-card-text>

        </v-card>


        <div>
                 <v-dialog :value="creating" width="850" persistent>
                <role-create
                        v-if="creating"
                        v-on:roleCreated="onRoleCreated"
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
                roleToDelete: null,
                creating: false
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
                let index = this.roles.findIndex(i => i.id == role.id)
                Vue.set(this.roles, index, role)
            }
        }
    }
</script>

<style scoped>

</style>