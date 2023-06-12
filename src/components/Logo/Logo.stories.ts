import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from './Logo'

const meta = {
  component: Logo,
  tags: ['autodocs']
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Vite: Story = {
  args: {
    src: '/vite.svg',
    alt: 'Vite Logo',
    url: '/',
    label: 'Logo'
  }
}

export const React: Story = {
  args: {
    src: '/src/assets/react.svg',
    alt: 'React Logo',
    url: '/',
    label: 'Logo'
  }
}
