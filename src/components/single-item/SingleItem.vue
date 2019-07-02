<template>
    <div class="items-wrapper">
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
        components: {
            CommentsArea,
        },
        computed: {
            todos() {
                return this.$store.state.todos
            }
        },
        data() {
            return {
            }
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
                this.$store.commit('pinGlobalItem', todo.id);
            }
        }
    }
</script>

<style scoped lang="scss">

    .items-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    .todo-item {
        &.pinned {
            border: 4px solid black;
        }
        flex: 0 1 25%;
        max-width: 25%;
        margin: 0 15px 20px;
        text-align: center;
        padding: 15px;
        border: 1px solid chocolate;
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
