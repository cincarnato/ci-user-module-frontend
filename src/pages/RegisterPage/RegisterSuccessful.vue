<template>

    <v-card class="elevation-12">
        <v-card-text>
            <v-alert
                    :value="true"
                    color="success"
                    icon="check_circle"
                    outlined
            >
                Hemos enviado un correo a <strong>{{email}}</strong> para validar y finalizar la creación de su cuenta.
            </v-alert>

        </v-card-text>

    </v-card>

</template>

<script>
    export default {
        name: "RegisterSuccessful",
        props: {
            email: String
        }
    }
</script>

<style scoped>

</style>
