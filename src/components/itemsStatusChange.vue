<template>
    <transition name="show">
        <div class="checked-wrapper" v-show="checkedItems.length > 0">
            <div>
                <h1>Items Selected: {{checkedItems.length}}</h1>
            </div>
            <div class="controls">
                <a @click.prevent="deleteItems(checkedItems)" href="#"><i class="fas fa-times-circle"></i></a>
            </div>
        </div>
    </transition>
</template>

<script>
    import {db} from "../main"

    export default {
        name: "itemsStatusChange",
        computed: {
            checkedItems: function () {
                return this.$store.getters.getSelectedTodos
            }
        },
        methods: {
            deleteItems(array) {
                array.forEach((single) => {
                    db.collection('todos').doc(single).delete()
                });
                this.$store.dispatch('setTodos');
            }
        }
    }
</script>

<style scoped lang="scss">

    .checked-wrapper {
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        right: 0;
        height: 80px;
        background-color: white;
        box-shadow: 0 0 3px 4px #eee;
        transition: .4s ease all;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: space-around;
    }

    .show-enter-active, .show-leave-active {
        transition: .5s ease all;
        top: 0;
    }
    .show-enter, .show-leave-to {
        top: -100%;
    }

</style>
