import { useCylinder, type CylinderProps } from '@react-three/cannon'

function Plane(props: CylinderProps) {
    const [ref] = useCylinder(() => ({
        args: [10, 10, 11, 32], // radiusTop, radiusBottom, height, segments
        position: [0, 100, 0],
        rotation: props.rotation,
        ...props,
    }))

    return (
        <mesh ref={ref} receiveShadow>
            <cylinderGeometry args={[10, 10, 11, 32]} />
            <meshStandardMaterial color="#FFF7EE" />
        </mesh>
    )
}

export default Plane
