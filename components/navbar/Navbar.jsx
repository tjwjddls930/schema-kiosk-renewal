import Image from "next/image";
import { useState } from "react";
import ReactSlider from "react-slider";
import { useTranslation } from "next-i18next";
import Soundguide from "../docent/Soundguide";
import clsx from "clsx";
import { useRouter } from "next/router";

const Navbar = ({url, lang, sign}) => {
    const [volume, setVolume] = useState(Number(0.5));
    const [volumepop, setVolumepop] = useState(false);
    const [soundguide, setSoundguide] = useState(false);
    const [signLang, setsignLang] = useState(false);
    const [size, setSize] = useState(false);
    const [modal, setModal] = useState();
    const [id, setId] = useState(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const {t, i18n} = useTranslation('navbar');
    const videoSource = [
        "/video/docent/docent_idle.mp4",
        "/video/docent/schema-docent-04.webm"
    ];

    function switchVideo() {
        // Increment the currentVideoIndex to switch to the next video.
        setCurrentVideoIndex((prevIndex) =>
        prevIndex === videoSource.length - 1 ? 0 : prevIndex + 1
        );
    }

    const router = useRouter();
    function handleLanguage(e, language) {
        setId(e.target.id);
        window.localStorage.setItem('language', language);
    };
    function changeLanguage(lng) {
        i18n.changeLanguage(lng);
        router.replace(`/${lang}`, undefined, {locale:lng});
        setModal(!modal);
    }
    return(
        <>
            {soundguide && (
                <div className="absolute top-0 left-0 h-[91%] screen-w:h-[95%] w-screen bg-Ablack bg-opacity-60 z-20">
                    <div className="absolute transform -translate-x-1/2 left-1/2 bottom-0 h-3/4 w-3/4">
                        <Soundguide 
                            videoUrl={url}
                            volume={Number(volume)}
                            playing={true}
                            end={()=>setSoundguide(!soundguide)}
                        />
                    </div>
                </div>
                // <div className="absolute bottom-16 screen-w:bottom-28 right-0 h-[450px] w-[450px] screen-w:h-[1000px] screen-w:w-[850px] z-[999]">
                // </div>
            )}
            {/* {
                router.pathname === "/main" && (
                <div className="absolute bottom-16 screen-w:bottom-28 right-0 h-[350px] w-[350px] screen-w:right-8 screen-w:h-[1300px] screen-w:w-[1300px]">
                    <Soundguide 
                        videoUrl={videoSource[currentVideoIndex]}
                        volume={Number(volume)}
                        loop={true}
                    />
                </div>
                )
            } */}
            {signLang && (
                <div className="absolute bottom-0 right-0 h-[330px] w-[430px] screen-w:h-[700px] screen-w:w-[700px]">
                    <Soundguide
                        videoUrl={sign}
                        volume={Number(volume)}
                        end={()=>setsignLang(!signLang)}
                    />
                </div>
            )}
            {volumepop  && (
                <div className="absolute h-8 w-[250px] screen-w:h-16 screen-w:w-[500px] bottom-24 right-96 screen-w:transform screen-w:-translate-x-1/2 screen-w:right-64 screen-w:bottom-36 rounded-full bg-Ablack bg-opacity-60 items-center z-30">
                    <ReactSlider 
                        step={0.01}
                        min={0}
                        max={1}
                        className="w-[180px] screen-w:w-[400px] h-3 screen-w:h-6 bg-Awhite rounded-full cursor-grab mt-2 screen-w:mt-5 mx-auto"
                        thumbClassName="absolute w-5 h-5 screen-w:w-8 screen-w:h-8 cursor-grab bg-Cpurple rounded-full border-2 border-Awhite -top-1"
                        trackClassName="top-0 bottom-0 bg-Awhite bg-Cpurple"
                        renderTrack={(props, state)=> (
                        <div {...props} 
                            className={clsx('h-3 screen-w:h-6 rounded-full cursor-pointer', {
                                'bg-Awhite' : state.index === 1,
                                'bg-Cpurple': state.index === 0
                            })}></div>)}
                        value={volume}
                        onChange={(value)=> setVolume(value)}
                    />
                </div>
            )}
            {modal && (
            <div className="absolute top-0 h-screen w-screen bg-opacity-60 bg-Ablack z-10">
                <div className="flex flex-col h-3/4 w-3/4 items-center mx-auto bg-Awhite rounded-lg z-20 mt-60 space-y-4 screen-w:space-y-6">
                    <span className="text-xl screen-w:text-3xl text-black font-bold mt-4 screen-w:mt-6">여러분의 언어를 선택해주세요!</span>
                    <span className="text-lg screen-w:text-screen-w text-Cgrey font-bold">Please select your language</span>
                    <div className="flex flex-col space-y-6 w-full h-[700px] screen-w:space-y-24 screen-w:h-full bg-Bblue bg-opacity-30 rounded-b-lg py-6 screen-w:pt-56 items-center z-30">
                        <div className="flex flex-row mx-auto space-x-6 screen-w:space-x-24 z-40">
                            {/* 한국어 */}
                            <button
                                className="h-[150px] w-[250px] screen-w:h-[300px] screen-w:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Bblue text-Ablack focus:text-Awhite"
                            >
                                <div
                                    id="ko" 
                                    className="flex h-full w-full items-center"
                                    onClick={(e)=>handleLanguage(e, "Korean")}
                                >
                                    <div className="h-1/2 w-full flex flex-col text-center space-y-4 screen-w:space-y-8">
                                        <span className="text-xl screen-w:text-6xl font-bold z-40">한국어</span>
                                        <span className="text-lg screen-w:text-4xl font-bold z-40">Korean</span>
                                    </div>
                                </div>
                            </button>
                            {/* 영어 */}
                            <button
                                className="h-[150px] w-[250px] screen-w:h-[300px] screen-w:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Bblue text-Ablack focus:text-Awhite"
                            >
                                <div 
                                    id="en" 
                                    className="flex h-full w-full items-center"
                                    onClick={(e)=>handleLanguage(e, "English")}   
                                >
                                    <div className="h-1/2 w-full flex flex-col text-center space-y-4 screen-w:space-y-8">
                                        <span className="text-xl screen-w:text-6xl font-bold">English</span>
                                        <span className="text-lg screen-w:text-4xl font-bold">English</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="flex flex-row mx-auto space-x-6 screen-w:space-x-24 z-40"> 
                        {/* 중국어 */}
                        <button
                            className="h-[150px] w-[250px] screen-w:h-[300px] screen-w:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Bblue text-Ablack focus:text-Awhite"
                        >
                                <div 
                                    id="zh" 
                                    className="flex h-full w-full items-center"
                                    onClick={(e)=>handleLanguage(e, "Chinese")}
                                >
                                    <div className="h-1/2 w-full flex flex-col text-center space-y-4 screen-w:space-y-8">
                                        <span className="text-xl screen-w:text-6xl font-bold z-40">中國語</span>
                                        <span className="text-lg screen-w:text-4xl font-bold z-40">Chinese</span>
                                    </div>
                                </div>
                            </button>
                            {/* 태국어 */}
                            <button 
                                className="h-[150px] w-[250px] screen-w:h-[300px] screen-w:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Bblue text-Ablack focus:text-Awhite"
                            >
                                <div 
                                    id="th"
                                    className="flex h-full w-full items-center"
                                    onClick={(e)=>handleLanguage(e, "Thai")}
                                >
                                    <div className="h-1/2 w-full flex flex-col text-center space-y-4 screen-w:space-y-8">
                                        <span className="text-xl screen-w:text-6xl font-bold">แบบไทย</span>
                                        <span className="text-lg screen-w:text-4xl font-bold">Thai</span>
                                    </div>
                                </div>
                            </button>
                            {/* 베트남어 */}
                            <button
                                className="h-[150px] w-[250px] screen-w:h-[300px] screen-w:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Bblue text-Ablack focus:text-Awhite"
                            >
                                <div
                                    id="vi" 
                                    className="flex h-full w-full items-center"
                                    onClick={(e)=>handleLanguage(e, "Vietnamese")}
                                >
                                    <div className="h-1/2 w-full flex flex-col text-center space-y-4 screen-w:space-y-8">
                                        <span className="text-xl screen-w:text-6xl font-bold">Tiếng Việt</span>
                                        <span className="text-lg screen-w:text-4xl font-bold">Vietnamese</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="flex flex-row mx-auto space-x-6 screen-w:space-x-8 z-40">
                            <button className="h-12 w-[200px] screen-w:h-32 screen-w:w-[450px] z-40 bg-Awhite shadow-lg rounded-full text-black font-bold text-xl screen-w:text-4xl"
                                onClick={()=>setModal(!modal)}
                            >
                                취소하기
                            </button>
                            {/* 언어 변경 버튼 */}
                            <button 
                                className="h-12 w-[200px] screen-w:h-32 screen-w:w-[450px] z-40 bg-gradient-to-r from-Bblue to-Ablue shadow-lg rounded-full text-white font-bold text-xl screen-w:text-4xl"
                                onClick={
                                    ()=> changeLanguage(id)
                                }
                            >
                                언어 변경하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )}
           <nav className="fixed lg:flex bottom-0 w-screen h-16 screen-w:h-28 bg-Ablack px-10 screen-w:px-12 items-center">
                <div className="flex flex-row w-full h-full space-x-4 screen-w:space-x-6 justify-end">
                    <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center items-center text-center">
                        <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">
                            {'언어변경'}
                        </span>
                        <button
                            onClick={()=>setModal(!modal)}
                            className="rounded-full h-2/3 w-1/2 screen-w:text-3xl bg-Cgrey text-white font-bold"
                        >
                            {t("CURRENT_LANGUAGE")}
                        </button>
                    </div>
            
                     <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center text-center items-center">
                        <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">{t("FONT_SIZE")}</span>
                        <button
                            onClick={()=>setSize(!size)} 
                            className="rounded-full screen-w:text-3xl w-1/2 h-2/3 bg-Cgrey text-Awhite font-bold">
                            {size ? t("SMALL") : t("BIG")}
                        </button>
                    </div>
                    <div className="flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center text-center items-center">
                        <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">{t("VOLUME")}</span>
                        <button
                            onClick={()=>setVolumepop(!volumepop)} 
                            className="rounded-full h-2/3 w-1/2 screen-w:text-3xl bg-Cgrey text-white font-bold"
                        >
                            {/* {soundguide ? t("STOP") : t("START")} */}
                            {'조절'}
                        </button>
                    </div>
                    <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center text-center items-center">
                        <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">{t("SOUND_GUIDE")}</span>
                        <button
                            onClick={()=>setSoundguide(!soundguide)} 
                            className="rounded-full h-2/3 w-1/2 screen-w:text-3xl bg-Cgrey text-white font-bold disabled:opacity-50"
                            disabled={signLang}
                        >
                            {soundguide ? t("STOP") : t("START")}
                        </button>
                    </div>
                    <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center text-center items-center">
                        <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">{t("SIGN_LANGUAGE")}</span>
                        <button 
                            className="rounded-full h-2/3 w-1/2 screen-w:text-3xl bg-Cgrey text-white font-bold disabled:opacity-50"
                            onClick={()=>setsignLang(!signLang)}
                            disabled={soundguide}
                        >
                            {signLang ? t("STOP") : t("START")}
                        </button>
                    </div>
                </div>
            </nav> 
        </>
    )
};

export default Navbar;