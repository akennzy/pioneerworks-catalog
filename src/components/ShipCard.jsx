import { useState } from 'react'
import ShipModal from './ShipModal'

export default function ShipCard({ ship }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
      >
        <div className="h-56 bg-gradient-to-br from-plasma/20 to-cosmic/20 flex items-center justify-center p-4">
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} />
              <primitive object={useGLTF(ship.model).scene} scale={0.8} />
            </Canvas>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold font-orbitron text-cosmic dark:text-plasma">{ship.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{ship.code}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{ship.tagline}</p>
          <span className="inline-block mt-4 px-4 py-1 bg-plasma/10 text-plasma text-xs rounded-full font-medium">
            {ship.category.toUpperCase()}
          </span>
        </div>
      </div>
      {isOpen && <ShipModal ship={ship} onClose={() => setIsOpen(false)} />}
    </>
  )
}