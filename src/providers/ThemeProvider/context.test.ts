import { renderHook } from '@testing-library/react'
import { useContext } from 'react'
import { describe, expect, it } from 'vitest'

import { ThemeContext } from './context'

describe('ThemeContext', () => {
  it('should be created with default values', () => {
    const { result } = renderHook(() => useContext(ThemeContext))

    expect(result.current).toEqual({
      isDark: false,
      toggleDarkMode: expect.any(Function)
    })
  })

  it('should have the correct default toggleDarkMode implementation', () => {
    const { result } = renderHook(() => useContext(ThemeContext))
    expect(result.current.toggleDarkMode?.()).toBe(null)
  })
})
