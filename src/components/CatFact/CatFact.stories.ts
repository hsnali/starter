import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { rest } from 'msw'

import { CAT_FACT_API } from '@/utils/getCatFact'

import { CatFact } from './CatFact'

const testFact = 'Cats are cute'

const meta = {
  component: CatFact,

  parameters: {
    msw: {
      handlers: [
        rest.get(CAT_FACT_API, (req, res, ctx) => {
          return res(
            ctx.json({
              fact: testFact
            })
          )
        })
      ]
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

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get(CAT_FACT_API, (req, res, ctx) => {
          return res(
            ctx.status(403),
            ctx.json({
              error: 'Cat fact not found'
            })
          )
        })
      ]
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
