<template>
    <div>
        <TodoList></TodoList>
        <router-view name="single"></router-view>
    </div>
</template>

<script>
    import TodoList from '../../components/TodoList.vue'

    export default {
        name: "Home",
        components: {
            TodoList
        }
    }
</script>

<style scoped>

</style>
