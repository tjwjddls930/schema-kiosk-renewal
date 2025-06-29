import Link from "next/link";
import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import clsx from "clsx";
import { allExhibits_KOR } from "@/data/allExhibits_KOR";
import { allExhibits_ENG } from "@/data/allExhibits_ENG";
import { allExhibits_CH } from "@/data/allExhibits_CH";
import { allExhibits_TH } from "@/data/allExhibits_TH";
import { allExhibits_VI } from "@/data/allExhibits_VI";

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

const buttonText = {
    KOR: "작품 보러가기",
    ENG: "View Art Work",
    CH: "去看作品",
    TH: "ไปดูงานครับ",
    VI: "Đi xem tác phẩm"
};  

const inputData = {
    KOR: allExhibits_KOR,
    ENG: allExhibits_ENG,
    CH: allExhibits_CH,
    TH: allExhibits_TH,
    VI: allExhibits_VI
};

const Artistlayout = ({children}) => {
    const[isClient, setIsClient] = useState(false);
    const router = useRouter();
    const pid = router.query.slug;
    const {order} = router.query;
    const [artist, setArtist] = useState(null);
    const {language} = useContext(LanguageContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    const [list, setList] = useState(null);

    useEffect(()=> {
        if(pid && order && inputData[language][pid]?.exhibits[order]?.artist_info) {
            setArtist(inputData[language][pid].exhibits[order].artist_info[0])
        } else {
            setArtist(null)
        };
        setIsClient(true);
        // if(pid && index && artist) {
        //     router.replace(`/artist/${pid}?index=${index}&?artist=${artist.order}`)
        // }
    }, [pid, order, language]);

    return(
        <>        
        {isClient && (
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
                {artist && (
                <div className={clsx(isPortrait ? "flex flex-col w-full h-5/6 mx-auto space-y-4 screen-w:space-y-8 screen-w:pt-28" : "flex flex-row w-full h-5/6 mx-auto space-x-4 screen-w:space-x-8")}>
                    <div className={clsx(isPortrait ? "w-full h-1/3 justify-center items-center" : "w-1/3 h-full justify-center items-center")}>
                        <img 
                            className="flex mx-auto border-4 border-Awhite h-[400px] w-[400px] screen-w:h-max screen-w:w-max"
                            // src={`/img/exhibitpage/artists/${artist.imgname}`}
                            src={`${artist.imgname}`}
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
                                        {artist ? 
                                        <>
                                            <div className="flex flex-col h-3/4 screen-w:w-full screen-w:h-full screen-w:mx-auto bg-Awhite">
                                                <div className="flex flex-row space-x-2 screen-w:space-x-4 h-1/4 w-full items-center px-8 bg-Awhite mx-auto">
                                                    <span className="w-[10%] text-6xl screen-w:text-9xl text-Ablack font-bold">{artist.number}</span>
                                                    <div className="flex flex-col space-y-2 screen-w:space-y-8 w-[90%]">
                                                        <div className="bg-Ablue h-[1.5px] w-10 screen-w:w-20" />
                                                        <span className="text-base w-full screen-w:text-3xl text-Cgrey font-bold">{artist.title}</span>
                                                        <span className="text-lg screen-w:text-5xl text-Ablack font-bold mb-4">{artist.name}</span>
                                                    </div>
                                                </div>
                                                <div className={clsx(isPortrait ? "p-2 w-full h-[150px] screen-w:p-8 screen-w:h-[550px] overflow-auto" : "p-2 w-[65%] h-[150px] screen-w:p-8 screen-w:h-[550px] overflow-auto")}>
                                                    <p className="text-black text-base screen-w:text-4xl overflow-auto p-4 screen-w:py-8 screen-w:leading-normal">
                                                        {artist.text}
                                                    </p>
                                                </div>
                                                <div className="px-6 py-4 screen-w:py-12 screen-w:px-10">
                                                    <button className="text-base h-8 w-[120px] screen-w:text-4xl screen-w:h-28 screen-w:w-[400px] text-Awhite font-bold rounded-md bg-gradient-to-r from-Bblue to-Ablue"
                                                        onClick={()=>router.push(`/artist/paint/${pid}?order=${order}&artist=${artist.order}`)}
                                                    >
                                                        {buttonText[language]}
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                        : ""}
                                    </motion.div>
                                </AnimatePresence>
                            </main>
                        </div>
                        <div className="w-full h-1/2 mx-auto">
                            <div className="flex w-full h-[10%] screen-w:h-[15%] items-center text-center text-Agrey text-base font-bold screen-w:text-4xl">
                                <span className="mx-auto">{selectText[language]}</span>
                            </div>
                            <div className="w-11/12 h-3/4 flex mx-auto justify-start overflow-x-auto overflow-y-hidden">
                                    <div className="flex flex-row space-x-12 font-bold text-md pb-1 overflow-auto overflow-y-hidden">
                                        {inputData[language][pid].exhibits[order].artist_info.map((item, index)=> {
                                            const {order, name, imgname} = item;
                                            return(
                                            <div 
                                            key={order}
                                            className="flex flex-col space-y-2 screen-w:space-y-4">
                                            {item === artist ? "" : <><div className="h-[0.5px] w-12 screen-w:h-[1px] screen-w:w-32 bg-Ablue" />
                                            <span className="text-Agrey text-md screen-w:text-5xl mb-2">{name}</span></>}
                                                <div 
                                                    className={item === artist ? "h-[200px] w-[200px] screen-w:h-[650px] screen-w:w-[650px]" : "h-[200px] w-[200px] screen-w:h-[600px] screen-w:w-[600px]"}
                                                    onClick={()=> setArtist(item)}
                                                >
                                                <img 
                                                    className={item === artist ? "border-4 border-Awhite rounded-lg h-[200px] w-[200px] screen-w:h-max screen-w:w-max" : "rounded-lg h-[200px] w-[200px] screen-w:h-max screen-w:w-max"}
                                                    // src={`/img/exhibitpage/artists/${item.imgname}`}
                                                    src={`${item.imgname}`}
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
                )}
                <button className="absolute bottom-20 left-16 screen-w:bottom-44"
                    onClick={()=>router.back()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                </button>
                <button className="absolute bottom-36 left-16 screen-w:bottom-80"
                    onClick={()=>router.push("/main")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </button>
                {children}
            </div>
        )}
    </>
    )
};

export default Artistlayout;