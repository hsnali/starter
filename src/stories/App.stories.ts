import { faker } from '@faker-js/faker'
import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'

import App from '@/App'
import { withLocalStorage } from '@/stories/decorators'
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
  decorators: [withLocalStorage]
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const DarkMode: Story = {
  parameters: {
    localStorage: {
      [THEME_KEY]: DARK_CLASS
    }
  }
}

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
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Viewport should grow with long facts', async () => {
      const viewPortHeight = canvasElement.getBoundingClientRect().height
      const catFactButton = canvas.getByTestId('cat-fact-button')

      await userEvent.click(catFactButton)
      await waitFor(() => {
        const newViewHeight = canvasElement.getBoundingClientRect().height
        expect(viewPortHeight).toBeLessThan(newViewHeight)
      })
    })
  }
}
