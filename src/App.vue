<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
</template>

<script>
  import TodoList from './components/TodoList'
export default {
  name: 'app',
  components: {
    TodoList
  },
  data() {
    return {
      todos: [
        {
          title: 'Test 1',
          project: 'Project A',
          doneCheck: true
        },
        {
          title: 'Test 2',
          project: 'Project B',
          doneCheck: false
        },
        {
          title: 'Test 3',
          project: 'Project C',
          doneCheck: false
        }
      ]
    }
  }
}
</script>

<style>
</style>
