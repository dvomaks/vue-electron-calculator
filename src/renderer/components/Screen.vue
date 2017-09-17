<template>
  <div>
    <md-card class="screen">
      <md-card-content class="screen-block">
        <div class="md-display-3 screen-text" v-html="screen"></div>
        <md-button class="md-icon-button backspace-btn" @click="backspace">
          <md-icon md-iconset="ion-backspace-outline"></md-icon>
        </md-button>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'screen',
    components: {},
    created () {
      window.addEventListener('keydown', this.pressKeyboardKey)
    },
    computed: {
      screen () {
        return this.$store.getters.getScreen
      }
    },
    methods: {
      backspace () {
        this.$store.commit('backspace')
      },
      pressKeyboardKey (e) {
        if (e.key === 'Backspace') {
          this.backspace()
        }
      }
    }
  }
</script>

<style>
  .screen{
    border-radius: 0;
  }
  .screen-block{
    height: 100px;
    width: 400px;
  }
  .md-theme-default .md-display-3{
    color: aliceblue !important;
  }

  .screen-text{
    float: left;
    width: 315px;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .backspace-btn{
    color: aliceblue !important;
    margin-top: 15px !important;
    float: right;
  }

  .md-theme-default.md-card {
    background-color: rgba(0, 0, 0, 0.8) !important;
  }
</style>
