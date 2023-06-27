import { describe, expect, it } from 'vitest'

import { DARK_CLASS, setDarkMode, THEME_KEY } from '../setDarkMode'

describe('utils/setDarkMode', () => {
  it('Should unset local storage theme', async () => {
    setDarkMode()
    const theme = window.localStorage.getItem(THEME_KEY)
    expect(theme).toBeNull()
  })

  it('Should set local storage theme', async () => {
    setDarkMode(true)
    const theme = window.localStorage.getItem(THEME_KEY)
    expect(theme).toBe(DARK_CLASS)
  })
})
