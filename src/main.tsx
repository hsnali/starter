import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryProvider } from '@/providers/QueryProvider.tsx'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>
)
