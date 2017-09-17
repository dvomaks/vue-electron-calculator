const state = {
  window: {
    width: 400,
    height: 540,
    background: 'Kitten'
  },
  bgList: []
}

const getters = {
  getWindow (state) {
    return state.window
  },
  getBgList (state) {
    return state.bgList
  }
}

const mutations = {
  setWindow (state, window) {
    state.window = window
  },
  addBgToList (state, bg) {
    state.bgList.push(bg)
  },
  setWindowBg (state, index) {
    state.window.background = state.bgList[index]
  }
}

const actions = {
  fillBgList ({commit}) {
    const fs = require('fs')
    fs.readdir(__static + '/bg', (err, files) => {
      console.log(err)
      files.forEach(file => {
        commit('addBgToList', file.replace(/(\.\/|\.jpg$)/g, ''))
      })
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
