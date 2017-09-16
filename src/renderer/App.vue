<template>

  <div id="app">
    <div class="app-background">
    <div class="app-container">
      <toolbar></toolbar>
      <screen></screen>
      <keyboard></keyboard>
    </div>
    </div>
  </div>
</template>

<script>
  import Toolbar from './components/Toolbar.vue'
import Screen from './components/Screen.vue'
import Keyboard from './components/Keyboard.vue'

export default {
    name: 'my_calc',
    components: {
      Toolbar,
      Screen,
      Keyboard
    }
  }
</script>

<style>

  @import "~font-roboto/dist/styles/roboto.css";
  @import "~simple-line-icons/css/simple-line-icons.css";

  html, body {
    display: block;
    margin: 0;
    padding: 0;
    color: azure;
    font-family: 'Roboto';
    font-weight: 100;
  }

  .app-background, .app-container{
    width: 320px;
    height: 520px;
  }

  .app-background {
    display: block;
    background-image: url('https://hdwallsource.com/img/2014/10/grass-background-18855-19335-hd-wallpapers.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .app-container {
    display: block;
  }
</style>
