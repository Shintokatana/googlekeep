<template>
    <ul class="single-list-content">
        <li class="list-item" :key="single.id" v-for="single in list"><span v-if="single.checked">✓</span>{{single.content}}</li>
    </ul>
</template>

<script>
    export default {
        name: "singleItemListRender",
        props: ['list']
    }
</script>

<style scoped lang="scss">
</style>