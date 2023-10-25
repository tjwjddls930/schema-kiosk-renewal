import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { careerData } from "@/data/introData";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/Navbar";

export default function Career() {
    const [career, setCareer] = useState(careerData[0]);
    const router = useRouter();
    return(
        <>
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
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">미술관 소개 </span>
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'> 김재관 프로필 및 경력'}</span>
                </div>
                <div>
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
                </div>
            </div>
            <div className="w-11/12 h-14 screen-w:h-24 flex text-Cgrey border-b-4 border-Cgrey mx-auto justify-center border-opacity-30 z-10">
                <ul className="flex flex-row space-x-12 font-bold text-2xl pb-2 screen-w:space-x-16 screen-w:text-4xl">
                    {careerData.map((item)=> (
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
            <div className="w-full h-3/4 screen-w:h-[80%] bg-cover bg-no-repeat bg-[url('/img/exhibitpage/artist_select_background_2.png')]">
                <main>
                    <AnimatePresence>
                        <motion.div
                            key={career ? career.title : ""}
                            intitial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.3}}
                        >
                            {career ? <div className="p-6 screen-w:px-6 screen-w:pt-40 mx-auto items-center">
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
                <button className="absolute left-24 bottom-20 screen-w:left-60 screen-w:bottom-44"
                    onClick={()=>router.push("/main")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-16 h-16 screen-w:w-36 screen-w:h-36 text-Ablack">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </button>
            </div>
            <Navbar 
                url={"/video/docent/blue-docent-test-02-removed.webm"}
                lang={"/intro/structure"} />
        </>
    )
};

export async function getStaticProps(context) {
    const {locale} = context;
    return{
        props: {
            ...(await serverSideTranslations(locale, ['common', 'navbar', 'intro']))
        }
    }
};