import { useEffect, useState } from 'react'

import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '@/assets/icons/sun.svg'
import { DARK_CLASS, setDarkMode } from '@/utils/setDarkMode'

export const DarkMode = () => {
  const savedTheme = localStorage.getItem('theme')
  const [isDark, setIsDarkMode] = useState(savedTheme === DARK_CLASS)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDark)
    setDarkMode(!isDark)
  }

  useEffect(() => {
    setDarkMode(isDark)
  })

  return (
    <button onClick={toggleDarkMode} className="absolute right-4 top-4 z-10 rounded-full p-1">
      <span className="sr-only">Toggle Dark Mode</span>
      {isDark ? (
        <MoonIcon data-testid="dark-mode-moon" className="text-gray-100" />
      ) : (
        <SunIcon data-testid="dark-mode-sun" className="text-yellow-600" />
      )}
    </button>
  )
}
