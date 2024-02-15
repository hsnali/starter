import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { DARK_CLASS, THEME_KEY } from '@/utils/setDarkMode'

import { DarkMode } from './DarkMode'
const meta = {
  component: DarkMode,
  parameters: {
    localStorage: {
      [THEME_KEY]: null
    }
  },
  render: () => (
    <div className="min-h-screen w-full dark:bg-slate-800">
      <DarkMode />
    </div>
  )
} satisfies Meta<typeof DarkMode>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Should be render initial sun icon', async () => {
      const sunIcon = await canvas.findByTestId('dark-mode-sun')
      expect(sunIcon).toBeInTheDocument()
    })
  }
}

export const Dark: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const button = await canvas.findByRole('button')

    await step('Should toggle dark theme', async () => {
      const sunIcon = await canvas.findByTestId('dark-mode-sun')
      await userEvent.click(button)

      const moonIcon = await canvas.findByTestId('dark-mode-moon')
      expect(sunIcon).not.toBeInTheDocument()
      expect(moonIcon).toBeInTheDocument()
      expect(canvasElement.ownerDocument.documentElement).toHaveClass(DARK_CLASS)
    })
  }
}
