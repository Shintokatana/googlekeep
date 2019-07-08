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
}
</script>

<style>
  body {
    hyphens: auto;
  }
  * {
    transition: .4s ease all;
    font-family: 'Ubuntu', sans-serif;
  }
</style>
