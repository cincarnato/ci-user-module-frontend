<template>
    <div>
        <h3>Component Template</h3>
        {{fruits}}
    </div>
</template>

<script>
    export default {
        name: "ComponentTemplate",
        props: {
            fruits: Array
        }
    }
</script>

<style scoped>

</style>