<template>
    <div>
        <div class="element todo-item" v-for="todo in todos" :key="todo.id" v-bind:class="{pinned: todo.pinned}">
            <span @click="pinItem(todo)">Pin</span>
            <div class='content'>
                <div class='title'>
                    {{ todo.title }}
                </div>
                <div class='description'>
                    {{ todo.project }}
                </div>
            </div>
            <div class="bottom-content">
                <span @click="deleteTodo(todo)">Delete</span>
                <div v-show="todo.doneCheck">
                    <div @click="markDone(todo)">Completed</div>
                </div>
                <div v-show="!todo.doneCheck">
                    <div @click="markDone(todo)">In Progress</div>
                </div>
            </div>
            <CommentsArea v-bind:single="todo"></CommentsArea>
        </div>
    </div>
</template>

<script>
    import CommentsArea from './single-comments/SingleItemComments'
    export default {
        name: "TodoSingleItem",
        props: ['todos'],
        components: {
            CommentsArea
        },
        methods: {
            deleteTodo(todo) {
                const todoIndex = this.todos.indexOf(todo);
                this.todos.splice(todoIndex, 1)
            },
            markDone(todo) {
                todo.doneCheck = true !== todo.doneCheck
            },
            pinItem(todo) {
                todo.pinned = true !== todo.pinned
            }
        }
    }
</script>

<style scoped lang="scss">
    .todo-item {
        &.pinned {
            border: 4px solid black;
        }
        max-width: 400px;
        width: 100%;
        text-align: center;
        background-color: aqua;
        padding: 15px;
        border: 1px solid chocolate;
        margin-bottom: 20px;
        border-radius: 25px;

        .bottom-content {
            display: flex;
            flex-direction: row;
            justify-content: center;

            > * {
                margin: 0 15px;
            }
        }
    }
</style>
