import { Canvas } from '@react-three/fiber'
import ParticleField from './ParticleField'
import { useIsTouch } from '../../hooks/useReducedMotion'

/**
 * WebGL backdrop for the hero. Lazy-loaded from Hero.jsx and only mounted when
 * motion is allowed. DPR is clamped so it stays cheap on high-density screens.
 */
export default function HeroCanvas() {
  const touch = useIsTouch()

  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, touch ? 1.25 : 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 8], fov: 45 }}
    >
      <ParticleField mobile={touch} count={touch ? 1400 : 2600} />
    </Canvas>
  )
}
