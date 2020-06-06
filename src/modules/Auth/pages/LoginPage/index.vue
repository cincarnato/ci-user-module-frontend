<template>
    <v-container fluid fill-height class="grey lighten-3">
        <login-form></login-form>
    </v-container>
</template>

<script>
    import LoginForm from "./LoginForm";

    export default {
        name: "LoginPage",
        components: {LoginForm},
    }
</script>
