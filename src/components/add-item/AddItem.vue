<template>
    <div class="add-form-wrapper">
        <form autocomplete="off" class="add-form" :style="{backgroundColor: backgroundColor}" :class="{pinned: pinStatus}">
            <div v-show="formVisibility">
                <div class="pin-wrapper"><a @click.prevent="pinNewItem" href="#" class="pin-item"><i class="fas fa-map-pin"></i></a></div>
                <div>
                    <input type="text" id="title" placeholder="Insert Title" ref="title">
                    <label for="title"></label>
                </div>
            </div>
            <div>
                <textarea @click="formShow" name="description" id="description" ref="project" placeholder="Insert Content"></textarea>
                <label for="description"></label>
            </div>
            <div v-show="formVisibility">
                <div class="additionals">
                    <a @click.prevent="listShow" href="#"><i class="fas fa-list-ul"></i></a>
                    <a @click.prevent="colorShow" href="#"><i class="fas fa-palette"></i></a>
                    <a @click.prevent="imageShow" href="#"><i class="far fa-image"></i></a>
                </div>
                <div class="list-wrapper" v-if="addItemStates.listVisibility">
                    <listItem></listItem>
                </div>

                <div class="more-wrapper" v-if="addItemStates.colorVisibility">
                    <color-picker
                            inline
                            shapes="circles"
                            swatch-size="24"
                            colors="material-light"
                            v-model="backgroundColor"
                    ></color-picker>
                </div>

                <div v-if="addItemStates.imageVisibility">
                </div>

                <div class="bottom-content">
                    <div class="add-item"><a @click.prevent="addNewItem" href="#">Add Item</a></div>
                    <div class="close"><a @click.prevent="formClose" href="#">Dismiss</a></div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import listItem from './addListItem'

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
                colorVisibility: false,
                listVisibility: false,
                imageVisibility: false,
                progress: null,
                error: null
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
                    const newItem = {id: lastItemID,
                        title: this.$refs.title.value,
                        project: this.$refs.project.value,
                        doneCheck: false,
                        pinned: this.pinStatus,
                        bgc: {backgroundColor: this.backgroundColor},
                        list: newItemList};
                    this.$refs.title.value = '';
                    this.$refs.project.value = '';
                    this.backgroundColor = '';
                    this.$store.state.newItemList = [{checked: false, id: 0, visited: false, content: ''}];
                    this.$store.commit('addGlobalItem', newItem);
                    this.formVisibility = false
                }
            },
            formShow() {
                this.formVisibility = true
            },
            formClose() {
                this.formVisibility = false
            },
            colorShow() {
                this.addItemStates.colorVisibility = this.addItemStates.colorVisibility !== true
            },
            imageShow() {
                this.addItemStates.imageVisibility = this.addItemStates.imageVisibility !== true
            },
            listShow() {
                this.addItemStates.listVisibility = this.addItemStates.listVisibility !== true
            },
            pinNewItem() {
                this.pinStatus = this.pinStatus !== true
            }
        }
    }
</script>

<style lang="scss" scoped>

    .add-form-wrapper {
        margin-top: 35px;

        .add-form {
            box-shadow: 0 3px 5px rgba(0,0,0,0.20);
            position: relative;

            .additionals {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                a {
                    margin: 0 7px;
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
                    font-size: 20px;
                }
            }

            border-radius: 10px;
            border: 1px solid #eee;
            padding: 10px;

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

</style>
