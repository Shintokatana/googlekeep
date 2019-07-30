<template>
    <transition name="show">
        <div class="checked-wrapper" v-show="checkedItems.length > 0">
            <i class="fas fa-times-circle" @click="deleteItems(checkedItems)"></i>
        </div>
    </transition>
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
        height: 80px;
        background-color: white;
        box-shadow: 0 0 3px 4px #eee;
        transition: .4s ease all;
    }

    .show-enter-active, .show-leave-active {
        transition: .5s ease all;
        top: 0;
    }
    .show-enter, .show-leave-to {
        top: -100%;
    }

</style>