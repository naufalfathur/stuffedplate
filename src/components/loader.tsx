import { Html, useProgress } from "@react-three/drei"

export default function Loader() {
    const { progress } = useProgress()

    return (
        <Html center>
            <div style={{ width: "120px", textAlign: "center", color: "white", fontSize: "12px" }}>
                <div style={{
                    width: "100%",
                    height: "8px",
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: "4px",
                    overflow: "hidden",
                    marginBottom: "6px"
                }}>
                    <div style={{
                        width: `${progress}%`,
                        height: "100%",
                        background: "white",
                        transition: "width 0.2s ease"
                    }} />
                </div>
                {Math.floor(progress)}%
            </div>
        </Html>
    )
}