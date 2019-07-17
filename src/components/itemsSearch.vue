<template>
    <div>
        <input id="search" type="text" ref="search-field" placeholder="Search title.." @input="searchItems" v-model="search">
        <label for="search">Search items</label>
    </div>
</template>

<script>
    export default {
        name: "itemsSearch",
        data() {
            return {
                search: '',
                items: this.$store.state.todos
            }
        },
        computed: {
            searchedItems() {
                return this.items.filter(item => {
                    return item.title.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },
        methods: {
            searchItems() {
                this.$store.commit('searchedItems', this.searchedItems)
            }
        }
    }
</script>

<style scoped>

</style>