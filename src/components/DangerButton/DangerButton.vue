<template>
    <v-btn
            color="red"
            class="white--text"
            v-on="$listeners"
            :loading="loading"
            :disabled="disabled"
            v-t="text"
    >
    </v-btn>
</template>

<script>
    export default {
        name: "DangerButton",
        props: {
            text: {type: String, default: "common.submit"},
            loading: {type: Boolean, default: false},
            disabled: {type: Boolean, default: false},
        }
    }
</script>

<style scoped>

</style>