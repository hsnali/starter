import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button'
  }
}
