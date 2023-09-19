import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactSlider from "react-slider";

export default function Pageframe({children}) {
    const [volume, setVolume] = useState(Number(0.5));
    const {t, i18n} = useTranslation('navbar');
    return(
        <div className={`h-[897.6px] w-[1522.4px]`}>
            {children}
            {/* navbar */}
            <footer className="absolute bottom-0 w-full h-20 bg-black px-10">
             <div className="flex flex-row w-full space-x-4 justify-center my-2 mt-5">
                <div className="flex flex-row space-x-2 h-9 w-1/3 mx-auto">
                    <Image 
                        src={`/img/flags/${i18n.language}_circle.png`}
                        height="50"
                        width="50"
                        alt="korea"
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                    />
                    <span className="text-2xl">{t("CURRENT_LANGUAGE")}</span>
                </div>
                <div className="flex flex-row space-x-1 h-9 w-3/4 rounded-full bg-Awhite justify-between">
                    <div className="h-full w-1/2 rounded-full flex space-x-1 bg-gradient-to-r from-Agradient to-Bgradient">
                        <div className="flex flex-row mx-auto space-x-2">
                            <span className="text-md py-1">{t("HIGH")}</span>
                            <Image 
                                className="mx-auto py-1"
                                src="/img/navbar/고대비_아이콘.png"
                                height="20"
                                width="20"
                                alt="고대비"
                                style={{
                                    width: "auto",
                                    height: "auto"
                                }}
                            /> 
                        </div>                     
                    </div>
                    <div className="flex h-full w-1/2 rounded-full space-x-1">
                        <div className="flex flex-row mx-auto space-x-2">
                            <span className="text-Cgrey text-md py-1">{t("LOW")}</span>
                            <Image 
                                className="mx-auto py-1"
                                src="/img/navbar/저대비_아이콘.png"
                                height="20"
                                width="20"
                                alt="저대비"
                                style={{
                                    width: "auto",
                                    height: "auto"
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row h-9 w-[250px] justify-center text-center">
                    <span className="text-xl w-[150px] mx-auto">{t("FONT_SIZE")}</span>
                    <button className="rounded-full w-[100px] bg-Cgrey text-white font-bold">
                        {t("BIG")}
                    </button>
                </div>
                <div className="flex flex-row h-9 w-full justify-center">
                    <span className="text-xl w-1/3">{t("VOLUME")}</span>
                    <div className="w-2/3 bg-Cgrey rounded-full p-2">
                        <ReactSlider 
                            step={0.01}
                            min={0}
                            max={1}
                            className="w-full h-3 bg-Awhite rounded-full cursor-grab mt-1"
                            thumbClassName="absolute w-5 h-5 cursor-grab bg-Cpurple rounded-full border-2 border-Awhite -top-1"
                            value={volume}
                            onChange={(value)=> setVolume(value)}
                        />
                    </div>
                </div>
                <div className="flex flex-row w-[250px] justify-center text-center">
                    <span className="text-xl w-[170px] mx-auto">{t("SOUND_GUIDE")}</span>
                    <button className="rounded-full w-[80px] bg-Cgrey text-white font-bold">
                        {t("START")}
                    </button>
                </div>
                <div className="flex flex-row w-[250px] justify-center text-center">
                    <span className="text-xl w-[170px] mx-auto">{t("SIGN_LANGUAGE")}</span>
                    <button className="rounded-full w-[80px] bg-Cgrey text-white font-bold">
                        {t("START")}
                    </button>
                </div>
             </div>
            </footer>
        </div>
    )
};