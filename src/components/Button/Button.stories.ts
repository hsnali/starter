import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { Button } from './Button'

const meta = {
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    const button = await canvas.findByRole('button')

    await step('Should have label', async () => {
      expect(button).toHaveTextContent('Count is 0')
    })

    await step('Should increment count on click', async () => {
      await userEvent.click(button)
      expect(button).toHaveTextContent('Count is 1')
    })
  }
}
