import type { Decorator } from '@storybook/react'

import { ThemeProvider } from '@/providers/ThemeProvider'

export const withTheme: Decorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
)
