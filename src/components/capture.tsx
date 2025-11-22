import html2canvas from 'html2canvas-pro'
import { ChevronUp, Scan } from 'lucide-react';

interface CaptureProps {
    setCapturetingState: (state: 0 | 1 | 2) => void
    onCapture: (img: string) => void
    selectedMealLength: number
}

function Capture({ setCapturetingState, onCapture, selectedMealLength }: CaptureProps) {
    return (
        <>
            <button
                id='capture'
                onClick={() => {

                    (window as any).dataLayer.push({ 'event': 'capture' });

                    setCapturetingState(1);
                    setTimeout(async () => {
                        console.log("Capturing screenshot...")
                        const canvas = await html2canvas(document.body, {
                            useCORS: true,
                            scale: 2,
                            onclone: (doc) => {
                                doc.querySelectorAll(".rounded-full").forEach((el) => {
                                    const node = el as HTMLElement;
                                    node.style.background = "rgba(255,255,255,0.2)";
                                    node.style.backdropFilter = "none";
                                    node.style.backdropFilter = "none";
                                    node.style.overflow = "hidden";
                                });
                            }
                        });

                        const dataUrl = canvas.toDataURL("image/png");

                        onCapture(dataUrl);
                        setCapturetingState(2);
                    }, 50); // small delay to ensure DOM re-render
                }}
                className="relative h-10 w-10 flex justify-center items-center gap-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 hover:bg-white/30 transition cursor-pointer"
            >
                <Scan size={20} />
                {selectedMealLength > 0 && (
                    <div className="absolute top-13 right-0 rounded-md  text-white font-bold text-xs whitespace-nowrap z-50 text-right animate-pulse flex flex-col items-end">
                        <ChevronUp size={14} />
                        Capture and<br />share your plate!
                    </div>
                )}
            </button>

        </>
    )
}

export default Capture