<template>
    <div>
        <div>
            <input type="text" required ref="author" id="name">
            <label for="name">Author Name</label>
        </div>
        <div>
            <input type="text" required ref="comment" id="comment">
            <label for="comment">Comment</label>
        </div>
        <span @click="addComment">Add Comment</span>
    </div>
</template>

<script>
    export default {
        name: "SingleAddComment",
        props: ['coments','single'],
        methods: {
            addComment() {
                this.coments.push({ author: this.$refs.author.value, comment: this.$refs.comment.value })
            }
        }
    }
</script>

<style scoped>

</style>
