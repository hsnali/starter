import '../src/index.css'

import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'

import { withTheme } from '../src/stories/decorators'
import { globalTypes } from './globalTypes'

// Initialize MSW
initialize()

const preview: Preview = {
  globalTypes,

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
    }
  },

  loaders: [mswLoader],

  decorators: [withTheme]
}

export default preview
