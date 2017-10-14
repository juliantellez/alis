import ColorTheme from 'scripts/api/definitions/ColorTheme'

const themes = {
  light: {
    backgroundColor: '#FFFFFF',
    color: '#141414',
  },
  dark: {
    backgroundColor: '#141414',
    color: '#A7A7A7',
  },
}

const setTheme = type => new ColorTheme({type, styles: themes[type]})

const toggleColorTheme = prevState => {
  const type = prevState.type === 'light' ? 'dark' : 'light'
  return setTheme(type)
}

const colorTheme = (state = setTheme('light'), action) => {
  switch (action.type) {
    case 'TOGGLE_COLOR_THEME' : return toggleColorTheme(state)
    default: return state
  }
}

export default colorTheme
