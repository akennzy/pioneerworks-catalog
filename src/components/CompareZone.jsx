import { useState } from 'react'
import ShipCard from './ShipCard'

export default function CompareZone() {
  const [compare, setCompare] = useState([])

  const addToCompare = (ship) => {
    if (compare.length < 2 && !compare.find(s => s.id === ship.id)) {
      setCompare([...compare, ship])
    }
  }

  const removeFromCompare = (id) => {
    setCompare(compare.filter(s => s.id !== id))
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-cosmic/90 backdrop-blur-lg rounded-2xl p-4 shadow-2xl flex gap-4 z-50">
      {compare.map(ship => (
        <div key={ship.id} className="relative">
          <img src="/models/thumbs/atlas.jpg" alt={ship.name} className="w-20 h-20 rounded-lg object-cover" />
          <button onClick={() => removeFromCompare(ship.id)} className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs">×</button>
          <p className="text-xs text-white mt-1">{ship.name}</p>
        </div>
      ))}
      {compare.length < 2 && (
        <div className="w-20 h-20 border-2 border-dashed border-plasma rounded-lg flex items-center justify-center text-plasma text-xs">
          Arraste aqui
        </div>
      )}
      {compare.length === 2 && (
        <a href="/comparar" className="bg-plasma text-cosmic px-4 py-2 rounded-lg text-sm font-bold hover:bg-cyan-300 transition">
          Comparar
        </a>
      )}
    </div>
  )
}