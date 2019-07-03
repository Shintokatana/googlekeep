<template>
    <div>
        <AddItem></AddItem>
        <p>Completed Tasks: {{todos.filter(todo => {return todo.doneCheck === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.doneCheck === false}).length}}</p>
        <div v-show="0 === todos.length">No Tasks Found</div>
        <div class="items-wrapper">
            <TodoSingleItem v-bind:todo="todo" v-for="todo in todos" :key="todo.id" v-bind:class="{pinned: todo.pinned}"></TodoSingleItem>
        </div>
    </div>
</template>

<script>
    import AddItem from './AddItem'
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

    .items-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

</style>
