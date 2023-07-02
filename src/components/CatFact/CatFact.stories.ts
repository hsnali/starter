import { faker } from '@faker-js/faker'
import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'

import { queryClient } from '@/providers/QueryProvider'
import { useWithReactQuery } from '@/stories/decorators'
import { mockCatFact } from '@/tests/handlers/mockCatFact'

import { CatFact } from './CatFact'

const testFact = 'Cats are cute'

const meta = {
  component: CatFact,
  parameters: {
    viewport: {
      defaultViewport: 'mobile2'
    },
    queryDevTools: true,
    msw: {
      handlers: [mockCatFact({ fact: testFact })]
    }
  },
  decorators: [useWithReactQuery]
} satisfies Meta<typeof CatFact>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    const button = await canvas.findByTestId('cat-fact-button')

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

    await step('Should refetch fact on subsequent click', async () => {
      await queryClient.clear()
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
          fact: faker.lorem.words(101)
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

    const button = await canvas.findByTestId('cat-fact-button')

    await step('Should show error message', async () => {
      await userEvent.click(button)

      await waitFor(async () => {
        const info = await canvas.queryByTestId('cat-fact-error')
        expect(info).toHaveTextContent('Failed to fetch cat fact')
      })
    })
  }
}
