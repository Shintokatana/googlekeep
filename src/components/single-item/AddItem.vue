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
                const lastIndex = this.$store.state.todos.length + 1;
                let newItem = { title: this.$refs.title.value, project: this.$refs.project.value, doneCheck: false, pinned: false};
                if ( !this.$store.state.todos.length ) {
                    newItem.id = 0;
                } else {
                    newItem.id = lastIndex;
                }
                this.$store.commit('addGlobalItem', newItem);
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
