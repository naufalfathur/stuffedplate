import { usePlane, type PlaneProps } from '@react-three/cannon'

function Plane(props: PlaneProps) {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        ...props
    }))

    return (
        <mesh castShadow receiveShadow ref={ref}>
            <planeGeometry args={[1000, 1000]} />
            <shadowMaterial opacity={0.5} />
            {/* <color args={['black']} /> */}
        </mesh>
    )
}

export default Plane
