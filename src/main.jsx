import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import our custom CSS
import './scss/styles.scss';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
