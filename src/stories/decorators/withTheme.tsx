import type { Decorator } from '@storybook/react'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

import { ThemeProvider } from '@/providers'
import { themeAtom } from '@/store/theme'
import { DARK_CLASS, THEME_KEY } from '@/utils/setDarkMode'

export const withTheme: Decorator = (Story, { globals, parameters }) => {
  const setStoreTheme = useSetAtom(themeAtom)

  const isDarkGlobal = globals['theme'] === DARK_CLASS
  const isDarkParam = parameters.localStorage ? parameters.localStorage[THEME_KEY] === DARK_CLASS : false
  const theme = isDarkGlobal || isDarkParam ? DARK_CLASS : ''

  useEffect(() => {
    setStoreTheme(theme)
  }, [theme, setStoreTheme])

  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
}
