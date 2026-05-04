import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

// Inject @font-face with correct base path for GitHub Pages
const style = document.createElement('style')
style.textContent = `@font-face { font-family: 'KZCarolina'; src: url('${import.meta.env.BASE_URL}fonts/KZCarolina-Regular.woff') format('woff'); font-weight: 400 700; font-style: normal; font-display: swap; }`
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
