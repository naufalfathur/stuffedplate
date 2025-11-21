import ObjectCanvas from "./components/canvas"

function App() {

  return (
    <div className=' h-screen w-full relative bg-[linear-gradient(135deg,#FEAD8B,#EA523E)] text-white'>


      <div className="absolute inset-0 z-50 pointer-events-none text-center 
  bg-linear-to-b from-white/0 via-[#FEAD8B]/10 via-70% to-[#FEAD8B]/90"/>
      <div className="absolute top-0 z-10 w-full py-20 text-center ">
        <h1 className='text-6xl font-bold '>Stuffed Plate</h1>
        <p className='text-sm mt-2 font-light'>A fun physics-based 3D plate stuffing experience</p>
      </div>
      <div className='absolute bottom-20 left-5 z-90 font-light w-full text-center'>
        <p className='text-lg'>In my plate, I have ... </p>
      </div>

      <ObjectCanvas />


    </div >
  )
}

export default App
