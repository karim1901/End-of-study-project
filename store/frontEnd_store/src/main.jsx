import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './auth/authContext.jsx'
import ProductProvider from './productContext/productContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </AuthProvider>
)
