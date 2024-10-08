import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import WebApp from '@twa-dev/sdk'
WebApp.expand();

import { MainContextProvider } from './Context/MainContext'


WebApp.ready();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </StrictMode>,
)
