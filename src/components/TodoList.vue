<template>
    <div>
        <AddItem></AddItem>
        <itemStatus :todos="todos"></itemStatus>
        <draggable v-model="todos"
                   v-bind="dragOptions"
                   @start="drag = true"
                   @end="drag = false">
            <transition-group type="transition"
                              tag="div"
                              class="items-wrapper"
                              :name="!drag ? 'flip-list' : null">
                <TodoSingleItem
                        draggable="true"
                        v-bind:todo="todo"
                        v-for="todo in todos"
                        :key="todo.id"
                        v-bind:class="{pinned: todo.pinned}">
                </TodoSingleItem>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
    import AddItem from './add-item/AddItem'
    import TodoSingleItem from './single-item/SingleItem'
    import draggable from 'vuedraggable'
    import itemStatus from './itemStatus'

    export default {
        components: {
            AddItem,
            TodoSingleItem,
            itemStatus,
            draggable
        },
        data() {
            return {
                drag: false
            }
        },
        computed: {
            todos: {
                get() {
                let self = this;
                return self.$store.state.todos.sort(function(x, y) { return y.pinned - x.pinned || y.doneCheck - x.doneCheck });
                },
                set(value) {
                    let self = this;
                    self.$store.commit('updateGlobalItems', value);
                }
            },
            dragOptions() {
                return {
                    animation: 200,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                }
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

    .list-enter-active, .list-leave-active {
        transition: .5s ease all;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateX(60px);
    }

    .flip-list-move {
        transition: transform 0.5s;
    }
    .no-move {
        transition: transform 0s;
    }
    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
        border-radius: 10px;
    }
    .list-group {
        min-height: 20px;
    }
    .list-group-item {
        cursor: move;
    }
    .list-group-item i {
        cursor: pointer;
    }

</style>
