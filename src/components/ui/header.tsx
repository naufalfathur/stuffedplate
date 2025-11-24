import { Info, RefreshCcw } from 'lucide-react';

import type { TMeal } from '../../config/template';
import Capture from './capture';

interface headerProps {
    selectedMeals: TMeal[] | [],
    captureState: 0 | 1 | 2,
    setSelectedMeals: any,
    setCapturetingState: any
    setCapturedImage: any
    setOpenPopup: any
}

function Header({ selectedMeals, captureState, setSelectedMeals, setCapturetingState, setCapturedImage, setOpenPopup }: headerProps) {
    return (
        <>
            <div className="header absolute top-8 w-full z-10 h-[25vh] px-5 flex justify-between ">
                <div className="w-1/3">
                    <button
                        id='info'
                        onClick={() => {
                            setOpenPopup("info");
                            (window as any).dataLayer.push({ 'event': 'infoPopUp' });
                        }}
                        className="relative h-10 w-10 flex justify-center items-center gap-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 hover:bg-white/30 transition cursor-pointer"
                    >
                        <Info size={15} />
                    </button>
                </div>

                <div className="flex flex-col w-1/3 items-center text-center justify-start">
                    <img src="/logo-wtxt.svg" alt="Stuffed Plate Logo" className="w-full max-w-60 h-auto object-contain mx-auto" />

                    {selectedMeals.length > 0 && captureState === 0 && (
                        <button
                            onClick={() => {
                                (window as any).dataLayer.push({ event: 'reset' });
                                setSelectedMeals([]);
                            }}
                            className="mt-4 text-xs px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center gap-2 border border-white/30 hover:bg-white/30 transition cursor-pointer"
                        >
                            Reset <RefreshCcw size={10} />
                        </button>
                    )}
                </div>

                <div className="w-1/3 justify-start items-end flex flex-col gap-2">
                    {/* <button
                        id='capture'
                        onClick={() => {
                        }}
                        className="relative h-10 w-10 flex justify-center items-center gap-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 hover:bg-white/30 transition cursor-pointer"
                    >
                        <Music size={17} />
                    </button> */}
                    {captureState === 0 && <Capture setCapturetingState={setCapturetingState} onCapture={(img: string) => setCapturedImage(img)} selectedMealLength={selectedMeals.length} />}
                </div>
            </div>
        </>
    )
}

export default Header