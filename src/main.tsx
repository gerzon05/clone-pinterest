import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app'
import { Toaster } from 'sonner'

// Render the app
const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
      <Toaster position='top-right' />
    </StrictMode>,
  )
}
