import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, Environment, OrbitControls, RandomizedLight } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Plate from './components/plate'
import Plane from './components/plane'
import { Debug } from '@react-three/cannon'
import Meal from './components/meal'

function App() {
  return (
    <div className=' h-screen w-full'>
      <div className='absolute bottom-5 left-5 z-10 text-gray-700 font-light'>
        <h1 className='text-3xl'>Stuffed Plate</h1>
        <p className='text-sm'>In my plate, I have ... </p>
      </div>
      <Canvas shadows camera={{ position: [-6, 8, 10], fov: 75 }}>
        <color attach="background" args={['#f0f0f0']} />
        <ambientLight intensity={0.5 * Math.PI} />
        <spotLight decay={0} position={[5, 5, -10]} angle={0.15} penumbra={1} />
        <pointLight decay={0} position={[-10, -10, -10]} />

        <Physics>
          <Debug color="red" scale={1.1}>
            <Plane position={[0, -0.49, 0]} />

            <Meal name={'noodles'} mass={3} scale={0.25} args={[2.2, 0.3, 2.2]} offset={[0, 0, 0]} rotation={[5, 25, 10]} />
            <Meal name={'bread'} mass={1} scale={0.25} args={[2.2, 0.2, 2.2]} offset={[0, -0.5, 0]} />
            <Meal name={'salmon'} mass={5} scale={1} args={[2, 0.3, 1]} />
            <Meal name={'salad'} mass={4} scale={25} args={[3, 0.2, 3]} />
            <Meal name={'vegetable'} mass={2} scale={10} args={[1.5, 1, 1.5]} />
            <Meal name={'beef'} mass={5} scale={0.1} args={[3, 0.4, 2]} />
            <Meal name={'chicken'} mass={5} scale={1} args={[1, 0.8, 3]} />
            <Meal name={'egg'} mass={3} scale={1} args={[2, 0.5, 3]} />
            <Meal name={'rice'} mass={4} scale={1} />
            <Meal name={'potato'} mass={3} scale={0.2} args={[3.5, 0.4, 3.5]} />

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
