import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

export const queryClient = new QueryClient()

export type QueryProviderProps = {
  children?: React.ReactNode
}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
