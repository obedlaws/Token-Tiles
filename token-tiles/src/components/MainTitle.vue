<template>
    <header>
        <h1>{{ title }}</h1>
        <SelectList />
    </header>
</template>

<script>
import SelectList from "./SelectList.vue"

export default {
    name: 'MainTitle',
    props: ['title'],

    components: {
        SelectList
    }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>