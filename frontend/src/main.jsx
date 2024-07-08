import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav'
import './index.css'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav /><Footer/>
  </React.StrictMode>,
)
