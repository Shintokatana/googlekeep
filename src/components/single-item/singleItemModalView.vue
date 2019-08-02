<template>
    <v-layout justify-center data-app="modal" v-if="dialog">
        <v-dialog v-model="dialog" max-width="600">
            <div class="single-zoomed-item">
                <singleItem v-bind:todo="currentItem" :key="id" :singleModal="true"></singleItem>
            </div>
        </v-dialog>
    </v-layout>
</template>

<script>
    import singleItem from './singleItem'

    export default {
        name: "singleItemModalView",
        data() {
            return {
                id: this.$route.params.id,
            }
        },
        components: {
            singleItem
        },
        computed: {
            dialog: {
                get() {
                    return this.$store.state.singleModalView
                },
                set(val) {
                    this.$router.push( {name: 'home'} );
                    this.$store.commit('showModal', val);
                }
            },
            currentItem: {
                get() {
                    let self = this;
                    return this.$store.state.todos.find(function (item) {
                        return item.id === parseInt(self.$route.params.id)
                    });
                },
                set(id) {
                    return this.$store.state.todos.find(function (item) {
                        return item.id === parseInt(id)
                    });
                }
            }
        },
        created() {
            if (!this.$_.isEmpty(this.$route.params)) {
                this.currentItem = this.$route.params.id;
                if (this.currentItem) {
                    this.$store.commit('showModal', true)
                }
            }
        }
    }
</script>

<style lang="scss">

    .single-zoomed-item {
        background-color: white;

        .modalitem.todo-item {
            width: 100%;
            max-width: 100%;
            margin: 0;

            .todo-body {
                border: none;
                border-radius: 0;

                .content {
                    min-height: 150px;
                }
            }

            .pin {
                visibility: visible;
                opacity: 1;
            }

            .bottom-content {
                visibility: visible;
                opacity: 1;
            }
        }
    }

</style>
