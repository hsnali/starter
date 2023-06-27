import type { Meta, StoryObj } from '@storybook/react'

import App from '@/App'
import { withLocalStorage } from '@/stories/decorators'

const meta = {
  title: 'App',
  component: App,
  parameters: {
    localStorage: {
      theme: null
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
      theme: 'dark'
    }
  }
}
