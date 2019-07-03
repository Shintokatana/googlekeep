<template>
    <div class="element todo-item">
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
    </div>
</template>

<script>
    export default {
        name: "TodoSingleItem",
        components: {
        },
        props: ['todo'],
        methods: {
            deleteTodo(todo) {
                this.$store.commit('deleteGlobalItem', todo)
            },
            markDone(todo) {
                this.$store.commit('markDone', todo)
            },
            pinItem(todo) {
                this.$store.commit('pinGlobalItem', todo);
            }
        }
    }
</script>

<style scoped lang="scss">

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
