import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Artistlayout from "@/components/exhibits/artistselect/ArtistLayout";
import { useState } from "react";
import { artistData } from "@/data/artistData";
import { AnimatePresence, motion } from "framer-motion";
import Artistcontent from "@/components/exhibits/artistselect/Artistcontent";

export default function Presentpage() {
    const [artist, setArtist] = useState(artistData[0]);
    // const [current, setCurrent] = useState(0)

    //  console.log(artistData.length)

    // function nextExhibit() {
    //     setCurrent(current === artistData.length - 1 ? 0 : current + 1);
    // };

    // function prevExhibit() {
    //     setCurrent(current === 0 ? artistData.length - 1 : current - 1);
    // };


    return (
       <Artistlayout>
            <div className="w-11/12 h-[350px] flex mx-auto justify-center">
                <div className="flex flex-row space-x-12 font-bold text-md pb-1">
                    {artistData.map((item, index)=> (
                        <div 
                            key={item.order}
                            className="flex flex-col space-y-2">
                            {item === artist ? "" : <><div className="h-[0.5px] w-12 bg-Cpurple" />
                            <span className="text-Awhite text-md mb-2">{item.name}</span></>}
                            <div 
                                // className={item === artist ? "h-[350px] w-[250px] border-2 border-Awhite" : "h-[300px] w-[200px]"}
                                onClick={()=> setArtist(item)}
                            >
                                <img 
                                    className={item === artist ? "h-[300px] w-[300px] border-4 border-Awhite rounded-lg" : "h-[250px] w-[250px] rounded-lg"}
                                    src={`/img/exhibitpage/artists/${item.imgname}`}
                                    alt="artist"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full h-[200px] bg-Bgrey">
                <button 
                    // onClick={()=> prevExhibit()}
                >
                    <img 
                        className="absolute bottom-52 left-72 h-10 w-10"
                        src="/img/exhibitpage/icons/왼쪽버튼.png"
                        alt="left"
                    />
                </button>
                <main>
                    <AnimatePresence>
                        <motion.div
                            key={artist ? artist.order : ""}
                            intitial={{y: 10, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -10, opacity: 0}}
                            transition={{duration: 0.2}}
                        >
                            {artist ? <Artistcontent 
                                order={artist.order}
                                title={artist.title}
                                name={artist.name}
                                text={artist.text}
                            /> : ""}
                        </motion.div>
                    </AnimatePresence>
                </main>
                <button
                    // onClick={()=> nextExhibit()}
                >
                    <img 
                        className="absolute bottom-52 right-72 h-10 w-10"
                        src="/img/exhibitpage/icons/오른쪽버튼.png"
                        alt="right"
                    />
                </button>
            </div>
       </Artistlayout>
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