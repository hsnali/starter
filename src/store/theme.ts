import { atom } from 'jotai'

import { DARK_CLASS } from '@/utils/setDarkMode'

export const themeAtom = atom<typeof DARK_CLASS | ''>('')
export const isDark = atom((get) => get(themeAtom) === DARK_CLASS)
