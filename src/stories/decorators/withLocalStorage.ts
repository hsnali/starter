import type { Decorator } from '@storybook/react'

export const withLocalStorage: Decorator = (Story, { parameters }) => {
  const localStorage = (parameters?.localStorage as Record<string, string>) || {}

  Object.entries(localStorage).forEach(([key, value]) => {
    window.localStorage.setItem(key, value)
  })

  return Story()
}
