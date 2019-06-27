<template>
    <div>
        <p>Completed Tasks: {{todos.filter(todo => {return todo.doneCheck === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.doneCheck === false}).length}}</p>
        <div v-show="todos.length ===0">No Tasks Found</div>
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
            <div v-show="todo.done">
                Completed
            </div>
            <div v-show="!todo.done">
                Complete
            </div>
        </div>
        <div class="add-form">
            <input type="text" v-model="title" id="title">
            <label for="title">Title</label>
        </div>
        <div class="" style="border: 10px solid black;">
            <span v-on:click="addTodo(todos)">Add</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['todos'],
        methods: {
            deleteTodo(todo) {
                const todoIndex = this.todos.indexOf(todo)
                this.todos.splice(todoIndex, 1)
            },
            addTodo(todos) {
                let new_item = {title: 'test',project: 'test', doneCheck: false}
                todos.push(new_item)
            }
        }
    }

</script>

<style scoped>

</style>
