import { useState, useContext, useEffect } from "react";
// import { introData } from "@/data/introData";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import { introData_KOR, introData_ENG, introData_CH, introData_TH, introData_VI } from "@/data/introData";

const topText1 = {
    KOR: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'미술관 소개 > 미술관 소개 및 구조'}</span>
        ),
    ENG: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'Museum Introduction > Museum Introduction and Structure'}</span>
    ),
    CH: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'博物馆简介 > 博物馆简介及结构'}</span>
    ),   
    TH: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'ความรู้เบื้องต้นเกี่ยวกับพิพิธภัณฑ์ > การแนะนำและโครงสร้างของพิพิธภัณฑ์'}</span>
    ),
    VI: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'Giới thiệu về bảo tàng > Giới thiệu và cấu trúc bảo tàng'}</span>
    ),
};

const topText2 = {
    KOR: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
    ),
    ENG: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
    ),
    CH: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
    ),   
    TH: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
    ),
    VI: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
    ),
};

const inputintroData = {
    KOR: introData_KOR,
    ENG: introData_ENG,
    CH: introData_CH,
    TH: introData_TH,
    VI: introData_VI
};

export default function Structure() {
    const {language} = useContext(LanguageContext);
    const { isPortrait } = useContext(ScreenOrientContext);
    const [intro, setIntro] = useState(inputintroData[language][0]);
    const [video, setVideo] = useState();
    const [sign, setSign] = useState();
    useEffect(()=> {
        if(intro.index === "main") {
            setVideo(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/${language}/schema-docent-intro-main-${language}.webm`);
            setSign(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/sign-docents/schema-sign-docent-intro.webm`);
        } else {
            setVideo(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/${language}/schema-docent-intro-structure-${language}.webm`)
            setSign(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/sign-docents/schema-sign-docent-structure.webm`);
        }
    }, [language, intro]);
    return(
        <>
            {isPortrait ? 
            <div className="h-screen w-screen bg-Awhite">
                <div className="w-full py-6 px-12 screen-w:py-12 screen-w:px-20 flex flex-row justify-between">
                    <div className="flex flex-row z-10">
                        <Image 
                            className="mr-6"
                            src="/img/mainpage/schema-logo.png"
                            height="80"
                            width="160"
                            alt="logo"
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                        />
                        {topText1[language]()}
                    </div>
                    <div>
                        {topText2[language]()}
                    </div>
                </div>
                <div className="w-full h-3/4 screen-w:h-[85%] bg-Awhite">
                    <main>
                        <AnimatePresence>
                            <motion.div
                                key={intro ? intro.title : ""}
                                intitial={{y: 100, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                exit={{y: -100, opacity: 0}}
                                transition={{duration: 0.3}}
                            >
                                {intro ? 
                                // <div className="screen-w:h-full p-6 screen-w:pt-40 screen-w:pl-[370px] mx-auto items-center"></div> 
                                intro.component
                                : ""}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
                <div className="w-11/12 h-14 screen-w:h-24 flex text-Cgrey border-b-4 border-Cgrey mx-auto justify-center border-opacity-30 z-10">
                    <ul className="flex flex-row space-x-12 font-bold text-2xl pb-2 screen-w:space-x-16 screen-w:text-4xl">
                        {inputintroData[language].map((item)=> (
                            <li
                                key={item.title}
                                className={item === intro ? "text-Ablack border-b-4 border-Bblue": ""}
                                onClick={()=> setIntro(item)}
                            >   
                                {`${item.title}`}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            :
            <div className="h-screen w-screen bg-Awhite">
                <div className="w-full py-6 px-12 screen-w:py-12 screen-w:px-20 flex flex-row justify-between">
                    <div className="flex flex-row z-10">
                        <Image 
                            className="mr-6"
                            src="/img/mainpage/schema-logo.png"
                            height="80"
                            width="160"
                            alt="logo"
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                        />
                        {topText1[language]()}
                    </div>
                    <div>
                        {topText2[language]()}
                    </div>
                </div>
                <div className="w-11/12 h-14 screen-w:h-24 flex text-Cgrey border-b-4 border-Cgrey mx-auto justify-center border-opacity-30 z-10">
                    <ul className="flex flex-row space-x-12 font-bold text-2xl pb-2 screen-w:space-x-16 screen-w:text-4xl">
                        {inputintroData[language].map((item)=> (
                            <li
                                key={item.title}
                                className={item === intro ? "text-Ablack border-b-4 border-Bblue": ""}
                                onClick={()=> setIntro(item)}
                            >   
                                {`${item.title}`}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full h-3/4 screen-w:h-[88%] bg-Awhite">
                    <main>
                        <AnimatePresence>
                            <motion.div
                                key={intro ? intro.title : ""}
                                intitial={{y: 100, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                exit={{y: -100, opacity: 0}}
                                transition={{duration: 0.3}}
                            >
                                {intro ? <div className="p-4 mx-auto items-center">
                                    {intro.component}
                                </div> : ""}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
            }
            <Navbar 
                url={video}
                sign={sign}
            />
        </> 
    )
};
