<template>
    <div>
        <p>Completed Tasks: {{todos.filter(todo => {return todo.doneCheck === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.doneCheck === false}).length}}</p>
        <div v-show="0 === todos.length">No Tasks Found</div>
        <div class='ui centered card' v-for="todo in todos" v-bind:key="todo.id">
            <div class='content'>
                <div class='header'>
                    {{ todo.title }}
                </div>
                <div class='meta'>
                    {{ todo.project }}
                </div>
                <span v-on:click="deleteTodo(todo)">Delete</span>
            </div>
            <div v-show="todo.doneCheck">
                Completed
            </div>
            <div v-show="!todo.doneCheck">
                In Progress
            </div>
        </div>
        <add-item></add-item>
    </div>
</template>

<script>
    import addItem from './AddItem'
    export default {
        props: ['todos'],
        methods: {
            deleteTodo(todo) {
                const todoIndex = this.todos.indexOf(todo)
                this.todos.splice(todoIndex, 1)
            },
        },
        components: {
            addItem
        }
    }

</script>

<style scoped>

</style>
