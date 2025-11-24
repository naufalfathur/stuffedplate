const credits = [
    {
        name: "Plate",
        author: "Black Snow",
        license: "CC BY",
        url: "https://sketchfab.com/3d-models/plate-519c319332ed4708ba4b3ca1dfd5f54a"
    },
    {
        name: "Rice",
        author: "neutralize",
        license: "CC BY",
        url: "https://sketchfab.com/3d-models/rice-98264afd43824e6595aaf7fb3e406e6e"
    },
    {
        name: "Turkey leg",
        author: "BillieBones",
        license: "CC BY",
        url: "https://sketchfab.com/3d-models/turkey-leg-3c889b5ee6b64a2aafb9b8977f8a8219"
    },
    {
        name: "Steak",
        author: "1-3D.com",
        license: "CC BY-SA",
        url: "https://sketchfab.com/3d-models/steak-925577b90bd74ef08f41f22d2a357e63"
    },
    {
        name: "French fries",
        author: "1-3D.com",
        license: "CC BY-SA",
        url: "https://sketchfab.com/3d-models/french-fries-8f7eed849eab4f2fac4f5e62dee7b89e"
    },
    {
        name: "Fried egg",
        author: "ANCAP Assets",
        license: "CC BY",
        url: "https://sketchfab.com/3d-models/fried-egg-pbr-game-asset-8de2390c67b84532bd2b25318f656b99"
    },
    {
        name: "Cabbage",
        author: "pllrn_rdlph (pellerin_rodolphe)",
        license: "CC BY",
        url: "https://sketchfab.com/3d-models/cabbage-7fb949a66dfd4e25b2a9658c0acfd4c5"
    },
    {
        name: "Salad",
        author: "samlee.fms",
        license: "CC BY",
        url: "https://sketchfab.com/3d-models/salad-4be5cd6b8d32454a9fb22bca5e430145"
    },
    {
        name: "Salmon",
        author: "scrampunk",
        license: "CC BY",
        url: "https://sketchfab.com/3d-models/salmon-c13528cb6aa4497eaad832124ef2986b"
    },
    {
        name: "Toast",
        author: "1-3D.com",
        license: "CC BY-SA",
        url: "https://sketchfab.com/3d-models/toast-ed8689dad919448bb78cd696725e12c5"
    },
    {
        name: "Noodles",
        author: "haifa_123",
        license: "CC BY",
        url: "https://sketchfab.com/3d-models/noodles-3730e116e77e4ebcb5a2224c7c140669"
    }
]

function AboutInfo() {
    return (
        <div className="h-full flex flex-col justify-center">
            <img src="/logo-wtxt.svg" alt="Stuffed Plate Logo" className="w-full max-w-60 h-auto object-contain mx-auto p-10" />

            <div className="flex flex-col p-5">
                <p className="text-md mt-2 text-center">Project build by Naufal Fathur,<br />visit<a
                    href={"https://naufalfathur.is-a.dev/"}
                    target="_blank"
                    className="ml-2 text-blue-300 underline"
                    rel="noopener noreferrer"
                >naufalfathur.is-a.dev
                </a> for more projects
                </p>

                <h2 className="text-md font-semibold text-white my-4 text-center">3D Model Credits</h2>

                <div className="flex flex-col gap-2">
                    {credits.map((c, i) => (
                        <div key={i} className="text-xs flex gap-2">
                            <p>
                                <strong>{c.name}</strong> by {c.author}, licensed under{" "}
                                <span className="font-semibold">{c.license}</span>.
                                <a
                                    href={c.url}
                                    target="_blank"
                                    className="ml-2 text-blue-300 underline text-xs"
                                    rel="noopener noreferrer"
                                >
                                    View on Sketchfab
                                </a>
                            </p>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default AboutInfo