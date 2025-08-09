import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold">Telemed</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md hover:bg-blue-700">Login</Link>
              <Link to="/patient-dashboard" className="px-3 py-2 rounded-md hover:bg-blue-700">Patient</Link>
              <Link to="/doctor-dashboard" className="px-3 py-2 rounded-md hover:bg-blue-700">Doctor</Link>
              <Link to="/chat" className="px-3 py-2 rounded-md hover:bg-blue-700">Chat</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggle} className="p-2 rounded-md hover:bg-blue-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link to="/" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-blue-700">Login</Link>
          <Link to="/patient-dashboard" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-blue-700">Patient</Link>
          <Link to="/doctor-dashboard" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-blue-700">Doctor</Link>
          <Link to="/chat" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-blue-700">Chat</Link>
        </div>
      )}
    </nav>
  )
}
