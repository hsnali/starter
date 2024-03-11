import { useContext } from 'react'

import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '@/assets/icons/sun.svg'
import { ThemeContext } from '@/providers'

export const DarkMode = () => {
  const { toggleDarkMode, isDark } = useContext(ThemeContext)

  return (
    <button
      data-testid="dark-mode-button"
      onClick={toggleDarkMode}
      className="absolute right-4 top-4 z-10 rounded-full p-1"
    >
      <span className="sr-only">Toggle Dark Mode</span>
      {isDark ? (
        <MoonIcon data-testid="dark-mode-moon" className="text-gray-100" />
      ) : (
        <SunIcon data-testid="dark-mode-sun" className="text-yellow-600" />
      )}
    </button>
  )
}
