<template>
    <div class="image-draw-wrap" :class="{done: drawStatus}" data-app="drawApp">
        <canvas ref="canvas" id='drawing-pad' width='620' height='300' v-show="!drawStatus"></canvas>
        <div class="line-width-wrap" v-show="visibilityOptions.lineVisibility">
            <v-slider
                    v-model="lineWidth"
                    thumb-label
                    max="10"
                    min="1"
                    background-color="transparent"
                    color="#42b883">
            </v-slider>
        </div>
        <div class="color-wrap" v-show="visibilityOptions.colorVisibility">
            <v-color-picker
                    v-model="color"
                    hide-inputs
                    hide-canvas>
            </v-color-picker>
        </div>
        <div class="draw-controls">
            <a @click.prevent="resetCanvas" href="#"><i class="far fa-trash-alt"></i></a>
            <a @click.prevent="saveImage" href="#"><i class="far fa-save"></i></a>
            <a @click.prevent="editCanvas" href="#"><i class="fas fa-edit"></i></a>
            <a @click.prevent="showColorPicker" href="#"><i class="fas fa-palette"></i></a>
            <a @click.prevent="showWidthController" href="#"><i class="fas fa-slash"></i></a>
        </div>
    </div>
</template>

<script>
    import ClickOutside from 'vue-click-outside'

    export default {
        name: "addItemDrawing",
        data() {
            return{
                canvas: null,
                context: null,
                isDrawing: false,
                startX: 0,
                startY: 0,
                points: [],
                drawStatus: false,
                lineWidth: 1,
                color: '',
                visibilityOptions: {
                    lineVisibility: false,
                    colorVisibility: false
                }
            }
        },
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
        mounted(){
            let vm = this;
            vm.canvas = vm.$refs.canvas;
            vm.context = vm.canvas.getContext("2d");
            vm.canvas.addEventListener('mousedown', vm.mousedown);
            vm.canvas.addEventListener('mousemove', vm.mousemove);
            document.addEventListener('mouseup', vm.mouseup);
        },
        methods: {
            mousedown(e) {
                let vm = this,
                    rect = vm.canvas.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                vm.isDrawing = true;
                vm.startX = x;
                vm.startY = y;
                vm.points.push({
                    x: x,
                    y: y
                });
            },
            mousemove(e) {
                let vm = this,
                    rect = vm.canvas.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                if (vm.isDrawing) {
                    vm.context.beginPath();
                    vm.context.moveTo(vm.startX, vm.startY);
                    vm.context.lineTo(x, y);
                    vm.context.lineWidth = this.lineWidth;
                    vm.context.lineCap = 'round';
                    vm.context.strokeStyle = this.color;
                    vm.context.stroke();

                    vm.startX = x;
                    vm.startY = y;

                    vm.points.push({
                        x: x,
                        y: y
                    });
                }
            },
            mouseup() {
                let vm = this;
                vm.isDrawing = false;
                if (vm.points.length > 0) {
                    localStorage['points'] = JSON.stringify(vm.points);
                }
            },
            resetCanvas() {
                this.visibilityOptions.lineVisibility = false;
                this.visibilityOptions.colorVisibility = false;
                let vm = this;
                vm.canvas.width = 620;
                vm.points.length = 0;
                vm.drawStatus = false;
                this.image = {dataUrl: ''}
            },
            saveImage() {
                this.visibilityOptions.lineVisibility = false;
                this.visibilityOptions.colorVisibility= false;
                let vm = this,
                imgSrc = vm.canvas.toDataURL();
                this.drawStatus = true;
                this.image = {dataUrl: imgSrc}
            },
            editCanvas() {
                this.image = {};
                if (this.drawStatus === true ) {
                    this.drawStatus = false
                }
            },
            showWidthController() {
                this.visibilityOptions.lineVisibility = true !== this.visibilityOptions.lineVisibility;
                this.visibilityOptions.colorVisibility = false
            },
            showColorPicker() {
                this.visibilityOptions.colorVisibility = true !== this.visibilityOptions.colorVisibility;
                this.visibilityOptions.lineVisibility = false
            }
        },
        directives: {
            ClickOutside
        }
    }
</script>

<style scoped lang="scss">

    .image-draw-wrap {
        position: relative;
        border: 1px solid #eee;
        border-radius: 10px;
        overflow: hidden;

        .draw-controls {
            display: block;
            padding: 10px;
            a {
                font-size: 16px;
                color: black;
                margin-right: 10px;

                &:hover {
                    color: #42b883;
                }
            }
        }

        .line-width-wrap,
        .color-wrap {
            display: block;
            position: absolute;
            bottom: 40px;
            right: auto;
            left: 10px;
            top: auto;
            width: 50%;
        }

        &.done {
            border-color: #eee;
            box-shadow: 0 0 5px 5px #eeeeee;
        }
    }

</style>
