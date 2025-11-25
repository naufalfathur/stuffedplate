// Define the type for a single meal
export type TMeal = {
    _id: string
    food_id: number
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
            food_id: 4501,
            title: "White Rice",
            amount: "160g",
            objName: "rice",
            calories: 206,
            carbohydrate: 45,
            protein: 4,
            fat: 0,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            food_id: 1677,
            title: "Chicken Drumstick",
            amount: "101g",
            objName: "chicken",
            calories: 216,
            carbohydrate: 0,
            protein: 27,
            fat: 11,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            food_id: 1358,
            title: "Beef Steak",
            amount: "101g",
            objName: "beef",
            calories: 254,
            carbohydrate: 0,
            protein: 28,
            fat: 15,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            food_id: 2057,
            title: "Salmon",
            amount: "100g",
            objName: "salmon",
            calories: 146,
            carbohydrate: 0,
            protein: 22,
            fat: 6,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            food_id: 5762,
            title: "French Fries",
            amount: "100g",
            objName: "potato",
            calories: 274,
            carbohydrate: 35,
            protein: 3.5,
            fat: 14,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            food_id: 3096,
            title: "Fried Egg",
            amount: "53g",
            objName: "egg",
            calories: 102,
            carbohydrate: 0,
            protein: 7,
            fat: 8,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            food_id: 36308,
            title: "Cabbage",
            amount: "100g",
            objName: "vegetable",
            calories: 24,
            carbohydrate: 6,
            protein: 1,
            fat: 0,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            food_id: 6254,
            title: "Mixed Salad",
            amount: "100g",
            objName: "salad",
            calories: 17,
            carbohydrate: 3,
            protein: 2,
            fat: 0,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            food_id: 46072664,
            title: "White Bread",
            amount: "1 slice",
            objName: "bread",
            calories: 80,
            carbohydrate: 15,
            protein: 2,
            fat: 2,
        },
    },
    {
        meal: {
            _id: crypto.randomUUID(),
            food_id: 4409,
            title: "Noodles",
            amount: "101g",
            objName: "noodles",
            calories: 138,
            carbohydrate: 25,
            protein: 5,
            fat: 2.1,
        },
    }, {
        meal: {
            _id: crypto.randomUUID(),
            food_id: 4409,
            title: "Bacon",
            amount: "100g",
            objName: "bacon",
            calories: 541,
            carbohydrate: 1,
            protein: 37,
            fat: 42,
        },
    }, {
        meal: {
            _id: crypto.randomUUID(),
            food_id: 4409,
            title: "Beef Sausage",
            amount: "100g",
            objName: "sausage",
            calories: 325,
            carbohydrate: 4,
            protein: 11,
            fat: 29,
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

    // Bacon related
    bacon: "bacon",
    "turkey bacon": "bacon",
    "beef bacon": "bacon",
    "lamb bacon": "bacon",
    "pork bacon": "bacon",
    "streaky bacon": "bacon",
    "back bacon": "bacon",
    "smoked bacon": "bacon",
    "crispy bacon": "bacon",
    "bacon strip": "bacon",
    "bacon strips": "bacon",
    "beef strips": "bacon",
    "turkey strips": "bacon",
    "lamb strips": "bacon",
    "pork strips": "bacon",
    "ham strips": "bacon",
    fatback: "bacon",
    lardon: "bacon",
    lardons: "bacon",
    pancetta: "bacon",
    speck: "bacon",
    guanciale: "bacon",
    "belly strips": "bacon",
    "streaky pork": "bacon",
    "cured pork strips": "bacon",
    "crispy strips": "bacon",
    "breakfast strips": "bacon",

    // Sausage related
    sausage: "sausage",
    sausages: "sausage",
    "chicken sausage": "sausage",
    "beef sausage": "sausage",
    "pork sausage": "sausage",
    "turkey sausage": "sausage",
    "lamb sausage": "sausage",
    "vegan sausage": "sausage",
    "vegetarian sausage": "sausage",
    "breakfast sausage": "sausage",
    "smoked sausage": "sausage",
    "spicy sausage": "sausage",
    "jalapeno sausage": "sausage",
    banger: "sausage",
    bangers: "sausage",
    bratwurst: "sausage",
    wurst: "sausage",
    knackwurst: "sausage",
    frankfurter: "sausage",
    frank: "sausage",
    "hot dog": "sausage",
    hotdog: "sausage",
    "vienna sausage": "sausage",
    "cocktail sausage": "sausage",
    "mini sausage": "sausage",
    "sausage link": "sausage",
    "sausage links": "sausage",
    "long sausage": "sausage",
    "sausage roll filling": "sausage",
    "grilled sausage": "sausage",
}