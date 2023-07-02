import { faker } from '@faker-js/faker'
import type { Meta, StoryObj } from '@storybook/react'

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
  decorators: [withLocalStorage, useWithReactQuery, withTheme]
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
  }
}
