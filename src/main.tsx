import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryProvider, ThemeProvider } from '@/providers'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryProvider>
  </React.StrictMode>
)
