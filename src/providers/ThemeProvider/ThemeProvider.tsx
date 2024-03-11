import { Atom, useAtom, useSetAtom } from 'jotai'
import React, { useEffect } from 'react'
import { createContext } from 'react'

import { isDark, themeAtom } from '@/store/theme'
import { DARK_CLASS, setDarkMode, THEME_KEY } from '@/utils/setDarkMode'

type ThemeProviderValue = {
  isDark?: boolean | Atom<boolean>
  toggleDarkMode?: () => void
}

type ThemeProviderProps = {
  children?: React.ReactNode
}

export const ThemeContext = createContext<ThemeProviderValue>({})

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const setStoreTheme = useSetAtom(themeAtom)
  const [showDark] = useAtom(isDark)

  const toggleDarkMode = (): void => {
    const newTheme = showDark ? '' : DARK_CLASS
    setStoreTheme(newTheme)
  }

  // Initial update theme from localStorage
  useEffect(() => {
    const restoredTheme = localStorage.getItem(THEME_KEY)
    if (restoredTheme === DARK_CLASS) setStoreTheme(restoredTheme)
  }, [])

  useEffect(() => {
    setDarkMode(showDark)
  }, [showDark])

  return (
    <ThemeContext.Provider
      value={{
        isDark: showDark,
        toggleDarkMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
