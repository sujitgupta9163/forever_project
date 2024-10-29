// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShopUContextProvider from './context/ShopUContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopUContextProvider>

    <App />
  </ShopUContextProvider>
  </BrowserRouter>,
)




