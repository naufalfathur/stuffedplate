import { useMemo } from 'react'
import { Text3D, useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { useBox, type BoxProps } from '@react-three/cannon'
import { MEAL_CONFIG } from '../config/meals'

interface MealProps extends BoxProps {
    originalName: string
    name: string
    animType?: "Dynamic" | "Static" | "Kinematic" | undefined
    textArgs?: [number, number, number]
    textOffset?: [number, number, number]
}

function Meal({ originalName, animType = "Dynamic", name, position, rotation, textArgs, textOffset, ...rest }: MealProps) {
    console.log("Rendering Meal:", name);
    const config = (MEAL_CONFIG as any)[name] ?? {}
    const modelPath = `/models/meal/${name}.glb`

    let gltf: any = null
    let scene: any = null
    try {
        gltf = useGLTF(modelPath)
        scene = useMemo(() => gltf.scene.clone(true), [gltf])
    } catch {
        gltf = null
        scene = null
    }

    const startPosition = (position as any) ?? config.position ?? [
        (Math.random() * 4) - 2,
        15,
        (Math.random() * 4) - 2
    ]
    const args = config.args ?? [1, 1, 1]
    const mass = config.mass ?? 1
    const scale = config.scale ?? 1
    const offset = config.offset ?? [0, 0, 0]
    const visualRotation = (rotation as any) ?? config.rotation ?? [0, 0, 0]


    const textArgsDefault: [number, number, number] = textArgs ?? [5, 1, 0.2]
    const textOffsetDefault: [number, number, number] = textOffset ?? [-3, 0, 0]

    const [ref] = useBox(() => ({
        type: animType,
        mass,
        args: scene ? args : textArgsDefault,
        position: startPosition,
        ...rest
    }))

    if (scene) {
        scene.traverse((child: { castShadow: boolean; receiveShadow: boolean }) => {
            if (child instanceof Mesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    }

    return (
        <group ref={ref}>
            <group position={scene ? offset : textOffsetDefault} rotation={visualRotation} scale={scale}>
                {scene ? (
                    <primitive object={scene} />
                ) : (
                    <group>
                        {originalName
                            .split(' ')
                            .slice(0, 6)
                            .reduce((lines, word, idx) => {
                                const lineIdx = Math.floor(idx / 2)
                                lines[lineIdx] = (lines[lineIdx] ? lines[lineIdx] + ' ' : '') + word
                                return lines
                            }, [] as string[])
                            .map((line, idx) => (
                                <Text3D
                                    key={idx}
                                    font="/fonts/Readex_Pro_Bold.json"
                                    size={0.5}
                                    height={0.1}
                                    bevelEnabled={true}
                                    bevelSize={0.02}
                                    bevelThickness={0.05}
                                    position={[0, -0.6 * idx, 0]}
                                >
                                    {line}
                                    <meshStandardMaterial color="lightblue" />
                                </Text3D>
                            ))
                        }
                    </group>
                )}
            </group>
        </group>
    )
}

export default Meal