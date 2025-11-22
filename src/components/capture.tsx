import html2canvas from 'html2canvas-pro'
import { Scan } from 'lucide-react';

interface CaptureProps {
    setCapturetingState: (state: boolean) => void
}

function Capture({ setCapturetingState }: CaptureProps) {
    return (
        <button
            onClick={() => {
                setCapturetingState(true);
                // wait a tick so the DOM can update
                setTimeout(async () => {
                    console.log("Capturing screenshot...")
                    const canvas = await html2canvas(document.body, {
                        useCORS: true,
                        scale: 2,
                        onclone: (doc) => {
                            doc.querySelectorAll(".rounded-full").forEach((el) => {
                                const node = el as HTMLElement;
                                // Remove transparent + blur background (causing the bug)
                                node.style.background = "rgba(255,255,255,0.2)";
                                node.style.backdropFilter = "none";
                                node.style.backdropFilter = "none";
                                node.style.overflow = "hidden"; // critical for rounded corners to clip
                            });
                        }
                    });

                    const dataUrl = canvas.toDataURL("image/png");

                    const link = document.createElement("a");
                    link.href = dataUrl;
                    link.download = "stuffedplate_screenshot.png";
                    link.click();

                    setCapturetingState(false);
                }, 50); // small delay to ensure DOM re-render
            }}
            className="h-10 w-10 flex justify-center items-center gap-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 hover:bg-white/30 transition cursor-pointer"
        >
            <Scan size={20} />
        </button>
    )
}

export default Capture