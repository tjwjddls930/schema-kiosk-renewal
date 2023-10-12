import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { paintData } from "@/data/paintData";
import { modelData } from "@/data/modelData";
import { pastpaintData } from "@/data/pastpaintData";
import { useTranslation } from "next-i18next";

export default function ConnectButton() {
    const [popup, setPopup] = useState(false);
    const [future, setFuture] = useState(false);
    const [past, setPast] = useState(false);
    const {t} = useTranslation('connect');
    return(
        <div className="w-3/4 h-[500px] screen-w:h-3/4 flex flex-row mx-auto">
            {popup && (
                <div className="absolute top-0 left-0 h-[91%] screen-w:h-[95%] w-screen bg-Ablack bg-opacity-60 z-10"
                    onClick={()=>setPopup(!popup)}
                >
                    <div className="flex justify-between mx-auto items-center pt-16 px-16 screen-w:pt-44 screen-w:px-40">
                        <Link href="/artist">
                            <button className="w-[150px] h-16 screen-w:w-[350px] screen-w:h-32 screen-w:text-4xl text-Awhite rounded-full bg-gradient-to-r from-Agradient to-Bgradient">
                                {t("AUTHOR")}
                            </button>
                        </Link>
                        <span className="flex mx-auto text-Awhite font-xl mt-4 screen-w:text-4xl font-bold screen-w:mt-12">
                            {t("EXHIBIT_EX")}
                        </span>
                        <Link href={`/viewpage/${paintData[0].order}`}>
                            <button className="w-[150px] h-16 screen-w:w-[350px] screen-w:h-32 screen-w:text-4xl text-Awhite rounded-full bg-gradient-to-r from-Agradient to-Bgradient">
                                {t("PAINT")}
                            </button>
                        </Link>
                    </div>
                    <div className="absolute h-3/4 w-[70%] top-40 screen-w:top-80 left-1/2 transform -translate-x-1/2 z-20"> 
                        <iframe 
                        className="w-full h-full touch-none border-none border-radius rounded-[20px]"
                        title="explanation"
                        src="https://schemaartmuseum.com/2023/09/09/%eb%a7%a4%eb%81%84%eb%9f%ac%ec%9a%b4-%eb%8f%8c%eb%b0%ad-2-2/"
                        />  
                    </div>                         
                </div>
            )}
            {future && (
                <div className="absolute top-0 left-0 h-[91%] screen-w:h-[95%] w-screen bg-Ablack bg-opacity-60 z-10"
                    onClick={()=>setFuture(!future)}
                >
                    <div className="absolute h-5/6 w-5/6 top-40 screen-w:top-56 left-1/2 transform -translate-x-1/2 z-20"> 
                        <iframe 
                        className="w-full h-full touch-none border-none border-radius rounded-[20px]"
                        title="future"
                        src="https://schemaartmuseum.com/%ec%98%88%ec%a0%95%ec%a0%84%ec%8b%9c/"
                        />  
                    </div>                         
                </div>
            )}
            {past && (
                <div className="absolute top-0 left-0 h-[91%] screen-w:h-[95%] w-screen bg-Ablack bg-opacity-60 z-10"
                    onClick={()=>setPast(!past)}
                >
                    <div className="absolute top-10 screen-w:top-36 left-1/2 transform -translate-x-1/2 z-20">
                        <Link href={`/pastexhibit/${pastpaintData[0].order}`}>
                            <button className="w-[150px] h-16 screen-w:w-[350px] screen-w:h-32 screen-w:text-4xl text-Awhite rounded-full bg-gradient-to-r from-Agradient to-Bgradient">
                                {t("PAINT")}
                            </button>
                        </Link>
                    </div>
                    <div className="absolute h-3/4 w-3/4 top-40 screen-w:top-96 left-1/2 transform -translate-x-1/2 z-20"> 
                            <iframe 
                            className="w-full h-full touch-none border-none border-radius rounded-[20px]"
                            title="past"
                            src="https://schemaartmuseum.com/2023/07/26/2023-%ed%9b%84%ea%b8%b0-%ec%95%a0%ec%8a%a4%ed%8e%99%ed%8a%b8-%ec%95%84%eb%a6%84%eb%8b%b5%ea%b2%8c-%ec%82%ac%ec%9c%a0%ed%95%98%eb%8a%94-%ec%98%88%ec%88%a0/"
                            />  
                    </div>                       
                </div>
            )}
            <div className="flex flex-col h-full w-1/2">
                <>
                    <div className="h-[250px] screen-w:h-[600px] w-5/6 mx-auto"
                        onClick={()=>setPast(!past)}
                    >
                        <div className="flex flex-row space-x-4 justify-start screen-w:space-x-6 screen-w:justify-center">
                            <span className="text-[150px] screen-w:text-[300px] font-bold text-Ablack drop-shadow-xl">{'01'}</span>
                            <div className="flex flex-col w-[170px] screen-w:w-[350px] screen-w:space-y-2 mr-4 pt-10 justify-start screen-w:justify-center">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-lg screen-w:text-screen-w text-Agrey font-bold">{'Last exhibition'}</span>
                                <span className="text-screen-w screen-w:text-4xl text-Ablack font-bold mb-5">{t("PAST")}</span>
                                <span className="text-base screen-w:text-xl text-Cgrey font-bold">{t("PAST_EX1")}</span>                        
                                <span className="text-base screen-w:text-xl text-Cgrey font-bold">{t("PAST_EX2")}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 screen-w:h-24 screen-w:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1px] w-[400px] screen-w:h-[1.5px] screen-w:w-[800px] mx-auto" />
                    </div>
                </>
                <>
                    <div className="h-[250px] screen-w:h-[600px] w-5/6 mx-auto"
                        onClick={()=>setPopup(!popup)}
                    >
                        <div className="flex flex-row space-x-4 overflow-hidden justify-start screen-w:space-x-6 screen-w:justify-center">
                            <span className="text-[150px] screen-w:text-[300px] font-bold text-Ablack drop-shadow-xl">{'02'}</span>
                            <div className="flex flex-col w-[170px] screen-w:w-[350px] screen-w:space-y-2 mr-4 pt-10 justify-start screen-w:justify-center">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-lg screen-w:text-screen-w text-Agrey font-bold">{'Present exhibition'}</span>
                                <span className="text-screen-w screen-w:text-4xl text-Ablack font-bold mb-5">{t("CURRENT")}</span>
                                <span className="text-base screen-w:text-xl text-Cgrey font-bold">{t("CURRENT_EX1")}</span>                        
                                <span className="text-base screen-w:text-xl text-Cgrey font-bold">{t("CURRENT_EX2")}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 screen-w:h-24 screen-w:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1.5px] w-[400px] screen-w:h-[1.5px] screen-w:w-[800px] mx-auto" />
                    </div>
                </>
            </div>
            <div className="flex flex-col h-full w-1/2">
                <>
                    <div className="h-[250px] screen-w:h-[600px] w-5/6 mx-auto"
                        onClick={()=> setFuture(!future)}
                    >
                        <div className="flex flex-row space-x-4 justify-start screen-w:space-x-6 screen-w:justify-center">
                            <span className="text-[150px] screen-w:text-[300px] font-bold text-Ablack drop-shadow-xl">{'03'}</span>
                            <div className="flex flex-col w-[170px] screen-w:w-[350px] screen-w:space-y-2 pt-10 mr-4 justify-start screen-w:justify-center">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-lg screen-w:text-screen-w text-Agrey font-bold">{'Scheduled exhibition'}</span>
                                <span className="text-screen-w screen-w:text-4xl text-Ablack font-bold mb-5">{t("SCHEDULE")}</span>
                                <span className="text-base screen-w:text-xl text-Cgrey font-bold">{t("SCHEDULE_EX1")}</span>                        
                                <span className="text-base screen-w:text-xl text-Cgrey font-bold">{t("SCHEDULE_EX2")}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 screen-w:h-24 screen-w:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1.5px] w-[400px] screen-w:h-[1.5px] screen-w:w-[800px] mx-auto" />
                    </div>
                </>
                <Link href={`/modelpage/${modelData[0].order}`}>
                    <div className="h-[250px] screen-w:h-[600px] w-5/6 mx-auto">
                        <div className="flex flex-row space-x-4 justify-start screen-w:space-x-6 screen-w:justify-center">
                            <span className="text-[150px] screen-w:text-[300px] font-bold text-Ablack drop-shadow-xl">{'04'}</span>
                            <div className="flex flex-col w-[170px] screen-w:w-[350px] screen-w:space-y-2 pt-10 mr-4 justify-start screen-w:justify-center">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-lg screen-w:text-screen-w text-Agrey font-bold">{'Collection tour'}</span>
                                <span className="text-screen-w screen-w:text-4xl text-Ablack font-bold mb-5">{t("COLLECTION")}</span>
                                <span className="text-base screen-w:text-xl text-Cgrey font-bold">{t("COLLECTION_EX1")}</span>                        
                                <span className="text-base screen-w:text-xl text-Cgrey font-bold">{t("COLLECTION_EX2")}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 screen-w:h-24 screen-w:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1.5px] w-[400px] screen-w:h-[1.5px] screen-w:w-[800px] mx-auto" />
                    </div>
                </Link>
            </div>
        </div>
    )
}