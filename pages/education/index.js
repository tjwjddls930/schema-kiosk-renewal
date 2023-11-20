import React, { useState, useContext } from "react";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { educationData_KOR } from "@/data/educationData_KOR";
import { educationData_ENG } from "@/data/educationData_ENG";
import { educationData_CH } from "@/data/educationData_CH";
import { educationData_TH } from "@/data/educationData_TH";
import { educationData_VI } from "@/data/educationData_VI";
import dynamic from "next/dynamic";
import { LanguageContext } from "@/contexts/LanguageContext";
const DynamicCoverflowCarousel = dynamic(
    () => import("@/components/education/Educationcarousel"),
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    }
  );

const topText = {
    KOR: "교육프로그램",
    ENG: "Education Program",
    CH: "教育计划",
    TH: "โปรแกรมการศึกษา",
    VI: "Chương trình giáo dục"
};

const inputData = {
    KOR: educationData_KOR,
    ENG: educationData_ENG,
    CH: educationData_CH,
    TH: educationData_TH,
    VI: educationData_VI
};

export default function Educationpage() {
    const {language} = useContext(LanguageContext)
    const [education, setEducation] = useState(inputData[language][0]);
    const router = useRouter();

    return (
        <div className="h-screen w-screen bg-Awhite">
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
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{topText[language]}</span>
                </div>
                <div>
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
                </div>
              </div>
          
              <main>
                <AnimatePresence>
                    <motion.div
                        key={education ? education.year : ""}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration: 0.5, ease: "easeInOut"}}
                    >
                    {education ? 
                        <DynamicCoverflowCarousel 
                            index={education.order}
                        />
                        : ""}
                    </motion.div>
                </AnimatePresence>
            </main>  
            <div className="w-3/4 h-10 screen-w:h-24 flex text-Dgrey shadow-md mx-auto justify-center">
                <ul className="flex flex-row space-x-12 font-bold text-base mb-2 screen-w:text-5xl screen-w:space-x-16 screen-w:mt-4 overflow-auto">
                    {inputData[language].map((item)=> (
                        <li
                            key={item.year}
                            className={item === education ? "text-Ablack border-b-4 border-Ablue" : ""}
                            onClick={()=> {
                                setEducation(item)
                            }}
                        >
                            {`${item.year}`}
                        </li>
                    ))}   
                </ul>
            </div>
          <button className="absolute left-16 bottom-20 screen-w:bottom-40"
                onClick={async()=>router.back()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </button>
            <button className="absolute left-16 bottom-36 screen-w:bottom-80"
                onClick={async()=>router.push("/main")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </button>
          <Navbar 
            url={''}
          />
        </div>
      );
};