import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initLenis } from './lib/lenis'

// Initialise Lenis smooth scroll — time-based duration ensures
// correct behaviour at all refresh rates (60 Hz, 120 Hz, 144 Hz+)
const cleanup = initLenis()

if (import.meta.hot) {
  import.meta.hot.dispose(cleanup)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
