import { useState, useContext } from "react";
import ReactSlider from "react-slider";
import Soundguide from "../docent/Soundguide";
import clsx from "clsx";
import {LanguageContext} from "@/contexts/LanguageContext";
import { FontsizeContext } from "@/contexts/FontsizeContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";

const languageText = {
    KOR: (func)=> (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center items-center text-center">
            <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">
                {"언어변경"}
            </span>
            <button
                onClick={func}
                className="rounded-full h-2/3 w-1/2 screen-w:text-3xl bg-Cgrey text-white font-bold"
            >
                {"KOR"}
            </button>
        </div>
    ),
    ENG: (func) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[500px] justify-center items-center text-center">
            <span className="text-xl w-[350px] screen-w:text-4xl mx-auto text-Awhite">
                {"Language Change"}
            </span>
            <button
                onClick={func}
                className="rounded-full h-2/3 w-[150px] screen-w:text-3xl bg-Cgrey text-white font-bold"
            >
                {"ENG"}
            </button>
        </div>
    ),
    CH: (func) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center items-center text-center">
            <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">
                {"改变语言"}
            </span>
            <button
                onClick={func}
                className="rounded-full h-2/3 w-1/2 screen-w:text-3xl bg-Cgrey text-white font-bold"
            >
                {"CH"}
            </button>
        </div>
    ),
    TH: (func) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[400px] justify-center items-center text-center">
            <span className="text-xl w-[250px] screen-w:text-4xl mx-auto text-Awhite">
                {"เปลี่ยนภาษา"}
            </span>
            <button
                onClick={func}
                className="rounded-full h-2/3 w-[150px] screen-w:text-3xl bg-Cgrey text-white font-bold"
            >
                {"TH"}
            </button>
        </div>
    ),
    VI: (func) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[500px] justify-center items-center text-center">
            <span className="text-xl w-[350px] screen-w:text-4xl mx-auto text-Awhite">
                {"Thay đổi ngôn ngữ"}
            </span>
            <button
                onClick={func}
                className="rounded-full h-2/3 w-[150px] screen-w:text-3xl bg-Cgrey text-white font-bold"
            >
                {"VI"}
            </button>
        </div> 
    ),
};

const textSize = {
    KOR: (func, size)=> (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center text-center items-center">
        <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">{"글씨크기"}</span>
            <button
                onClick={func} 
                className="rounded-full screen-w:text-3xl w-1/2 h-2/3 bg-Cgrey text-Awhite font-bold">
                {size ? "작게" : "크게"}
            </button>
        </div>
    ),
    ENG: (func, size) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[350px] justify-center text-center items-center">
            <span className="text-xl w-[200px] screen-w:text-4xl mx-auto text-Awhite">{"Font Size"}</span>
            <button
                onClick={func} 
                className="rounded-full screen-w:text-3xl w-[150px] h-2/3 bg-Cgrey text-Awhite font-bold">
                {size ? "Small" : "Large"}
            </button>
        </div>
    ),
    CH: (func, size) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center text-center items-center">
            <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">{"字体大小"}</span>
            <button
                onClick={func} 
                className="rounded-full screen-w:text-3xl w-1/2 h-2/3 bg-Cgrey text-Awhite font-bold">
                {size ? "小的" : "大的"}
            </button>
        </div>
    ),
    TH: (func, size) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[400px] justify-center text-center items-center">
            <span className="text-xl w-[250px] screen-w:text-4xl mx-auto text-Awhite">{"ขนาดตัวอักษร"}</span>
            <button
                onClick={func} 
                className="rounded-full screen-w:text-3xl w-[150px] h-2/3 bg-Cgrey text-Awhite font-bold">
                {size ? "เล็ก" : "ใหญ่"}
            </button>
        </div>
    ),
    VI: (func, size) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center text-center items-center">
            <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">{"Cỡ chữ"}</span>
            <button
                onClick={func} 
                className="rounded-full screen-w:text-3xl w-1/2 h-2/3 bg-Cgrey text-Awhite font-bold">
                {size ? "bé nhỏ" : "to lớn"}
            </button>
        </div> 
    ),
};

const volumeControl = {
    KOR: (func)=> (
        <div className="flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center text-center items-center">
            <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">{"볼륨조절"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-1/2 screen-w:text-3xl bg-Cgrey text-white font-bold"
            >
                {'조절'}
            </button>
        </div>
    ),
    ENG: (func) => (
        <div className="flex flex-row space-x-2 w-[200px] screen-w:w-[450px] justify-center text-center items-center">
            <span className="text-xl w-[300px] screen-w:text-4xl mx-auto text-Awhite">{"Volume Control"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-[150px] screen-w:text-3xl bg-Cgrey text-white font-bold"
            >
                {'Control'}
            </button>
        </div>
    ),
    CH: (func) => (
        <div className="flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center text-center items-center">
            <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">{"音量控制"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-1/2 screen-w:text-3xl bg-Cgrey text-white font-bold"
            >
                {'控制'}
            </button>
        </div>
    ),
    TH: (func) => (
        <div className="flex flex-row space-x-2 w-[200px] screen-w:w-[500px] justify-center text-center items-center">
            <span className="text-xl w-[350px] screen-w:text-4xl mx-auto text-Awhite">{"การควบคุมระดับเสียง"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-[150px] screen-w:text-3xl bg-Cgrey text-white font-bold"
            >
                {'ควบคุม'}
            </button>
        </div>
    ),
    VI: (func) => (
        <div className="flex flex-row space-x-2 w-[200px] screen-w:w-[500px] justify-center text-center items-center">
            <span className="text-xl w-[350px] screen-w:text-4xl mx-auto text-Awhite">{"Kiểm soát âm lượng"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-[150px] screen-w:text-3xl bg-Cgrey text-white font-bold"
            >
                {'điều khiển'}
            </button>
        </div>
    ),
};

const soundDocent = {
    KOR: (func, sign, sound)=> (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center text-center items-center">
            <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">{"음성안내"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-1/2 screen-w:text-3xl bg-Cgrey text-white font-bold disabled:opacity-50"
                disabled={sign}
            >
                {sound ? "정지" : "시작"}
            </button>
        </div>
    ),
    ENG: (func, sign, sound) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[400px] justify-center text-center items-center">
            <span className="text-xl w-[250px] screen-w:text-4xl mx-auto text-Awhite">{"Sound Guide"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-[150px] screen-w:text-3xl bg-Cgrey text-white font-bold disabled:opacity-50"
                disabled={sign}
            >
                {sound ? "Stop" : "Start"}
            </button>
        </div>
    ),
    CH: (func, sign, sound) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center text-center items-center">
            <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">{"语音指导"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-1/2 screen-w:text-3xl bg-Cgrey text-white font-bold disabled:opacity-50"
                disabled={sign}
            >
                {sound ? "停止" : "开始"}
            </button>
        </div>
    ),
    TH: (func, sign, sound) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[500px] justify-center text-center items-center">
            <span className="text-xl w-[350px] screen-w:text-4xl mx-auto text-Awhite">{"คำแนะนำด้วยเสียง"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-[150px] screen-w:text-3xl bg-Cgrey text-white font-bold disabled:opacity-50"
                disabled={sign}
            >
                {sound ? "หยุด" : "เริ่ม"}
            </button>
        </div>
    ),
    VI: (func, sign, sound) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[600px] justify-center text-center items-center">
            <span className="text-xl w-[450px] screen-w:text-4xl mx-auto text-Awhite">{"hướng dẫn bằng giọng nói"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-[150px] screen-w:text-3xl bg-Cgrey text-white font-bold disabled:opacity-50"
                disabled={sign}
            >
                {sound ? "dừng lại" : "bắt đầu"}
            </button>
        </div>
    ),
};

const signDocent = {
    KOR: (func, sound, sign)=> (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center text-center items-center">
            <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">{"수어안내"}</span>
            <button 
                className="rounded-full h-2/3 w-1/2 screen-w:text-3xl bg-Cgrey text-white font-bold disabled:opacity-50"
                onClick={func}
                disabled={sound}
            >
                {sign ? "정지" : "시작"}
            </button>
        </div>
    ),
    ENG: (func, sound, sign) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[500px] justify-center text-center items-center">
            <span className="text-xl w-[350px] screen-w:text-4xl mx-auto text-Awhite">{"Sign Language Guide"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-[150px] screen-w:text-3xl bg-Cgrey text-white font-bold disabled:opacity-50"
                disabled={sound}
            >
                {sign ? "Stop" : "Start"}
            </button>
        </div>
    ),
    CH: (func, sound, sign) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[300px] justify-center text-center items-center">
            <span className="text-xl w-1/2 screen-w:text-4xl mx-auto text-Awhite">{"手语指南"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-1/2 screen-w:text-3xl bg-Cgrey text-white font-bold disabled:opacity-50"
                disabled={sound}
            >
                {sign ? "停止" : "开始"}
            </button>
        </div>
    ),
    TH: (func, sound, sign) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[400px] justify-center text-center items-center">
            <span className="text-xl w-[250px] screen-w:text-4xl mx-auto text-Awhite">{"คู่มือภาษามือ"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-[150px] screen-w:text-3xl bg-Cgrey text-white font-bold disabled:opacity-50"
                disabled={sound}
            >
                {sign ? "หยุด" : "เริ่ม"}
            </button>
        </div>
    ),
    VI: (func, sound, sign) => (
        <div className="h-full flex flex-row space-x-2 w-[200px] screen-w:w-[700px] justify-center text-center items-center">
            <span className="text-xl w-[550px] screen-w:text-4xl mx-auto text-Awhite">{"Hướng dẫn ngôn ngữ ký hiệu"}</span>
            <button
                onClick={func} 
                className="rounded-full h-2/3 w-[150px] screen-w:text-3xl bg-Cgrey text-white font-bold disabled:opacity-50"
                disabled={sound}
            >
                {sign ? "dừng lại" : "bắt đầu"}
            </button>
        </div>
    ),
}

const Navbar = ({url, sign}) => {
    const [volume, setVolume] = useState(Number(0.5));
    const [volumepop, setVolumepop] = useState(false);
    const [soundguide, setSoundguide] = useState(false);
    const [signLang, setsignLang] = useState(false);
    const [modal, setModal] = useState(false);
    const [playing, setPlaying] = useState(true);
    const {language, setLanguage} = useContext(LanguageContext);
    const {fontsize, setFontsize} = useContext(FontsizeContext);
    const {isPortrait} = useContext(ScreenOrientContext);

    const changeLanguage = (lang) => {
        setLanguage(lang)
    };

    return(
        <>
            {soundguide && (
                <div className={clsx(isPortrait ? "absolute top-0 left-0 h-[94%] screen-w:h-[97.5%] w-screen bg-Ablack bg-opacity-60 z-20" : "absolute top-0 left-0 h-[91%] screen-w:h-[95%] w-screen bg-Ablack bg-opacity-60 z-20")}
                >
                    <div className={clsx(isPortrait ? "absolute transform -translate-x-1/2 left-1/2 bottom-4 h-1/2 w-2/3 z-40" : "absolute transform -translate-x-1/2 left-1/2 bottom-0 h-3/4 w-3/4 z-40")}
                        onClick={()=>setPlaying(!playing)}
                    >
                        <Soundguide 
                            videoUrl={url}
                            volume={Number(volume)}
                            playing={playing ? true : false}
                            end={()=>setSoundguide(!soundguide)}
                        />
                    </div>
                </div>
            )}
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
                <div className="absolute h-8 w-[250px] screen-w:h-16 screen-w:w-[450px] bottom-24 right-96 screen-w:transform screen-w:-translate-x-1/2 screen-w:right-64 screen-w:bottom-36 rounded-full bg-Ablack bg-opacity-60 items-center z-30">
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
                <div className={clsx(isPortrait ? "flex flex-col h-[60%] w-3/4 items-center mx-auto bg-Awhite rounded-lg z-20 mt-[700px] space-y-4 screen-w:space-y-6" 
                : "flex flex-col h-3/4 w-3/4 items-center mx-auto bg-Awhite rounded-lg z-20 mt-60 space-y-4 screen-w:space-y-6")}>
                    <span className="text-xl screen-w:text-6xl text-black font-bold mt-4 screen-w:mt-6">여러분의 언어를 선택해주세요!</span>
                    <span className="text-lg screen-w:text-5xl text-Cgrey font-bold">Please select your language</span>
                    <div className={clsx(isPortrait ? "flex flex-col space-y-6 w-full h-[700px] screen-w:space-y-24 screen-w:h-full bg-Bblue bg-opacity-30 rounded-b-lg py-6 screen-w:pt-[500px] items-end z-30" 
                    : "flex flex-col space-y-6 w-full h-[700px] screen-w:space-y-24 screen-w:h-full bg-Bblue bg-opacity-30 rounded-b-lg py-6 screen-w:pt-56 items-center z-30")}>
                        <div className="flex flex-row mx-auto space-x-6 screen-w:space-x-24 z-40">
                            {/* 한국어 */}
                            <button
                                className="h-[150px] w-[250px] screen-w:h-[300px] screen-w:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Bblue text-Ablack focus:text-Awhite"
                            >
                                <div
                                    id="ko" 
                                    className="flex h-full w-full items-center"
                                    onClick={()=>changeLanguage("KOR")}
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
                                    onClick={()=>changeLanguage("ENG")}   
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
                                    onClick={()=>changeLanguage("CH")}
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
                                    onClick={()=>changeLanguage("TH")}
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
                                    onClick={()=>changeLanguage("VI")}
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
                                    ()=> setModal(!modal)
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
                    {languageText[language](()=>setModal(!modal))}
                    {textSize[language](()=>setFontsize(!fontsize), fontsize)}
                    {volumeControl[language](()=>setVolumepop(!volumepop))}
                    {soundDocent[language](()=>setSoundguide(!soundguide), signLang, soundguide)}
                    {signDocent[language](()=>setsignLang(!signLang), soundguide, signLang)}
                </div>
            </nav> 
        </>
    )
};

export default Navbar;