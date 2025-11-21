import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { useBox, type BoxProps } from '@react-three/cannon'

interface MealProps extends BoxProps {
    name: string
    scale: number
    offset?: [number, number, number]
    rotation?: [number, number, number]
}

function Meal(props: MealProps) {
    const { scene } = useGLTF(`/models/meal/${props.name}.glb`)
    const [ref] = useBox(() => ({ position: [0, 10, 0], ...props }))

    // enable shadows for all meshes
    scene.traverse((child) => {
        if (child instanceof Mesh) {
            child.castShadow = true
            child.receiveShadow = true
        }
    })
    const OFFSET: [number, number, number] = props.offset || [0, 0, 0]
    const ROTATION: [number, number, number] = props.rotation || [0, 0, 0]

    return (
        <group ref={ref}>
            <group position={OFFSET} scale={props.scale} rotation={ROTATION}>
                <primitive object={scene} />
            </group>
        </group>
    )
}

export default Meal