import type { Decorator } from '@storybook/react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useEffect } from 'react'

import { queryClient, QueryProvider } from '@/providers/QueryProvider'

export const withReactQuery: Decorator = (Story, { parameters }) => {
  // Reset react query state between stories
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    queryClient.resetQueries()
  })

  return (
    <QueryProvider>
      {Story()}
      {parameters?.queryDevTools && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryProvider>
  )
}
