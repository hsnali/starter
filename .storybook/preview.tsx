import React from 'react'

import { initialize, mswLoader } from 'msw-storybook-addon'
import type { Preview } from '@storybook/react'

import '../src/index.css'

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
    layout: 'fullscreen',
    darkMode: ''
  },

  loaders: [mswLoader],

  decorators: [
    (Story, { parameters }) => {
      return (
        <div className={`${parameters.darkMode}`}>
          <Story />
        </div>
      )
    }
  ]
}

export default preview
