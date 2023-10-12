import Link from "next/link";
import Image from "next/image";
import { artistData } from "@/data/artistData";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Artistcontent from "./Artistcontent";

export default function Artistlayout({children}) {
    const [artist, setArtist] = useState(artistData[0]);

    return(
        <div className="h-screen w-screen bg-Agrey">
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
                    <span className="text-Awhite text-base screen-w:text-xl mt-2">{'전시 안내 '} </span>
                    <span className="text-Awhite text-base screen-w:text-xl mt-2">{' > 현재 전시'}</span>
                    <span className="text-Awhite text-base screen-w:text-xl font-bold mt-2">{' > 작가 선택'}</span>
                </div>
                <div>
                    <span className="text-Awhite text-base screen-w:text-xl font-bold">모두를 위한 보편적인 스마트 디지털 전시 관람 시스템</span>
                </div>
            </div>
            <div className="flex w-full items-center text-center text-Awhite text-xl mb-6 screen-w:text-3xl screen-w:mb-10">
                <span className="mx-auto">{'전시에 참여한 작가를 선택해보세요!'}</span>
            </div>
            <div className="w-11/12 h-[250px] screen-w:h-[650px] flex mx-auto justify-center">
                    <div className="flex flex-row space-x-12 font-bold text-md pb-1">
                        {artistData.map((item, index)=> {
                            const {order, name, imgname} = item;
                            return(
                            <div 
                            key={order}
                            className="flex flex-col space-y-2 screen-w:space-y-4">
                            {item === artist ? "" : <><div className="h-[0.5px] w-12 screen-w:h-[1px] screen-w:w-20 bg-Cpurple" />
                            <span className="text-Awhite text-md screen-w:text-4xl mb-2">{name}</span></>}
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
                <div className="w-full h-[150px] screen-w:h-[250px] bg-Bgrey">
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
                                order={artist.order}
                                title={artist.title}
                                name={artist.name}
                                text={artist.text}
                            /> : ""}
                        </motion.div>
                    </AnimatePresence>
                    </main>
                </div>
            <div className="absolute h-60 w-40 -top-[100px] left-1/2 right-0 transform -translate-x-1/2">
                <Image 
                    src="/img/exhibitpage/icons/acc_1.png"
                    width="150"
                    height="50"
                    alt="acc"
                    priority={true}
                    style={{
                        height:"auto",
                        width: "auto"
                    }}
                />
            </div>
            <button className="absolute left-14 screen-w:left-20 screen-w:bottom-36">
                <Link href="/exhibit">
                    {/* <Image 
                        src="/img/exhibitpage/icons/뒤로가기_아이콘.png"
                        width="60"
                        height="60"
                        alt="back"
                        priority={true}
                    /> */}
                    <img 
                        src="/img/exhibitpage/icons/뒤로가기_아이콘.png"
                        className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                        alt="back"
                    />
                </Link>
            </button>
            <button className="absolute left-32 screen-w:left-72 screen-w:bottom-36">
                <Link href="/main">
                    <img 
                        src="/img/connectpage/홈버튼_화이트.png"
                        className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                        alt="home"
                    />
                </Link>
            </button>
            <span className="absolute bottom-56 screen-w:bottom-96 right-28 text-8xl screen-w:text-[170px] w-1/12 font-bold text-Awhite opacity-50">{''}</span>
            {children}
        </div>
    )
};