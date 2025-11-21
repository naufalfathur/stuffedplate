import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AccumulativeShadows, Environment, OrbitControls, RandomizedLight, Text3D } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Plate from './components/plate'
import Plane from './components/plane'
import { Debug } from '@react-three/cannon'
import Meal from './components/meal'
import { useRef } from 'react'


function App() {

  return (
    <div className=' h-screen w-full relative bg-[linear-gradient(135deg,#FEAD8B,#EA523E)]'>
      <div className="absolute top-0 z-10 w-full py-20 text-center text-gray-700">
        <h1 className='text-4xl font-light'>Stuffed Plate</h1>
        <p className='text-sm mt-2  font-light'>A fun physics-based 3D plate stuffing experience</p>
      </div>
      <div className='absolute bottom-20 left-5 z-10 text-gray-700 font-light w-full text-center'>
        <p className='text-lg'>In my plate, I have ... </p>
      </div>
      <Canvas shadows camera={{ position: [-6, 8, 10], fov: 75 }}>
        {/* <color attach="background" args={['#f0f0f0']} /> */}
        <ambientLight intensity={0.5 * Math.PI} />
        <spotLight decay={0} position={[5, 5, -10]} angle={0.15} penumbra={1} />
        <pointLight decay={0} position={[-10, -10, -10]} />


        <Physics>
          <Debug color="red" scale={1.1}>
            <Plane position={[0, -0.49, 0]} />

            {/* <Meal name={'noodles'} />
            <Meal name={'bread'} />
            <Meal name={'salmon'} />
            <Meal name={'salad'} />
            <Meal name={'vegetable'} />
            <Meal name={'beef'} />
            <Meal name={'chicken'} />
            <Meal name={'egg'} />
            <Meal name={'rice'} />
            <Meal name={'potato'} /> */}

            <Plate position={[0, 8, 0]} />
          </Debug>

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
