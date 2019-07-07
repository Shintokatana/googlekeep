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
                <input @click="formShow" placeholder="Insert Content" type="text" id="description" ref="project">
                <label for="description"></label>
            </div>
            <div v-show="formVisibility">
                <div><a @click.prevent="listShow" href="#">Add List</a></div>
                <div class="list-wrapper" v-if="listVisibility">
                    <listItem></listItem>
                </div>
                <div class="more-handler"><a @click.prevent="colorShow" href="">Color Picker</a></div>
                <div class="more-wrapper" v-if="colorVisibility">
                    <color-picker
                            inline
                            shapes="circles"
                            swatch-size="24"
                            colors="material-light"
                            v-model="backgroundColor"
                    ></color-picker>
                </div>
                <div class="image-wrapper"><a @click.prevent="imageShow" href="#">Image Choose</a></div>
                <div v-if="imageVisibility">
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
                        lastItemID = this.$store.state.todos[this.$store.state.todos.length -1].id;
                    }
                    let newItemList = [];
                    this.$store.state.newItemList.forEach(function (element) {
                        if (element.content) {
                            newItemList.push(element)
                        }
                    });
                    const newItem = {id: lastItemID + 1,
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
                this.colorVisibility = this.colorVisibility !== true
            },
            imageShow() {
                this.imageVisibility = this.imageVisibility !== true
            },
            listShow() {
                this.listVisibility = this.listVisibility !== true;
                if (!this.listVisibility){
                    this.$store.state.newItemList = [{checked: false, id: 0, visited: false, content: ''}];
                }
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

            &.pinned {
                border-color: black;
                box-shadow: inset 1px 1px 0 black, inset 0 -1px 0 black;
            }

            .pin-wrapper {
                text-align: right;

                .pin-item {
                    font-size: 20px;
                }
            }

            border-radius: 10px;
            border: 1px solid #eee;
            box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1), inset 0 -1px 0 rgba(0, 0, 0, .07);
            padding: 10px;

            input {
                box-sizing: border-box;
                margin: 5px 0;
                box-shadow: inherit;
                color: #80868b;
                border-radius: 10px;
                padding: 10px 16px 10px 16px;
                width: 100%;
                line-height: 1.25em;
                border: 1px solid #eee;

                &:focus {
                    outline: none;
                }
            }

            max-width: 650px;
            margin: 0 auto;
        }
    }

</style>
