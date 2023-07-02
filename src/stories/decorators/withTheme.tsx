import type { Decorator } from '@storybook/react'

import { defaultValue, ThemeProvider } from '@/providers/ThemeProvider'

export const withTheme: Decorator = (Story) => (
  <ThemeProvider value={defaultValue}>
    <Story />
  </ThemeProvider>
)
