<template>
  <div id="app" data-app="nariman">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  #app {
    min-height: 100vh;
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
