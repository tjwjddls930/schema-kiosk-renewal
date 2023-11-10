import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import { useRouter } from "next/router";
import clsx from "clsx";

const buttonText = {
    KOR: "작품 보러가기",
    ENG: "View Art Work",
    CH: "去看作品",
    TH: "ไปดูงานครับ",
    VI: "Đi xem tác phẩm"
}   

const Artistcontent = ({number, order, title, name, text}) => {
    const {language} = useContext(LanguageContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
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
                        <div className="bg-Ablue h-[1.5px] w-10 screen-w:w-20" />
                        <span className="text-base screen-w:text-3xl text-Cgrey font-bold">{title}</span>
                        <span className="text-lg screen-w:text-5xl text-Ablack font-bold mb-4">{name}</span>
                    </div>
                </div>
                <div className={clsx(isPortrait ? "p-2 w-full h-[150px] screen-w:p-8 screen-w:h-[550px] overflow-auto" : "p-2 w-[65%] h-[150px] screen-w:p-8 screen-w:h-[550px] overflow-auto")}>
                    <p className="text-black text-base screen-w:text-4xl overflow-auto p-4 screen-w:py-8 screen-w:leading-normal">
                        {text}
                    </p>
                </div>
                <div className="px-6 py-4 screen-w:py-12 screen-w:px-10">
                    <button className="text-base h-8 w-[120px] screen-w:text-4xl screen-w:h-28 screen-w:w-[400px] text-Awhite font-bold rounded-md bg-gradient-to-r from-Bblue to-Ablue"
                        onClick={()=>router.push(`/artist/paint/${order}`)}
                    >
                        {buttonText[language]}
                    </button>
                </div>
            </div>
        )}
        </>
    )
};

export default Artistcontent;