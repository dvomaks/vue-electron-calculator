const state = {
  num1: '',
  num2: '',
  action: '',
  history: []
}

const mutations = {
  pressActionKey (state, key) {
    if (state.action === '') {
      if (state.num1 !== '' && state.num2 === '') {
        state.action = key
      } else if (state.num1 === '' && state.num2 !== '') {
        state.num1 = state.num2
        state.num2 = ''
        state.action = key
      }
    } else if (state.action !== '' && state.num1 !== '' && state.num2 !== '') {
      let calc = calculator(state.action, state.num1, state.num2)
      state.history.push(state.num1 + actionView(state.action) + state.num2 + ' = ' + calc)
      state.num1 = calc
      state.num2 = ''
      state.action = key
    }
  },
  pressNumKey (state, key) {
    if (state.action === '') {
      state.num2 = ''
      state.num1 = generateNum(state.num1, key)
    } else {
      state.num2 = generateNum(state.num2, key)
    }
  },
  pressDotKey (state) {
    if (state.action === '') {
      state.num1 = generateNum(state.num1, '.')
    } else {
      state.num2 = generateNum(state.num2, '.')
    }
  },
  pressCalcKey (state) {
    if (state.action !== '' && state.num1 !== '' && state.num2 !== '') {
      let calc = calculator(state.action, state.num1, state.num2)
      state.history.push(state.num1 + actionView(state.action) + state.num2 + ' = ' + calc)
      state.num2 = calc
      state.num1 = ''
      state.action = ''
    }
  }
}

const getters = {
  getScreen (state) {
    return state.num1 + actionView(state.action) + state.num2
  },
  getHistory (state) {
    return state.history
  }
}

export default {
  state,
  mutations,
  getters
}

function generateNum (num, key) {
  const dot = num.toString().indexOf('.') !== -1
  if (num === '') {
    if (dot) {
      return '0.'
    }
  } else {
    if (dot && key === '.') {
      return num.toString()
    }
  }
  return (num + key).toString()
}

function actionView (action) {
  switch (action) {
    case '+':
      return '&#43;'
    case '-':
      return '&#8722;'
    case '*':
      return '&#215;'
    case '/':
      return '&#247;'
    default:
      return ''
  }
}

function calculator (action, a, b) {
  a = Number.isInteger(a) ? parseInt(a) : parseFloat(a)
  b = Number.isInteger(b) ? parseInt(b) : parseFloat(b)

  switch (action) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return a / b
  }
}
