<template>
    <div>
        <AddItem></AddItem>
        <p>Completed Tasks: {{todos.filter(todo => {return todo.doneCheck === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.doneCheck === false}).length}}</p>
        <div v-show="0 === todos.length">No Tasks Found</div>
        <TodoSingleItem></TodoSingleItem>
    </div>
</template>

<script>
    import AddItem from './single-item/AddItem'
    import TodoSingleItem from './single-item/SingleItem'
    export default {
        components: {
            AddItem,
            TodoSingleItem,
        },
        computed: {
            todos() {
                return this.$store.state.todos
            }
        },
    }
</script>

<style scoped lang="scss">
</style>
