<template>
    <div class="nariman-keep" :class="{logged: this.$store.getters.getAuth}">
        <Sidebar class="sidebar" v-if="this.$store.getters.getAuth"/>
        <TodoList class="main"/>
    </div>
</template>

<script>
    import TodoList from '../../components/TodoList.vue'
    import Sidebar from '../../sidebar/sidebar'

    export default {
        name: "Home",
        components: {
            TodoList,
            Sidebar,
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">

    .nariman-keep {
        display: block;
        min-height: 100vh;

        &.logged {
            display: flex;
            flex-direction: row;

            .sidebar {
                flex: 0 1 5%;
                max-width: 5%;
            }

            .main {
                flex: 0 1 95%;
                max-width: 95%;
            }
        }

        .main {
            display: block;
            max-width: 100%;
        }
    }
</style>
