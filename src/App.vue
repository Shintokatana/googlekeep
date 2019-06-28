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
          id: 0,
          title: 'Test 1',
          project: 'Project A',
          doneCheck: true
        },
        {
          id: 1,
          title: 'Test 2',
          project: 'Project B',
          doneCheck: false
        },
        {
          id: 2,
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
