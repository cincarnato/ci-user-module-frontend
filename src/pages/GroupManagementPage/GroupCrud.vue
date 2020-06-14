<template>
    <v-card class="elevation-6">

        <v-card-title class="title" v-t="'group.title'"></v-card-title>
        <v-card-subtitle class="" v-t="'group.description'"></v-card-subtitle>

        <v-card-text>
            <group-data-table
                    @open-delete="openDelete"
                    @open-edit="openEdit"
                    @open-show="openShow"
                    :items="items" :totalItems="totalItems" :loading="loading"
                    @update="loadGroups"
            ></group-data-table>
        </v-card-text>

        <v-dialog :value="showing" width="850" persistent>
            <group-show :item="itemToShow" v-if="showing" v-on:closeDialog="showing=false"/>
        </v-dialog>

        <v-dialog :value="deleting" width="850" persistent>
            <group-delete :item="itemToDelete" v-if="deleting" v-on:itemDelete="loadGroups"
                          v-on:closeDialog="deleting=false"/>
        </v-dialog>

        <v-dialog :value="creating" width="850" fullscreen persistent>
            <group-create v-if="creating" v-on:itemCreate="itemCreate" v-on:closeDialog="creating=false"/>
        </v-dialog>

        <v-dialog :value="updating" width="850" persistent>
            <group-update v-if="updating" :item="itemToEdit" v-on:itemUpdate="itemUpdate"
                          v-on:closeDialog="updating=false"/>
        </v-dialog>


        <v-btn class="elevation-8" color="#D81B60" fab fixed bottom right dark @click="creating = true">
            <v-icon>add</v-icon>
        </v-btn>

    </v-card>
</template>

<script>
    import GroupShow from "./GroupShow";
    import GroupDelete from "./GroupDelete";
    import GroupCreate from "./GroupCreate";
    import GroupUpdate from "./GroupUpdate";
    import GroupDataTable from "./GroupDataTable/GroupDataTable";
    import GroupProvider from "../../providers/GroupProvider";

    export default {
        name: "GroupCrud",
        components: {GroupDataTable, GroupUpdate, GroupCreate, GroupDelete, GroupShow},
        data() {
            return {
                title: this.$t('group.title'),
                description: this.$t('group.description'),
                creating: false,
                updating: false,
                deleting: false,
                showing: false,
                expanded: [],
                itemToEdit: null,
                itemToDelete: null,
                itemToShow: null,

                items: [],
                totalItems: 0,
                loading: false,
            }
        },
        created() {
            this.loadGroups()
        },
        methods: {
            itemCreate(item) {
                this.items.push(item)
                this.totalItems++
            },
            itemUpdate(item) {
                let index = this.items.findIndex(i => i.id == item.id)
                this.$set(this.items, index, item)
            },
            openEdit(item) {
                this.updating = true
                this.itemToEdit = item
            },
            openShow(item) {
                this.showing = true
                this.itemToShow = item
            },
            openDelete(item) {
                this.deleting = true
                this.itemToDelete = item
            },
            update() {
                this.loading = true
                GroupProvider.groups().then(r => {
                    this.items = r.data.groups
                    this.loading = false
                })
            },
            loadGroups(options = {
                orderBy: null,
                orderDesc: false,
                pageNumber: 1,
                itemsPerPage: 5,
                search: ''
            }) {
                this.loading = true
                GroupProvider.paginateGroups(
                    options.itemsPerPage,
                    options.pageNumber,
                    options.search,
                    options.orderBy,
                    options.orderDesc
                )
                    .then(r => {
                        this.items = r.data.groupsPaginate.items
                        this.totalItems = r.data.groupsPaginate.totalItems
                    }).catch(err => {
                    //TODO improve handle error (show messages to user)
                    console.error(err)
                }).finally(() => this.loading = false)
            }
        },


    }
</script>

<style scoped>

</style>