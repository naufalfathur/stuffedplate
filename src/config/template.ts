// Define the type for a single meal
export type TMeal = {
    _id?: string
    title: string
    objName: string
    calories: number
    carbohydrate: number
    protein: number
    fat: number
}

// Define the type for the template wrapper
export type TMealTemplate = {
    meal: TMeal
}

// Now export the typed array
export const mealTemplates: TMealTemplate[] = [
    {
        meal: {
            title: "White Rice 100g",
            objName: "rice",
            calories: 130,
            carbohydrate: 28,
            protein: 2.7,
            fat: 0.3,
        },
    },
    {
        meal: {
            title: "Chicken 100g",
            objName: "chicken",
            calories: 165,
            carbohydrate: 0,
            protein: 31,
            fat: 3.6,
        },
    },
    {
        meal: {
            title: "Beef 100g",
            objName: "beef",
            calories: 250,
            carbohydrate: 0,
            protein: 26,
            fat: 15,
        },
    },
    {
        meal: {
            title: "Salmon 100g",
            objName: "salmon",
            calories: 208,
            carbohydrate: 0,
            protein: 20,
            fat: 13,
        },
    },
    {
        meal: {
            title: "Potato 100g",
            objName: "potato",
            calories: 87,
            carbohydrate: 20,
            protein: 2,
            fat: 0.1,
        },
    },
    {
        meal: {
            title: "Egg",
            objName: "egg",
            calories: 78,
            carbohydrate: 0.6,
            protein: 6.3,
            fat: 5.3,
        },
    },
    {
        meal: {
            title: "Greens 100g",
            objName: "vegetable",
            calories: 65,
            carbohydrate: 12,
            protein: 3,
            fat: 0.4,
        },
    },
    {
        meal: {
            title: "Salad 100g",
            objName: "salad",
            calories: 25,
            carbohydrate: 5,
            protein: 1,
            fat: 0.2,
        },
    },
    {
        meal: {
            title: "Bread Slice",
            objName: "bread",
            calories: 80,
            carbohydrate: 14,
            protein: 3,
            fat: 1,
        },
    },
    {
        meal: {
            title: "Noodles 100g",
            objName: "noodles",
            calories: 138,
            carbohydrate: 25,
            protein: 5,
            fat: 2.1,
        },
    },
]