import type { Decorator } from '@storybook/react'
import { useEffect } from 'react'

import { ThemeProvider } from '@/providers'
import { DARK_CLASS, THEME_KEY } from '@/utils/setDarkMode'

export const withTheme: Decorator = (Story, { globals, parameters }) => {
  const isDarkGlobal = globals['theme'] === DARK_CLASS
  const isDarkParam = parameters.localStorage ? parameters.localStorage[THEME_KEY] === DARK_CLASS : false
  const theme = isDarkGlobal || isDarkParam ? DARK_CLASS : ''

  console.log('theme chnage', theme)

  useEffect(() => {
    // Override localStorage - workaroudn for withThemes being high order than withLocalStorage
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}
