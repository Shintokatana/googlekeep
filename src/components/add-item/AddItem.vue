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
            <div class="add-listing">
                <addItemList></addItemList>
            </div>
            <color-picker v-model="backgroundColor"></color-picker>
            <button @click.prevent="addNewItem">Add Task to do</button>
        </form>
    </div>
</template>

<script>
    import addItemList from './ItemList'
    export default {
        name: "AddItem",
        computed: {
            todos() {
                return this.$store.state.todos
            }
        },
        components: {
            addItemList
        },
        data() {
            return {
                backgroundColor: ''
            }
        },
        methods: {
            addNewItem() {
                if (this.$refs.project.value) {
                    let lastItemID = 0;
                    if (this.$store.state.todos.length) {
                        lastItemID = this.$store.state.todos[this.$store.state.todos.length -1].id;
                    }
                    let newItem = {id: lastItemID + 1,title: this.$refs.title.value, project: this.$refs.project.value, doneCheck: false, pinned: false,bgc: {backgroundColor: this.backgroundColor}};
                    this.$store.commit('addGlobalItem', newItem);
                }
            },
        }
    }
</script>

<style scoped>

</style>
