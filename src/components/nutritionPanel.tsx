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
        <mesh castShadow position={[0, 5, -6]} rotation={[0, 0, 0]} scale={[2, 2, 1]}>

            <Center top>
                <Text txt="Nutritional Contents" size={0.4} position={[0, 0, 0]} color='lightblue' />
                <Text txt={`${Math.round(totalCalories)} KCal`} size={0.3} position={[0, -0.5, 0]} />
                <Text txt={`${Math.round(totalFat)} Fat`} size={0.3} position={[0, -1, 0]} />
                <Text txt={`${Math.round(totalProtein)} Protein`} size={0.3} position={[0, -1.5, 0]} />
                <Text txt={`${Math.round(totalCarbs)} Carbs`} size={0.3} position={[0, -2, 0]} />
            </Center>

        </mesh>
    )
}

export default NutritionPanel