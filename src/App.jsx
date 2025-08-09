import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import PatientDashboard from './pages/PatientDashboard'
import DoctorDashboard from './pages/DoctorDashboard'
import Chat from './pages/Chat'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  )
}

export default App
