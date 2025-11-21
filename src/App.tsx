import { useState } from "react"
import ObjectCanvas from "./components/canvas"
import Meal from "./components/meal"
import { mealTemplates } from "./config/template"

function App() {
  const [selectedMeals, setSelectedMeals] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])

  function addMeal(meal: any) {
    setSelectedMeals(prev => [
      ...prev,
      {
        ...meal,
        _id: crypto.randomUUID(), // unique key for React + physics
      },
    ])
  }

  const filteredMeals = mealTemplates
    .map(({ meal }: any) => meal.title)
    .filter(title => title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className=' h-screen w-full relative bg-[linear-gradient(135deg,#FEAD8B,#EA523E)] text-white'>


      <ObjectCanvas meals={selectedMeals} />

      <div className="absolute inset-0 z-50 pointer-events-none text-center 
  bg-linear-to-b from-white/0 via-[#FEAD8B]/10 via-70% to-[#FEAD8B]/90"/>

      <div className="absolute top-0 z-10 w-full py-20 text-center ">
        <h1 className='text-6xl font-extrabold '>Stuffed Plate</h1>
        <p className='text-lg font-light'>Stuff your plate, watch it tumble</p>
      </div>

      <div className="absolute bottom-20 left-0 right-0 z-90 font-light w-full text-center px-4">
        <p className="text-lg mb-3">Add food to my plate:</p>

        <div className="flex flex-row gap-2 w-full justify-center">
          <div className="relative inline-block w-64 mb-4 text-left">
            <input
              type="text"
              placeholder="Search meal"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 rounded-md outline-1 outline-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            {searchTerm && filteredMeals.length > 0 && (
              <ul className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white text-black shadow-lg">
                {filteredMeals.map((title) => (
                  <li
                    key={title}
                    className="cursor-pointer px-3 py-2 hover:bg-orange-200"
                    onClick={() => setSearchTerm(title)}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            onClick={() => { }}
            className=" h-10 w-10 justify-center text-center bg-white/20 backdrop-blur-md rounded-full text-white flex items-center border border-white/30 hover:bg-white/30 transition"
          >+</button>
        </div>

        <div className="flex flex-wrap gap-3 justify-center text-sm">
          {mealTemplates.map(({ meal }: any) => (
            <button
              key={meal.objName}
              onClick={() => addMeal(meal)}
              className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center gap-2 border border-white/30 hover:bg-white/30 transition cursor-pointer"
            >
              {meal.title}
              <span className="text-md font-light">+</span>
            </button>
          ))}
        </div>
      </div>




    </div >
  )
}

export default App
