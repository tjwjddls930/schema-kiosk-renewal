import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import { educationData } from "@/data/educationData";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Educationpagelayout from "@/components/education/Educationpagelayout";

export default function Educationpage() {
    const [education, setEducation] = useState(educationData[0]);
    const [index, setIndex] = useState(0);
    const router = useRouter();

    let length = education.education.length;

    function nextExhibit() {
         setIndex(index + 1 === length ? 0 : index + 1);
     };
  
    function prevExhibit() {
        setIndex(index - 1 < 0 ? length - 1 : index - 1);
    };

    useEffect(()=> {
        router.replace(`?year=${education.year}&?index=${index}`)
    }, [index, education])

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
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'교육프로그램'}</span>
                </div>
                <div>
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
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
                        <Educationpagelayout
                            id={education.education[index].id}
                            type={education.education[index].type}
                            title={education.education[index].title}
                            time={education.education[index].time} 
                            participate={education.education[index].participate} 
                            location={education.education[index].location} 
                            host={education.education[index].host} 
                            support={education.education[index].support} 
                            explanation={education.education[index].explanation}
                            index={education.order}
                            index1={index}
                        >
                            <div className="swiper-button-prev-4 group absolute top-1/2 left-8 screen-w:left-16 z-10 -mt-6 flex h-12 w-12 screen-w:h-36 screen-w:w-36 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl shadow-white-volume"
                                onClick={()=> prevExhibit()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="h-24 w-24 screen-w:h-36 screen-w:w-36 fill-jacarta-700 group-hover:fill-accent"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                                </svg>
                            </div>
                            <div className="swiper-button-next-4 group absolute top-1/2 right-8 screen-w:right-16 z-10 -mt-6 flex h-12 w-12 screen-w:h-36 screen-w:w-36 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl shadow-white-volume"
                                onClick={()=> nextExhibit()}
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-24 w-24 screen-w:h-36 screen-w:w-36 fill-jacarta-700 group-hover:fill-accent"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                                </svg>
                            </div>
                        </Educationpagelayout> 
                        // <div>Component</div>
                        : ""}
                    </motion.div>
                </AnimatePresence>
            </main>  
            <div className="w-3/4 h-10 screen-w:h-24 flex text-Dgrey shadow-md mx-auto justify-center overflow-auto scroll-smooth">
                <ul className="flex flex-row space-x-12 font-bold text-base mb-2 screen-w:text-5xl screen-w:space-x-16 screen-w:mt-4">
                    {educationData.map((item)=> (
                        <li
                            key={item.year}
                            className={item === education ? "text-Ablack border-b-4 border-Ablue" : ""}
                            onClick={()=> {
                                setEducation(item)
                                setIndex(0)
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
          <Navbar />
        </div>
      );
};