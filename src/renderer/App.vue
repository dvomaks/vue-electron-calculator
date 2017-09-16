<template>
    <div id="app">
        <div>
        <toolbar></toolbar>
        <screen></screen>
        <keyboard></keyboard>
        </div>
    </div>
</template>

<script>
  import Toolbar from './components/Toolbar.vue'
  import Screen from './components/Screen.vue'
  import Keyboard from './components/Keyboard.vue'

  export default {
    name: 'my_calc',
    components: {Toolbar, Screen, Keyboard},
    methods: {

    }
  }
</script>

<style>
    @import "~font-roboto/dist/styles/roboto.css";
    @import "~simple-line-icons/css/simple-line-icons.css";
    @import "~vue-material/dist/vue-material.css";

    body,#app{
        width: 400px;
        height: 500px;
    }

</style>
