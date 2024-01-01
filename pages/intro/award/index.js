import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Awardcontent from "@/components/intro/award/Awardcontent";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import { awardData_KOR, awardData_ENG, awardData_CH, awardData_TH, awardData_VI } from "@/data/awardData";
import clsx from "clsx";

const topText1 = {
    KOR: () => (
        <span className="text-Awhite text-base screen-w:text-4xl font-bold mt-2">{'미술관 소개 > 쉐마국제미술상'}</span>
    ),
    ENG: () => (
        <span className="text-Awhite text-base screen-w:text-4xl font-bold mt-2">{'Museum Introduction > Shema International Art Award'}</span>
    ),
    CH: () => (
        <span className="text-Awhite text-base screen-w:text-4xl font-bold mt-2">{'博物馆简介 > 舍玛国际艺术奖'}</span>
    ),   
    TH: () => (
        <span className="text-Awhite text-base screen-w:text-4xl font-bold mt-2">{'ความรู้เบื้องต้นเกี่ยวกับพิพิธภัณฑ์ > รางวัลศิลปะนานาชาติเชมา'}</span>
    ),
    VI: () => (
        <span className="text-Awhite text-base screen-w:text-4xl font-bold mt-2">{'Giới thiệu về bảo tàng > Giải thưởng nghệ thuật quốc tế Shema'}</span>
    ),
};

const topText2 = {
    KOR: () => (
        <span className="text-Awhite text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
    ),
    ENG: () => (
        <span className="text-Awhite text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
    ),
    CH: () => (
        <span className="text-Awhite text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
    ),   
    TH: () => (
        <span className="text-Awhite text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
    ),
    VI: () => (
        <span className="text-Awhite text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
    ),
};

const inputData = {
    KOR: awardData_KOR,
    ENG: awardData_ENG,
    CH: awardData_CH,
    TH: awardData_TH,
    VI: awardData_VI,
};

export default function Award() {
    const {language} = useContext(LanguageContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    const [award, setAward] = useState(null);
    const [isTouching, setIsTouching] = useState(false);
    const [video, setVideo] = useState();
    const [sign, setSign] = useState();
    useEffect(() => {
        const touchArea = document.getElementById('touch-area');

        // Add a touchstart event listener to the entire document
        touchArea.addEventListener('touchstart', handleTouchStart);
        // Add a touchend event listener to the entire document
        touchArea.addEventListener('touchend', handleTouchEnd);
    
        // Clean up the event listeners when the component unmounts
        return () => {
            touchArea.removeEventListener('touchstart', handleTouchStart);
            touchArea.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    useEffect(()=> {
        setAward(inputData[language][0])
    },[inputData, language]);

    useEffect(()=> {
        if(award) {
            setVideo(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/${language}/schema-docent-intro-award-${award.index}-${language}.webm`);
            setSign(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/sign-docents/schema-sign-docent-award-${award.index}.webm`);
        }
    }, [language, award])
  
    const handleTouchStart = () => {
      setIsTouching(true);
    };
  
    const handleTouchEnd = () => {
      setIsTouching(false);
    };

    return(
        <>
        {isPortrait ? 
        <div className="h-screen w-screen bg-Agrey bg-opacity-50">
            <div className="w-full py-6 px-12 screen-w:py-12 screen-w:px-20 flex flex-row justify-between">
                <div className="flex flex-row">
                    <Link href="/main">
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
                            priority={true}
                        />
                    </Link>
                    {topText1[language]()}
                </div>
                <div>
                    {topText2[language]()}
                </div>
            </div>
            <div className="absolute left-16 bottom-24 h-[300px] screen-w:left-16 screen-w:top-[920px] screen-w:h-[1000px]">
                <div className="flex flex-col space-y-2 screen-w:space-y-4">
                    <div className="h-2 w-2 screen-w:h-5 screen-w:w-5 bg-Bblue rounded-full"></div>
                    <div className="h-2 w-2 screen-w:h-5 screen-w:w-5 bg-Bblue rounded-full"></div>
                    <div className="h-2 w-2 screen-w:h-5 screen-w:w-5 bg-Bblue rounded-full"></div>
                </div>
            </div>
            <div className="absolute left-24 top-56 h-[390px] screen-w:h-[1150px] w-6 screen-w:w-16 screen-w:top-[420px] screen-w:left-28 rounded-r-xl bg-Bblue" />
            <div 
                id="touch-area"
                className="w-full h-3/4 screen-w:h-[80%] flex items-center">
                <main>
                    <AnimatePresence>
                        <motion.div
                            key={award ? award.title : ""}
                            intitial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity:0}}
                            transition={{duration: 0.3}}
                        >
                            {award ? <Awardcontent 
                                imgname={award.imgname}
                                engname={award.engname}
                                name={award.name}
                                career={award.career}
                                timeline_i={award.timeline_individual}
                                timeline_g={award.timeline_group}
                            /> : ""}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
            <div className="w-11/12 h-12 screen-w:h-32 flex text-Cgrey border-b-4 screen-w:pt-10 border-Cgrey mx-auto justify-center">
                <ul className="flex flex-row space-x-12 screen-w:space-x-16 font-bold text-xl screen-w:text-4xl pb-1">
                    {inputData[language].map((item)=> (
                        <li
                            key={item.title}
                            className={item === award ? "text-white border-b-4 border-Bblue": ""}
                            onClick={()=> setAward(item)}
                        >   
                            {`${item.title}`}
                        </li>
                    ))}
                </ul>
            </div>
            {/* 하단 홈, 뒤로가기 버튼 */}
            <button className="absolute left-16 bottom-20 screen-w:bottom-44">
                <Link href="/intro">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-12 h-12 screen-w:w-36 screen-w:h-36">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                </Link>
            </button>
            <button className="absolute left-16 screen-w:bottom-80">
                <Link href="/main">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-12 h-12 screen-w:w-36 screen-w:h-36">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
            </button>
            {/* 드래그 아이콘 */}
            <div className="h-[150px] w-[30px] screen-w:h-[300px] screen-w:w-[100px] absolute right-14 bottom-56 screen-w:right-20 screen-w:transform screen-w:-translate-y-1/2 screen-w:bottom-1/2 animate-bounce">
                <img 
                    src="/img/intro/award/scroll_icon.png"
                    className={`h-20 w-20 screen-w:h-[300px] screen-w:w-[100px] transition-opacity ${isTouching ? "opacity-0" : "opacity-100"}`}
                    alt="scroll"
                />
            </div>
        </div>    
        :
        <div className="h-screen w-screen bg-Agrey bg-opacity-50">
            <div className="w-full py-6 px-12 screen-w:py-12 screen-w:px-20 flex flex-row justify-between">
                <div className="flex flex-row">
                    <Link href="/main">
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
                            priority={true}
                        />
                    </Link>
                    {topText1[language]()}
                </div>
                <div>
                    {topText2[language]()}
                </div>
            </div>
            <div className="absolute left-16 bottom-24 h-[300px] screen-w:left-20 screen-w:bottom-80 screen-w:h-[1000px]">
                <div className="flex flex-col space-y-2 screen-w:space-y-4">
                    <div className="h-2 w-2 screen-w:h-5 screen-w:w-5 bg-Bblue rounded-full"></div>
                    <div className="h-2 w-2 screen-w:h-5 screen-w:w-5 bg-Bblue rounded-full"></div>
                    <div className="h-2 w-2 screen-w:h-5 screen-w:w-5 bg-Bblue rounded-full"></div>
                </div>
            </div>
            <div className="absolute left-24 top-44 h-[390px] screen-w:h-[1150px] w-6 screen-w:w-16 screen-w:top-80 screen-w:left-44 rounded-r-xl bg-Bblue"></div>
            <div className="w-11/12 h-12 screen-w:h-32 flex text-Cgrey border-b-4 screen-w:pt-10 border-Cgrey mx-auto justify-center">
                <ul className="flex flex-row space-x-12 screen-w:space-x-16 font-bold text-xl screen-w:text-4xl pb-1">
                    {inputData[language].map((item)=> (
                        <li
                            key={item.title}
                            className={item === award ? "text-white border-b-4 border-Bblue": ""}
                            onClick={()=> setAward(item)}
                        >   
                            {`${item.title}`}
                        </li>
                    ))}
                </ul>
            </div>
            <div 
                id="touch-area"
                className="w-full h-3/4 screen-w:h-[85%] bg-Bgrey bg-opacity-50">
                <main>
                    <AnimatePresence>
                        <motion.div
                            key={award ? award.title : ""}
                            intitial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity:0}}
                            transition={{duration: 0.3}}
                        >
                            {award ? <Awardcontent 
                                imgname={award.imgname}
                                engname={award.engname}
                                name={award.name}
                                career={award.career}
                                timeline_i={award.timeline_individual}
                                timeline_g={award.timeline_group}
                            /> : ""}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
            {/* 하단 홈, 뒤로가기 버튼 */}
            <button className="absolute left-16 bottom-20 screen-w:bottom-44">
                <Link href="/intro">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-12 h-12 screen-w:w-36 screen-w:h-36">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                </Link>
            </button>
            <button className="absolute left-32 bottom-20 screen-w:left-16 screen-w:bottom-80">
                <Link href="/main">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-12 h-12 screen-w:w-36 screen-w:h-36">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
            </button>
            {/* 드래그 아이콘 */}
            <div className="h-[150px] w-[30px] screen-w:h-[300px] screen-w:w-[100px] absolute right-14 bottom-56 screen-w:right-20 screen-w:transform screen-w:-translate-y-1/2 screen-w:bottom-1/2 animate-bounce">
                <img 
                    src="/img/intro/award/scroll_icon.png"
                    className={`h-20 w-20 screen-w:h-[350px] screen-w:w-[150px] transition-opacity ${isTouching ? "opacity-0" : "opacity-100"}`}
                    alt="scroll"
                />
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