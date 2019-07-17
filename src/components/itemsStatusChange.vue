<template>
    <div class="checked-wrapper" v-if="checkedItems.length > 0">
        <i class="fas fa-times-circle" @click="deleteItems(checkedItems)"></i>
    </div>
</template>

<script>
    export default {
        name: "itemsStatusChange",
        computed: {
            checkedItems: function () {
                return this.$store.state.selectedItems
            }
        },
        methods: {
            deleteItems(array) {
                this.$store.commit('deleteGlobalItem', array)
            }
        }
    }
</script>

<style scoped lang="scss">

    .checked-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 40px;
        background-color: white;
        box-shadow: 0 0 3px 4px #eee;
    }

</style>