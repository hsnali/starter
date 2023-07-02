import { faker } from '@faker-js/faker'
import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { waitFor, within } from '@storybook/testing-library'

import App from '@/App'
import { useWithReactQuery, withLocalStorage, withTheme } from '@/stories/decorators'
import { mockCatFact } from '@/tests/handlers/mockCatFact'
import { DARK_CLASS, THEME_KEY } from '@/utils/setDarkMode'

const meta = {
  title: 'App',
  component: App,
  parameters: {
    localStorage: {
      [THEME_KEY]: null
    }
  },
  decorators: [useWithReactQuery, withTheme, withLocalStorage]
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    localStorage: {
      [THEME_KEY]: null
    },
    msw: {
      handlers: [mockCatFact({ fact: faker.lorem.words(101) })]
    }
  }
}

export const DarkMode: Story = {
  parameters: {
    localStorage: {
      [THEME_KEY]: DARK_CLASS
    }
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Should have dark mode class', async () => {
      // Wait for dom element
      await waitFor(async () => {
        await canvas.findByTestId('dark-mode-moon')
        await expect(canvasElement.ownerDocument.documentElement).toHaveClass(DARK_CLASS)
      })
    })
  }
}
