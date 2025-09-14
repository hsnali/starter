import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../../**/*.mdx', '../../**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
    '@chromatic-com/storybook'
  ],

  framework: '@storybook/react-vite',
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: path.join(process.cwd(), 'vite.config.ts')
      }
    }
  },

  staticDirs: [path.join(process.cwd(), 'public')]
}

export default config
