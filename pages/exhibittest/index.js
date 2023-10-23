import { useState } from "react";
import { allExhibits } from "@/data/pastExhibit";
import { AnimatePresence, motion } from "framer-motion";
import Exhibitlayout from "@/components/exhibits/ExhibitLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";

export default function Exhibitpage() {
    const [exhibit, setExhibit] = useState(allExhibits[0]);
    const [index, setIndex] = useState(0);
    const router = useRouter();

    let length = exhibit.exhibits.length;

    function nextExhibit() {
         setIndex(index + 1 === length ? 0 : index + 1);
     };
  
     function prevExhibit() {
         setIndex(index - 1 < 0 ? length - 1 : index - 1);
     };

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

            <main>
                <AnimatePresence>
                    <motion.div
                        key={exhibit ? exhibit.year : ""}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration: 0.5, ease: "easeInOut"}}
                    >
                    {exhibit ? 
                        <Exhibitlayout 
                            order={exhibit.exhibits[index].order}
                            type={exhibit.exhibits[index].type}
                            title={exhibit.exhibits[index].title}
                            time={exhibit.exhibits[index].time} 
                            artist={exhibit.exhibits[index].artist} 
                            location={exhibit.exhibits[index].location} 
                            host={exhibit.exhibits[index].host} 
                            support={exhibit.exhibits[index].support} 
                            time1={exhibit.exhibits[index].time1} 
                            artist1={exhibit.exhibits[index].artist1} 
                            location1={exhibit.exhibits[index].location1} 
                            host1={exhibit.exhibits[index].host1} 
                            support1={exhibit.exhibits[index].support1}
                            explanation={exhibit.exhibits[index].explanation}
                            author={exhibit.exhibits[index].author}
                            index={exhibit.index}
                            // index1={index}
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
                        </Exhibitlayout> 
                        // <div>Component</div>
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