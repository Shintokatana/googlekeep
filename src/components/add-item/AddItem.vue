<template>
    <div class="add-form-wrapper" v-if="!searchActive">
        <form autocomplete="off" v-click-outside="formClose" class="add-form" :style="{backgroundColor: backgroundColor}" :class="{pinned: pinStatus}">
            <div v-if="formVisibility" class="image-wrapper">
                <img v-if="image" v-bind:src="image.dataUrl" v-bind:alt="image.dataUrl">
            </div>
            <div v-if="addItemStates.drawVisibility">
                <itemDrawing/>
            </div>
            <div v-show="formVisibility">
                <div class="pin-wrapper"><a @click.prevent="pinNewItem" href="#" class="pin-item"><i class="fas fa-map-pin"></i></a></div>
                <div>
                    <input v-on:keydown.enter.prevent="titleEnter" type="text" id="title" placeholder="Insert Title" ref="title">
                    <label for="title"></label>
                </div>
            </div>
            <div>
                <v-textarea
                    @click="formShow"
                    id="description"
                    v-model="message"
                    no-resize
                    counter
                    placeholder="Insert Content"
                    rows="1"
                    row-height=24
                    auto-grow/>
            </div>
            <div v-show="formVisibility" class="additionals-wrapper">
                <div class="list-wrapper" v-if="addItemStates.listVisibility">
                    <listItem/>
                </div>
                <div class="additionals">
                    <div>
                        <a @click.prevent="formClose" href="#"><i class="fas fa-times"></i></a>
                    </div>
                    <div style="display: flex">
                        <itemImage/>
                        <a @click.prevent="listShow" href="#"><i class="fas fa-list-ul"></i></a>
                        <a @click.prevent="colorShow" href="#"><i class="fas fa-palette"></i></a>
                        <a @click.prevent="addNewItem" href="#"><i class="fas fa-check"></i></a>
                        <a @click.prevent="drawShow" href=""><i class="fas fa-pencil-ruler"></i></a>
                    </div>
                </div>
                <div class="color-picker-wrapper" v-if="addItemStates.colorVisibility">
                    <color-picker
                            inline
                            shapes="circles"
                            swatch-size="20"
                            colors="material-light"
                            @input="colorShow"
                            v-model="backgroundColor"/>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import listItem from './addListItem'
    import itemDrawing from './addItemDrawing'
    import itemImage from './addItemImage'
    import ClickOutside from 'vue-click-outside'
    import { db } from '../../main'

    export default {
        name: "AddItem",
        computed: {
            todos() {
                return this.$store.state.todos
            },
            searchActive() {
                return this.$store.state.searchActive
            },
            image: {
                get() {
                    let self = this;
                    return self.$store.state.newItemImage
                },
                set(value) {
                    let self = this;
                    if (self) {
                        self.$store.commit('addNewItemImage', value);
                    }
                }
            }
        },
        components: {
            listItem,
            itemDrawing,
            itemImage
        },
        data() {
            return {
                backgroundColor: '',
                pinStatus: false,
                formVisibility: false,
                addItemStates: {
                    colorVisibility: false,
                    listVisibility: false,
                    imageVisibility: false,
                    drawVisibility: false
                },
                message: '',
                progress: null,
                error: null,
                hasImage: false,
            }
        },
        methods: {
            addNewItem() {
                if (this.message) {
                    let newItemList = [];
                    this.$store.state.newItemList.forEach(function (element) {
                        if (element.content) {
                            newItemList.push(element)
                        }
                    });
                    let lastItemOrder;
                    if (this.$store.state.todos.length > 0 ) {
                        lastItemOrder = Math.max.apply(Math, this.$store.state.todos.map(function(o) { return o.order; })) + 1;
                    } else {
                        lastItemOrder = 1;
                    }
                    db.collection('todos').add({
                        image: this.image,
                        order: lastItemOrder,
                        title: this.$refs.title.value,
                        project: this.message,
                        pinned: this.pinStatus,
                        bgc: {backgroundColor: this.backgroundColor},
                        list: newItemList
                    });
                    this.$store.dispatch('setTodos');
                    this.$refs.title.value = '';
                    this.message = '';
                    this.backgroundColor = '';
                    this.image = false;
                    this.$store.state.newItemList = [{checked: false, id: 0, visited: false, content: ''}];
                    this.formVisibility = false
                }
            },
            setImage: function(output) {
                this.addItemStates.drawVisibility = false;
                this.hasImage = true;
                this.image = output;
            },
            formShow() {
                this.formVisibility = true
            },
            formClose() {
                if(this.formVisibility) {
                    this.addNewItem();
                    if (this.addItemStates.listVisibility) this.listShow();
                    if (this.addItemStates.colorVisibility) this.colorShow();
                    this.image = null;
                    this.formVisibility = false;
                    this.addItemStates.drawVisibility = false
                }
            },
            colorShow() {
                this.addItemStates.colorVisibility = this.addItemStates.colorVisibility !== true
            },
            listShow() {
                this.addItemStates.listVisibility = this.addItemStates.listVisibility !== true
            },
            pinNewItem() {
                this.pinStatus = this.pinStatus !== true
            },
            titleEnter() {
                document.getElementById('description').focus()
            },
            drawShow() {
                this.addItemStates.drawVisibility = this.addItemStates.drawVisibility !== true
            }
        },
        directives: {
            ClickOutside
        }
    }
</script>

<style lang="scss">

    .testest {
        max-width: 640px;
        margin: 0 auto;
    }

    .add-form-wrapper {
        margin-top: 35px;

        .add-form {
            box-shadow: 0 3px 5px rgba(0,0,0,0.20);
            position: relative;

            .image-wrapper {
                width: 100%;
                img {
                    max-width: 100%;
                }
            }

            .additionals-wrapper {

                position: relative;

                .additionals {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    a,
                    label {
                        color: black;
                        cursor: pointer;
                        margin: 0 7px;

                        &:hover {
                            color: #42b883;
                        }
                    }
                }

                .list-wrapper {
                    margin: 7px 0;
                }

                .color-picker-wrapper {
                    position: absolute;
                    bottom: 0;
                    left: auto;
                    right: 0;
                    width: 200px;
                    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    border: 1px solid #eee;
                }
            }

            &.pinned {
                border-color: black;
                box-shadow: inset 1px 1px 0 black, inset 0 -1px 0 black;
            }

            .pin-wrapper {
                position: absolute;
                text-align: right;
                left: auto;
                top: 10px;
                right: 10px;

                .pin-item {
                    color: black;
                    font-size: 20px;
                }
            }

            border-radius: 10px;
            border: 1px solid #eee;
            padding: 15px;

            textarea {
                overflow: hidden;
                resize: none;
                height: auto;
            }
            input,
            textarea{
                box-sizing: border-box;
                margin: 5px 0;
                box-shadow: inherit;
                color: black;
                border-radius: 10px;
                padding: 6px 16px;
                width: 100%;
                line-height: 1.25em;
                border: none;
                background-color: transparent;
                &::placeholder {
                    color: black;
                }

                &#title {
                    font-size: 18px;
                }
                &#description {
                    font-size: 14px;
                }
                &:focus {
                    outline: none;
                }
            }

            max-width: 650px;
            margin: 0 auto;
        }
    }

    #fileInput {
        display: none;
    }

</style>
