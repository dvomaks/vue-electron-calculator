<template>
    <div>
        <md-toolbar>
            <md-button class="md-icon-button">
                <md-icon md-iconset="icon-close"></md-icon>
            </md-button>
            <h2 class="md-title" style="flex:1"></h2>
            <md-button class="md-icon-button" @click="toggleRightSidenav">
                <md-icon md-iconset="icon-arrow-left"></md-icon>
            </md-button>
        </md-toolbar>
        <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
            <md-toolbar>
                <h3 class="md-title" style="flex:1">History</h3>
                <md-button class="md-icon-button" @click="closeRightSidenav">
                    <md-icon md-iconset="icon-arrow-right"></md-icon>
                </md-button>
            </md-toolbar>
            <md-list>
                <md-list-item v-for="item in h">
                    <span v-html="item"></span>
                </md-list-item>
            </md-list>
        </md-sidenav>
    </div>
</template>

<script>
  export default {
    name: 'toolbar',
    data () {
      return {
        h: this.$store.getters.getHistory
      }
    },
    methods: {
      toggleRightSidenav () {
        this.$refs.rightSidenav.toggle()
      },
      closeRightSidenav () {
        this.$refs.rightSidenav.close()
      },
      open (ref) {
        console.log('Opened: ' + ref)
      },
      close (ref) {
        console.log('Closed: ' + ref)
      }
    },
    computed: {
      history () {
        return this.$store.getters.getHistory
      }
    }
  }
</script>

<style>

</style>
