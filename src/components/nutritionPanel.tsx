import { Text3D, RoundedBox, Center } from '@react-three/drei'
import Text from './text'

function NutritionPanel() {
    return (
        <mesh castShadow position={[0, 6, -6]} rotation={[0, 0, 0]} scale={[2, 2, 1]}>

            <Center top>
                <Text txt="Nutrition Facts" size={0.4} position={[0, 0, 0]} />
                <Text txt="0 KCal" size={0.3} position={[0, -0.5, 0]} />
                <Text txt="0 Fat" size={0.3} position={[0, -1, 0]} />
                <Text txt="0 Protein" size={0.3} position={[0, -1.5, 0]} />
                <Text txt="0 Carbs" size={0.3} position={[0, -2, 0]} />
            </Center>

        </mesh>
    )
}

export default NutritionPanel