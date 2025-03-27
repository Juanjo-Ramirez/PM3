import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { AppointmentProvider } from './context/AppointmentContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppointmentProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppointmentProvider>
    </AuthProvider>
  </StrictMode>,
)
