import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from './Logo'

const meta = {
  component: Logo,
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
    src: '/images/vite.svg',
    alt: 'Vite Logo'
  }
}

export const React: Story = {
  args: {
    src: '/src/assets/react.svg',
    alt: 'React Logo'
  }
}
