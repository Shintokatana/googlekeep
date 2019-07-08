<template>
    <div class="element todo-item">
        <div class="todo-body" :style="todo.bgc">
            <a @click="pinItem(todo)" class="pin">Pin</a>
            <div class='content'>
                <div class='title'>
                   {{todo.title}}
                </div>
                <div class='description'>
                    {{todo.project}}
                </div>
                <div class="list">
                    <singleItemRender v-bind:list="todo.list"></singleItemRender>
                </div>
            </div>
            <div class="bottom-content">
                <a class="delete" @click.prevent="deleteTodo(todo)">Delete</a>
                <a class="status-complete" v-show="todo.doneCheck" @click.prevent="markDone(todo)">Completed</a>
                <a class="status-in-progress" v-show="!todo.doneCheck" @click.prevent="markDone(todo)">In Progress</a>
            </div>
        </div>
        <div class="more-wrapper">
            <a @click.prevent="showColorPicker" href="#"><i class="fas fa-palette"></i></a>
            <div class="color-picker" v-show="colorPickerShow">
            <color-picker
                    v-model="bgclr"
                    inline
                    shapes="circles"
                    swatch-size="24"
                    colors="material-light">
            </color-picker>
        </div>
        </div>
    </div>
</template>

<script>
    import singleItemRender from './singleItemList'
    export default {
        name: "TodoSingleItem",
        components: {
            singleItemRender
        },
        props: {
            todo: Object
        },
        data() {
            return {
                bgclr: '',
                colorPickerShow: false
            }
        },
        watch: {
            bgclr: function (newColor) {
                this.updateColor({id: this.todo.id, color: newColor})
            }
        },
        methods: {
            showColorPicker() {
                this.colorPickerShow = !this.colorPickerShow;
            },
            deleteTodo(todo) {
                this.$store.commit('deleteGlobalItem', todo)
            },
            markDone(todo) {
                this.$store.commit('markDone', todo)
            },
            pinItem(todo) {
                this.$store.commit('pinGlobalItem', todo);
            },
            updateColor(item) {
                this.$store.commit('updateGlobalColor', item);
            }
        }
    }
</script>

<style scoped lang="scss">
    a {
        cursor: pointer;
    }
    .todo-item {

        .todo-body {

            &:hover {
                box-shadow: 0 0 8px 8px #eee;
            }
            .pin {
                position: absolute;
                top: 10px;
                right: 10px;
            }

            position: relative;
            padding: 15px 0 0;
            border: 1px solid #eeeeee;
            border-radius: 10px;

            .content {
                padding: 10px;

                .title {
                    font-size: 20px;
                    font-weight: bold;
                }

                .description {
                    font-size: 12px;
                }
            }
        }

        &.pinned {
            .todo-body {
                border-color: black;
            }
        }

        .bottom-content {
            display: flex;
            flex-direction: row;
            justify-content: center;

            .delete {
                border-bottom-left-radius: 10px;
                background-color: rgb(255, 126, 151);
                color: black;
            }

            .status {
                &-complete,
                &-in-progress {
                    border-bottom-right-radius: 10px;
                }

                &-complete {
                    color: white;
                    background-color: rgb(56, 128, 52);
                }

                &-in-progress {
                    background-color: rgb(255, 126, 151);
                }
            }

            > * {
                padding: 10px 0;
                flex: 0 1 50%;
                max-width: 50%;
                text-align: center;
            }
        }

        .more-wrapper {
            position: relative;
            .color-picker {
                z-index: 10;
                background-color: white;
                border: 1px solid #eee;
                box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
                position: absolute;
                max-width: 200px;
            }
        }

        flex: 0 1 auto;
        width: auto;
        min-width: 200px;
        margin: 0 15px 20px;
        transition: .4s ease all;

    }
</style>
