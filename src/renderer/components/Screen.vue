<template>
  <div>
    <md-card class="screen">
      <md-card-content class="screen-text">
        <span class="md-display-3" v-html="screen"></span>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'screen',
    components: {},
    computed: {
      screen () {
        return this.$store.getters.getScreen
      }
    }
  }
</script>

<style>
  .screen{
    border-radius: 0;
  }
  .screen-text{
    min-height: 100px;
  }
  .md-theme-default .md-display-3{
    color: aliceblue !important;
  }
  .md-theme-default.md-card {
    background-color: rgba(0, 0, 0, 0.8) !important;
  }
</style>
