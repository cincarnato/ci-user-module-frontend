<template>
    <v-container fluid fill-height class="grey lighten-3">
        <login-card>
            <login-form></login-form>
        </login-card>
    </v-container>
</template>

<script>
    import LoginCard from "./LoginCard";
    import LoginForm from "./LoginForm";

    export default {
        name: "LoginPage",
        components: {LoginCard, LoginForm},
    }
</script>
