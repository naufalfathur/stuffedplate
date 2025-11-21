import { Text3D } from '@react-three/drei'

interface TextProps {
    txt: string
    size?: number
    color?: string
    position?: [number, number, number]
}

function Text(props: TextProps) {
    return (
        <Text3D
            font="/fonts/Readex Pro_Bold.json"
            position={props.position ?? [0, 0, 0]}
            size={props.size || 0.5}
            height={0.3}
            lineHeight={1} letterSpacing={-0.025}

            bevelEnabled
            bevelThickness={0.05}
            bevelSize={0.02}
            bevelSegments={3}
        >
            {props.txt}
            <meshStandardMaterial color={props.color || 'lightgreen'} />
        </Text3D>
    )
}

export default Text