import React from 'react'
import type { Preview } from '@storybook/react'
import '../src/index.css'
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
