import { useAtom, useSetAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import React, { useEffect } from 'react'

import { isDark, themeAtom } from '@/store/theme'
import { DARK_CLASS, setDarkMode, THEME_KEY } from '@/utils/setDarkMode'

import { ThemeContext } from './context'

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const setStoreTheme = useSetAtom(themeAtom)
  const [showDark] = useAtom(isDark)
  const restoredTheme = (localStorage.getItem(THEME_KEY) as typeof DARK_CLASS | null) ?? ''

  const toggleDarkMode = (): void => {
    const newTheme = showDark ? '' : DARK_CLASS
    setStoreTheme(newTheme)
  }

  // Intitial theme hydration from localStorage
  useHydrateAtoms([[themeAtom, restoredTheme]] as const)

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
