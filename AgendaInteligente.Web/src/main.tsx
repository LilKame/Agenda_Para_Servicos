import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Calendary from './pages/calendary/calendary'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Calendary />
  </StrictMode>,
)
