// src/components/NavBar.jsx
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-cosmic/95 backdrop-blur-sm border-b border-plasma/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-orbitron text-plasma">PIONEERWORKS</Link>
        <div className="flex gap-8 items-center">
          <Link to="/catalogo" className="text-white hover:text-plasma transition">Catálogo</Link>
          <button className="bg-plasma text-cosmic px-6 py-2 rounded-full font-medium hover:bg-cyan-300 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  )
}