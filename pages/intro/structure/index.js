import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Introlayout from "@/components/intro/IntroLayout";
import { useState } from "react";
import { introData } from "@/data/introData";
import { AnimatePresence, motion } from "framer-motion";

export default function Structure() {
    const [intro, setIntro] = useState(introData[0])
    return(
        <Introlayout>
            <div className="w-11/12 h-14 screen-w:h-32 flex text-Cgrey border-b-4 border-Cgrey mx-auto justify-center">
                <ul className="flex flex-row space-x-12 font-bold text-2xl pb-2 screen-w:space-x-16 screen-w:text-4xl">
                    {introData.map((item)=> (
                        <li
                            key={item.title}
                            className={item === intro ? "text-white border-b-4 border-Cpurple": ""}
                            onClick={()=> setIntro(item)}
                        >   
                            {`${item.title}`}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full h-3/4 screen-w:h-[90%] bg-Awhite">
                <main>
                    <AnimatePresence>
                        <motion.div
                            key={intro ? intro.title : ""}
                            intitial={{y: 10, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -10, opacity: 0}}
                            transition={{duration: 0.2}}
                        >
                            {intro ? <div className="p-6 screen-w:p-12 mx-auto items-center">
                                {intro.component}
                            </div> : ""}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </Introlayout>
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