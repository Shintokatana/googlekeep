<template>
    <div @click="updateSelected(id)">
        <i class="fas fa-check-circle"></i>
    </div>
</template>

<script>
    export default {
        name: "selectItem",
        props: ['id'],
        methods: {
            updateSelected(id) {
                this.$store.commit('updateSelectedItems', id)
            }
        }
    }
</script>

<style scoped lang="scss">

    div {
        background-color: white;
        border-radius: 50%;
        i {
            font-size: 24px;
        }
    }

</style>