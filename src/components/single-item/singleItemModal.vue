<template>
    <div class="modal-todo" :style="todo.bgc">
        <div class="image-wrapper" v-if="todo.image">
            <img v-bind:src="todo.image.dataUrl" v-bind:alt="todo.image.dataUrl">
        </div>
        <h1><input type="text" v-model="title"></h1>
        <div class="description">
            <textarea type="text" ref="project" v-model="project" @input="onInput">
            </textarea>
        </div>
        <singleItemList v-bind:id="todo.id"/>
    </div>
</template>

<script>
    import singleItemList from './singleItemList'

    export default {
        name: "singleItemModal",
        props: ['todo'],
        data() {
            return {
                project: this.todo.project,
                title: this.todo.title
            }
        },
        computed: {
        },
        components: {
            singleItemList
        },
        methods: {
            onInput() {
                const area = this.$refs.project;

                area.style.height = 'auto';
                area.style.height = `${area.scrollHeight}px`;
            },
        }
    }
</script>

<style scoped lang="scss">

    .image-wrapper {
        max-width: 100%;
        img {
            max-width: 100%;
        }
    }

</style>
