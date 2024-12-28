import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NavbarComponent from './Component/NavbarComponent.jsx'
import ItemCard from './Component/ItemCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <NavbarComponent/>
    <ItemCard />
  </StrictMode>,
)
