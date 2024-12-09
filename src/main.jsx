import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from "./context/contexts.jsx"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ShopContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShopContextProvider>

)
