<template>
    <div v-if="getInvalidToken">
        <v-alert
                dense
                type="error"
                class="elevation-8"
                prominent
        >
            <h4>El token no es valido para cambiar tu contraseña</h4>
            Realize el procedimiento de recuperar contrasela nuevamente
        </v-alert>
    </div>
    <div v-else>
        <v-alert
                dense
                type="error"
                class="elevation-8"
                prominent
        >
            <h4>El token ya expiro para cambiar tu contraseña</h4>
            Realize el procedimiento de recuperar contrasela nuevamente
        </v-alert>
    </div>
</template>

<script>
    export default {
        name: "RecoveryPasswordInvalidToken"
    }
</script>

<style scoped>

</style>