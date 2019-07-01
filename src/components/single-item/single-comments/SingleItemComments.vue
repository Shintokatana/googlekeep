<template>
    <div>
        <span @click="showComments(single)">Show Comments</span>
        <div :key="comment.id" v-for="comment in comments">
            <div v-if="showState">
                <div class="author">{{comment.author}}</div>
                <div class="comment">{{comment.comment}}</div>
            </div>
        </div>
        <AddComment v-if="showState" v-bind:coments="comments"></AddComment>
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
              showState: false,
          }
        },
        name: "SingleItemComments",
        props: ['single'],
        methods: {
            showComments() {
                this.showState = true !== this.showState;
            }
        },
        components: {
            AddComment
        }
    }
</script>
<style scoped>

</style>
