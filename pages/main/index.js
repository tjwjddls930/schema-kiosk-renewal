import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ReactSlider from "react-slider";
import TopNavbar from "@/components/mainpage/Topnavbar";
import Navbar from "@/components/navbar/Navbar";

export default function Mainpage() {
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
        // <div className="h-[897.6px] w-[1522.4px]">
        <div className="h-screen w-screen relative font-sans flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-[url('/img/mainpage/키오스크_가로형_메인배경.png')]"
                style={{
                    // opacity:0.5,
                    zIndex: -1
                }}
            >
            </div>
                {/* 상단 로고 섹션 */}
                <TopNavbar />
                {/* 중단 버튼 구역*/}
                <div className="w-4/5 h-2/3 pt-10 px-14 flex flex-row space-x-5 mx-auto">
                    <div className="absolute transform -rotate-90 h-1 left-44 top-44 2xl:left-80 2xl:top-80">
                        <span className="text-Apurple font-bold 2xl:text-4xl">Schema</span>
                    </div>
                    <div className="w-1/3 flex flex-col space-y-5 text-Agrey shadow-md rounded-sm">
                        <div className="flex w-full h-1/2 items-center bg-[url('/img/mainpage/미술관소개_보정이미지.png')] bg-no-repeat bg-cover rounded-lg bg-opacity-80">
                            <button className="text-center h-full w-full bg-[url('/img/mainpage/미술관소개_도형.png')] bg-no-repeat bg-cover mx-auto">
                                <Link href="/intro">
                                    <div className="flex flex-col space-y-2">
                                        <span className={`font-bold text-Awhite ${size ? "text-6xl" : "text-lg 2xl:text-4xl"}`}>{t("MAIN_INTRO")}</span>
                                        <span className={`font-bold text-Awhite ${size ? "text-4xl" : "text-sm 2xl:text-2xl"}`}>{t("MAIN_INTRO_1")}</span>
                                        <span className={`font-bold text-Awhite ${size ? "text-4xl" : "text-sm 2xl:text-2xl"}`}>{t("MAIN_INTRO_2")}</span>
                                    </div>
                                </Link>
                            </button>
                        </div>
                        <div className="flex w-full h-1/2 items-center shadow-md rounded-lg bg-[url('/img/mainpage/챗봇안내_보정이미지.png')] bg-cover bg-no-repeat">
                            <button className="text-center text-white h-full w-full mx-auto bg-[url('/img/mainpage/챗봇안내_도형.png')] bg-cover bg-no-repeat">
                                    <div className="flex flex-col space-y-2">
                                        <span className="text-lg 2xl:text-4xl font-bold">{t("MAIN_CHATBOT")}</span>
                                        <span className="text-sm 2xl:text-2xl font-bold">{t("MAIN_CHATBOT_1")}</span>
                                    </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex w-full h-full bg-[url('/img/mainpage/전시안내_보정이미지.png')] items-center shadow-md rounded-lg bg-cover bg-no-repeat">
                        <button className="w-full h-full bg-[url('/img/mainpage/전시안내_도형.png')] bg-cover bg-no-repeat mx-auto">
                            <Link href="/exhibit">
                                <div className="flex flex-col space-y-2">
                                    <span className="text-xl 2xl:text-4xl font-bold text-Awhite">{t("MAIN_EXHIBIT_GUIDE")}</span>
                                    <span className="text-base 2xl:text-2xl font-bold text-Awhite">{t("MAIN_EXHIBIT_GUIDE_1")}</span>
                                </div>
                            </Link>
                        </button>
                    </div>
                    <div className="w-1/3 flex flex-col space-y-5 text-Awhite">
                        <div className="flex w-full h-1/2 items-center bg-[url('/img/mainpage/교육프로그램_보정이미지.png')] bg-no-repeat bg-cover shadow-md rounded-lg">
                            <button className="text-center h-full w-full mx-auto bg-[url('/img/mainpage/교육프로그램_도형.png')] bg-no-repeat bg-cover">
                                <div className="flex flex-col space-y-2">
                                        <span className="text-lg 2xl:text-4xl font-bold">{t("MAIN_EDUCATION")}</span>
                                        <span className="text-sm 2xl:text-2xl font-bold">{t("MAIN_EDUCATION_1")}</span>
                                </div>
                            </button>
                        </div>
                        <div className="flex w-full h-1/2 items-center bg-[url('/img/mainpage/시설안내_보정이미지.png')] bg-no-repeat bg-cover shadow-md rounded-lg">
                            <button className="text-center h-full w-full mx-auto bg-[url('/img/mainpage/시설안내_도형.png')] bg-no-repeat bg-cover">
                                <Link href="/digitaltwin">
                                    <div className="flex flex-col space-y-2">
                                        <span className="text-lg 2xl:text-4xl font-bold">{t("MAIN_FACILITY_GUIDE")}</span>
                                        <span className="text-sm 2xl:text-2xl font-bold">{t("MAIN_FACILITY_GUIDE_1")}</span>
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="absolute transform rotate-90 right-32 bottom-48 2xl:right-56 2xl:bottom-80">
                        <span className="text-Apurple font-bold 2xl:text-4xl">Art Museum</span>
                    </div>
                </div>
                {/* 중단 텍스트 */}
                <div className="flex flex-row space-x-4 text-md font-bold pt-7 2xl:pt-9">
                    <div className="mx-auto flex flex-row items-center">
                        <span className="text-Bpurple 2xl:text-2xl">{t("TIME_GUIDE")}</span>
                        <div className="mx-2 h-[12px] 2xl:h-[18px] w-[0.5px] border border-Cgrey">
                        </div>
                        <span className="text-Bgrey 2xl:text-2xl">{t("TIME_GUIDE_1")}</span>
                        <div className="mx-2 h-[12px] 2xl:h-[18px] w-[0.5px] border border-Cgrey">
                        </div>
                        <span className="text-Bgrey 2xl:text-2xl">{t("TIME_GUIDE_2")}</span>
                        <div className="mx-2 h-[12px] 2xl:h-[18px] w-[0.5px] border border-Cgrey">
                        </div>
                        <span className="text-Bgrey 2xl:text-2xl">{t("TIME_GUIDE_3")}</span>
                        </div>
                </div>
                {/* 언어변경 버튼 */}
                <button 
                    className="absolute left-12 bottom-40 2xl:left-24 2xl:bottom-52 text-Bgrey space-y-4"
                    onClick={()=>setModal(!modal)}    
                >
                    <div className="flex flex-col">
                        <div className="border-4 border-Cpurple rounded-full w-20 h-20 2xl:w-28 2xl:h-28 items-center bg-Awhite">
                            <Image 
                                className="mx-auto pt-2.5 z-1 2xl:pt-6"
                                src="/img/mainpage/언어변경_아이콘_1.png"
                                height="50"
                                width="50"
                                alt="language"
                            />
                        </div>
                        <span className="text-xl font-bold pt-2 2xl:text-3xl">{t("LANGUAGE_CHANGE")}</span>
                    </div>
                </button>
                {modal && (
                    <div className="absolute top-0 h-screen w-screen bg-opacity-60 bg-Ablack z-10">
                        <div className="flex flex-col h-3/4 w-3/4 items-center mx-auto bg-Awhite rounded-lg z-20 mt-20 space-y-4 2xl:space-y-6">
                            <span className="text-xl 2xl:text-3xl text-black font-bold mt-4 2xl:mt-6">여러분의 언어를 선택해주세요!</span>
                            <span className="text-lg 2xl:text-2xl text-Cgrey font-bold">Please select your language</span>
                            <div className="flex flex-col space-y-6 w-full h-[700px] 2xl:space-y-12 2xl:h-full bg-Cpurple bg-opacity-30 rounded-b-lg py-6 2xl:pt-20 z-30">
                                <div className="flex flex-row mx-auto space-x-6 2xl:space-x-12 z-40">
                                    {/* 한국어 */}
                                    <button
                                        className="h-[150px] w-[250px] 2xl:h-[300px] 2xl:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                                    >
                                        <div
                                            id="ko" 
                                            className="relative h-full w-full"
                                            onClick={(e)=>handleLanguage(e, "Korean")}
                                        >
                                            <Image 
                                                id="ko"
                                                className="pt-3 2xl:pt-14 mx-auto"
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
                                            <div className="absolute w-full h-16 2xl:h-24 bottom-0 pt-1 2xl:pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                                <span className="text-xl 2xl:text-2xl font-bold z-40">한국어<br /></span>
                                                <span className="text-lg 2xl:text-xl font-bold z-40">Korean</span>
                                            </div>
                                       </div>
                                    </button>
                                    {/* 영어 */}
                                    <button
                                        className="h-[150px] w-[250px] 2xl:h-[300px] 2xl:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                                    >
                                        <div 
                                            id="en" 
                                            className="relative h-full w-full"
                                            // onClick={(e)=>handleClick(e)} 
                                            onClick={(e)=>handleLanguage(e, "English")}   
                                        >
                                            <Image 
                                                id="en"
                                                className="pt-3 2xl:pt-14 mx-auto"
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
                                            <div className="absolute w-full h-16 2xl:h-24 bottom-0 pt-1 2xl:pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                                <span className="text-xl 2xl:text-2xl font-bold">English<br /></span>
                                                <span className="text-lg 2xl:text-xl font-bold">English</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex flex-row mx-auto space-x-6 2xl:space-x-12 z-40"> 
                                {/* 중국어 */}
                                <button
                                    className="h-[150px] w-[250px] 2xl:h-[300px] 2xl:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                                >
                                        <div 
                                            id="zh" 
                                            className="relative h-full w-full"
                                            // onClick={(e)=>handleClick(e)}
                                            onClick={(e)=>handleLanguage(e, "Chinese")}
                                        >
                                            <Image 
                                                id="zh"
                                                className="pt-3 2xl:pt-14 mx-auto"
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
                                            <div className="absolute w-full h-16 2xl:h-24 bottom-0 pt-1 2xl:pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                                <span className="text-xl 2xl:text-2xl font-bold z-40">中國語<br /></span>
                                                <span className="text-lg 2xl:text-xl font-bold z-40">Chinese</span>
                                            </div>
                                       </div>
                                    </button>
                                    {/* 태국어 */}
                                    <button 
                                        className="h-[150px] w-[250px] 2xl:h-[300px] 2xl:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                                    >
                                        <div 
                                            id="th"
                                            className="relative h-full w-full"
                                            // onClick={(e)=>handleClick(e)}
                                            onClick={(e)=>handleLanguage(e, "Thai")}
                                        >
                                            <Image 
                                                id="th"
                                                className="pt-3 2xl:pt-14 mx-auto"
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
                                            <div className="absolute w-full h-16 2xl:h-24 bottom-0 pt-1 2xl:pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                                <span className="text-xl 2xl:text-2xl font-bold">แบบไทย<br /></span>
                                                <span className="text-lg 2xl:text-xl font-bold">Thai</span>
                                            </div>
                                        </div>
                                    </button>
                                    {/* 베트남어 */}
                                    <button
                                        className="h-[150px] w-[250px] 2xl:h-[300px] 2xl:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                                    >
                                        <div
                                            id="vi" 
                                            className="relative h-full w-full"
                                            // onClick={(e)=>handleClick(e)}
                                            onClick={(e)=>handleLanguage(e, "Vietnamese")}
                                        >
                                            <Image 
                                                id="vi"
                                                className="pt-3 2xl:pt-14 mx-auto"
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
                                            <div className="absolute w-full h-16 2xl:h-24 bottom-0 pt-1 2xl:pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                                <span className="text-xl 2xl:text-2xl font-bold">Tiếng Việt<br /></span>
                                                <span className="text-lg 2xl:text-xl font-bold">Vietnamese</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex flex-row mx-auto space-x-6 2xl:space-x-8 z-40">
                                    <button className="h-12 w-[200px] 2xl:h-16 2xl:w-[250px] z-40 bg-Awhite shadow-lg rounded-full text-black font-bold text-2xl lg:text-xl"
                                        onClick={()=>setModal(!modal)}
                                    >
                                        취소하기
                                    </button>
                                    {/* 언어 변경 버튼 */}
                                    <button 
                                        className="h-12 w-[200px] 2xl:h-16 2xl:w-[250px] z-40 bg-gradient-to-r from-Agradient to-Bgradient shadow-lg rounded-full text-white font-bold text-2xl lg:text-xl"
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
            {/* navbar */}
            <Navbar 
                url={"/video/docent/blue-docent-test-02-removed.webm"}
                lang={"main"}
                sign={"/video/sign/schema_sign_1.mp4"}
                // fontsize={fontsize}
            />
        </div>
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