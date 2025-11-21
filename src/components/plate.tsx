import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { useBox, type BoxProps } from '@react-three/cannon'

interface PlateProps extends BoxProps {
    scale?: number
}

function Plate(props: PlateProps) {
    const { scene } = useGLTF('/models/plate/plate.glb')
    const [ref] = useBox(() => ({ mass: 40, args: [5, 0.29, 5], ...props }))

    // enable shadows for all meshes
    scene.traverse((child) => {
        if (child instanceof Mesh) {
            child.castShadow = true
            child.receiveShadow = true
        }
    })

    return <primitive ref={ref} object={scene} scale={props.scale ?? 30} />
}

export default Plate