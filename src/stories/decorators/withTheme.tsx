// import {} from '@storybook/manager-api'
import type { Decorator } from '@storybook/react'

import { ThemeProvider } from '@/providers'

export const withTheme: Decorator = (Story, { globals }) => {
  const theme = globals['theme'] || ''

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}
