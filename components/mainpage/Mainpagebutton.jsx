import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Mainpagebutton() {
    const [modal, setModal] = useState();
    const [id, setId] = useState(null);
    const [size, setSize] = useState(false);

    const {t, i18n} = useTranslation(['common', 'navbar']);
    const router = useRouter();
    function handleLanguage(e, language) {
        // i18n.changeLanguage(lng);
        setId(e.target.id);
        window.localStorage.setItem('language', language);
        // router.replace('/main', undefined, {locale: lng});
    };
    function changeLanguage(lng) {
        i18n.changeLanguage(lng);
        router.replace('/main', undefined, {locale:lng});
        setModal(!modal);
    }
    return(
        <>
             {/* 중단 버튼 구역*/}
             <div className="w-4/5 h-2/3 pt-10 px-14 flex flex-row space-x-5 mx-auto">
                {/* <div className="absolute transform -rotate-90 h-1 left-44 top-44 screen-w:left-80 screen-w:top-80">
                    <span className="text-Apurple font-bold screen-w:text-4xl">Schema</span>
                </div> */}
                <div className="w-1/3 flex flex-col space-y-5 items-center text-Agrey shadow-md rounded-sm">
                    <div className="flex w-full h-1/2 items-center bg-[url('/img/mainpage/미술관소개_보정이미지.png')] bg-cover bg-no-repeat rounded-lg shadow-md bg-opacity-80">
                        <button className="text-center h-full w-full bg-[url('/img/mainpage/미술관소개_도형.png')] bg-no-repeat bg-cover mx-auto"
                            onClick={()=>router.push("/intro")}
                        >
                            {/* <Link href="/intro"> */}
                                <div className="flex flex-col space-y-2">
                                    <span className={`font-bold text-Awhite ${size ? "text-6xl" : "text-lg screen-w:text-4xl"}`}>{t("MAIN_INTRO")}</span>
                                    <span className={`font-bold text-Awhite ${size ? "text-4xl" : "text-sm screen-w:text-screen-w"}`}>{t("MAIN_INTRO_1")}</span>
                                    <span className={`font-bold text-Awhite ${size ? "text-4xl" : "text-sm screen-w:text-screen-w"}`}>{t("MAIN_INTRO_2")}</span>
                                </div>
                            {/* </Link> */}
                        </button>
                    </div>
                    <div className="flex w-full h-1/2 items-center bg-[url('/img/mainpage/챗봇안내_보정이미지.png')] bg-cover bg-no-repeat shadow-md rounded-lg">
                        <button className="text-center text-white h-full w-full mx-auto bg-[url('/img/mainpage/챗봇안내_도형.png')] bg-cover bg-no-repeat"
                            onClick={()=>router.push("https://metalab-voice-gpt-v3.vercel.app/")}
                        >
                            <div className="flex flex-col space-y-2">
                                <span className="text-lg screen-w:text-4xl font-bold">{t("MAIN_CHATBOT")}</span>
                                <span className="text-sm screen-w:text-screen-w font-bold">{t("MAIN_CHATBOT_1")}</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex w-full h-full bg-[url('/img/mainpage/전시안내_보정이미지.png')] items-center shadow-md rounded-lg bg-cover bg-no-repeat">
                    <button className="w-full h-full flex bg-[url('/img/mainpage/전시안내_도형.png')] bg-cover bg-no-repeat mx-auto text-center items-center justify-center"
                        onClick={()=>router.push("/exhibit")}
                    >
                        <div className="flex flex-col space-y-2 h-[90%] text-center items-center justify-center mx-auto">
                            <span className="text-xl screen-w:text-4xl font-bold text-Awhite">{t("MAIN_EXHIBIT_GUIDE")}</span>
                            <span className="text-base screen-w:text-screen-w font-bold text-Awhite">{t("MAIN_EXHIBIT_GUIDE_1")}</span>
                        </div>
                    </button>
                </div>
                <div className="w-1/3 flex flex-col space-y-5 text-Awhite">
                    <div className="flex w-full h-1/2 items-center bg-[url('/img/mainpage/교육프로그램_보정이미지.png')] bg-no-repeat bg-cover shadow-md rounded-lg">
                        <button className="text-center h-full w-full mx-auto bg-[url('/img/mainpage/교육프로그램_도형.png')] bg-no-repeat bg-cover">
                            <div className="flex flex-col space-y-2">
                                    <span className="text-lg screen-w:text-4xl font-bold">{t("MAIN_EDUCATION")}</span>
                                    <span className="text-sm screen-w:text-screen-w font-bold">{t("MAIN_EDUCATION_1")}</span>
                            </div>
                        </button>
                    </div>
                    <div className="flex w-full h-1/2 items-center bg-[url('/img/mainpage/시설안내_보정이미지.png')] bg-no-repeat bg-cover shadow-md rounded-lg">
                        <button className="text-center h-full w-full mx-auto bg-[url('/img/mainpage/시설안내_도형.png')] bg-no-repeat bg-cover">
                            <Link href="/digitaltwin">
                                <div className="flex flex-col space-y-2">
                                    <span className="text-lg screen-w:text-4xl font-bold">{t("MAIN_FACILITY_GUIDE")}</span>
                                    <span className="text-sm screen-w:text-screen-w font-bold">{t("MAIN_FACILITY_GUIDE_1")}</span>
                                </div>
                            </Link>
                        </button>
                    </div>
                </div>
                {/* <div className="absolute transform rotate-90 right-32 bottom-48 screen-w:right-56 screen-w:bottom-80">
                    <span className="text-Apurple font-bold screen-w:text-4xl">Art Museum</span>
                </div> */}
            </div>
            {/* 언어변경 버튼 */}
            <button 
                    className="absolute left-12 bottom-40 screen-w:left-24 screen-w:bottom-52 text-Bgrey space-y-4"
                    onClick={()=>setModal(!modal)}    
                >
                    <div className="flex flex-col">
                        <div className="border-4 border-Cpurple rounded-full w-20 h-20 screen-w:w-28 screen-w:h-28 items-center bg-Awhite mx-auto">
                            <Image 
                                className="mx-auto pt-2.5 z-1 screen-w:pt-6"
                                src="/img/mainpage/언어변경_아이콘_1.png"
                                height="50"
                                width="50"
                                alt="language"
                            />
                        </div>
                        <span className="text-xl font-bold pt-2 screen-w:text-3xl">{t("LANGUAGE_CHANGE")}</span>
                    </div>
                </button>
                {modal && (
                    <div className="absolute top-0 h-screen w-screen bg-opacity-60 bg-Ablack z-10">
                        <div className="flex flex-col h-3/4 w-3/4 items-center mx-auto bg-Awhite rounded-lg z-20 mt-20 space-y-4 screen-w:space-y-6">
                            <span className="text-xl screen-w:text-3xl text-black font-bold mt-4 screen-w:mt-6">여러분의 언어를 선택해주세요!</span>
                            <span className="text-lg screen-w:text-screen-w text-Cgrey font-bold">Please select your language</span>
                            <div className="flex flex-col space-y-6 w-full h-[700px] screen-w:space-y-18 screen-w:h-full bg-Cpurple bg-opacity-30 rounded-b-lg py-6 screen-w:pt-32 z-30">
                                <div className="flex flex-row mx-auto space-x-6 screen-w:space-x-18 z-40">
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
                                            {/* <img 
                                                id="ko"
                                                className="pt-3 screen-w:pt-14 mx-auto h-40 w-[100px] screen-w:h-60 screen-w:w-[300px]"
                                                src="/img/flags/korea.png"
                                                alt="korea"
                                                onClick={(e)=>handleLanguage(e, "Korean")}
                                            /> */}
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
                                             {/* <img 
                                                id="en"
                                                className="pt-3 screen-w:pt-14 mx-auto h-40 w-[100px] screen-w:h-60 screen-w:w-[300px]"
                                                src="/img/flags/usa.png"
                                                alt="usa"
                                                onClick={(e)=>handleLanguage(e, "English")}
                                            /> */}
                                            <div className="absolute w-full h-16 screen-w:h-24 bottom-0 pt-1 screen-w:pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                                <span className="text-xl screen-w:text-screen-w font-bold">English<br /></span>
                                                <span className="text-lg screen-w:text-xl font-bold">English</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex flex-row mx-auto space-x-6 screen-w:space-x-18 z-40"> 
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
                                             {/* <img 
                                                id="zh"
                                                className="pt-3 screen-w:pt-14 mx-auto h-40 w-[100px] screen-w:h-60 screen-w:w-[300px]"
                                                src="/img/flags/china.png"
                                                alt="china"
                                                onClick={(e)=>handleLanguage(e, "Chinese")}
                                            /> */}
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
                                             {/* <img 
                                                id="th"
                                                className="pt-3 screen-w:pt-14 mx-auto h-40 w-[100px] screen-w:h-60 screen-w:w-[400px]"
                                                src="/img/flags/thailand.png"
                                                alt="thai"
                                                onClick={(e)=>handleLanguage(e, "Thai")}
                                            /> */}
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
                                             {/* <img 
                                                id="vi"
                                                className="pt-3 screen-w:pt-14 mx-auto h-40 w-[100px] screen-w:h-60 screen-w:w-[300px]"
                                                src="/img/flags/vietnam.png"
                                                alt="vietnam"
                                                onClick={(e)=>handleLanguage(e, "Vietnamese")}
                                            /> */}
                                            <div className="absolute w-full h-16 screen-w:h-24 bottom-0 pt-1 screen-w:pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                                <span className="text-xl screen-w:text-screen-w font-bold">Tiếng Việt<br /></span>
                                                <span className="text-lg screen-w:text-xl font-bold">Vietnamese</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex flex-row mx-auto space-x-6 screen-w:space-x-8 z-40">
                                    <button className="h-12 w-[200px] screen-w:h-16 screen-w:w-[250px] z-40 bg-Awhite shadow-lg rounded-full text-black font-bold text-xl screen-w:text-xl"
                                        onClick={()=>setModal(!modal)}
                                    >
                                        취소하기
                                    </button>
                                    {/* 언어 변경 버튼 */}
                                    <button 
                                        className="h-12 w-[200px] screen-w:h-16 screen-w:w-[250px] z-40 bg-gradient-to-r from-Agradient to-Bgradient shadow-lg rounded-full text-white font-bold text-xl screen-w:text-xl"
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
        </>
    )
}