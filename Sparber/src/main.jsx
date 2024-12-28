import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavbarComponent from './Component/NavbarComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarComponent/>
  </StrictMode>,
)
