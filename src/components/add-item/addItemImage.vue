<template>
    <div class="item-image">
        <label for="fileInput" slot="upload-label"><i class="far fa-image"></i></label>
        <image-uploader
                :preview="false"
                capture="environment"
                :debug="0"
                doNotResize="gif"
                :autoRotate="true"
                outputFormat="verbose"
                @input="setImage">
        </image-uploader>
    </div>
</template>

<script>
    export default {
        name: "addItemImage",
        computed: {
            image: {
                get() {
                    let self = this;
                    return self.$store.state.newItemImage
                },
                set(value) {
                    let self = this;
                    self.$store.commit('addNewItemImage', value);
                }
            }
        },
        methods: {
            setImage: function(output) {
                this.image = output;
            },
        }
    }
</script>

<style scoped lang="scss">

    .item-image {
        display: inline;
    }

</style>