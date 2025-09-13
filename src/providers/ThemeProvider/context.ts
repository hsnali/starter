import { createContext } from 'react'

import { ThemeProviderValue } from './types'

export const ThemeContext = createContext<ThemeProviderValue>({
  isDark: false,
  toggleDarkMode: () => null
})
