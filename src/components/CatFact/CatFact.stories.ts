import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'

import { mockCatFact } from '@/tests/handlers/mockCatFact'

import { CatFact } from './CatFact'

const testFact = 'Cats are cute'

const meta = {
  component: CatFact,

  parameters: {
    msw: {
      handlers: [mockCatFact({ fact: testFact })]
    }
  }
} satisfies Meta<typeof CatFact>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    const button = await canvas.findByRole('button')

    await step('Should have image', async () => {
      const image = await canvas.findByRole('img')
      expect(image).toBeInTheDocument()
    })

    await step('Should not have initial fact', async () => {
      const info = await canvas.queryByTestId('cat-fact-info')
      expect(info).toBeNull()
    })

    await step('Should get fact on click', async () => {
      await userEvent.click(button)
      expect(button).toHaveClass('animate-spin')
      await waitFor(async () => {
        const info = await canvas.findByTestId('cat-fact-info')
        expect(info).toHaveTextContent(testFact)
      })
    })
  }
}

export const LongFact: Story = {
  parameters: {
    msw: {
      handlers: [
        mockCatFact({
          fact: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, fugit minus. Atque ad officia corporis ratione neque. Cumque qui sit perspiciatis sint modi, soluta, aut unde aspernatur nihil dolores vero consequatur harum eveniet voluptatum ut voluptatem nemo ratione ab rerum!'
        })
      ]
    }
  }
}

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [mockCatFact({ status: 500 })]
    }
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    const button = await canvas.findByRole('button')

    await step('Should show error message', async () => {
      await userEvent.click(button)

      await waitFor(async () => {
        const info = await canvas.findByTestId('cat-fact-error')
        expect(info).toHaveTextContent('Something went wrong: Failed to fetch cat fact')
      })
    })
  }
}
