import Image from "next/image";
import { useState } from "react";
import ReactSlider from "react-slider";
import { useTranslation } from "next-i18next";
import Soundguide from "../docent/Soundguide";
import clsx from "clsx";
import { useRouter } from "next/router";

export default function ViewNavbar({url, lang, pid}) {
    const [volume, setVolume] = useState(Number(0.5));
    const [soundguide, setSoundguide] = useState(false);
    const {t, i18n} = useTranslation('navbar');
    const [modal, setModal] = useState();
    const [id, setId] = useState(null);
    const router = useRouter();
    function handleLanguage(e, language) {
        setId(e.target.id);
        window.localStorage.setItem('language', language);
    };
    function changeLanguage(lng) {
        i18n.changeLanguage(lng);
        router.replace(`/artist/paint/${lang}/${pid}`, undefined, {locale:lng});
        setModal(!modal);
    }
    return(
        <>
        {soundguide && (
            <div className="absolute bottom-20 right-4 h-[350px] w-[350px] z-20 screen-w:h-[600px] screen-w:w-[600px] screen-w:bottom-28">
                <Soundguide 
                    videoUrl={url}
                    volume={Number(volume)}
                    playing={true}
                    end={()=>setSoundguide(!soundguide)}
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
        <nav className="fixed hidden lg:flex bottom-0 w-full h-20 lg:h-16 screen-w:h-28 bg-Ablack px-10 screen-w:px-12">
            <div className="flex flex-row w-full space-x-4 screen-w:space-x-6 justify-between my-2 mt-5 lg:mt-4 screen-w:my-4 screen-w:mt-6">
                <div className="w-1/12 screen-w:w-1/2">
                    <div className="flex flex-row space-x-2 h-9 screen-w:space-x-4 screen-w:h-11 w-full justify-start">
                        <img 
                            src={`/img/flags/${i18n.language}_circle.png`}
                            className="h-10 w-10 screen-w:h-16 screen-w:w-16"
                            alt="flag"
                            onClick={()=>setModal(!modal)}

                        />
                        <span 
                            className="text-screen-w screen-w:text-4xl screen-w:mt-2 text-Awhite"
                            onClick={()=>setModal(!modal)}
                        >
                            {t("CURRENT_LANGUAGE")}</span>
                    </div>
                </div>
                <div className="w-11/12 screen-w:w-1/2 flex flex-row space-x-3 screen-w:space-x-6">
                    <div className="flex flex-row space-x-2 w-[250px] screen-w:w-[350px] justify-center text-center">
                        <span className="text-xl w-[170px] screen-w:text-3xl screen-w:w-[230px] mx-auto screen-w:mt-2 text-Awhite">{t("FONT_SIZE")}</span>
                        <button className="rounded-full screen-w:text-3xl w-[80px] screen-w:w-[120px] bg-Cgrey text-Awhite font-bold mb-2">
                            {t("BIG")}
                        </button>
                    </div>
                    <div className="flex flex-row h-9 screen-w:h-11 w-full justify-center screen-w:px-20">
                        <span className="text-xl screen-w:text-3xl w-1/3 screen-w:mt-2 text-Awhite">{t("VOLUME")}</span>
                        <div className="w-2/3 bg-Cgrey rounded-full p-2 screen-w:mt-2">
                            <ReactSlider 
                                step={0.01}
                                min={0}
                                max={1}
                                className="w-full h-3 bg-Awhite rounded-full cursor-grab mt-1"
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
                    </div>
                    <div className="flex flex-row space-x-2 w-[250px] screen-w:w-[350px] justify-center text-center">
                        <span className="text-xl screen-w:text-3xl w-[170px] screen-w:w-[230px] mx-auto screen-w:mt-2 text-Awhite">{t("SOUND_GUIDE")}</span>
                        <button
                            onClick={()=>setSoundguide(!soundguide)} 
                            className="rounded-full w-[80px] screen-w:w-[120px] screen-w:text-3xl bg-Cgrey text-Awhite font-bold mb-2">
                            {soundguide ? t("STOP") : t("START")}
                            {/* {t("START")} */}
                        </button>
                    </div>
                    <div className="flex flex-row space-x-2 w-[250px] screen-w:w-[350px] justify-center text-center">
                        <span className="text-xl w-[170px] screen-w:text-3xl screen-w:w-[230px] mx-auto screen-w:mt-2 text-Awhite">{t("SIGN_LANGUAGE")}</span>
                        <button className="rounded-full w-[80px] screen-w:w-[120px] screen-w:text-3xl bg-Cgrey text-white font-bold mb-2">
                            {t("START")}
                        </button>
                    </div>
                </div>
            </div>
        </nav> 
        </>
    )
};