import React from 'react'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1020]">
      {/* Centered container */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Dashboard />
      </div>
    </div>
  )
}
