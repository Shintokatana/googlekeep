<template>
    <div>
        <Sidebar></Sidebar>
        <TodoList></TodoList>
    </div>
</template>

<script>
    import TodoList from '../../components/TodoList.vue'
    import Sidebar from '../../sidebar/sidebar'

    export default {
        name: "Home",
        components: {
            TodoList,
            Sidebar
        }
    }
</script>

<style scoped>

</style>
