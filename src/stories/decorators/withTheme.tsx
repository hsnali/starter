import type { Decorator } from '@storybook/react'

import { ThemeProvider } from '@/providers'
import { DARK_CLASS, THEME_KEY } from '@/utils/setDarkMode'

export const withTheme: Decorator = (Story, { globals, parameters }) => {
  const globalTheme = globals['theme']
  const isDarkGlobal = globalTheme === DARK_CLASS
  const isDarkParam = parameters.localStorage[THEME_KEY] === DARK_CLASS
  const isDark = isDarkGlobal || isDarkParam

  const theme = isDark ? DARK_CLASS : ''

  // Override localStorage - workaroudn for withThemes being high order than withLocalStorage
  window.localStorage.setItem(THEME_KEY, theme)

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}
