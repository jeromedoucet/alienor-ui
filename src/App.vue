<template>
  <div id="app" class="container-fluid app">
    <auth></auth>
  </div>
</template>

<script>
  import Auth from './components/Auth'

  export default {
    components: {
      Auth
    }
  }
</script>
<style>
  .app {
    zoom: 65%;
  }
</style>
