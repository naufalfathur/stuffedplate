// Define the type for a single meal
export type TMeal = {
    _id: string
    title: string
    objName: string
    amount: string
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
            _id: crypto.randomUUID(),
            title: "White Rice",
            amount: "100g",
            objName: "rice",
            calories: 130,
            carbohydrate: 28,
            protein: 2.7,
            fat: 0.3,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            title: "Chicken",
            amount: "100g",
            objName: "chicken",
            calories: 165,
            carbohydrate: 0,
            protein: 31,
            fat: 3.6,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            title: "Beef",
            amount: "100g",
            objName: "beef",
            calories: 250,
            carbohydrate: 0,
            protein: 26,
            fat: 15,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            title: "Salmon",
            amount: "100g",
            objName: "salmon",
            calories: 208,
            carbohydrate: 0,
            protein: 20,
            fat: 13,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            title: "Potato",
            amount: "100g",
            objName: "potato",
            calories: 87,
            carbohydrate: 20,
            protein: 2,
            fat: 0.1,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            title: "Egg",
            amount: "1 large",
            objName: "egg",
            calories: 78,
            carbohydrate: 0.6,
            protein: 6.3,
            fat: 5.3,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            title: "Greens",
            amount: "100g",
            objName: "vegetable",
            calories: 65,
            carbohydrate: 12,
            protein: 3,
            fat: 0.4,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            title: "Salad",
            amount: "100g",
            objName: "salad",
            calories: 25,
            carbohydrate: 5,
            protein: 1,
            fat: 0.2,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            title: "Toast Bread",
            amount: "1 slice",
            objName: "bread",
            calories: 80,
            carbohydrate: 14,
            protein: 3,
            fat: 1,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            title: "Noodles",
            amount: "100g",
            objName: "noodles",
            calories: 138,
            carbohydrate: 25,
            protein: 5,
            fat: 2.1,
        },
    },
]

// Mapping of food-related keywords to their corresponding objName in the mealTemplates
export const foodKeywordMapping: Record<string, string> = {
    // Rice related
    rice: "rice",
    "white rice": "rice",
    basmati: "rice",
    jasmine: "rice",
    "brown rice": "rice",
    sushi: "rice",
    risotto: "rice",

    // Chicken related
    chicken: "chicken",
    "chicken breast": "chicken",
    "grilled chicken": "chicken",
    "fried chicken": "chicken",
    "chicken thigh": "chicken",
    "roast chicken": "chicken",
    "chicken leg": "chicken",
    "chicken drumstick": "chicken",

    // Beef related
    beef: "beef",
    steak: "beef",
    "ground beef": "beef",
    "beef burger": "beef",
    "roast beef": "beef",
    "beef stew": "beef",
    "beef ribs": "beef",
    "beef brisket": "beef",

    // Salmon related
    salmon: "salmon",
    "grilled salmon": "salmon",
    "smoked salmon": "salmon",
    "salmon fillet": "salmon",
    "salmon steak": "salmon",
    "baked salmon": "salmon",

    // Potato related
    potato: "potato",
    "baked potato": "potato",
    "mashed potato": "potato",
    "fried potato": "potato",
    fries: "potato",
    "potato wedges": "potato",
    "potato chips": "potato",
    "roasted potato": "potato",

    // Egg related
    egg: "egg",
    "boiled egg": "egg",
    "fried egg": "egg",
    "scrambled egg": "egg",
    omelette: "egg",
    "egg white": "egg",
    "egg yolk": "egg",
    "poached egg": "egg",

    // Vegetable related
    vegetable: "vegetable",
    greens: "vegetable",
    spinach: "vegetable",
    kale: "vegetable",
    broccoli: "vegetable",
    carrot: "vegetable",
    cucumber: "vegetable",
    tomato: "vegetable",
    lettuce: "vegetable",
    cabbage: "vegetable",
    zucchini: "vegetable",
    pepper: "vegetable",
    celery: "vegetable",
    asparagus: "vegetable",
    cauliflower: "vegetable",
    eggplant: "vegetable",
    radish: "vegetable",
    greenbean: "vegetable",
    greenbeans: "vegetable",
    peas: "vegetable",

    // Salad related
    salad: "salad",
    "green salad": "salad",
    "fruit salad": "salad",
    "caesar salad": "salad",
    "garden salad": "salad",
    "potato salad": "salad",
    "pasta salad": "salad",
    "coleslaw": "salad",
    "bean salad": "salad",
    "cucumber salad": "salad",

    // Bread related
    bread: "bread",
    toast: "bread",
    "toast bread": "bread",
    "white bread": "bread",
    "whole wheat bread": "bread",
    "baguette": "bread",
    "bread roll": "bread",
    "ciabatta": "bread",
    "sourdough": "bread",
    "rye bread": "bread",
    "pita bread": "bread",
    "flatbread": "bread",

    // Noodles related
    noodles: "noodles",
    "egg noodles": "noodles",
    "rice noodles": "noodles",
    "udon noodles": "noodles",
    "soba noodles": "noodles",
    "ramen noodles": "noodles",
    spaghetti: "noodles",
    pasta: "noodles",
    linguine: "noodles",
    fettuccine: "noodles",
    macaroni: "noodles",
    vermicelli: "noodles",
    "lo mein": "noodles",
    chowmein: "noodles",
}