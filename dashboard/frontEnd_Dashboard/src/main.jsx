import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './auth/authContext.jsx'
import ProductProvider from './context/productContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <ProductProvider>
                <App />
            </ProductProvider>
        </AuthProvider>
    </BrowserRouter>
)
