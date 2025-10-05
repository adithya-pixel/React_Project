import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import InputExample from './evehandling'

createRoot(document.getElementById('root')).render(

   <StrictMode>
    <InputExample />
  </StrictMode>,
   <StrictMode>
    <App />
  </StrictMode>,
  
)
