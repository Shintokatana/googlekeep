<template>
    <div class="item-links">
        <div class="link" v-bind:key="item.id" v-for="item in parseLink(this.item.project)">
            <LinkPreview :url="item">
                <template slot-scope="props">
                    <a v-bind:href="props.url" target="_blank">
                        <div class="card-title">{{props.title}}</div>
                        <p class="card-text">{{props.description}}</p>
                    </a>
                </template>
            </LinkPreview>
        </div>
    </div>
</template>

<script>
    import LinkPreview from 'link-prevue'

    export default {
        name: "singleItemLinkArea",
        props: ['item'],
        components: {
            LinkPreview
        },
        methods: {
            parseLink(text) {
                const urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
                return text.match(urlRegex);
            }
        }
    }
</script>

<style scoped lang="scss">

    .link {
        &:first-of-type {
            margin-top: 5px;
        }
        &:hover {
            background-color: #eee;
        }
        transition: .4s ease all;
        width: 100%;
        padding: 10px;
        background-color: rgba(238, 238, 238, 0.5);
        max-width: 100%;
        box-sizing: border-box;
        .card-title {
            text-align: center;
        }
        .card-text {
            width: 100%;
            font-size: 10px;
        }
    }

</style>