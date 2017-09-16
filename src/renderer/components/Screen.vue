<template>
  <div class="screen">
    <md-card>
      <md-card-content>
        <span class="md-display-3 screen-text" v-html="screen"></span>
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
    min-height: 80px;
    border-radius: 0;
  }

  .screen-text{

  }
</style>
