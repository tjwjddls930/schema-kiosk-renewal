import Link from "next/link";
import { useEffect, useState } from "react";

const Artistcontent = ({number, order, title, name, text}) => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        // Update the isClient state to true as this code will be executed only on client side
        setIsClient(true);
      }, []);

    return (
        <>
        {isClient && (
            <div className="flex flex-col h-3/4 screen-w:w-full screen-w:h-full screen-w:mx-auto bg-Awhite">
                <div className="flex flex-row space-x-2 screen-w:space-x-4 h-1/4 w-full items-center px-8 bg-Awhite mx-auto">
                    <span className="text-6xl screen-w:text-9xl text-Ablack font-bold">{number}</span>
                    <div className="flex flex-col space-y-2 screen-w:space-y-8 w-1/4">
                        <div className="bg-Cpurple h-[1.5px] w-10 screen-w:w-20" />
                        <span className="text-base screen-w:text-3xl text-Cgrey font-bold">{title}</span>
                        <span className="text-lg screen-w:text-5xl text-Ablack font-bold mb-4">{name}</span>
                    </div>
                </div>
                <div className="p-2 w-[65%] h-[150px] screen-w:p-8 screen-w:h-[550px] overflow-auto">
                    <p className="text-black text-base screen-w:text-4xl overflow-auto p-4 screen-w:py-8 screen-w:leading-normal">
                        {text}
                    </p>
                </div>
                <div className="px-6 py-4 screen-w:py-6">
                    <button className="text-base h-8 w-[120px] screen-w:text-4xl screen-w:h-20 screen-w:w-[300px] text-Awhite font-bold rounded-md bg-gradient-to-r from-Agradient to-Bgradient">
                        <Link href={`/artist/paint/${order}`}>
                            {'작품 보러가기'}
                        </Link>
                    </button>
                </div>
            </div>
        )}
        </>
    )
};

export default Artistcontent;