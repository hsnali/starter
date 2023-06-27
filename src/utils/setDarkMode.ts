export const THEME_KEY = 'theme'
export const DARK_CLASS = 'dark'
export const setDarkMode = (darkMode = false) => {
  if (darkMode) {
    document.documentElement.classList.add(DARK_CLASS)
    localStorage.setItem(THEME_KEY, DARK_CLASS)
  } else {
    document.documentElement.classList.remove(DARK_CLASS)
    localStorage.removeItem(THEME_KEY)
  }
}
