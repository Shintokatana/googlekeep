<template>
    <div>
        <div class="search-form">
            <input id="search" type="text" ref="search-field" placeholder="Search title.." @input="searchItems" v-model="search">
            <label for="search">Search items</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "itemsSearch",
        data() {
            return {
                localItems: this.$store.state.todos,
                search: '',
                status: true
            }
        },
        computed: {
            searchedItems() {
                return this.localItems.filter(item => { return item.project.toLowerCase().includes(this.search.toLowerCase())});
            }
        },
        methods: {
            searchItems() {
                this.status = this.search !== '';
                this.$store.commit('searchActive', this.status);
                this.$store.commit('updateGlobalItems', this.searchedItems)
            }
        }
    }
</script>

<style scoped lang="scss">

    .search-form {
        max-width: 600px;
        margin: 0 auto;
        border-radius: 8px;
        box-shadow: 0 1px 1px 0 rgba(65,69,73,0.3), 0 1px 3px 1px rgba(65,69,73,0.15);
        overflow: hidden;
        input {
            padding: 11px 10px;
            outline: none;
            width: 100%;
            border: none;
        }

        label {
            display: none;
        }
    }

</style>
