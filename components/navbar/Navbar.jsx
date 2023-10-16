import Image from "next/image";
import { useState } from "react";
import ReactSlider from "react-slider";
import { useTranslation } from "next-i18next";
import Soundguide from "../docent/Soundguide";
import clsx from "clsx";
import { useRouter } from "next/router";

export default function Navbar({url, lang, sign}) {
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
            {/* {soundguide && (
                // <div className="absolute top-0 left-0 h-[91%] screen-w:h-[95%] w-screen bg-Ablack bg-opacity-60 z-20">
                // </div>
                <div className="absolute bottom-16 screen-w:bottom-28 right-0 h-[450px] w-[450px] screen-w:h-[600px] screen-w:w-[600px] z-[999]">
                    <Soundguide 
                        videoUrl={url}
                        volume={Number(volume)}
                        playing={true}
                        end={()=>setSoundguide(!soundguide)}
                    />
            </div>
            )} */}
            <div className="absolute bottom-16 screen-w:bottom-28 right-0 h-[350px] w-[350px] screen-w:right-8 screen-w:h-[1300px] screen-w:w-[1300px]">
                <Soundguide 
                    videoUrl={videoSource[currentVideoIndex]}
                    volume={Number(volume)}
                    loop={true}
                />
            </div>
            {signLang && (
                <div className="absolute bottom-0 right-0 h-[330px] w-[430px] screen-w:h-[600px] screen-w:w-[600px]">
                    <Soundguide
                        videoUrl={sign}
                        volume={Number(volume)}
                        end={()=>setsignLang(!signLang)}
                    />
                </div>
            )}
            {volumepop  && (
                <div className="absolute h-8 w-[250px] screen-w:h-12 screen-w:w-[350px] bottom-24 right-96 screen-w:transform screen-w:-translate-x-[80%] rounded-full bg-Cgrey bg-opacity-50 items-center">
                    <ReactSlider 
                        step={0.01}
                        min={0}
                        max={1}
                        className="w-[180px] screen-w:w-[250px] h-3 bg-Awhite rounded-full cursor-grab mt-2 screen-w:mt-4 mx-auto"
                        thumbClassName="absolute w-5 h-5 cursor-grab bg-Cpurple rounded-full border-2 border-Awhite -top-1"
                        trackClassName="top-0 bottom-0 bg-Awhite bg-Cpurple"
                        renderTrack={(props, state)=> (
                        <div {...props} 
                            className={clsx('h-3 rounded-full cursor-pointer', {
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
                <div className="flex flex-col h-3/4 w-3/4 items-center mx-auto bg-Awhite rounded-lg z-20 mt-20 space-y-4 screen-w:space-y-6">
                    <span className="text-xl screen-w:text-3xl text-black font-bold mt-4 screen-w:mt-6">여러분의 언어를 선택해주세요!</span>
                    <span className="text-lg screen-w:text-screen-w text-Cgrey font-bold">Please select your language</span>
                    <div className="flex flex-col space-y-6 w-full h-[700px] screen-w:space-y-12 screen-w:h-full bg-Cpurple bg-opacity-30 rounded-b-lg py-6 screen-w:pt-20 z-30">
                        <div className="flex flex-row mx-auto space-x-6 screen-w:space-x-12 z-40">
                            {/* 한국어 */}
                            <button
                                className="h-[150px] w-[250px] screen-w:h-[300px] screen-w:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                            >
                                <div
                                    id="ko" 
                                    className="relative h-full w-full"
                                    onClick={(e)=>handleLanguage(e, "Korean")}
                                >
                                    <Image 
                                        id="ko"
                                        className="pt-3 screen-w:pt-14 mx-auto"
                                        height="50"
                                        width="100"
                                        src="/img/flags/korea.png"
                                        alt="korea"
                                        style={{
                                            height:"auto",
                                            width:"auto"
                                        }}
                                        onClick={(e)=>handleLanguage(e, "Korean")}
                                    />
                                    <div className="absolute w-full h-16 screen-w:h-24 bottom-0 pt-1 screen-w:pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                        <span className="text-xl screen-w:text-screen-w font-bold z-40">한국어<br /></span>
                                        <span className="text-lg screen-w:text-xl font-bold z-40">Korean</span>
                                    </div>
                               </div>
                            </button>
                            {/* 영어 */}
                            <button
                                className="h-[150px] w-[250px] screen-w:h-[300px] screen-w:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                            >
                                <div 
                                    id="en" 
                                    className="relative h-full w-full"
                                    // onClick={(e)=>handleClick(e)} 
                                    onClick={(e)=>handleLanguage(e, "English")}   
                                >
                                    <Image 
                                        id="en"
                                        className="pt-3 screen-w:pt-14 mx-auto"
                                        height="70"
                                        width="100"
                                        src="/img/flags/usa.png"
                                        alt="usa"
                                        style={{
                                            height:"auto",
                                            width:"auto"
                                        }}
                                        onClick={(e)=>handleLanguage(e, "English")}
                                    />
                                    <div className="absolute w-full h-16 screen-w:h-24 bottom-0 pt-1 screen-w:pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                        <span className="text-xl screen-w:text-screen-w font-bold">English<br /></span>
                                        <span className="text-lg screen-w:text-xl font-bold">English</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="flex flex-row mx-auto space-x-6 screen-w:space-x-12 z-40"> 
                        {/* 중국어 */}
                        <button
                            className="h-[150px] w-[250px] screen-w:h-[300px] screen-w:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                        >
                                <div 
                                    id="zh" 
                                    className="relative h-full w-full"
                                    // onClick={(e)=>handleClick(e)}
                                    onClick={(e)=>handleLanguage(e, "Chinese")}
                                >
                                    <Image 
                                        id="zh"
                                        className="pt-3 screen-w:pt-14 mx-auto"
                                        height="50"
                                        width="100"
                                        src="/img/flags/china.png"
                                        alt="china"
                                        style={{
                                            height:"auto",
                                            width:"auto"
                                        }}
                                        onClick={(e)=>handleLanguage(e, "Chinese")}
                                    />
                                    <div className="absolute w-full h-16 screen-w:h-24 bottom-0 pt-1 screen-w:pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                        <span className="text-xl screen-w:text-screen-w font-bold z-40">中國語<br /></span>
                                        <span className="text-lg screen-w:text-xl font-bold z-40">Chinese</span>
                                    </div>
                               </div>
                            </button>
                            {/* 태국어 */}
                            <button 
                                className="h-[150px] w-[250px] screen-w:h-[300px] screen-w:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                            >
                                <div 
                                    id="th"
                                    className="relative h-full w-full"
                                    // onClick={(e)=>handleClick(e)}
                                    onClick={(e)=>handleLanguage(e, "Thai")}
                                >
                                    <Image 
                                        id="th"
                                        className="pt-3 screen-w:pt-14 mx-auto"
                                        height="50"
                                        width="100"
                                        src="/img/flags/thailand.png"
                                        alt="thai"
                                        style={{
                                            height:"auto",
                                            width:"auto"
                                        }}
                                        onClick={(e)=>handleLanguage(e, "Thai")}
                                    />
                                    <div className="absolute w-full h-16 screen-w:h-24 bottom-0 pt-1 screen-w:pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                        <span className="text-xl screen-w:text-screen-w font-bold">แบบไทย<br /></span>
                                        <span className="text-lg screen-w:text-xl font-bold">Thai</span>
                                    </div>
                                </div>
                            </button>
                            {/* 베트남어 */}
                            <button
                                className="h-[150px] w-[250px] screen-w:h-[300px] screen-w:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                            >
                                <div
                                    id="vi" 
                                    className="relative h-full w-full"
                                    // onClick={(e)=>handleClick(e)}
                                    onClick={(e)=>handleLanguage(e, "Vietnamese")}
                                >
                                    <Image 
                                        id="vi"
                                        className="pt-3 screen-w:pt-14 mx-auto"
                                        height="70"
                                        width="100"
                                        src="/img/flags/vietnam.png"
                                        alt="vietnam"
                                        style={{
                                            height:"auto",
                                            width:"auto"
                                        }}
                                        onClick={(e)=>handleLanguage(e, "Vietnamese")}
                                    />
                                    <div className="absolute w-full h-16 screen-w:h-24 bottom-0 pt-1 screen-w:pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                        <span className="text-xl screen-w:text-screen-w font-bold">Tiếng Việt<br /></span>
                                        <span className="text-lg screen-w:text-xl font-bold">Vietnamese</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="flex flex-row mx-auto space-x-6 screen-w:space-x-8 z-40">
                            <button className="h-12 w-[200px] screen-w:h-16 screen-w:w-[250px] z-40 bg-Awhite shadow-lg rounded-full text-black font-bold text-screen-w lg:text-xl"
                                onClick={()=>setModal(!modal)}
                            >
                                취소하기
                            </button>
                            {/* 언어 변경 버튼 */}
                            <button 
                                className="h-12 w-[200px] screen-w:h-16 screen-w:w-[250px] z-40 bg-gradient-to-r from-Agradient to-Bgradient shadow-lg rounded-full text-white font-bold text-screen-w lg:text-xl"
                                onClick={
                                    ()=> changeLanguage(id)
                                }
                            >
                                언어 변경하기
                            </button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            )}
           <nav className="fixed lg:flex bottom-0 w-full h-16 screen-w:h-28 bg-Ablack px-10 screen-w:px-12">
                <div className="flex flex-row w-full space-x-4 screen-w:space-x-6 justify-end my-2 mt-5 lg:mt-4 screen-w:my-4 screen-w:mt-6">
                    {/* <div className="w-1/12 screen-w:w-1/2">
                        
                    </div> */}
                    <div className="flex flex-row space-x-2 h-9 screen-w:space-x-4 screen-w:h-11 w-[250px] justify-end">
                            {/* <Image 
                                src={`/img/flags/${i18n.language}_circle.png`}
                                height="50"
                                width="50"
                                alt="korea"
                                style={{
                                    width: "auto",
                                    height: "auto"
                                }}
                            /> */}
                            <img 
                                src={`/img/flags/${i18n.language}_circle.png`}
                                className="h-10 w-10 pb-2 screen-w:h-16 screen-w:w-16"
                                alt="flag"
                                onClick={()=>setModal(!modal)}
                            />
                            <span 
                                className="text-xl screen-w:text-4xl screen-w:mt-1 text-Awhite"
                                onClick={()=>setModal(!modal)}
                            >{t("CURRENT_LANGUAGE")}</span>
                        </div>
                    {/* <div className="w-11/12 screen-w:w-1/2 flex flex-row space-x-3 screen-w:space-x-6">
                       
                    </div> */}
                     <div className="flex flex-row space-x-2 w-[200px] screen-w:w-[350px] justify-center text-center">
                            <span className="text-xl w-[150px] screen-w:text-3xl screen-w:w-[230px] mx-auto screen-w:mt-2 text-Awhite">{t("FONT_SIZE")}</span>
                            <button
                                onClick={()=>setSize(!size)} 
                                className="rounded-full screen-w:text-3xl w-[50px] screen-w:w-[120px] bg-Cgrey text-Awhite font-bold mb-2">
                                {size ? t("SMALL") : t("BIG")}
                            </button>
                        </div>
                        <div className="flex flex-row space-x-2 w-[200px] screen-w:w-[350px] justify-center text-center">
                            <span className="text-xl screen-w:text-3xl w-[150px] screen-w:w-[230px] mx-auto screen-w:mt-2 text-Awhite">{t("VOLUME")}</span>
                            <button
                                onClick={()=>setVolumepop(!volumepop)} 
                                className="rounded-full w-[50px] screen-w:w-[120px] screen-w:text-3xl bg-Cgrey text-white font-bold mb-2"
                            >
                                {/* {soundguide ? t("STOP") : t("START")} */}
                                {'조절'}
                            </button>
                        </div>
                        <div className="flex flex-row space-x-2 w-[200px] screen-w:w-[350px] justify-center text-center">
                            <span className="text-xl screen-w:text-3xl w-[150px] screen-w:w-[230px] mx-auto screen-w:mt-2 text-Awhite">{t("SOUND_GUIDE")}</span>
                            <button
                                // onClick={()=>setSoundguide(!soundguide)} 
                                onClick={switchVideo} 
                                className="rounded-full w-[50px] screen-w:w-[120px] screen-w:text-3xl bg-Cgrey text-white font-bold mb-2 disabled:opacity-50"
                                disabled={signLang}
                            >
                                {soundguide ? t("STOP") : t("START")}
                            </button>
                        </div>
                        <div className="flex flex-row space-x-2 w-[200px] screen-w:w-[350px] justify-center text-center">
                            <span className="text-xl w-[150px] screen-w:text-3xl screen-w:w-[230px] mx-auto screen-w:mt-2 text-Awhite">{t("SIGN_LANGUAGE")}</span>
                            <button 
                                className="rounded-full w-[50px] screen-w:w-[120px] screen-w:text-3xl bg-Cgrey text-white font-bold mb-2 disabled:opacity-50"
                                onClick={()=>setsignLang(!signLang)}
                                disabled={currentVideoIndex === 1}
                            >
                                {signLang ? t("STOP") : t("START")}
                            </button>
                        </div>
                </div>
            </nav> 
        </>
    )
}