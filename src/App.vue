<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script>
  import TodoList from './components/TodoList'
export default {
  name: 'app',
  components: {
    TodoList
  },
  computed: {
    checked: function () {
      return this.$store.selectedItems;
    }
  }
}
</script>

<style>
  #app {
  }
  body {
    hyphens: auto;
  }
  * {
    transition: .4s ease all;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }
  *:visited {
    color: inherit;
  }
</style>
