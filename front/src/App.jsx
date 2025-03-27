import './styles/App.css'
import NavBar from './components/NavBar'
import Home from './views/Home'
import MisTurnos from './views/MisTurnos'
import Register from './views/Register'
import Login from './views/Login'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mis-turnos" element={<ProtectedRoute><MisTurnos /></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
