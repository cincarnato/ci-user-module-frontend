<template>
    <div>
        <h3>Component Template</h3>
        {{data}}
    </div>
</template>

<script>
    export default {
        name: "ComponentTemplate",
        props: {
            data: Array
        }
    }
</script>

<style scoped>

</style>