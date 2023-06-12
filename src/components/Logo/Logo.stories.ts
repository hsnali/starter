import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from './Logo'

const meta = {
  component: Logo,
  tags: ['autodocs'],
  args: {
    alt: 'Logo',
    url: '/',
    label: 'Logo'
  }
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Vite: Story = {
  args: {
    src: '/vite.svg'
  }
}

export const React: Story = {
  args: {
    src: '/src/assets/react.svg'
  }
}
