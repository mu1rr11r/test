import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AoutContextProvider from './context/AoutContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AoutContextProvider>
        <App />
      </AoutContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
