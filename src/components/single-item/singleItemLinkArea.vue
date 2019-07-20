<template>
    <div class="item-links">
        <div class="link" v-bind:key="item.id" v-for="item in parseLink(this.item.project)">
            <a v-bind:href="item" target="_blank">{{item}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "singleItemLinkArea",
        props: ['item'],
        methods: {
            parseLink(text) {
                const urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
                return text.match(urlRegex);
            }
        }
    }
</script>

<style scoped>

</style>