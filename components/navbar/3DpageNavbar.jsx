import Image from "next/image";
import { useState } from "react";
import ReactSlider from "react-slider";
import { useTranslation } from "next-i18next";
import Soundguide from "../docent/Soundguide";
import clsx from "clsx";

export default function ViewNavbar({url}) {
    const [volume, setVolume] = useState(Number(0.5));
    const [soundguide, setSoundguide] = useState(false);
    const [con, setCon] = useState(true);
    const {t, i18n} = useTranslation('navbar');
    return(
        <>
        {soundguide && (
            <div className="absolute bottom-20 right-4 h-[350px] w-[350px] z-20 2xl:h-[600px] 2xl:w-[600px] 2xl:bottom-28">
                <Soundguide 
                    videoUrl={url}
                    volume={Number(volume)}
                    playing={true}
                    end={()=>setSoundguide(!soundguide)}
                />
            </div>
        )}
        <nav className="fixed hidden lg:flex bottom-0 w-full h-20 lg:h-16 2xl:h-28 bg-Ablack px-10 2xl:px-12">
            <div className="flex flex-row w-full space-x-4 2xl:space-x-6 justify-between my-2 mt-5 lg:mt-4 2xl:my-4 2xl:mt-6">
                <div className="w-1/12 2xl:w-1/2">
                    <div className="flex flex-row space-x-2 h-9 2xl:space-x-4 2xl:h-11 w-full justify-start">
                        <img 
                            src={`/img/flags/${i18n.language}_circle.png`}
                            className="h-10 w-10 2xl:h-16 2xl:w-16"
                            alt="flag"
                        />
                        <span className="text-2xl 2xl:text-4xl 2xl:mt-2 text-Awhite">{t("CURRENT_LANGUAGE")}</span>
                    </div>
                </div>
                <div className="w-11/12 2xl:w-1/2 flex flex-row space-x-3 2xl:space-x-6">
                    <div className="flex flex-row space-x-2 w-[250px] 2xl:w-[350px] justify-center text-center">
                        <span className="text-xl w-[170px] 2xl:text-3xl 2xl:w-[230px] mx-auto 2xl:mt-2 text-Awhite">{t("FONT_SIZE")}</span>
                        <button className="rounded-full 2xl:text-3xl w-[80px] 2xl:w-[120px] bg-Cgrey text-Awhite font-bold">
                            {t("BIG")}
                        </button>
                    </div>
                    <div className="flex flex-row h-9 2xl:h-11 w-full justify-center 2xl:px-20">
                        <span className="text-xl 2xl:text-3xl w-1/3 2xl:mt-2 text-Awhite">{t("VOLUME")}</span>
                        <div className="w-2/3 bg-Cgrey rounded-full p-2 2xl:mt-2">
                            <ReactSlider 
                                step={0.01}
                                min={0}
                                max={1}
                                className="w-full h-3 bg-Awhite rounded-full cursor-grab mt-1"
                                thumbClassName="absolute w-5 h-5 cursor-grab bg-Cpurple rounded-full border-2 border-Awhite -top-1"
                                trackClassName="top-0 bottom-0 bg-Awhite bg-Cpurple"
                                renderTrack={(props, state)=> (
                                <div {...props} 
                                    className={clsx('h-3 rounded-full cursor-pointer', {
                                        'bg-Awhite' : state.index === 1,
                                        'bg-Cpurple': state.index === 0
                                    })}></div>)}
                                value={volume}
                                onChange={(value)=> setVolume(value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row space-x-2 w-[250px] 2xl:w-[350px] justify-center text-center">
                        <span className="text-xl 2xl:text-3xl w-[170px] 2xl:w-[230px] mx-auto 2xl:mt-2 text-Awhite">{t("SOUND_GUIDE")}</span>
                        <button
                            onClick={()=>setSoundguide(!soundguide)} 
                            className="rounded-full w-[80px] 2xl:w-[120px] 2xl:text-3xl bg-Cgrey text-Awhite font-bold">
                            {soundguide ? t("STOP") : t("START")}
                            {/* {t("START")} */}
                        </button>
                    </div>
                    <div className="flex flex-row space-x-2 w-[250px] 2xl:w-[350px] justify-center text-center">
                        <span className="text-xl w-[170px] 2xl:text-3xl 2xl:w-[230px] mx-auto 2xl:mt-2 text-Awhite">{t("SIGN_LANGUAGE")}</span>
                        <button className="rounded-full w-[80px] 2xl:w-[120px] 2xl:text-3xl bg-Cgrey text-white font-bold">
                            {t("START")}
                        </button>
                    </div>
                </div>
            </div>
        </nav> 
        </>
    )
};