import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'

function ShipModel() {
  const { scene } = useGLTF('/models/atlas.glb')
  return <primitive object={scene} scale={1.2} position={[0, -1, 0]} />
}

export default function Hero3D() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-cosmic to-black">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <ShipModel />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <Environment preset="night" />
        </Canvas>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 font-orbitron text-plasma drop-shadow-lg">
            PIONEER<span className="text-white">WORKS</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">Além da Órbita, com Precisão Terrestre</p>
          <a href="/catalogo" className="inline-block bg-plasma text-cosmic font-bold py-4 px-10 rounded-full text-lg hover:bg-cyan-300 transition shadow-xl">
            Explorar Catálogo
          </a>
        </div>
      </div>
    </section>
  )
}