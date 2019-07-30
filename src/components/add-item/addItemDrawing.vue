<template>
    <div class="image-draw-wrap" :class="{done: drawStatus}">
        <canvas ref="canvas" id='drawing-pad' width='620' height='300' v-show="!drawStatus"></canvas>
        <img ref="img" src="" alt="" id='canvas-image' v-show="drawStatus">
        <div class="draw-controls">
            <a @click.prevent="resetCanvas" href="#"><i class="far fa-trash-alt"></i></a>
            <a @click.prevent="saveImage" href="#"><i class="far fa-save"></i></a>
            <a @click.prevent="editCanvas" href="#"><i class="fas fa-edit"></i></a>
        </div>
    </div>
</template>

<script>
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
                drawStatus: false
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
                    vm.context.lineWidth = 1;
                    vm.context.lineCap = 'round';
                    vm.context.strokeStyle = "rgba(0,0,0,1)";
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
                let vm = this;
                vm.canvas.width = 620;
                vm.points.length = 0;
                vm.drawStatus = false;
            },
            saveImage() {
                let vm = this,
                    img = vm.$refs.img;
                img.src = vm.canvas.toDataURL();
                this.drawStatus = true;
                this.$store.commit('addNewItemDrawing', img)
            },
            editCanvas() {
                if (this.drawStatus === true ) {
                    this.drawStatus = false
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .image-draw-wrap {
        border: 1px solid #eee;
        border-radius: 10px;
        overflow: hidden;

        &.done {
            border-color: black;
        }
    }

</style>