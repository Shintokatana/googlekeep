<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style lang="scss">
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

  a {
    color: black;

    &:hover {
      color: #42b883;
    }
  }
  *:visited {
    color: inherit;
  }
</style>
