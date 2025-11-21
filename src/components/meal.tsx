import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { useBox, type BoxProps } from '@react-three/cannon'
import { MEAL_CONFIG } from '../config/meals'

interface MealProps extends BoxProps {
    name: string
    animType?: "Dynamic" | "Static" | "Kinematic" | undefined
}

function Meal({ animType = "Dynamic", name, position, rotation, ...rest }: MealProps) {
    const config = (MEAL_CONFIG as any)[name] ?? {}
    const modelPath = `/models/meal/${name}.glb`

    const gltf = useGLTF(modelPath)
    const scene = useMemo(() => gltf.scene.clone(true), [gltf])

    const startPosition = (position as any) ?? config.position ?? [0, 15, 0]
    const args = config.args ?? [1, 1, 1]
    const mass = config.mass ?? 1
    const scale = config.scale ?? 1
    const offset = config.offset ?? [0, 0, 0]
    const visualRotation = (rotation as any) ?? config.rotation ?? [0, 0, 0]

    const [ref] = useBox(() => ({ type: animType, mass, args, position: startPosition, ...rest }))

    scene.traverse((child: { castShadow: boolean; receiveShadow: boolean }) => {
        if (child instanceof Mesh) {
            child.castShadow = true
            child.receiveShadow = true
        }
    })

    return (
        <group ref={ref}>
            <group position={offset} rotation={visualRotation} scale={scale}>
                <primitive object={scene} />
            </group>
        </group>
    )
}

export default Meal