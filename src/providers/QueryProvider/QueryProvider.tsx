import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

import { queryClient } from './client'

export type QueryProviderProps = {
  children?: React.ReactNode
}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
