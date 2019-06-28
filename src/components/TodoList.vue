<template>
    <div>
        <p>Completed Tasks: {{todos.filter(todo => {return todo.doneCheck === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.doneCheck === false}).length}}</p>
        <div v-show="0 === todos.length">No Tasks Found</div>
        <div class="element todo-item" v-for="todo in todos" :key="todo.id">
            <moreinfo v-bind:todo="todo"></moreinfo>
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
                    Completed
                </div>
                <div v-show="!todo.doneCheck">
                    <div @click="markDone(todo)">In Progress</div>
                </div>
            </div>
        </div>
        <form class="add-form">
            <div>
                <input type="text" id="title" ref="title">
                <label for="title">Title</label>
            </div>
            <div>
                <input type="text" id="description" ref="project">
                <label for="description">Description</label>
            </div>
            <button @click.prevent="addNewItem()">Add Task to do</button>
        </form>
    </div>
</template>

<script>
    import moreinfo from './MoreInfo'
    export default {
        data () {
          return {
          }
        },
        components: {
            moreinfo
        },
        props: ['todos'],
        methods: {
            deleteTodo(todo) {
                const todoIndex = this.todos.indexOf(todo);
                this.todos.splice(todoIndex, 1)
            },
            addNewItem() {
                if (!this.todos.length){
                    this.todos.push({id:0,title: this.$refs.title.value,project: this.$refs.project.value, doneCheck: false})
                } else {
                    const lastID = this.todos[this.todos.length -1].id;
                    this.todos.push({id:lastID+1,title: this.$refs.title.value,project: this.$refs.project.value, doneCheck: false})
                }
            },
            markDone(todo) {
                todo.doneCheck = true
            }
        },
    }

</script>

<style scoped lang="scss">
    .todo-item {
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
