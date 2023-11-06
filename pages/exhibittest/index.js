import { useState, useContext } from "react";
import { allExhibits } from "@/data/pastExhibit";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";

const topText = {
    KOR: () => (
        <div className="w-full py-5 px-8 screen-w:py-10 screen-w:px-16 flex flex-row justify-between">
            <span className="text-Agrey text-base screen-w:text-4xl font-bold">{'전시 안내 > 전시 선택'}</span>
            <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
        </div>
    ),
    ENG: () => (
        <div className="w-full py-5 px-8 screen-w:py-10 screen-w:px-16 flex flex-row justify-between">
            <span className="text-Agrey text-base screen-w:text-4xl font-bold">{'Exhibition Information > Select Exhibition'}</span>
            <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
        </div>
    ),
    CH: () => (
        <div className="w-full py-5 px-8 screen-w:py-10 screen-w:px-16 flex flex-row justify-between">
            <span className="text-Agrey text-base screen-w:text-4xl font-bold">{'展会信息 > 精选展会'}</span>
            <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
        </div>
    ),
    TH: () => (
        <div className="w-full py-5 px-8 screen-w:py-10 screen-w:px-16 flex flex-row justify-between">
            <span className="text-Agrey text-base screen-w:text-4xl font-bold">{'ข้อมูลนิทรรศการ > เลือกนิทรรศการ'}</span>
            <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
        </div>
    ),
    VI: () => (
        <div className="w-full py-5 px-8 screen-w:py-10 screen-w:px-16 flex flex-row justify-between">
            <span className="text-Agrey text-base screen-w:text-4xl font-bold">{'Thông tin triển lãm > Triển lãm chọn lọc'}</span>
            <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
        </div>
    ),
};

const DynamicCoverflowCarousel = dynamic(
    () => import("@/components/CoverflowCarousel"),
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    }
  );

export default function Exhibitpage() {
    const [exhibit, setExhibit] = useState(allExhibits[0]);
    const router = useRouter();
    const {language} = useContext(LanguageContext);
    const {isPortrait} = useContext(ScreenOrientContext);

    return(
        <div className="h-screen w-screen bg-[url('/img/exhibitpage/가로형_전시안내_배경.png')] bg-no-repeat bg-cover font-pretendard_bold">
            <div className="w-full py-5 px-8 screen-w:py-10 screen-w:px-16 flex flex-row justify-between">
                {topText[language]()}
            </div>

            <main>
                <AnimatePresence>
                    <motion.div
                        key={exhibit ? exhibit.year : ""}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration: 0.5, ease: "easeInOut"}}
                    >
                    {exhibit ? 
                            <DynamicCoverflowCarousel 
                                index={exhibit.index}
                            />
                        : ""}
                    </motion.div>
                </AnimatePresence>
            </main>  
            <div className="w-11/12 h-10 screen-w:h-24 flex text-Dgrey shadow-md mx-auto justify-center overflow-hidden">
                <ul className="flex flex-row space-x-12 font-bold text-base mb-2 screen-w:text-5xl screen-w:space-x-16 screen-w:mt-4">
                    {allExhibits.map((item)=> (
                        <li
                            key={item.year}
                            className={item === exhibit ? "text-Ablack border-b-4 border-Ablue" : ""}
                            onClick={()=> {
                                setExhibit(item)
                            }}
                        >
                            {`${item.year}`}
                        </li>
                    ))}   
                </ul>
            </div>
              
            <button className="absolute left-12 bottom-20 screen-w:bottom-40"
                onClick={async()=>router.back()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </button>
            <button className="absolute left-24 bottom-20 screen-w:left-60 screen-w:bottom-40"
                onClick={async()=>router.push("/main")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-16 h-16 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </button>
            <Navbar 
                url={"/video/docent/schema-docent-03.webm"}
                lang={"/intro/structure"} 
            />
        </div>
    )
};