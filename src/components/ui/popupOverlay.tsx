
import { X } from 'lucide-react'
import type { TMeal } from '../../config/template';
import { NutritionalDetails } from '../popupContent/nutritionalDetails';
import Recipes from '../popupContent/recipes';
import AboutInfo from '../popupContent/aboutInfo';

interface PopupOverlayProps {
    openPopup: string,
    setOpenPopup: any,
    selectedMeals: TMeal[] | [],
}


function PopupOverlay({ openPopup, setOpenPopup, selectedMeals }: PopupOverlayProps) {
    return (
        <div className="absolute z-999 inset-0 flex flex-col items-center justify-center md:p-20 p-8 bg-black/30 backdrop-blur-xs">
            <button
                onClick={() => {
                    setOpenPopup(null)
                }}
                className='cursor-pointer'
            >
                <h1 className='font-bold text-sm mb-2 flex items-center gap-2'><X size={18} /> Close</h1>
            </button>
            <div className=" h-full w-full bg-white/30 backdrop-blur-xl rounded-2xl border border-white/90 p-10 flex flex-col">
                {openPopup === "nutrition" ? <NutritionalDetails meals={selectedMeals} /> :
                    openPopup === "recipe" ? <Recipes /> :
                        <AboutInfo />
                }

            </div>
            <button
                onClick={() => {
                    setOpenPopup(null)
                }}
                className='cursor-pointer'
            >
                <h1 className='font-bold text-sm mt-2 flex items-center gap-2'>Close</h1>
            </button>
        </div>
    )
}

export default PopupOverlay


