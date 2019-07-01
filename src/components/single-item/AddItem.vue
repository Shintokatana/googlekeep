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
        props: ['todos'],
        data() {
            return {
                showForm: false,
            }
        },
        methods: {
            addNewItem() {
                if (!this.todos.length){
                    this.todos.push({id:0,title: this.$refs.title.value,project: this.$refs.project.value, doneCheck: false, pinned: false})
                } else {
                    const lastID = this.todos[this.todos.length -1].id;
                    this.todos.push({id:lastID+1,title: this.$refs.title.value,project: this.$refs.project.value, doneCheck: false, pinned: false})
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
