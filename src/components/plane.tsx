import { useBox, type BoxProps } from '@react-three/cannon'

function Plane(props: BoxProps) {
    const [ref] = useBox(() => ({
        args: [10, 11, 10], // same as your boxGeometry
        position: [0, 100, 0],
        rotation: props.rotation,
        ...props
    }))

    return (
        <mesh ref={ref} receiveShadow>
            <boxGeometry args={[10, 11, 10]} />
            <meshStandardMaterial color="#FFE3BC" />
        </mesh>
    )
}

export default Plane

// import { usePlane, type PlaneProps } from '@react-three/cannon'

// function Plane(props: PlaneProps) {
//     const [ref] = usePlane(() => ({
//         rotation: [-Math.PI / 2, 0, 0],
//         ...props
//     }))

//     return (
//         <mesh receiveShadow ref={ref}>
//             <planeGeometry args={[1000, 1000]} />

//             <shadowMaterial opacity={0.5} />
//             {/* <color args={['red']} /> */}
//         </mesh>
//     )
// }

// export default Plane
