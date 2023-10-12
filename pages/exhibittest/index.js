import Pageframe from "@/components/pagelayout/Pageframe";
import { useState } from "react";
import { allExhibits } from "@/data/pastExhibit";
import { AnimatePresence, motion } from "framer-motion";
import Exhibitlayout from "@/components/exhibits/ExhibitLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Exhibitpage() {
    const [exhibit, setExhibit] = useState(allExhibits[0]);
    return(
        <Pageframe>
            <div className="h-screen w-screen bg-gray-100 bg-opacity  font-pretendard_bold">
                <div className="w-full py-10 px-16 flex flex-row justify-between">
                    <div>
                        <span className="text-Cgrey text-xl font-bold">전시 안내 </span>
                        <span className="text-Agrey text-xl font-bold">{'> 지난 전시'}</span>
                    </div>
                    <div>
                        <span className="text-Cgrey textlg font-bold">모두를 위한 보편적인 스마트 디지털 전시 관람 시스템</span>
                    </div>
                </div>
                <div className="w-11/12 h-12 flex text-Dgrey shadow-md mx-auto justify-center overflow-hidden">
                    <ul className="flex flex-row space-x-12 font-bold text-screen-w mb-2">
                        {allExhibits.map((item)=> (
                            <li
                                key={item.year}
                                className={item === exhibit ? "text-black border-b-4 border-Cpurple" : ""}
                                onClick={()=> setExhibit(item)}
                            >
                                {`${item.year}`}
                            </li>
                        ))}   
                    </ul>
                </div>
                <main>
                    <AnimatePresence>
                        <motion.div
                            key={exhibit ? exhibit.year : ""}
                            initial={{y:60, opacity:0}}
                            animate={{y:0, opacity:1}}
                            exit={{y: -60, opacity: 0}}
                            transition={{duration: 0.3, ease: "easeInOut"}}
                        >
                            {exhibit ? <Exhibitlayout 
                                order={exhibit.order}
                                type={exhibit.type}
                                title={exhibit.title}
                                time={exhibit.time} 
                                artist={exhibit.artist} 
                                location={exhibit.location} 
                                host={exhibit.host} 
                                support={exhibit.support} 
                                time1={exhibit.time1} 
                                artist1={exhibit.artist1} 
                                location1={exhibit.location1} 
                                host1={exhibit.host1} 
                                support1={exhibit.support1}
                                explanation={exhibit.explanation}
                                author={exhibit.author}
                            /> : ""}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </Pageframe>
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