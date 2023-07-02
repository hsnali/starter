import type { Decorator } from '@storybook/react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useEffect } from 'react'

import { queryClient, QueryProvider } from '@/providers'

export const useWithReactQuery: Decorator = (Story, { parameters }) => {
  // Reset react query state between stories
  useEffect(() => {
    queryClient.clear()
  })

  return (
    <QueryProvider>
      <Story />
      {parameters?.queryDevTools && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryProvider>
  )
}
