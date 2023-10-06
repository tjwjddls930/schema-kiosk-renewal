import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Artistlayout from "@/components/exhibits/artistselect/ArtistLayout";
import { useState, useEffect } from "react";
import { artistData } from "@/data/artistData";
import { AnimatePresence, motion } from "framer-motion";
import Artistcontent from "@/components/exhibits/artistselect/Artistcontent";

export default function Presentpage() {
    const [artist, setArtist] = useState(artistData[0]);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        // Update the isClient state to true as this code will be executed only on client side
        setIsClient(true);
      }, []);
    return (
       <>
        {isClient && (
            <Artistlayout>
                <div className="w-11/12 h-[250px] 2xl:h-[650px] flex mx-auto justify-center">
                    <div className="flex flex-row space-x-12 font-bold text-md pb-1">
                        {artistData.map((item, index)=> {
                            const {order, name, imgname} = item;
                            return(
                            <div 
                            key={order}
                            className="flex flex-col space-y-2 2xl:space-y-4">
                            {item === artist ? "" : <><div className="h-[0.5px] w-12 2xl:h-[1px] 2xl:w-20 bg-Cpurple" />
                            <span className="text-Awhite text-md 2xl:text-4xl mb-2">{name}</span></>}
                                <div 
                                    // className={item === artist ? "h-[350px] w-[250px] border-2 border-Awhite" : "h-[300px] w-[200px]"}
                                    onClick={()=> setArtist(item)}
                                >
                                <img 
                                    className={item === artist ? "h-[200px] w-[200px] 2xl:h-[550px] 2xl:w-[550px] border-4 border-Awhite rounded-lg" : "h-[150px] w-[150px] 2xl:h-[500px] 2xl:w-[500px] rounded-lg"}
                                    src={`/img/exhibitpage/artists/${imgname}`}
                                    alt="artist"
                                />
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-full h-[150px] 2xl:h-[250px] bg-Bgrey">
                    <main>
                        <AnimatePresence>
                            <motion.div
                                key={artist ? artist.order : ""}
                                intitial={{y: 5, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                exit={{y: -5, opacity: 0}}
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
                </div>
        </Artistlayout>
        )}
       </>
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