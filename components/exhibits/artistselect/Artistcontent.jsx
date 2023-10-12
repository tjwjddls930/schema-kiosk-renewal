import Link from "next/link";
import { useEffect, useState } from "react";

export default function Artistcontent({order, title, name, text}) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        // Update the isClient state to true as this code will be executed only on client side
        setIsClient(true);
      }, []);

    return (
        <>
        {isClient && (
            <div className="screen-w:w-full screen-w:h-full flex flex-row screen-w:mx-auto">
                <span className="text-8xl w-1/12 screen-w:w-2/12 font-bold text-black pl-32 screen-w:text-[170px] screen-w:pl-56">{''}</span>
                <div className="flex flex-row h-[180px] screen-w:h-[500px] w-1/2 ml-64 screen-w:ml-96 items-center shadow-lg px-8 bg-Awhite mx-auto rounded-lg">
                    <div className="flex flex-col space-y-3 screen-w:space-y-8 w-1/4">
                        <div className="bg-Cpurple h-[1.5px] w-10 screen-w:w-20" />
                        <span className="text-lg screen-w:text-3xl text-Cgrey font-bold">{title}</span>
                        <span className="text-xl screen-w:text-5xl text-Ablack font-bold mb-4">{name}</span>
                        <button className="text-base h-8 w-[120px] screen-w:text-4xl screen-w:h-20 screen-w:w-[300px] text-Awhite font-bold rounded-md bg-gradient-to-r from-Agradient to-Bgradient">
                            <Link href={`/artist/paint/${order}`}>
                                {'작품 보러가기'}
                            </Link>
                        </button>
                    </div>
                    <div className="p-2 w-3/4 h-full overflow-auto">
                        <p className="text-black text-base screen-w:text-4xl overflow-auto p-4 screen-w:py-8 screen-w:leading-normal">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}