import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { generatePDF } from '../lib/pdfGenerator'

export default function ShipModal({ ship, onClose }) {
  const { scene } = useGLTF(ship.model)

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-5xl w-full max-h-screen overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-4xl font-bold font-orbitron text-cosmic dark:text-plasma">{ship.name}</h2>
              <p className="text-plasma text-lg">{ship.code}</p>
            </div>
            <button onClick={onClose} className="text-4xl text-gray-500 hover:text-gray-700">×</button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-80 bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden">
              <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} />
                <primitive object={scene} scale={1.2} />
                <OrbitControls />
              </Canvas>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Especificações Técnicas</h3>
              <ul className="space-y-3">
                {ship.specs.map((spec, i) => (
                  <li key={i} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">{spec.label}:</span>
                    <span className="font-medium text-cosmic dark:text-plasma">{spec.value}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => generatePDF(ship)}
                className="mt-6 w-full bg-plasma hover:bg-cyan-400 text-cosmic font-bold py-3 rounded-xl transition"
              >
                Baixar PDF Técnico
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}