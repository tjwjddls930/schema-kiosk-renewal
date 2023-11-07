import Link from "next/link";
import Image from "next/image";
import { artistData } from "@/data/artistData";
import { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Artistcontent from "./Artistcontent";
import { useRouter } from "next/router";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import clsx from "clsx";

const topText = {
    KOR: () => (
        <span className="text-Agrey text-base screen-w:text-4xl font-bold mt-2">{'전시 안내 > 현재 전시 > 작가 선택'} </span>
    ),
    ENG: () => (
        <span className="text-Agrey text-base screen-w:text-4xl font-bold mt-2">{'Exhibition Information > Current Exhibition > Select Artist'} </span>
    ),
    CH: () => (
        <span className="text-Agrey text-base screen-w:text-4xl font-bold mt-2">{'展览信息 > 当前展览 > 选定艺术家'} </span>
    ),
    TH: () => (
        <span className="text-Agrey text-base screen-w:text-4xl font-bold mt-2">{'ข้อมูลนิทรรศการ > นิทรรศการปัจจุบัน > เลือกศิลปิน'} </span>
    ),
    VI: () => (
        <span className="text-Agrey text-base screen-w:text-4xl font-bold mt-2">{'Thông tin triển lãm > Triển lãm hiện tại > Chọn nghệ sĩ'} </span>
    ),
};

const selectText = {
    KOR: "전시에 참여한 작가를 선택해보세요!",
    ENG: "Choose an artist who participated in the exhibition!",
    CH: "选出一位参加过展览的艺术家吧！",
    TH: "เลือกศิลปินที่เข้าร่วมนิทรรศการ!",
    VI: "Chọn một nghệ sĩ tham gia triển lãm!"
};

const Artistlayout = ({children}) => {
    const [artist, setArtist] = useState(artistData[0]);
    const {language} = useContext(LanguageContext);
    const {isPortrait} = useContext(ScreenOrientContext);

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
                    {topText[language]()}
                </div>
                <div>
                    <span className="text-Agrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
                </div>
            </div>
            <div className={clsx(isPortrait ? "flex flex-col w-full h-5/6 mx-auto space-y-4 screen-w:space-y-8 screen-w:pt-28" : "flex flex-row w-full h-5/6 mx-auto space-x-4 screen-w:space-x-8")}>
                <div className={clsx(isPortrait ? "w-full h-1/3 justify-center items-center" : "w-1/3 h-full justify-center items-center")}>
                    <img 
                        className="w-3/4 h-3/4 screen-w:h-[90%] mx-auto border-4 border-Awhite"
                        src={`/img/exhibitpage/artists/${artist.imgname}`}
                        alt="artists"
                    />
                </div>
                <div className={clsx(isPortrait ? "flex flex-col w-full h-2/3 space-y-4 screen-w:space-y-16" : "flex flex-col w-2/3 h-full space-y-4 screen-w:space-y-16")}>
                    <div className={clsx(isPortrait ? "w-3/4 h-1/2 bg-Awhite mx-auto" : "w-full h-1/2 bg-Awhite")}>
                        <main>
                            <AnimatePresence>
                                <motion.div
                                    key={artist ? artist.order : ""}
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration: 0.3}}
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
                            <span className="mx-auto">{selectText[language]}</span>
                        </div>
                        <div className="w-11/12 h-3/4 flex mx-auto justify-center overflow-auto">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                </Link>
            </button>
            <button className="absolute left-32 bottom-20 screen-w:left-72 screen-w:bottom-36">
                <Link href="/main">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-16 h-16 screen-w:w-36 screen-w:h-36 text-Ablack">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
            </button>
            {children}
        </div>
    )
};

export default Artistlayout;