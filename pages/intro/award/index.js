import Awardlayout from "@/components/intro/award/AwardLayout";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AnimatePresence, motion } from "framer-motion";
import { awardData } from "@/data/awardData";
import Awardcontent from "@/components/intro/award/Awardcontent";

export default function Award() {
    const [award, setAward] = useState();
    return(
        <Awardlayout>
            <div className="w-11/12 h-12 screen-w:h-32 flex text-Cgrey border-b-4 screen-w:pt-10 border-Cgrey mx-auto justify-center">
                <ul className="flex flex-row space-x-12 screen-w:space-x-16 font-bold text-xl screen-w:text-4xl pb-1">
                    {awardData.map((item)=> (
                        <li
                            key={item.title}
                            className={item === award ? "text-white border-b-4 border-Cpurple": ""}
                            onClick={()=> setAward(item)}
                        >   
                            {`${item.title}`}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full h-[55%] screen-w:h-[85%] bg-Bgrey">
                <main>
                    <AnimatePresence>
                        <motion.div
                            key={award ? award.title : ""}
                            intitial={{y: 10, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -10, opacity: 0}}
                            transition={{duration: 0.2}}
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
        </Awardlayout>
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