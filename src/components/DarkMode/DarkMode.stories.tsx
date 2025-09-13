import { expect } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react-vite'
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
  parameters: {
    localStorage: {
      [THEME_KEY]: DARK_CLASS
    }
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Should restore dark theme', async () => {
      const moonIcon = await canvas.findByTestId('dark-mode-moon')
      expect(moonIcon).toBeInTheDocument()
      expect(canvasElement.ownerDocument.documentElement).toHaveClass(DARK_CLASS)
    })
  }
}

export const Toggle: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const button = await canvas.findByRole('button')

    await step('Should toggle to dark theme', async () => {
      await userEvent.click(button)

      const moonIcon = await canvas.findByTestId('dark-mode-moon')
      expect(moonIcon).toBeInTheDocument()
      expect(canvasElement.ownerDocument.documentElement).toHaveClass(DARK_CLASS)
    })

    await step('Should toggle to light theme', async () => {
      await userEvent.click(button)

      const sunIcon = await canvas.findByTestId('dark-mode-sun')
      expect(sunIcon).toBeInTheDocument()
      expect(canvasElement.ownerDocument.documentElement).not.toHaveClass(DARK_CLASS)
    })
  }
}
