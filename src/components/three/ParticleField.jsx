import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * A shell of points that slowly rotates and eases toward the pointer, plus a
 * wireframe icosahedron core. Pure three.js buffers — no external assets.
 */
export default function ParticleField({ count = 2600, mobile = false }) {
  const pointsRef = useRef(null)
  const coreRef = useRef(null)
  const groupRef = useRef(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      // distribute on a spherical shell with a little radial jitter
      const r = 2.4 + Math.random() * 1.9
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    const group = groupRef.current
    if (!group) return

    // gentle constant spin
    group.rotation.y += delta * 0.06
    group.rotation.x += delta * 0.015

    // ease toward pointer
    const { x, y } = state.pointer
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, group.rotation.y + x * 0.35, 0.05)
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, group.rotation.x - y * 0.25, 0.05)

    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.12
      coreRef.current.rotation.z += delta * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={mobile ? 0.022 : 0.016}
          color="#4ade80"
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>

      <mesh ref={coreRef} scale={1.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#2f9e5c" wireframe transparent opacity={0.25} />
      </mesh>

      <ambientLight intensity={0.4} />
    </group>
  )
}
