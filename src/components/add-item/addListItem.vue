<template>
    <div>
        <table>
            <tbody>
                <tr v-for="row in rows" :key="row.id">
                    <td class="list-item">
                        <input v-on:keyup.enter="nextItemFocus(row.id, row.content)" :id="row.id" v-bind:class="{checked: row.checked}" placeholder="Input List Item" class="list-input" type="text" v-model="row.content" @focusin="addItem(row)" @focusout="addItem(row)">
                        <label :for="row.id"></label>
                        <span class="check-status" v-if="row.visited" @click="checkListItem(row)"><i class="far fa-check-circle"></i></span>
                        <span class="delete-list" v-if="row.visited" @click="deleteRow(row)"><i class="fas fa-times"></i></span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "addListItem",
        computed: {
            rows: function () {
                return this.$store.state.newItemList
            }
        },
        methods: {
            addItem(row) {
                if (!row.content && row.visited) {
                    const ID = this.rows.map(function (x) {return x.id}).indexOf(row.id);
                    this.rows.splice(ID, 1);
                }
                if (!row.content && !row.visited) {
                    const ID = (this.rows[this.rows.length - 1]).id + 1;
                    this.rows.push({id: ID, visited: false, content: '', checked: false});
                    row.visited = true;
                }
            },
            deleteRow(row) {
                const deleteItemIndex = this.rows.findIndex(x => x.id === row.id);
                this.rows.splice(deleteItemIndex, 1);
            },
            checkListItem(row) {
                row.checked = row.checked !== true;
            },
            nextItemFocus(id, status) {
                if (status) {
                    document.getElementById(id + 1).focus()
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .list-wrapper {
        width: 100%;

        table {
            tr:not(first-child) {
                .list-item {
                    input {
                        margin-top: -5px;
                    }
                }
            }

            width: 100%;

            .list-item {
                position: relative;

                .delete-list,
                .check-status {
                    position: absolute;
                    transform: translateY(-70%);
                    top: 50%;
                    cursor: pointer;

                    i {
                        font-size: 12px;
                    }
                }

                .check-status {
                    left: 10px
                }

                .delete-list {
                    right: 10px
                }

                input {
                    margin: 0;
                    font-size: 12px;
                    outline: none;
                    padding: 7px 15px 7px 40px;
                    border-bottom: 1px solid #eee;
                    border-radius: 0;
                    color: black;
                    width: 100%;
                    background-color: transparent;
                    box-sizing: border-box;

                    &::placeholder {
                        color: black;
                    }

                    &.checked {
                        border-color: black;
                    }
                }
            }
        }
    }

</style>