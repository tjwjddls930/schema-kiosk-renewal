import { useState } from "react";
import { introData } from "@/data/introData";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";

export default function Structure() {
    const [intro, setIntro] = useState(introData[0])
    return(
        <>
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
                        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">미술관 소개 </span>
                        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'> 미술관 소개 및 구조'}</span>
                    </div>
                    <div>
                        <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
                    </div>
                </div>
                {/* {children} */}
                <div className="w-11/12 h-14 screen-w:h-24 flex text-Cgrey border-b-4 border-Cgrey mx-auto justify-center border-opacity-30 z-10">
                    <ul className="flex flex-row space-x-12 font-bold text-2xl pb-2 screen-w:space-x-16 screen-w:text-4xl">
                        {introData.map((item)=> (
                            <li
                                key={item.title}
                                className={item === intro ? "text-Ablack border-b-4 border-Cpurple": ""}
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
                                {intro ? <div className="p-6 screen-w:p-12 mx-auto items-center">
                                    {intro.component}
                                </div> : ""}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
            <Navbar 
                url={"/video/docent/blue-docent-test-02-removed.webm"}
            />
        </> 
    )
};
