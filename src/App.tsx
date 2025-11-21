import { useState } from "react"
import ObjectCanvas from "./components/canvas"
import Meal from "./components/meal"
import { mealTemplates } from "./config/template"

function App() {
  const [selectedMeals, setSelectedMeals] = useState<any[]>([])

  function addMeal(meal: any) {
    setSelectedMeals(prev => [
      ...prev,
      {
        ...meal,
        _id: crypto.randomUUID(), // unique key for React + physics
      },
    ])
  }

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

        <div className="flex flex-wrap gap-3 justify-center">
          {mealTemplates.map(({ meal }: any) => (
            <button
              key={meal.objName}
              onClick={() => addMeal(meal)}
              className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center gap-2 border border-white/30 hover:bg-white/30 transition"
            >
              {meal.title}
              <span className="text-xl font-bold">+</span>
            </button>
          ))}
        </div>
      </div>




    </div >
  )
}

export default App
