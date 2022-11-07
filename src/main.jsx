import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { EcomProvider } from './context/ecomProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <EcomProvider>
    <App />
  </EcomProvider>
)
