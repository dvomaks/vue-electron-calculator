<template>
    <div id="app" :style="{
        'width': window.width + 'px',
        'height': window.height + 'px',
        'background-image': 'url(static/bg/' + window.background + '.jpg)'
      }">

        <toolbar></toolbar>
        <screen></screen>
        <keyboard></keyboard>

    </div>
</template>

<script>
  import Toolbar from './components/Toolbar.vue'
  import Screen from './components/Screen.vue'
  import Keyboard from './components/Keyboard.vue'

  export default {
    name: 'my_calc',
    data () {
      return {
        window: this.$store.getters.getWindow
      }
    },
    created () {
      this.$store.dispatch('fillBgList')
    },
    components: {Toolbar, Screen, Keyboard},
    methods: {

    }
  }
</script>

<style>
    @import "~font-roboto/dist/styles/roboto.css";
    @import "~vue-ionicons/ionicons/css/ionicons.css";
    @import "~vue-material/dist/vue-material.css";

    body {
        overflow-x: hidden;
        overflow-y: hidden;
    }

    #app{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>
