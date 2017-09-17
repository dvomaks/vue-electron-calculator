<template>
    <div>
        <md-toolbar class="toolbar">
            <md-button class="md-icon-button no-drag" @click="appQuit">
                <md-icon md-iconset="icon-close"></md-icon>
            </md-button>
            <h2 class="md-title" style="flex:1"></h2>
            <md-button class="md-icon-button no-drag" @click="toggleMenuSidenav">
                <md-icon md-iconset="icon-menu"></md-icon>
            </md-button>
        </md-toolbar>

        <md-sidenav class="md-right sidebar-menu" ref="menuSidenav">
            <div class="sidebar-history-bg"
                 :style="{
                    'height': window.height + 'px',
                    'margin-bottom': '-' + window.height + 'px',
                    'background-image': 'url(static/bg/' + window.background + '.jpg)'
                 }">
            </div>
            <md-toolbar>
                <h3 class="md-title" style="flex:1">Menu</h3>
                <md-button class="md-icon-button" @click="closeMenuSidenav">
                    <md-icon md-iconset="icon-arrow-right"></md-icon>
                </md-button>
            </md-toolbar>

        <div class="sidenav-content" :style="{height: window.height - 120 + 'px'}">
            <transition name="fade" mode="out-in">
            <md-list v-if="menu.history">
                <md-list-item v-for="item in historyList" v-bind:data="item" v-bind:key="historyList.index">
                    <span v-html="item"></span>
                </md-list-item>
            </md-list>
                <div v-if="menu.backgrounds">
            <md-card  v-for="(item, index) in bgList" v-bind:data="item" v-bind:key="bgList.index">
                <md-card-media-cover md-text-scrim>
                    <md-card-media>
                        <img class="bg-item" :src="'static/bg/'+item+'.jpg'" :alt="item">
                    </md-card-media>
                    <md-card-area>
                        <md-card-header>
                            <div class="md-subhead">
                                {{ item }}
                            </div>
                        </md-card-header>
                        <md-card-actions>
                            <md-button
                                    class="md-icon-button md-raised md-primary"
                                    :disabled="item == window.background"
                                    @click="changeBackground(index)"
                            >
                                <md-icon><i class="icon-rocket"></i></md-icon>
                            </md-button>
                        </md-card-actions>
                    </md-card-area>
                </md-card-media-cover>
            </md-card>
                </div>
            </transition>
        </div>
            <md-bottom-bar class="menu-bottom-bar">
                <md-bottom-bar-item md-iconset="icon-hourglass" md-active @click="showMenuContent('history')">History</md-bottom-bar-item>
                <md-bottom-bar-item md-iconset="icon-picture" @click="showMenuContent('backgrounds')">Backgrounds</md-bottom-bar-item>
            </md-bottom-bar>
        </md-sidenav>

    </div>
</template>

<script>
  const remote = require('electron').remote
  export default {
    name: 'toolbar',
    data () {
      return {
        historyList: this.$store.getters.getHistory,
        window: this.$store.getters.getWindow,
        bgList: this.$store.getters.getBgList,
        w: remote.getCurrentWindow(),
        menu: {
          history: true,
          backgrounds: false
        }
      }
    },
    methods: {
      showMenuContent (item) {
        for (let key in this.menu) {
          this.menu[key] = false
        }
        this.menu[item] = true
      },
      toggleMenuSidenav () {
        this.$refs.menuSidenav.toggle()
      },
      closeMenuSidenav () {
        this.$refs.menuSidenav.close()
      },
      appQuit () {
        this.w.close()
      },
      changeBackground (index) {
        console.log(index)
        this.$store.commit('setWindowBg', index)
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
    .toolbar {
        -webkit-user-select: none;
        -webkit-app-region: drag;
    }

    .toolbar:hover{
        cursor: move;
    }

    .no-drag {
        -webkit-app-region: no-drag;
    }

    .sidenav-content{
        overflow-y: scroll;
    }

    .sidebar-history-bg {
        width: 100%;
        opacity: 0.1;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .bg-item{
        height: 98px !important;
        object-fit: cover;
    }

    .md-theme-default.md-list {
        background-color: transparent !important;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
