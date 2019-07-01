<template>
    <div>
        <span @click="open=true">Show Comments</span>
        <vue-modaltor :visible="open" @hide="hideModal">
            <div :key="comment.id" v-for="comment in comments">
                <div class="author">{{comment.author}}</div>
                <div class="comment">{{comment.comment}}</div>
            </div>
            <AddComment v-bind:coments="comments"></AddComment>
        </vue-modaltor>
    </div>
</template>

<script>
    import AddComment from './SingleAddComment'
    export default {
        data() {
          return {
              comments: [
                  {}
              ],
              open: false,
          }
        },
        name: "SingleItemComments",
        props: ['single'],
        methods: {
            hideModal() {
                this.open = false
            }
        },
        components: {
            AddComment
        }
    }
</script>
<style scoped>

</style>
