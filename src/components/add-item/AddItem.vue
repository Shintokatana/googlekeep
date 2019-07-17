<template>
    <div class="add-form-wrapper">
        <form v-click-outside="formClose" autocomplete="off" class="add-form" :style="{backgroundColor: backgroundColor}" :class="{pinned: pinStatus}">
            <div v-if="formVisibility" class="image-wrapper">
                <img v-if="image" v-bind:src="image.dataUrl" v-bind:alt="image.dataUrl">
            </div>
            <div v-show="formVisibility">
                <div class="pin-wrapper"><a @click.prevent="pinNewItem" href="#" class="pin-item"><i class="fas fa-map-pin"></i></a></div>
                <div>
                    <input type="text" id="title" placeholder="Insert Title" ref="title">
                    <label for="title"></label>
                </div>
            </div>
            <div>
                <textarea rows="1"
                          @click="formShow"
                          name="description"
                          id="description"
                          ref="project"
                          placeholder="Insert Content"
                          @input="textareaResize">
                </textarea>
                <label for="description"></label>
            </div>
            <div v-show="formVisibility" class="additionals-wrapper">
                <div class="list-wrapper" v-if="addItemStates.listVisibility">
                    <listItem></listItem>
                </div>
                <div class="additionals">
                    <div>
                        <a @click.prevent="formClose" href="#"><i class="fas fa-times"></i></a>
                    </div>
                    <div>
                        <label for="fileInput" slot="upload-label"><i class="far fa-image"></i></label>
                        <a @click.prevent="listShow" href="#"><i class="fas fa-list-ul"></i></a>
                        <a @click.prevent="colorShow" href="#"><i class="fas fa-palette"></i></a>
                        <a @click.prevent="addNewItem" href="#"><i class="fas fa-check"></i></a>
                    </div>
                </div>
                <div class="color-picker-wrapper" v-if="addItemStates.colorVisibility">
                    <color-picker
                            inline
                            shapes="circles"
                            swatch-size="20"
                            colors="material-light"
                            @input="colorShow"
                            v-model="backgroundColor"
                    ></color-picker>
                </div>
                <image-uploader
                        :preview="false"
                        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                        capture="environment"
                        :debug="0"
                        doNotResize="gif"
                        :autoRotate="true"
                        outputFormat="verbose"
                        @input="setImage"
                >
                </image-uploader>
            </div>
        </form>
    </div>
</template>

<script>
    import listItem from './addListItem'
    import ClickOutside from 'vue-click-outside'

    export default {
        name: "AddItem",
        computed: {
            todos() {
                return this.$store.state.todos
            }
        },
        components: {
            listItem
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
                },
                progress: null,
                error: null,
                hasImage: false,
                image: null
            }
        },
        methods: {
            addNewItem() {
                if (this.$refs.project.value) {
                    let lastItemID = 0;
                    if (this.$store.state.todos.length) {
                        lastItemID = Math.max.apply(Math, this.$store.state.todos.map(function(x){return x.id})) + 1;
                    }
                    let newItemList = [];
                    this.$store.state.newItemList.forEach(function (element) {
                        if (element.content) {
                            newItemList.push(element)
                        }
                    });
                    const newItem = {
                        id: lastItemID,
                        image: this.image,
                        title: this.$refs.title.value,
                        project: this.$refs.project.value,
                        doneCheck: false,
                        pinned: this.pinStatus,
                        bgc: {backgroundColor: this.backgroundColor},
                        list: newItemList
                    };
                    this.$refs.title.value = '';
                    this.$refs.project.value = '';
                    this.backgroundColor = '';
                    this.image = false;
                    this.$store.state.newItemList = [{checked: false, id: 0, visited: false, content: ''}];
                    this.$store.commit('addGlobalItem', newItem);
                    this.formVisibility = false
                }
            },
            setImage: function(output) {
                this.hasImage = true;
                this.image = output;
            },
            formShow() {
                this.formVisibility = true
            },
            formClose() {
                this.addNewItem();
                if (this.addItemStates.listVisibility) this.listShow();
                if (this.addItemStates.colorVisibility) this.colorShow();
                this.image = null;
                this.formVisibility = false
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
            textareaResize() {
                this.$refs.project.style.minHeight = this.$refs.project.scrollHeight + 'px';
            }
        },
        directives: {
            ClickOutside
        }
    }
</script>

<style lang="scss">

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
