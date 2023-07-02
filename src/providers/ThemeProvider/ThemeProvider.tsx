import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

import { DARK_CLASS, setDarkMode, THEME_KEY } from '@/utils/setDarkMode'

type ThemeProviderProps = {
  children?: React.ReactNode
}

const defaultValue = {
  isDark: false,
  toggleDarkMode: () => {
    return
  }
}

export const ThemeContext = createContext(defaultValue)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const savedTheme = localStorage.getItem(THEME_KEY)
  const [isDark, setIsDarkMode] = useState(savedTheme === DARK_CLASS)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDark)
    setDarkMode(!isDark)
  }

  useEffect(() => {
    setDarkMode(isDark)
  })

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
