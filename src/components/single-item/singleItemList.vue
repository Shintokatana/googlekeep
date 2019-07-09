<template>
    <div class="single-list-content">
        <div class="list-item" :key="single.id" v-for="single in list"><span><i v-if="single.checked" class="fas fa-check"></i></span>{{single.content}}</div>
    </div>
</template>

<script>
    export default {
        name: "singleItemListRender",
        props: ['list']
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