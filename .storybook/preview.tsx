import '../src/index.css'

import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'

// Initialize MSW
initialize()

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    layout: 'fullscreen'
  },

  loaders: [mswLoader]
}

export default preview
