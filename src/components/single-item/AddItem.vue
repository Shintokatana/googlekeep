<template>
    <div>
        <span @click="showFrom">Add Item</span>
        <form class="add-form" v-if="showForm">
            <div>
                <input type="text" id="title" ref="title">
                <label for="title">Title</label>
            </div>
            <div>
                <input type="text" id="description" ref="project">
                <label for="description">Description</label>
            </div>
            <button @click.prevent="addNewItem">Add Task to do</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddItem",
        data() {
            return {
                showForm: false,
            }
        },
        computed: {
            todos() {
                return this.$store.state.todos
            }
        },
        methods: {
            addNewItem() {
                const todoIndex = this.$store.state.todos.length;
                if (!this.todos.length){
                    this.todos.push({id:0,title: this.$refs.title.value,project: this.$refs.project.value, doneCheck: false, pinned: false})
                } else {
                    this.todos.push({id:todoIndex,title: this.$refs.title.value,project: this.$refs.project.value, doneCheck: false, pinned: false})
                }
                this.showForm = false
            },
            showFrom() {
                this.showForm = false === this.showForm;
            }
        }
    }
</script>

<style scoped>

</style>
