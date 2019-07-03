<template>
    <div>
        <form class="add-form">
            <div>
                <input type="text" id="title" ref="title">
                <label for="title">Note Title</label>
            </div>
            <div>
                <input type="text" id="description" ref="project">
                <label for="description">Note Content</label>
            </div>
            <button @click.prevent="addNewItem">Add Task to do</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddItem",
        computed: {
            todos() {
                return this.$store.state.todos
            }
        },
        methods: {
            addNewItem() {
                if (this.$refs.project.value) {
                    let newItem = {title: this.$refs.title.value, project: this.$refs.project.value, doneCheck: false, pinned: false, comments: []};
                    this.$store.commit('addGlobalItem', newItem);
                }
            },
        }
    }
</script>

<style scoped>

</style>
