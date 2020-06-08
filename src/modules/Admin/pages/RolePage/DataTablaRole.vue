<template>
    <v-container fluid>
        <v-card>
            <v-card-title v-t="'roles.showTitle'"/>

            <v-card-text>
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

                <v-row>
                    <v-col cols="8" offset="2">
                        <v-simple-table dense class="text-center">
                            <template v-slot:default>
                                <thead>
                                <tr class="text-center">
                                    <th class="text-center headline" v-t="'roles.permission'"></th>
                                    <th class="text-center headline pa-3 ma-1" v-for="role in roles" :key="role.id">
                                        <template v-if="statusDelete==true || stateEdit==true">

                                            <button
                                                    v-if="role.name!='admin' && statusDelete==true"
                                                    class="btnDelete"
                                                    absolute
                                                    @click="openConfirm(role.id)"
                                            >
                                                <v-icon color="red">mdi-delete</v-icon>
                                            </button>
                                            <button
                                                    absolute
                                                    v-if="role.name!='admin' && stateEdit==true"
                                                    class="btnelete"
                                                    @click="openEditDialog(role)"
                                            >
                                                <v-icon color="green">mdi-pencil</v-icon>
                                            </button>

                                            <label>{{role.name}}</label>

                                        </template>

                                        <template v-else>
                                            <label>{{role.name}}</label>
                                        </template>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="permission in permissions" :key="permission">
                                    <td>{{$t('roles.permissions.'+permission)}}</td>
                                    <td v-for="role in roles" :key="role.id">
                                        <v-icon
                                                :color="role.permissions.includes(permission)?'green':'red'"
                                        >{{role.permissions.includes(permission)?"check":"close"}}
                                        </v-icon>
                                    </td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

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
    </v-container>
</template>

<script>
    import RoleProvider from "../../providers/RoleProvider";
    import RoleCreate from "./RoleCreate";
    import ConfirmDelete from "./ConfirmDelete";
    import RoleEdit from "./RoleEdit";

    export default {
        name: "DataTablaRole",
        components: {RoleCreate, ConfirmDelete, RoleEdit},
        data() {
            return {
                permissions: [],
                roles: [],
                stateEdit: false,
                role: {},
                openEdit: false,
                creating: false,
                roleId: "",
                statusDelete: false,
                openDialog: false
            };
        },
        created() {
            this.updatePage();
        },
        methods: {
            createRole(role) {
                this.roles.push(role);
            },
            changeStateDelete() {
                this.statusDelete = !this.statusDelete;
                this.rolesName = [];
            },
            openConfirm(id) {
                this.roleId = id;
                this.openDialog = true;
                this.changeStateDelete();
            },
            openEditDialog(role) {
                this.role = role;
                this.openEdit = true;
                this.stateEdit = false;
            },
            updatePage() {
                //TODO catch potencial errors
                RoleProvider.permissions().then(r => {
                    this.permissions = r.data.permissions.permissions;
                });
                RoleProvider.roles().then(r => {
                    this.roles = r.data.roles;
                });
            },
            deleteRole: function (id) {
                const index = this.roles.findIndex(role => role.id === id);
                this.roles.splice(index, 1);
            }
        }
    };
</script>