import { Text3D, RoundedBox, Center } from '@react-three/drei'
import Text from './text'
import type { TMeal } from '../config/template'

interface NutritionPanelProps {
    meals: TMeal[]
}

function NutritionPanel({ meals = [] }: NutritionPanelProps) {
    const totalCalories = meals.reduce((sum, meal) => sum + (meal.calories || 0), 0)
    const totalFat = meals.reduce((sum, meal) => sum + (meal.fat || 0), 0)
    const totalProtein = meals.reduce((sum, meal) => sum + (meal.protein || 0), 0)
    const totalCarbs = meals.reduce((sum, meal) => sum + (meal.carbohydrate || 0), 0)

    return (
        <mesh castShadow position={[0, 10, -9]} rotation={[0, 0, 0]} scale={[2, 2, 1]}>
            <RoundedBox args={[7, 4, 0.2]} radius={0.2} smoothness={4}>
                <meshStandardMaterial color="#ffffff" opacity={0.4} transparent={true} />
            </RoundedBox>
            <Center>
                <Text txt="Nutritional Contents" size={0.4} position={[0, -1, 0]} weight={'Bold'} />
                <Text txt={`${Math.round(totalCalories)} KCal`} size={0.3} position={[0, -1.5, 0]} weight={'Light_Regular'} />
                <Text txt={`${Math.round(totalFat)} Fat`} size={0.3} position={[0, -2, 0]} weight={'Light_Regular'} />
                <Text txt={`${Math.round(totalProtein)} Protein`} size={0.3} position={[0, -2.5, 0]} weight={'Light_Regular'} />
                <Text txt={`${Math.round(totalCarbs)} Carbs`} size={0.3} position={[0, -3, 0]} weight={'Light_Regular'} />
            </Center>

        </mesh>
    )
}

export default NutritionPanel