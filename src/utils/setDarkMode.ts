const DARK_CLASS = 'dark'
export const setDarkMode = (darkMode = false) => {
  if (darkMode) {
    document.documentElement.classList.add(DARK_CLASS)
    localStorage.setItem('theme', DARK_CLASS)
  } else {
    document.documentElement.classList.remove(DARK_CLASS)
    localStorage.removeItem('theme')
  }
}
