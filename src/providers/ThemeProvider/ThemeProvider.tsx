import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

import { DARK_CLASS, setDarkMode, THEME_KEY } from '@/utils/setDarkMode'

import { defaultValue } from './constants'

type ThemeProviderValue = {
  isDark: boolean
  toggleDarkMode: (value?: boolean) => void
}

type ThemeProviderProps = {
  children?: React.ReactNode
}

export const ThemeContext = createContext<ThemeProviderValue>(defaultValue)

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
