import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

import { DARK_CLASS, setDarkMode, THEME_KEY } from '@/utils/setDarkMode'

type ThemeProviderValue = {
  isDark: boolean
  toggleDarkMode?: (value?: boolean) => void
}

type ThemeProviderProps = {
  theme?: string
  children?: React.ReactNode
}

export const ThemeContext = createContext<ThemeProviderValue>({ isDark: false })

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const savedTheme = theme || localStorage.getItem(THEME_KEY)
  const [isDark, setIsDarkMode] = useState(savedTheme === DARK_CLASS)

  const toggleDarkMode = (): void => {
    const currentDark = !isDark
    setIsDarkMode(currentDark)
    setDarkMode(currentDark)
  }

  // Set isDark on mount
  useEffect(() => {
    setDarkMode(isDark)
  })

  // Update isDark when theme is changed externally
  useEffect(() => {
    setIsDarkMode(theme === DARK_CLASS)
    setDarkMode(theme === DARK_CLASS)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleDarkMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
