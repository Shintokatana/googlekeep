<template>
    <div class="element todo-item" :class="{selected: checkStatus, pinned: todo.pinned}">
        <selectItem :id="todo.id" class="item-check"></selectItem>
        <div class="todo-body" :style="todo.bgc">
            <a @click="pinItem(todo)" class="pin">Pin</a>
            <div v-if="todo.image" class="image-wrapper">
                <img v-bind:src="todo.image.dataUrl" v-bind:alt="todo.image.dataUrl">
            </div>
            <div class='content'>
                <div class="title">{{todo.title}}</div>
                <div class="description"><p>{{todo.project}}</p></div>
                <div class="list">
                    <singleItemListRender v-bind:id="todo.id"></singleItemListRender>
                </div>
            </div>
            <div class="bottom-content">
                <div><a class="delete" @click.prevent="deleteTodo([todo.id])"><i class="far fa-times-circle"></i></a></div>
                <div><a class="status-in-progress" @click.prevent="markDone([todo.id])"><i class="fas fa-check"></i></a></div>
                <div class="more-wrapper">
                    <a @click.prevent="showColorPicker" href="#"><i class="fas fa-palette"></i></a>
                    <div class="color-picker" v-if="colorPickerShow">
                        <color-picker
                                v-model="bgclr"
                                inline
                                shapes="circles"
                                swatch-size="18"
                                colors="material-light"
                                @input="showColorPicker">
                        </color-picker>
                        <v-color-picker>
                            
                        </v-color-picker>
                    </div>
                </div>
            </div>
            <singleLinkItemArea v-bind:item="todo"></singleLinkItemArea>
        </div>
    </div>
</template>

<script>
    import singleItemListRender from './singleItemList'
    import selectItem from './selectItem'
    import singleLinkItemArea from './singleItemLinkArea'

    export default {
        name: "TodoSingleItem",
        components: {
            singleItemListRender,
            selectItem,
            singleLinkItemArea
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
        computed: {
            checkStatus: function () {
                return this.$store.state.selectedItems.includes(this.todo.id)
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
            deleteTodo(id) {
                this.$store.commit('deleteGlobalItem', id)
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

        &.selected {
            .todo-body {
                box-shadow: 0 0 5px 2px black;
            }
            .item-check {
                visibility: visible;
                opacity: 1;
            }

            &:hover {
                .todo-body {
                    box-shadow: 0 0 5px 2px black;
                }
            }
        }

        .item-check {
            z-index: 10;
            visibility: hidden;
            opacity: 0;
            transition: .4s ease all;
            position: absolute;
            top: -11px;
            left: -11px;
            cursor: pointer;
        }

        .image-wrapper {
            img {
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                max-width: 100%;
            }
        }

        &:hover {
            .item-check,
            .bottom-content,
            .pin {
                visibility: visible;
                opacity: 1;
            }
        }

        .pin {
            opacity: 0;
            visibility: hidden;
            transition: .4s ease all;
            position: absolute;
            top: 10px;
            right: 10px;
        }

        .todo-body {

            &:hover {
                box-shadow: 0 0 8px 8px #eee;
            }


            position: relative;
            padding: 0;
            border: 1px solid #eeeeee;
            border-radius: 10px;
            overflow: hidden;

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
            justify-content: flex-end;
            flex-direction: row;
            padding: 5px;
            opacity: 0;
            visibility: hidden;
            transition: .4s ease all;

            > div {
                margin: 0 5px;
            }
            a {
                color: black;
                font-size: 12px;

                &:hover {
                    color: #42b883;
                }
            }

            .delete {
            }

            .status {
                &-complete,
                &-in-progress {
                }

                &-complete {
                }

                &-in-progress {
                }
            }

        }

        .more-wrapper {
            .color-picker {
                z-index: 10;
                background-color: white;
                border: 1px solid #eee;
                box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
                right: 0;
                bottom: 0;
                position: absolute;
                top: auto;
                max-width: 220px;
                width: 180px;
                left: auto;
            }
        }

        flex: 0 1 auto;
        width: auto;
        min-width: 250px;
        max-width: 250px;
        margin: 0 10px 20px;
        transition: .4s ease all;
        position: relative;
        border-radius: 10px;

    }
</style>
