<template>
    <v-simple-table dense class="text-center">
        <template v-slot:default>
            <thead>
            <tr class="text-center">
                <th class="text-center headline" v-t="'role.label.permissions'"></th>

                <th class="text-center headline pa-3 ma-1" v-for="role in roles" :key="role.id">
                    <label>{{role.name}}</label>
                    <v-divider></v-divider>
                    <v-btn :disabled="role.name=='admin'" @click="openUpdate(role)" icon x-small>
                        <v-icon color="blue">edit</v-icon>
                    </v-btn>
                    <v-btn :disabled="role.name=='admin'" @click="openDelete(role)" icon x-small>
                        <v-icon color="orange">delete</v-icon>
                    </v-btn>

                </th>
            </tr>

            </thead>
            <tbody>
            <tr v-for="permission in permissions" :key="permission">
                <td>{{getPermissionsTranslation(permission)}}</td>
                <td v-for="role in roles" :key="role.id">
                    <v-icon :color="role.permissions.includes(permission)?'green':'red'">
                        {{role.permissions.includes(permission)?"check":"close"}}
                    </v-icon>
                </td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>


</template>

<script>

    import {RoleMixin} from "../RoleMixin";

    export default {
        name: "RoleList",
        mixins: [RoleMixin],
        props: {
            roles: Array,
            permissions: Array
        },
        methods: {
            openUpdate(role) {
                this.$emit('update', role)
            },
            openDelete(role) {
                this.$emit('delete', role)
            }
        }
    };
</script>