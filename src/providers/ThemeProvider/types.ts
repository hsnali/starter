import type { Atom } from 'jotai'

export type ThemeProviderValue = {
  isDark?: boolean | Atom<boolean>
  toggleDarkMode?: () => void
}
