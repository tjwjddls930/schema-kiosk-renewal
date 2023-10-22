import Link from "next/link";
import Image from "next/image";
import { artistData } from "@/data/artistData";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Artistcontent from "./Artistcontent";

const Artistlayout = ({children}) => {
    const [artist, setArtist] = useState(artistData[0]);

    return(
        <div className="h-screen w-screen bg-[url('/img/exhibitpage/artist_select_background.png')] bg-no-repeat bg-cover">
            <div className="w-full py-6 px-12 screen-w:py-12 screen-w:px-20 flex flex-row justify-between">
                <div className="flex flex-row">
                    <Link href="/main">
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
                            priority={true}
                        />
                    </Link>
                    <span className="text-Agrey text-base screen-w:text-xl mt-2">{'전시 안내 '} </span>
                    <span className="text-Agrey text-base screen-w:text-xl mt-2">{' > 현재 전시'}</span>
                    <span className="text-Agrey text-base screen-w:text-xl font-bold mt-2">{' > 작가 선택'}</span>
                </div>
                <div>
                    <span className="text-Agrey text-base screen-w:text-xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
                </div>
            </div>
            <div className="flex flex-row w-full h-5/6 mx-auto space-x-4 screen-w:space-x-8">
                <div className="w-1/3 h-full justify-center items-center">
                    <img 
                        className="w-3/4 h-3/4 screen-w:h-[90%] mx-auto border-4 border-Awhite"
                        src={`/img/exhibitpage/artists/${artist.imgname}`}
                        alt="artists"
                    />
                </div>
                <div className="flex flex-col w-2/3 h-full space-y-4 screen-w:space-y-16">
                    <div className="w-full h-1/2 bg-Awhite">
                        <main>
                        {/* {children} */}
                        <AnimatePresence>
                            <motion.div
                                key={artist ? artist.order : ""}
                                intitial={{y: 5, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                exit={{y: -5, opacity: 0}}
                                transition={{duration: 0.2}}
                            >
                                {artist ? <Artistcontent 
                                    number={artist.number}
                                    order={artist.order}
                                    title={artist.title}
                                    name={artist.name}
                                    text={artist.text}
                                /> : ""}
                            </motion.div>
                        </AnimatePresence>
                        </main>
                    </div>
                    <div className="w-full h-1/2 mx-auto">
                        <div className="flex w-full h-[10%] screen-w:h-[15%] items-center text-center text-Agrey text-base font-bold screen-w:text-4xl">
                            <span className="mx-auto">{'전시에 참여한 작가를 선택해보세요!'}</span>
                        </div>
                        <div className="w-11/12 h-3/4 flex mx-auto justify-center">
                                <div className="flex flex-row space-x-12 font-bold text-md pb-1">
                                    {artistData.map((item, index)=> {
                                        const {order, name, imgname} = item;
                                        return(
                                        <div 
                                        key={order}
                                        className="flex flex-col space-y-2 screen-w:space-y-4">
                                        {item === artist ? "" : <><div className="h-[0.5px] w-12 screen-w:h-[1px] screen-w:w-20 bg-Cpurple" />
                                        <span className="text-Agrey text-md screen-w:text-4xl mb-2">{name}</span></>}
                                            <div 
                                                // className={item === artist ? "h-[350px] w-[250px] border-2 border-Awhite" : "h-[300px] w-[200px]"}
                                                onClick={()=> setArtist(item)}
                                            >
                                            <img 
                                                className={item === artist ? "h-[200px] w-[200px] screen-w:h-[550px] screen-w:w-[550px] border-4 border-Awhite rounded-lg" : "h-[150px] w-[150px] screen-w:h-[500px] screen-w:w-[500px] rounded-lg"}
                                                src={`/img/exhibitpage/artists/${item.imgname}`}
                                                alt="artist"
                                            />
                                            </div>
                                        </div>
                                        )
                                    })}
                                </div>
                            </div>
                    </div>
                </div>
            </div>  
            <button className="absolute left-14 bottom-20 screen-w:left-20 screen-w:bottom-36">
                <Link href="/exhibit">
                    {/* <Image 
                        src="/img/exhibitpage/icons/뒤로가기_아이콘.png"
                        width="60"
                        height="60"
                        alt="back"
                        priority={true}
                    /> */}
                    <img 
                        src="/img/exhibitpage/icons/뒤로가기버튼_어두운버전.png"
                        className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                        alt="back"
                    />
                </Link>
            </button>
            <button className="absolute left-32 bottom-20 screen-w:left-72 screen-w:bottom-36">
                <Link href="/main">
                    <img 
                        src="/img/connectpage/홈버튼_밝은화면용.png"
                        className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                        alt="home"
                    />
                </Link>
            </button>
            {children}
        </div>
    )
};

export default Artistlayout;