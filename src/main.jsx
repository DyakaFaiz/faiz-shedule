import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './assets/Footer.jsx'
import { Analytics } from "@vercel/analytics/react"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
    <Footer/>
  </React.StrictMode>,
)
