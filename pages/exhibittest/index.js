import { useState, useEffect } from "react";
import { allExhibits } from "@/data/pastExhibit";
import { AnimatePresence, motion } from "framer-motion";
import Exhibitlayout from "@/components/exhibits/ExhibitLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";

export default function Exhibitpage() {
    const [exhibit, setExhibit] = useState({ exhibits: [] });
    const router = useRouter();
    
    useEffect(()=> {
        setExhibit(allExhibits[0] || { exhibits: [] });
    },[allExhibits]);

    return(
        <div className="h-screen w-screen bg-[url('/img/exhibitpage/가로형_전시안내_배경.png')] bg-no-repeat bg-cover font-pretendard_bold">
            <div className="w-full py-5 px-8 screen-w:py-10 screen-w:px-16 flex flex-row justify-between">
                <div>
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold">전시 안내 </span>
                    <span className="text-Agrey text-base screen-w:text-4xl font-bold">{'> 지난 전시'}</span>
                </div>
                <div>
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
                </div>
            </div>
        
            {exhibit.exhibits[0] && (
                <>
                    <main>
                        <AnimatePresence>
                            <motion.div
                                key={exhibit ? exhibit.year : ""}
                                initial={{y:150, opacity:0}}
                                animate={{y:0, opacity:1}}
                                exit={{y: -150, opacity: 0}}
                                transition={{duration: 0.4, ease: "easeInOut"}}
                            >
                            {exhibit ? 
                                <Exhibitlayout 
                                    order={exhibit.exhibits[0].order}
                                    type={exhibit.exhibits[0].type}
                                    title={exhibit.exhibits[0].title}
                                    time={exhibit.exhibits[0].time} 
                                    artist={exhibit.exhibits[0].artist} 
                                    location={exhibit.exhibits[0].location} 
                                    host={exhibit.exhibits[0].host} 
                                    support={exhibit.exhibits[0].support} 
                                    time1={exhibit.exhibits[0].time1} 
                                    artist1={exhibit.exhibits[0].artist1} 
                                    location1={exhibit.exhibits[0].location1} 
                                    host1={exhibit.exhibits[0].host1} 
                                    support1={exhibit.exhibits[0].support1}
                                    explanation={exhibit.exhibits[0].explanation}
                                    author={exhibit.exhibits[0].author}
                                /> 
                                // <div>Component</div>
                                : ""}
                            </motion.div>
                        </AnimatePresence>
                    </main>  
                </>
            )}   
                <div className="w-11/12 h-10 screen-w:h-24 flex text-Dgrey shadow-md mx-auto justify-center overflow-hidden">
                    <ul className="flex flex-row space-x-12 font-bold text-base mb-2 screen-w:text-5xl screen-w:space-x-16 screen-w:mt-4">
                        {allExhibits.map((item)=> (
                            <li
                                key={item.year}
                                className={item === exhibit ? "text-Ablack border-b-4 border-Ablue" : ""}
                                onClick={()=> setExhibit(item)}
                            >
                                {`${item.year}`}
                            </li>
                        ))}   
                    </ul>
                </div>
            <button className="absolute left-12 bottom-20 screen-w:bottom-40"
                onClick={async()=>router.back()}
            >
                <img 
                    src="/img/exhibitpage/icons/뒤로가기버튼_어두운버전.png"
                    className="h-12 w-12 mx-auto screen-w:h-36 screen-w:w-36"
                    alt="back"
                />
            </button>
            <button className="absolute left-20 bottom-20 screen-w:left-60 screen-w:bottom-40"
                onClick={async()=>router.push("/main")}
            >
                <img 
                    src="/img/connectpage/홈버튼_밝은화면용.png"
                    className="h-12 w-12 mx-auto screen-w:h-36 screen-w:w-36"
                    alt="home"
                />
            </button>
            <Navbar 
                url={"/video/docent/schema-docent-03.webm"}
                lang={"/intro/structure"} 
            />
        </div>
    )
};

export async function getStaticProps(context) {
    const {locale} = context;
    return{
        props: {
            ...(await serverSideTranslations(locale, ['common', 'navbar']))
        }
    }
};