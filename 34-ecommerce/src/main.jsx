import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/Context.jsx';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
