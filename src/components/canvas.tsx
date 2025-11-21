import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, Environment, OrbitControls, RandomizedLight } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Plate from './plate'
import Plane from './plane'
import { Debug } from '@react-three/cannon'
import Meal from './meal'
import NutritionPanel from './nutritionPanel'

interface ObjectCanvasProps {
    debug?: boolean
    children?: React.ReactNode
}

function ObjectCanvas({ debug = true, children }: ObjectCanvasProps) {
    return (
        <Canvas
            shadows
            camera={{
                position: [-6, 10, 10],
                fov: 90
            }}
            gl={{ antialias: true }}
            linear


        >
            {/* <fog attach="fog" args={['#FEAD8B', 0, 30]} /> */}
            {/* <color attach="background" args={['#f0f0f0']} /> */}
            <ambientLight intensity={0.5 * Math.PI} />
            <spotLight decay={0} position={[5, 5, -10]} angle={0.15} penumbra={1} />
            <pointLight decay={0} position={[-10, -10, -10]} />

            <NutritionPanel />

            <Physics>


                {debug ? (
                    <Debug color="red" scale={1.1}>
                        <Plane position={[0, -0.49, 0]} />
                        {children}
                        <Plate position={[0, 8, 0]} />
                    </Debug>
                ) : (
                    <>
                        <Plane position={[0, -0.49, 0]} />
                        {children}
                        <Plate position={[0, 8, 0]} />
                    </>
                )}
            </Physics>


            <AccumulativeShadows
                temporal  // disable for less jitter
                frames={100}
                color="orange"
                colorBlend={2}
                toneMapped={true}
                alphaTest={0.7}
                opacity={1}
                scale={12}
                position={[0, 5.0135, 0]}>
                <RandomizedLight amount={8} radius={10} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
            </AccumulativeShadows>
            <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
            <OrbitControls
                makeDefault
                target={[0, 5, 0]}   // raise the focus point
                autoRotate
                autoRotateSpeed={0.05}
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
            />

        </Canvas>
    )
}

export default ObjectCanvas