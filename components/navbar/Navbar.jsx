import Image from "next/image";
import { useState } from "react";
import ReactSlider from "react-slider";
import { useTranslation } from "next-i18next";
import Soundguide from "../docent/Soundguide";
import clsx from "clsx";

export default function Navbar({url}) {
    const [volume, setVolume] = useState(Number(0.5));
    const [soundguide, setSoundguide] = useState(false);
    const [con, setCon] = useState(true);
    const {t, i18n} = useTranslation('navbar');
    return(
        <>
        {soundguide && (
                <div className="absolute top-0 left-0 h-[91%] 2xl:h-[93%] w-screen bg-Ablack bg-opacity-60 z-20">
                    <div className="flex mx-auto h-[530px] w-[530px] pt-40">
                        <Soundguide 
                            videoUrl={url}
                            volume={Number(volume)}
                            playing={true}
                            end={()=>setSoundguide(!soundguide)}
                        />
                    </div>
                </div>
            )}
           <nav className="fixed hidden lg:flex bottom-0 w-full h-20 lg:h-16 2xl:h-28 bg-Ablack px-10 2xl:px-12">
                <div className="flex flex-row w-full space-x-4 2xl:space-x-6 justify-center my-2 mt-5 lg:mt-4 2xl:my-4 2xl:mt-6">
                    <div className="flex flex-row space-x-2 h-9 2xl:space-x-4 2xl:h-11 w-1/3 mx-auto">
                        {/* <Image 
                            src={`/img/flags/${i18n.language}_circle.png`}
                            height="50"
                            width="50"
                            alt="korea"
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                        /> */}
                        <img 
                            src={`/img/flags/${i18n.language}_circle.png`}
                            className="h-10 w-10 2xl:h-16 2xl:w-16"
                            alt="flag"
                        />
                        <span className="text-2xl 2xl:text-4xl 2xl:mt-2">{t("CURRENT_LANGUAGE")}</span>
                    </div>
                    <div className="px-4 2xl:px-8">
                        <label className="relative flex w-max cursor-pointer select-none items-center">
                            <input 
                                type="checkbox"
                                className="h-9 w-[200px] cursor-pointer appearance-none rounded-full bg-Awhite p-4 transition-colors"
                            />
                                <div id="toggle" 
                                    className="bg-gradient-to-r from-Agradient to-Bgradient absolute left-0 h-9 pt-1 w-[100px] transform rounded-full text-center transition-transform"
                                    onClick={()=> setCon(!con)}
                                >
                                    {con ? <><span className="text-Awhite text-base absolute left-3">{t("HIGH")}</span>
                                    <div className="absolute bottom-2 right-3">
                                        <Image 
                                            src="/img/navbar/고대비_아이콘.png"
                                            height="20"
                                            width="20"
                                            alt="고대비"
                                            style={{
                                                width: "auto",
                                                height: "auto"
                                            }}
                                        />
                                    </div></> : <>
                                    <span className="text-Dgrey text-base absolute left-3">{t("LOW")}</span>
                                    <div className="absolute bottom-2 right-3">
                                        <Image 
                                            src="/img/navbar/저대비_아이콘.png"
                                            height="20"
                                            width="20"
                                            alt="고대비"
                                            style={{
                                                width: "auto",
                                                height: "auto"
                                            }}
                                        />
                                    </div></>}
                                </div>
                        </label>
                    </div>
                    <div className="flex flex-row space-x-2 w-[250px] 2xl:w-[350px] justify-center text-center">
                        <span className="text-xl w-[170px] 2xl:text-3xl 2xl:w-[230px] mx-auto">{t("FONT_SIZE")}</span>
                        <button className="rounded-full 2xl:text-3xl w-[80px] 2xl:w-[120px] bg-Cgrey text-white font-bold">
                            {t("BIG")}
                        </button>
                    </div>
                    <div className="flex flex-row h-9 2xl:h-11 w-full 2xl:full justify-center 2xl:px-20">
                        <span className="text-xl 2xl:text-3xl w-1/3">{t("VOLUME")}</span>
                        <div className="w-2/3 bg-Cgrey rounded-full p-2">
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
                        <span className="text-xl 2xl:text-3xl w-[170px] 2xl:w-[230px] mx-auto">{t("SOUND_GUIDE")}</span>
                        <button
                            onClick={()=>setSoundguide(!soundguide)} 
                            className="rounded-full w-[80px] 2xl:w-[120px] 2xl:text-3xl bg-Cgrey text-white font-bold">
                            {soundguide ? t("STOP") : t("START")}
                            {/* {t("START")} */}
                        </button>
                    </div>
                    <div className="flex flex-row space-x-2 w-[250px] 2xl:w-[350px] justify-center text-center">
                        <span className="text-xl w-[170px] 2xl:text-3xl 2xl:w-[230px] mx-auto">{t("SIGN_LANGUAGE")}</span>
                        <button className="rounded-full w-[80px] 2xl:w-[120px] 2xl:text-3xl bg-Cgrey text-white font-bold">
                            {t("START")}
                        </button>
                    </div>
                </div>
            </nav> 
        </>
    )
}