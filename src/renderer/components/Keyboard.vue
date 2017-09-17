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
                    <md-button @click="pressCalcKey" class="enter-btn md-fab md-warn" data-key="=">
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
      created () {
        window.addEventListener('keypress', this.pressKeyboardKey)
      },
      methods: {
        pressNumKey (e, press) {
          if (press) {
            this.$store.commit('pressNumKey', e)
          } else {
            this.$store.commit('pressNumKey', e.target.dataset.key)
          }
        },
        pressActionKey (e, press) {
          if (press) {
            this.$store.commit('pressActionKey', e)
          } else {
            this.$store.commit('pressActionKey', e.target.dataset.key)
          }
        },
        pressCalcKey () {
          this.$store.commit('pressCalcKey')
        },
        pressDotKey () {
          this.$store.commit('pressDotKey')
        },
        pressKeyboardKey (e) {
          if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            this.pressActionKey(e.key, true)
          } else if (e.key === '0' || e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9') {
            this.pressNumKey(e.key, true)
          } else if (e.key === '.') {
            this.pressDotKey()
          } else if (e.key === 'Enter') {
            this.pressCalcKey()
          }
        }
      }
    }
</script>


<style>
    .actions {
        background-color: rgba(0, 0, 0, 0.5);
    }
    .numpad {
        min-height: 300px;
    }

    .actions-btn {
        min-width: inherit;
    }

    .actions-btn, .num-btn, .dot-btn{
        color: aliceblue;
        font-size: 50px;
        font-weight: 100;
        padding: 10px;
        width: 100%;
    }

    .dot-btn, .num-btn{
        background-color: rgba(0, 0, 0, 0.2);
    }

    .enter-btn{
        font-weight: 100;
        font-size: 50px;
    }

</style>
