<template>
    <div class="single-list-content">
        <div class="list-item" :key="single.id" v-for="single in singleList"><span><i v-if="single.checked" class="fas fa-check"></i></span>{{single.content}}</div>
    </div>
</template>

<script>
    export default {
        name: "singleItemListRender",
        props: ['id'],
        computed: {
            singleList: function () {
                let item =  this.$store.state.todos.find(x => {
                    return x.id === this.id
                });
                return item.list
            }
        }
    }
</script>

<style scoped lang="scss">

    .list-item {
        span {
            width: 16px;
            height: 100%;
            display: inline-block;
            font-size: 10px;
        }
    }
</style>
