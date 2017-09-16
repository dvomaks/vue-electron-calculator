<template>
    <div class="keyboard">
        <md-layout class="actions" md-vertical-align="center">
            <md-layout md-align="center" md-vertical-align="center">
                <md-button @click="pressActionKey" class="actions-btn" data-key="/">
                    &#247;
                </md-button>
            </md-layout>

            <md-layout md-align="center" md-vertical-align="center">
                <md-button @click="pressActionKey" class="actions-btn" data-key="*">
                    &#215;
                </md-button>
            </md-layout>

            <md-layout md-align="center" md-vertical-align="center">
                <md-button @click="pressActionKey" class="actions-btn" data-key="-">
                    &#8722;
                </md-button>
            </md-layout>

            <md-layout md-align="center" md-vertical-align="center">
                <md-button @click="pressActionKey" class="actions-btn" data-key="+">
                    &#43;
                </md-button>
            </md-layout>
        </md-layout>
        <md-layout class="numpad" md-vertical-align="center">
            <md-layout md-flex="100">
                <md-layout md-align="center" md-vertical-align="center">
                    <md-button @click="pressNumKey" class="num-btn"  data-key="7">
                        7
                    </md-button>
                </md-layout>

                <md-layout md-align="center" md-vertical-align="center">
                    <md-button @click="pressNumKey" class="num-btn"  data-key="8">
                        8
                    </md-button>
                </md-layout>

                <md-layout md-align="center" md-vertical-align="center">
                    <md-button @click="pressNumKey" class="num-btn"  data-key="9">
                        9
                    </md-button>
                </md-layout>
            </md-layout>
            <md-layout md-flex="100">
                <md-layout md-align="center" md-vertical-align="center">
                    <md-button @click="pressNumKey" class="num-btn"  data-key="4">
                        4
                    </md-button>
                </md-layout>

                <md-layout md-align="center" md-vertical-align="center">
                    <md-button @click="pressNumKey" class="num-btn"  data-key="5">
                        5
                    </md-button>
                </md-layout>

                <md-layout md-align="center" md-vertical-align="center">
                    <md-button @click="pressNumKey" class="num-btn"  data-key="6">
                        6
                    </md-button>
                </md-layout>
            </md-layout>
            <md-layout md-flex="100">
                <md-layout md-align="center" md-vertical-align="center">
                    <md-button @click="pressNumKey" class="num-btn"  data-key="1">
                        1
                    </md-button>
                </md-layout>

                <md-layout md-align="center" md-vertical-align="center">
                    <md-button @click="pressNumKey" class="num-btn"  data-key="2">
                        2
                    </md-button>
                </md-layout>

                <md-layout md-align="center" md-vertical-align="center">
                    <md-button @click="pressNumKey" class="num-btn"  data-key="3">
                        3
                    </md-button>
                </md-layout>
            </md-layout>
            <md-layout md-flex="100">
                <md-layout md-align="center" md-vertical-align="center">
                    <md-button @click="pressDotKey" class="dot-btn" data-key=".">
                        .
                    </md-button>
                </md-layout>

                <md-layout md-align="center" md-vertical-align="center">
                    <md-button @click="pressNumKey" class="num-btn"  data-key="0">
                        0
                    </md-button>
                </md-layout>

                <md-layout md-align="center" md-vertical-align="center">
                    <md-button @click="pressCalcKey" class="enter-btn" data-key="=">
                        =
                    </md-button>
                </md-layout>
            </md-layout>
        </md-layout>
    </div>
</template>

<script>
    export default {
      name: 'keyboard',
      methods: {
        pressNumKey (e) {
          this.$store.commit('pressNumKey', e.target.dataset.key)
        },
        pressActionKey (e) {
          this.$store.commit('pressActionKey', e.target.dataset.key)
        },
        pressCalcKey () {
          this.$store.commit('pressCalcKey')
        },
        pressDotKey () {
          this.$store.commit('pressDotKey')
        }
      }
    }
</script>

<style>
    .actions {
        background-color: cadetblue;
    }
    .numpad {
        background-color: dimgrey;
        min-height: 300px;
    }

    .actions-btn {
        min-width: inherit;
    }

    .actions-btn, .num-btn{
        color: aliceblue;
        font-size: 50px;
        font-weight: 100;
        padding: 10px;
        width: 100%;
    }

</style>
