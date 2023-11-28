import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { careerData } from "@/data/introData";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/Navbar";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import { profileData_KOR, profileData_ENG, profileData_CH, profileData_TH, profileData_VI } from "@/data/introData";
// import { profileData } from "@/data/introData";


const topText1 = {
    KOR: () => (
        <span className="text-Bgrey text-base screen-w:text-4xl font-bold mt-2">{'미술관 소개 > 김재관 프로필 및 경력'}</span>
    ),
    ENG: () => (
        <span className="text-Bgrey text-base screen-w:text-4xl font-bold mt-2">{'Museum Introduction > Jaegwan Kim Profile and Career'}</span>
    ),
    CH: () => (
        <span className="text-Bgrey text-base screen-w:text-4xl font-bold mt-2">{'博物馆简介 > Jaegwan Kim 简介和职业生涯'}</span>
    ),   
    TH: () => (
        <span className="text-Bgrey text-base screen-w:text-4xl font-bold mt-2">{'ความรู้เบื้องต้นเกี่ยวกับพิพิธภัณฑ์ > ประวัติและอาชีพของ Jaegwan Kim'}</span>
    ),
    VI: () => (
        <span className="text-Bgrey text-base screen-w:text-4xl font-bold mt-2">{'Giới thiệu về bảo tàng > Hồ sơ và sự nghiệp của Jaegwan Kim'}</span>
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

const inputprofileData = {
    KOR: profileData_KOR,
    ENG: profileData_ENG,
    CH: profileData_CH,
    TH: profileData_TH,
    VI: profileData_VI
};

export default function Career() {
    const router = useRouter();
    const {language} = useContext(LanguageContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    const [career, setCareer] = useState(inputprofileData[language][0]);
    const [video, setVideo] = useState();
    const [sign, setSign] = useState();

    useEffect(()=> {
        if(career.index === "career") {
            setVideo(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/${language}/schema-docent-intro-career-${language}.webm`);
            setSign(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/sign-docents/schema-sign-docent-career.webm`);
        } else {
            setVideo(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/${language}/schema-docent-intro-artwork-${language}.webm`);
            setSign(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/sign-docents/schema-sign-docent-artwork.webm`);
        }
    }, [language, career]);

    return(
        <>
        {isPortrait ? 
         <div className="h-screen w-screen bg-gradient-to-r from-Cgrey to-Awhite bg-opacity-30">
            <div className="w-full p-10 screen-w:p-20 flex flex-row justify-between">
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
            <div className="w-full h-3/4 screen-w:h-5/6">
                <main>
                    <AnimatePresence>
                        <motion.div
                            key={career ? career.title : ""}
                            intitial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.3}}
                        >
                            {career ? career.component : ""}
                        </motion.div>
                    </AnimatePresence>
                </main>
                <div className="w-11/12 h-14 screen-w:h-24 flex text-Agrey border-b-4 border-Ablack mx-auto justify-center border-opacity-30 z-10">
                    <ul className="flex flex-row space-x-12 font-bold text-2xl pb-2 screen-w:space-x-16 screen-w:text-4xl">
                        {inputprofileData[language].map((item)=> (
                            <li
                                key={item.title}
                                className={item === career ? "text-Ablack border-b-4 border-Ablue": ""}
                                onClick={()=> setCareer(item)}
                            >   
                                {`${item.title}`}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button className="absolute left-6 bottom-20 screen-w:left-16 screen-w:bottom-44"
                onClick={()=>router.back()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg> 
            </button>
            <button className="absolute left-24 bottom-20 screen-w:left-16 screen-w:bottom-80"
                onClick={()=>router.push("/main")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-16 h-16 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </button>
            </div>
         :
        <div className="h-screen w-screen bg-gradient-to-r from-Cgrey to-Awhite bg-opacity-30">
            <div className="w-full p-10 screen-w:p-20 flex flex-row justify-between">
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
            <div className="w-11/12 h-14 screen-w:h-24 flex text-Agrey border-b-4 border-Ablack mx-auto justify-center border-opacity-30 z-10">
                <ul className="flex flex-row space-x-12 font-bold text-2xl pb-2 screen-w:space-x-16 screen-w:text-4xl">
                    {inputprofileData[language].map((item)=> (
                        <li
                            key={item.title}
                            className={item === career ? "text-Ablack border-b-4 border-Ablue": ""}
                            onClick={()=> setCareer(item)}
                        >   
                            {`${item.title}`}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full h-3/4 screen-w:h-[80%]">
                <main>
                    <AnimatePresence>
                        <motion.div
                            key={career ? career.title : ""}
                            intitial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.3}}
                        >
                            {career ? <div className="p-6 screen-w:px-6 screen-w:pt-20 mx-auto items-center z-10">
                                {career.component}
                            </div> : ""}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
            <button className="absolute left-6 bottom-20 screen-w:left-16 screen-w:bottom-44"
                onClick={()=>router.back()}
            >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg> 
                </button>
                <button className="absolute left-24 bottom-20 screen-w:left-16 screen-w:bottom-80"
                    onClick={()=>router.push("/main")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-16 h-16 screen-w:w-36 screen-w:h-36 text-Ablack">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </button>
        </div>
            }
            <Navbar 
                url={video}
                sign={sign} 
            />
        </>
    )
};
