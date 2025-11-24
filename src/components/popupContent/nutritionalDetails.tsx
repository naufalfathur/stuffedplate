import { Salad } from 'lucide-react'
import type { TMeal } from '../../config/template';
import { useEffect, useState } from "react";

export const nutritionalFacts = [
    { type: "Total Fat", unit: "g", primary: true },
    { type: "Saturated Fat", unit: "g", primary: false, child: true },
    { type: "Trans Fat", unit: "g", primary: false, child: true },
    { type: "Polyunsaturated Fat", unit: "g", primary: false, child: true },
    { type: "Monounsaturated Fat", unit: "g", primary: false, child: true },
    { type: "Cholesterol", unit: "mg", primary: true },
    { type: "Sodium", unit: "mg", primary: true },
    { type: "Total Carbohydrate", unit: "g", primary: true },
    { type: "Dietary Fiber", unit: "g", primary: false, child: true },
    { type: "Sugars", unit: "g", primary: false, child: true },
    { type: "Protein", unit: "g", primary: true },
    { type: "Vitamin D", unit: "mcg", primary: false },
    { type: "Calcium", unit: "mg", primary: false },
    { type: "Iron", unit: "mg", primary: false },
    { type: "Potassium", unit: "mg", primary: false },
    { type: "Vitamin A", unit: "mcg", primary: false },
    { type: "Vitamin C", unit: "mg", primary: false }
];

interface NutritionalDetailsProps {
    meals: TMeal[] | [],
}

interface NutritionDetail {
    [key: string]: number | string | undefined;
}

interface MealNutritionMap {
    [foodId: string]: NutritionDetail;
}

export const NutritionalDetails = ({ meals }: NutritionalDetailsProps) => {
    const API_BASE = import.meta.env.VITE_API_BASE || 'https://stuffedplate.pages.dev'
    const [mealNutrition, setMealNutrition] = useState<MealNutritionMap>({});

    useEffect(() => {
        const fetchNutrition = async () => {
            const results: MealNutritionMap = {};

            for (const meal of meals) {
                if (!meal.food_id) continue;

                try {
                    const res = await fetch(`${API_BASE}/api/food_search?id=${meal.food_id}`);
                    const data = await res.json();

                    const servings = data?.food?.servings?.serving;
                    if (!servings || servings.length === 0) {
                        results[meal.food_id] = {};
                    } else {
                        // Take the first serving for simplicity
                        const s = servings[0];
                        results[meal.food_id] = {
                            calories: Number(s.calories),
                            fat: Number(s.fat),
                            carbohydrate: Number(s.carbohydrate),
                            protein: Number(s.protein),
                            saturated_fat: Number(s.saturated_fat),
                            monounsaturated_fat: Number(s.monounsaturated_fat),
                            polyunsaturated_fat: Number(s.polyunsaturated_fat),
                            cholesterol: Number(s.cholesterol),
                            sodium: Number(s.sodium),
                            fiber: Number(s.fiber),
                            sugars: Number(s.sugar),
                            calcium: Number(s.calcium),
                            iron: Number(s.iron),
                            potassium: Number(s.potassium),
                            vitamin_a: Number(s.vitamin_a),
                            vitamin_c: Number(s.vitamin_c),
                            vitamin_d: Number(s.vitamin_d)
                        };
                    }
                } catch (err) {
                    console.error("Failed to fetch nutrition for", meal.food_id, err);
                }
            }

            setMealNutrition(results);
        };

        if (meals.length > 0) fetchNutrition();
    }, [meals]);

    const totalCalories = meals.reduce((sum, meal) => sum + (meal.calories || 0), 0)
    const totalFat = meals.reduce((sum, meal) => sum + (meal.fat || 0), 0)
    const totalProtein = meals.reduce((sum, meal) => sum + (meal.protein || 0), 0)
    const totalCarbs = meals.reduce((sum, meal) => sum + (meal.carbohydrate || 0), 0)

    const aggregated = meals.reduce((acc, meal) => {
        const nd = mealNutrition[meal.food_id];
        if (!nd) return acc;

        // Sum individual facts first
        for (const fact of nutritionalFacts) {
            const key = fact.type.toLowerCase().replace(/\s+/g, "_");
            const value = Number(nd[key] || 0);
            acc[key] = Number(acc[key] || 0) + value;
        }

        // Total Fat
        acc["total_fat"] =
            (Number(nd.saturated_fat) || 0) +
            (Number(nd.trans_fat) || 0) +
            (Number(nd.polyunsaturated_fat) || 0) +
            (Number(nd.monounsaturated_fat) || 0);

        // Total Carbs
        acc["total_carbohydrate"] =
            (Number(nd.fiber) || 0) +
            (Number(nd.sugars) || 0);

        return acc;
    }, {} as NutritionDetail);

    function formatNumber(num: number) {
        return new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(num);
    }

    return (
        <div className='h-full flex flex-col justify-between'>
            <div className="w-full flex gap-5">
                <Salad size={70} className="" />
                <div className="flex w-full justify-between">
                    <h1 className='font-bold text-3xl'>Nutritional<br />Details</h1>
                    <div className="w-fit  flex flex-col justify-between">
                        <div className="flex gap-8">
                            <div className="flex flex-col  text-center w-1/2">
                                <p className='text-xs'>{formatNumber(totalCalories)}</p>
                                <p className='text-xs text-white/80'>Calories</p>
                            </div>
                            <div className="flex flex-col text-center w-1/2">
                                <p className='text-xs'>{formatNumber(totalCarbs)}</p>
                                <p className='text-xs text-white/80'>Carbs</p>
                            </div>
                        </div>
                        <div className="flex gap-8 ">
                            <div className="flex flex-col  text-center w-1/2">
                                <p className='text-xs'>{formatNumber(totalProtein)}</p>
                                <p className='text-xs text-white/80'>Protein</p>
                            </div>
                            <div className="flex flex-col  text-center w-1/2">
                                <p className='text-xs'>{formatNumber(totalFat)}</p>
                                <p className='text-xs text-white/80'>Fat</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="w-full h-full text-white border-t-4 border-b-4 mt-4 py-2 flex flex-col overflow-x-scroll">

                <div className='flex flex-col mb-2 gap-1 pb-2 border-b-2'>
                    <h2 className="text-lg border-b flex gap-1 justify-between items-center font0">
                        Total Meals <span className='text-sm italic'>(Scroll for individual item)</span>
                    </h2>

                    <div className="primary flex border-b font-bold justify-between">
                        <p className="text-sm">Calories</p>
                        <p className="text-sm">{totalCalories}</p>
                    </div>

                    {/* <div className="primary flex border-b font-bold justify-end">
                        <p className="text-sm">% Daily Values*</p>
                    </div> */}

                    {nutritionalFacts.map(n => {
                        const key = n.type.toLowerCase().replace(/\s+/g, "_");
                        return (
                            <div className={`${n.child && 'ml-4'} flex border-b ${n.primary ? 'font-bold' : 'font-light'} justify-between`}>
                                <p className="text-sm">{n.type}</p>
                                <p className="text-sm"> {aggregated[key] !== undefined ? formatNumber(Number(aggregated[key])) : "--"}{n.unit}</p>
                            </div>
                        )
                    })}
                </div>

                {meals.map((m, i) => (
                    <div className='flex flex-col mb-2 gap-1 pb-2 border-b-2'>
                        <h2 className="text-lg border-b flex gap-1">
                            <span className='text-xs'>{i + 1}</span>
                            {m.title}
                        </h2>

                        <div className="primary flex border-b font-bold justify-between">
                            <p className="text-sm">Calories</p>
                            <p className="text-sm">{m.calories}</p>
                        </div>

                        {/* <div className="primary flex border-b font-bold justify-end">
                            <p className="text-sm">% Daily Values*</p>
                        </div> */}
                        {nutritionalFacts.map(n => (
                            <div className={`${n.child && 'ml-4'} flex border-b ${n.primary ? 'font-bold' : 'font-light'} justify-between`}>
                                <p className="text-sm">
                                    {n.type}
                                </p>
                                <p className="text-sm">
                                    {mealNutrition[m.food_id]?.[n.type.toLowerCase().replace(/\s+/g, "_")] !== undefined ? formatNumber(Number(mealNutrition[m.food_id]?.[n.type.toLowerCase().replace(/\s+/g, "_")])) : "--"}
                                    {n.unit}
                                </p>
                            </div>
                        ))}
                    </div>
                ))}



            </div>

            <p className="text-xs mt-2">* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
            {/* <p className="text-xs mt-2 text-center">Set your own daily calorie intake</p>
            <div className="flex w-full my-2 gap-2"
            >
                <input
                    type="text"
                    placeholder="2000"
                    value={""}
                    className="w-full px-3 py-2 rounded-md outline-1 outline-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                    onClick={() => { }}
                    className="px-4 py-2 backdrop-blur-sm rounded-md text-white flex items-center gap-2 border border-white/30 hover:bg-white/30 transition cursor-pointer"
                >
                    Recalculate
                </button>
            </div> */}
        </div>
    )
}
