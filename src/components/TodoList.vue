<template>
    <div>
        <AddItem></AddItem>
        <div class="items-status">
            <p>Completed Tasks: {{todos.filter(todo => {return todo.doneCheck === true}).length}}</p>
            <p>Pending Tasks: {{todos.filter(todo => {return todo.doneCheck === false}).length}}</p>
        </div>
        <div v-show="0 === todos.length">No Tasks Found</div>
        <transition-group tag="div" class="items-wrapper" name="list">
            <TodoSingleItem
                    draggable="true"
                    v-bind:todo="todo"
                    v-for="todo in todos"
                    :key="todo.id"
                    v-bind:class="{pinned: todo.pinned}">
            </TodoSingleItem>
        </transition-group>
    </div>
</template>

<script>
    import AddItem from './add-item/AddItem'
    import TodoSingleItem from './single-item/SingleItem'

    export default {
        components: {
            AddItem,
            TodoSingleItem
        },
        computed: {
            todos: function () {
                let self = this;
                return self.$store.state.todos.sort(function(x, y) { return y.pinned - x.pinned || y.doneCheck - x.doneCheck });
            }
        }
    }
</script>

<style scoped lang="scss">

    .items-wrapper {
        max-width: 1200px;
        margin: 60px auto 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .items-status {
        max-width: 600px;
        margin: 0 auto;
    }

    .list-enter-active, .list-leave-active {
        transition: .5s ease all;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(60px);
    }

</style>
