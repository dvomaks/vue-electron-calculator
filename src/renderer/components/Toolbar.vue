<template>
    <div class="toolbar">
        <div class="toolbar-btn-left">
            <i class="icon-close"></i>
        </div>
        <div class="toolbar-btn-right">
            <i class="icon-menu"></i>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'toolbar',
    components: {},
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style>
    .toolbar{
        height: 25px;
        width: 300px;
        -ms-overflow-style: scrollbar;
        -webkit-app-region:drag;
        padding: 10px;
    }

    .toolbar-btn-left, .toolbar-btn-right {
        display: inline;
        font-size: 25px;
    }
    
    .toolbar-btn-left {
        float: left;
    }
    
    .toolbar-btn-right{
        float: right;
    }
</style>
