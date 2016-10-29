<template>
  <div id="app" class="app">
    <nav class="navbar navbar-default navbar-static">
      <div class="container-fluid bg-header">
        <div class="navbar-header">
          <router-link :to="{ name: 'root'}">
            <span class="navbar-brand">Alienor</span>
          </router-link>
        </div>
        <div class="nav navbar-nav navbar-right">
          <router-link class="navbar-text" :to="{ name: 'sign-in'}">#Signin</router-link>
          <router-link class="navbar-text" :to="{ name: 'authentication'}">#Authentication</router-link>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
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
  html {
    background: url("./assets/bg.png") no-repeat center center fixed;;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  body {
    background-color: transparent !important;
  }

  .bg-header {
    background: url("./assets/header.png") no-repeat center center fixed;;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .app {
    zoom: 85%;
    background-color: transparent;
  }

  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    padding-left: 10px;
    opacity: 0;
  }
</style>
