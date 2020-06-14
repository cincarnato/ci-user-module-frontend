<template>
    <v-toolbar flat color="primary">
        <v-toolbar-title class="onPrimary--text" v-t="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn icon dark @click="$emit('close')">
                <v-icon>close</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "ToolbarDialogCard",
        props: {
            title: {type: String, default: "common.title"},
        }
    }
</script>

<style scoped>

</style>