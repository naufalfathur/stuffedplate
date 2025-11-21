
import { useSpring } from '@react-spring/three'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from 'three'
import type { TMeal } from '../config/template'

export default function CameraController({ meals }: { meals: TMeal[] }) {
    const { camera } = useThree()
    const baseFov = 90
    const targetFov = baseFov + Math.floor(meals.length / 5) * 10

    const spring = useSpring({ fov: targetFov, config: { mass: 1, tension: 170, friction: 26 } })

    useFrame(() => {
        const perspectiveCamera = camera as PerspectiveCamera
        perspectiveCamera.fov = spring.fov.get()
        perspectiveCamera.updateProjectionMatrix()
    })

    return null
}