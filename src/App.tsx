import { useState } from "react"
import ObjectCanvas from "./components/canvas"
import { mealTemplates, type TMeal, foodKeywordMapping } from "./config/template"
import Capture from "./components/capture"
import { RefreshCcw } from "lucide-react"


function App() {
  const API_BASE = import.meta.env.VITE_API_BASE || 'https://stuffedplate.pages.dev'

  const [selectedMeals, setSelectedMeals] = useState<TMeal[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<TMeal[]>([])
  const [isCapturing, setIsCapturing] = useState(false)

  function addMeal(meal: TMeal) {
    (window as any).dataLayer.push({ 'event': 'Add Meal', 'meal': meal, 'meal_name': meal.title });
    setSelectedMeals(prev => [
      ...prev,
      {
        ...meal,
        _id: crypto.randomUUID(), // unique key for React + physics
      },
    ])
  }

  function removeMeal(id: string) {
    setSelectedMeals(prev => prev.filter(meal => meal._id !== id))
  }

  async function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      setSearchResults([])
      try {
        const res = await fetch(`${API_BASE}/api/food_search?query=${encodeURIComponent(searchTerm)}`)

        console.log('Fetch response:', res)
        const data = await res.json()

        const parsedResults: TMeal[] = data.foods.food.map((item: any) => {
          const { food_name, food_description } = item


          const amountMatch = food_description.match(/Per\s*([^\-\n\r]+)/i)
          const caloriesMatch = food_description.match(/Calories:\s*([\d\.]+)/i)
          const fatMatch = food_description.match(/Fat:\s*([\d\.]+)/i)
          const carbsMatch = food_description.match(/Carbs:\s*([\d\.]+)/i)
          const proteinMatch = food_description.match(/Protein:\s*([\d\.]+)/i)

          console.log("name: ", food_name)
          console.log("description: ", food_description)
          console.log("amountMatch: ", amountMatch[1])
          console.log("caloriesMatch: ", caloriesMatch[1])
          console.log("fatMatch: ", fatMatch[1])
          console.log("carbsMatch: ", carbsMatch[1])
          console.log("proteinMatch: ", proteinMatch[1])

          let objName: string | null = null
          const lowerFoodName = food_name.toLowerCase()
          for (const keyword in foodKeywordMapping) {
            if (lowerFoodName.includes(keyword.toLowerCase())) {
              objName = foodKeywordMapping[keyword]
              break
            }
          }

          return {
            _id: crypto.randomUUID(),
            title: food_name,
            amount: amountMatch ? amountMatch[1].trim() : "",
            calories: caloriesMatch ? parseFloat(caloriesMatch[1]) : 0,
            fat: fatMatch ? parseFloat(fatMatch[1]) : 0,
            carbohydrate: carbsMatch ? parseFloat(carbsMatch[1]) : 0,
            protein: proteinMatch ? parseFloat(proteinMatch[1]) : 0,
            objName: objName,
          }
        })
        setSearchResults(parsedResults)
      } catch (error) {
        console.error(error)
        setSearchResults([])
      }
    }
  }

  function setCapturetingState(state: boolean) {
    console.log("Capture state:", state);
    setIsCapturing(state)
  }

  return (
    <div className=' h-screen w-full relative bg-[linear-gradient(135deg,#FEAD8B,#EA523E)] text-white'>


      <ObjectCanvas meals={selectedMeals} />

      <div className="absolute inset-0 z-50 pointer-events-none text-center 
  bg-linear-to-b from-white/0 via-[#FEAD8B]/10 via-60% to-[#FEAD8B]"/>

      <div className="absolute top-10 w-full z-10 h-[25vh] px-10 flex justify-between ">

        <div className="w-1/3">

          <a href="https://naufalfathur.is-a.dev" target="_blank" rel="noopener noreferrer">
            <img
              id="nflogo"
              src="/nflogo.png"
              alt="Naufal Fathur Logo"
              className="w-15 h-15 object-contain"
            />
          </a>

        </div>

        <div className="flex flex-col w-1/3 items-center text-center justify-start">
          <img src="/logo-wtxt.png" alt="Stuffed Plate Logo" className="w-full max-w-60 h-auto object-contain mx-auto" />

          {selectedMeals.length > 0 && (
            <button
              onClick={() => {
                (window as any).dataLayer.push({ 'event': 'reset' });
                setSelectedMeals([])
              }}
              className="mt-4 text-xs px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center gap-2 border border-white/30 hover:bg-white/30 transition cursor-pointer"
            >
              Reset <RefreshCcw size={10} />
            </button>
          )}

        </div>

        <div className="w-1/3 justify-end flex">
          {!isCapturing && <Capture setCapturetingState={setCapturetingState} />}
        </div>

      </div>



      <div className="absolute flex flex-col justify-end bottom-5 left-0 right-0 z-90 font-light w-full text-center px-2 max-h-[40vh] overflow-y-auto">
        <p className="text-lg mb-3">In my plate I have:</p>

        <div className="flex flex-wrap justify-center gap-2 mb-4 text-xs">
          {selectedMeals.length === 0 ? (
            <p className="text-sm mb-3">Nothing..</p>
          ) : (
            <>
              {selectedMeals.slice(0, 5).map(meal => (
                <button
                  key={meal._id}
                  onClick={() => removeMeal(meal._id)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 hover:bg-white/30 transition cursor-pointer"
                >
                  {meal.title} {meal.amount}
                  <span className="text-xm font-light">×</span>
                </button>
              ))}

              {selectedMeals.length > 5 && (
                <div
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 cursor-default"
                >
                  and {selectedMeals.length - 5} more...
                </div>
              )}
            </>
          )}
        </div>

        {!isCapturing && (
          <div className="flex flex-col w-full">
            <p className="text-lg mb-3">Add food to my plate:</p>

            <div className="flex flex-col items-center w-full justify-center px-10">
              <div className="relative inline-block w-full mb-4 text-left">
                <input
                  type="text"
                  placeholder="Search meal"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full px-3 py-2 rounded-md outline-1 outline-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                {searchResults.length > 0 && (
                  <ul className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white text-black shadow-lg">
                    {searchResults.map(result => (
                      <li
                        key={result._id}
                        className="cursor-pointer px-3 py-2 hover:bg-orange-200"
                        onClick={() => {
                          addMeal(result)
                          setSearchResults([])
                          setSearchTerm("")
                        }}
                      >
                        {result.title} / {result.amount}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center text-xs">
              {mealTemplates.map(({ meal }: any) => (
                <button
                  key={meal.objName}
                  onClick={() => addMeal(meal)}
                  className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center gap-2 border border-white/30 hover:bg-white/30 transition cursor-pointer"
                >
                  {meal.title} {meal.amount}
                  <span className="text-sm font-light">+</span>
                </button>
              ))}
            </div>
          </div>
        )}

      </div>




    </div >
  )
}

export default App
