import { Download, Share, X } from "lucide-react";

interface CaptureOverlayProps {
    capturedImage: string;
    onClose: () => void;
}

export default function CaptureOverlay({ capturedImage, onClose }: CaptureOverlayProps) {
    console.log("Captured Image:", capturedImage);
    return (
        <div className="absolute inset-0 z-999 bg-linear-to-b from-bg-white/30 to-black/30 backdrop-blur-lg flex flex-col items-center justify-center p-6">
            <div className="flex flex-col items-center gap-6">
                <img
                    src={capturedImage}
                    className="max-w-[90%] max-h-[60vh] rounded-xl shadow-xl"
                />
                <div className="flex flex-col gap-4 justify-center items-center">
                    <a
                        href={capturedImage}
                        download="stuffed_plate.png"
                        className="px-5 py-3 bg-white text-black rounded-full w-fit flex gap-2"
                    >
                        <Download />  Save Image
                    </a>

                    {typeof navigator !== "undefined" &&
                        /Mobi|Android/i.test(navigator.userAgent) &&
                        typeof navigator.canShare === "function" && (
                            <button
                                onClick={async () => {
                                    try {
                                        const res = await fetch(capturedImage);
                                        const blob = await res.blob();
                                        const file = new File([blob], "stuffed_plate.png", { type: blob.type });
                                        if (navigator.canShare({ files: [file] })) {
                                            await navigator.share({
                                                files: [file],
                                                title: "Stuffed Plate",
                                                text: "My food plate!"
                                            });
                                        }
                                    } catch (err) {
                                        console.error("Share failed:", err);
                                    }
                                }}
                                className="flex gap-2 w-fit px-5 py-3 bg-black/20 text-white rounded-full border border-white backdrop-blur-md"
                            >
                                <Share />
                                Share to show support!
                            </button>
                        )}
                </div>
            </div>

            <button
                onClick={onClose}
                className="cursor-pointer flex gap-2 items-center mt-8 text-sm text-white/70 font-bold"
            >
                <X size={15} /> Close
            </button>
        </div>
    )
}