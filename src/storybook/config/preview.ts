import '@/index.css'

import type { Preview } from '@storybook/react-vite'
import { initialize, mswLoader } from 'msw-storybook-addon'

import { withTheme } from '../decorators'
import { globalTypes } from './globalTypes'

// Initialize MSW
initialize({ quiet: true, onUnhandledRequest: 'bypass' })

const preview: Preview = {
  globalTypes,

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        order: ['Introduction', 'App', 'Components', '*']
      }
    },
    a11y: { test: 'error' }
  },

  loaders: [mswLoader],

  decorators: [withTheme]
}

export default preview
