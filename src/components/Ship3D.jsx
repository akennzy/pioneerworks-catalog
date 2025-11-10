import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Ship3D({ scene }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1
  })
  return <primitive ref={ref} object={scene} scale={1.2} />
}