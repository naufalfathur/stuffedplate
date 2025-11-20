import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, Environment, OrbitControls, RandomizedLight, useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { Physics, usePlane, useBox, type PlaneProps, type BoxProps } from '@react-three/cannon'

function App() {

  function Plate(props: BoxProps) {
    const { scene } = useGLTF('/models/plate2/plate.glb');
    const [ref] = useBox(() => ({ mass: 8, args: [1.2, 0, 1.2], ...props }));

    scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return <primitive ref={ref} object={scene} scale={20} />

  }


  // function Plate2({ position = [0, 0, 0] }) {
  //   const { scene } = useGLTF('/models/plate2/plate.glb');

  //   scene.position.set(position[0], position[1], position[2]);

  //   scene.traverse((child) => {
  //     if (child instanceof Mesh) {
  //       child.castShadow = true;
  //       child.receiveShadow = true;
  //     }
  //   });

  //   return <primitive object={scene} scale={20} />;
  // }

  function Plane(props: PlaneProps) {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
      <mesh receiveShadow ref={ref}>
        <planeGeometry args={[20, 10]} />
        <shadowMaterial opacity={0.5} />
      </mesh>
    )
  }

  // function Cube(props: BoxProps) {
  //   const [ref] = useBox(() => ({ mass: 1, ...props }))
  //   return (
  //     <mesh castShadow receiveShadow ref={ref}>
  //       <boxGeometry />
  //       <meshStandardMaterial color="orange" />
  //     </mesh>
  //   )
  // }


  return (
    <div className=' h-screen w-full'>
      <Canvas shadows camera={{ position: [-6, 8, 10], fov: 75 }}>
        <color attach="background" args={['#f0f0f0']} />
        <ambientLight intensity={0.5 * Math.PI} />
        <spotLight decay={0} position={[5, 5, -10]} angle={0.15} penumbra={1} />
        <pointLight decay={0} position={[-10, -10, -10]} />
        {/* 
        <mesh castShadow receiveShadow position={[0, 0.25, 0]} scale={0.75}>
          <Plate2 position={[0, -0.25, 0]} />
        </mesh> */}

        <Physics>
          <Plane position={[0, 0, 0]} />
          <Plate position={[0, 5, 0]} />
          {/* <Cube position={[0, 5, 0]} />
          <Cube position={[0.45, 7, -0.25]} />
          <Cube position={[-0.45, 9, 0.25]} />
          <Cube position={[-0.45, 10, 0.25]} />  */}
        </Physics>


        <AccumulativeShadows
          temporal
          frames={100}
          color="orange"
          colorBlend={2}
          toneMapped={true}
          alphaTest={0.7}
          opacity={1}
          scale={12}
          position={[0, -0.5, 0]}>
          <RandomizedLight amount={8} radius={10} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
        </AccumulativeShadows>
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
        <OrbitControls makeDefault autoRotate autoRotateSpeed={0.1} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />

      </Canvas>
    </div>
  )
}

export default App
