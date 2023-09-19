import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ReactSlider from "react-slider";

export default function Mainpage() {
    const [modal, setModal] = useState();
    const [id, setId] = useState(null);
    const [volume, setVolume] = useState(Number(0.5));    
    function toggleModal () {
        setModal(!modal);
    };
    const {t, i18n} = useTranslation(['common', 'navbar']);
    const router = useRouter();
    function handleLanguage(e, language) {
        // i18n.changeLanguage(lng);
        setId(e.target.id);
        window.localStorage.setItem('language', language);
        // router.replace('/main', undefined, {locale: lng});
    };
    // useEffect(()=> {
    //     if(localStorage.getItem("language") === null || localStorage.getItem("i18n") === null) {
    //         handleLanguage("ko", "Korean");
    //     }
    // },[]);

    function changeLanguage(lng) {
        i18n.changeLanguage(lng);
        router.replace('/main', undefined, {locale:lng});
        setModal(!modal);
    }
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const dayName = ['일', '월', '화', '수', '목', '금', '토'];
    const day = dayName[today.getDay()];
    let hour = today.getHours();
    let minutes = today.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';  

    return(
        <div className="h-[897.6px] w-[1522.4px]">
            <div className="h-screen w-screen bg-[url('/img/mainpage/mainpage_bg_fix.png')]">
                {/* 상단 로고 섹션 */}
                <div className="w-full flex flex-row justify-between p-10 font-pretendard_bold">
                    <Image 
                       src="/img/mainpage/schema-logo.png"
                       width="160"
                       height="80"
                       alt="logo" 
                       style={{
                        width: "auto",
                        height: "auto"
                       }}
                    />
                    <span className="text-Cgrey font-bold text-2xl">{t("MAIN_TOP")}</span>
                    <div className="flex flex-row space-x-2 text-black">
                        <div className="flex flex-col">
                            <span className="font-bold text-lg">{year}.{month}.{date}/{day}</span>
                            <div className="flex flex-row space-x-4 mx-auto">
                                <span className="font-bold text-lg pt-1">{ampm}</span> 
                                <span className="font-bold text-2xl">{hour}:{minutes}</span>
                            </div>
                        </div>
                        <span className="rounded-lg shadow-md px-4 py-4 text-lg font-bold">23도</span>
                    </div>
                </div>
                {/* 중단 버튼 구역*/}
                <div className="w-4/5 h-3/2 pt-10 px-14 flex flex-row space-x-5 mx-auto">
                    <div className="absolute transform -rotate-90 h-1 left-44 top-52">
                        <span className="text-Apurple font-bold">Schema</span>
                    </div>
                    <div className="flex flex-col space-y-5 text-Agrey shadow-md rounded-sm">
                        <button className="w-[300px] h-[250px] text-center bg-[url('/img/mainpage/미술관소개_배경_보정.png')]">
                            <Link href="/intro">
                                <span className="text-xl font-bold">{t("MAIN_INTRO")}<br /></span>
                                <span className="text-md font-bold">{t("MAIN_INTRO_1")} <br /> {t("MAIN_INTRO_2")} <br /> {t("MAIN_INTRO_3")}</span>
                            </Link>
                        </button>
                        <button className="w-[300px] h-[250px] text-center bg-Bpurple text-white shadow-md rounded-sm">
                            <span className="text-xl font-bold">{t("MAIN_CHATBOT")}<br /></span>
                            <span className="text-md font-bold">{t("MAIN_CHATBOT_1")}</span>
                        </button>
                    </div>
                    <div className="flex w-full bg-[url('/img/mainpage/전시안내_배경_보정.png')] items-center shadow-md">
                        <button className="w-5/6 h-5/6 border-4 border-Bpurple bg-opacity-0 mx-auto">
                            <Link href="/exhibit">
                                <span className="text-2xl font-bold">{t("MAIN_EXHIBIT_GUIDE")} <br /></span>
                                <span className="text-lg font-bold">{t("MAIN_EXHIBIT_GUIDE_1")}</span>
                            </Link>
                        </button>
                    </div>
                    <div className="flex flex-col space-y-5 text-Awhite shadow-md rounded-sm">
                        <button className="w-[300px] h-[250px] text-center bg-[url('/img/mainpage/교육프로그램_배경_보정.png')]">
                            <span className="text-xl font-bold">{t("MAIN_EDUCATION")}<br /></span>
                            <span className="text-md font-bold">{t("MAIN_EDUCATION_1")}</span>
                        </button>
                        <button className="w-[300px] h-[250px] text-center bg-[url('/img/mainpage/시설안내_배경_보정.png')] text-white shadow-md rounded-sm">
                            <Link href="/facility">
                                <span className="text-xl font-bold">{t("MAIN_FACILITY_GUIDE")}<br /></span>
                                <span className="text-md font-bold">{t("MAIN_FACILITY_GUIDE_1")}</span>
                            </Link>
                        </button>
                    </div>
                    <div className="absolute transform rotate-90 right-36 bottom-60">
                        <span className="text-Apurple font-bold">Art Museum</span>
                    </div>
                </div>
                {/* 중단 텍스트 */}
                <div className="flex flex-row space-x-4 text-md font-bold pt-7">
                    <div className="mx-auto flex flex-row items-center">
                        <span className="text-Bpurple">{t("TIME_GUIDE")}</span>
                        <div className="mx-2 h-[12px] w-[0.5px] border border-Cgrey">
                        </div>
                        <span className="text-Bgrey">{t("TIME_GUIDE_1")}</span>
                        <div className="mx-2 h-[12px] w-[0.5px] border border-Cgrey">
                        </div>
                        <span className="text-Bgrey">{t("TIME_GUIDE_2")}</span>
                        <div className="mx-2 h-[12px] w-[0.5px] border border-Cgrey">
                        </div>
                        <span className="text-Bgrey">{t("TIME_GUIDE_3")}</span>
                        </div>
                </div>
                {/* 언어변경 버튼 */}
                <button 
                    className="absolute left-12 bottom-40 text-Bgrey space-y-4"
                    onClick={toggleModal}    
                >
                    <div className="flex flex-col">
                        <div className="border-4 border-Cpurple rounded-full w-20 h-20 items-center bg-Awhite">
                            <Image 
                                className="mx-auto pt-2.5 z-1"
                                src="/img/mainpage/언어변경_아이콘.png"
                                height="50"
                                width="50"
                                alt="language"
                            />
                        </div>
                        <span className="text-xl font-bold pt-2">{t("LANGUAGE_CHANGE")}</span>
                    </div>
                </button>
                {modal && (
                    <div className="absolute top-0 h-screen w-screen bg-opacity-60 bg-black z-10">
                        <div className="flex flex-col h-5/6 w-5/6 items-center mx-auto bg-Awhite rounded-lg z-20 mt-20 space-y-4">
                            <span className="text-2xl text-black font-bold mt-4">여러분의 언어를 선택해주세요!<br /></span>
                            <span className="text-xl text-Cgrey font-bold">Please select your language</span>
                            <div className="flex flex-col space-y-8 w-full h-[700px] bg-indigo-100 rounded-lg py-10 z-30">
                                <div className="flex flex-row mx-auto space-x-6 z-40">
                                    {/* 한국어 */}
                                    <button
                                        className="h-[200px] w-[300px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                                    >
                                        <div
                                            id="ko" 
                                            className="relative h-full w-full"
                                            onClick={(e)=>handleLanguage(e, "Korean")}
                                        >
                                            <Image 
                                                id="ko"
                                                className="pt-7 mx-auto"
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
                                            <div className="absolute w-full h-20 bottom-0 pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                                <span className="text-2xl font-bold z-40">한국어<br /></span>
                                                <span className="text-xl font-bold z-40">Korean</span>
                                            </div>
                                       </div>
                                    </button>
                                    {/* 영어 */}
                                    <button
                                        className="h-[200px] w-[300px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                                    >
                                        <div 
                                            id="en" 
                                            className="relative h-full w-full"
                                            // onClick={(e)=>handleClick(e)} 
                                            onClick={(e)=>handleLanguage(e, "English")}   
                                        >
                                            <Image 
                                                id="en"
                                                className="pt-7 mx-auto"
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
                                            <div className="absolute w-full h-20 bottom-0 pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                                <span className="text-2xl font-bold">English<br /></span>
                                                <span className="text-xl font-bold">English</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex flex-row mx-auto space-x-6 z-40"> 
                                {/* 중국어 */}
                                <button
                                    className="h-[200px] w-[300px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                                >
                                        <div 
                                            id="zh" 
                                            className="relative h-full w-full"
                                            // onClick={(e)=>handleClick(e)}
                                            onClick={(e)=>handleLanguage(e, "Chinese")}
                                        >
                                            <Image 
                                                id="zh"
                                                className="pt-7 mx-auto"
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
                                            <div className="absolute w-full h-20 bottom-0 pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                                <span className="text-2xl font-bold z-40">中國語<br /></span>
                                                <span className="text-xl font-bold z-40">Chinese</span>
                                            </div>
                                       </div>
                                    </button>
                                    {/* 태국어 */}
                                    <button 
                                        className="h-[200px] w-[300px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                                    >
                                        <div 
                                            id="th"
                                            className="relative h-full w-full"
                                            // onClick={(e)=>handleClick(e)}
                                            onClick={(e)=>handleLanguage(e, "Thai")}
                                        >
                                            <Image 
                                                id="th"
                                                className="pt-7 mx-auto"
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
                                            <div className="absolute w-full h-20 bottom-0 pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                                <span className="text-2xl font-bold">แบบไทย<br /></span>
                                                <span className="text-xl font-bold">Thai</span>
                                            </div>
                                        </div>
                                    </button>
                                    {/* 베트남어 */}
                                    <button
                                        className="h-[200px] w-[300px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Cpurple"
                                    >
                                        <div
                                            id="vi" 
                                            className="relative h-full w-full"
                                            // onClick={(e)=>handleClick(e)}
                                            onClick={(e)=>handleLanguage(e, "Vietnamese")}
                                        >
                                            <Image 
                                                id="vi"
                                                className="pt-7 mx-auto"
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
                                            <div className="absolute w-full h-20 bottom-0 pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                                <span className="text-2xl font-bold">Tiếng Việt<br /></span>
                                                <span className="text-xl font-bold">Vietnamese</span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex flex-row mx-auto space-x-6 z-40">
                                    <button className="h-16 w-[250px] z-40 bg-Awhite shadow-lg rounded-full text-black font-bold text-2xl"
                                        onClick={toggleModal}
                                    >
                                        취소하기
                                    </button>
                                    {/* 언어 변경 버튼 */}
                                    <button 
                                        className="h-16 w-[250px] z-40 bg-gradient-to-r from-Agradient to-Bgradient shadow-lg rounded-full text-white font-bold text-2xl"
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
            </div>
            {/* navbar */}
            <nav className="absolute bottom-0 w-full h-20 bg-black px-10">
             <div className="flex flex-row w-full space-x-4 justify-center my-2 mt-5">
                <div className="flex flex-row space-x-2 h-9 w-1/3 mx-auto">
                    <Image 
                        src={`/img/flags/${i18n.language}_circle.png`}
                        height="50"
                        width="50"
                        alt="korea"
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                    />
                    <span className="text-2xl">{t("CURRENT_LANGUAGE")}</span>
                </div>
                <div className="flex flex-row space-x-1 h-9 w-3/4 rounded-full bg-Awhite justify-between">
                    <div className="h-full w-1/2 rounded-full flex space-x-1 bg-gradient-to-r from-Agradient to-Bgradient">
                        <div className="flex flex-row mx-auto space-x-2">
                            <span className="text-md py-1">{t("HIGH")}</span>
                            <Image 
                                className="mx-auto py-1"
                                src="/img/navbar/고대비_아이콘.png"
                                height="20"
                                width="20"
                                alt="고대비"
                                style={{
                                    width: "auto",
                                    height: "auto"
                                }}
                            /> 
                        </div>                     
                    </div>
                    <div className="flex h-full w-1/2 rounded-full space-x-1">
                        <div className="flex flex-row mx-auto space-x-2">
                            <span className="text-Cgrey text-md py-1">{t("LOW")}</span>
                            <Image 
                                className="mx-auto py-1"
                                src="/img/navbar/저대비_아이콘.png"
                                height="20"
                                width="20"
                                alt="저대비"
                                style={{
                                    width: "auto",
                                    height: "auto"
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row h-9 w-[250px] justify-center text-center">
                    <span className="text-xl w-[150px] mx-auto">{t("FONT_SIZE")}</span>
                    <button className="rounded-full w-[100px] bg-Cgrey text-white font-bold">
                        {t("BIG")}
                    </button>
                </div>
                <div className="flex flex-row h-9 w-full justify-center">
                    <span className="text-xl w-1/3">{t("VOLUME")}</span>
                    <div className="w-2/3 bg-Cgrey rounded-full p-2">
                        <ReactSlider 
                            step={0.01}
                            min={0}
                            max={1}
                            className="w-full h-3 bg-Awhite rounded-full cursor-grab mt-1"
                            thumbClassName="absolute w-5 h-5 cursor-grab bg-Cpurple rounded-full border-2 border-Awhite -top-1"
                            value={volume}
                            onChange={(value)=> setVolume(value)}
                        />
                    </div>
                </div>
                <div className="flex flex-row w-[250px] justify-center text-center">
                    <span className="text-xl w-[170px] mx-auto">{t("SOUND_GUIDE")}</span>
                    <button className="rounded-full w-[80px] bg-Cgrey text-white font-bold">
                        {t("START")}
                    </button>
                </div>
                <div className="flex flex-row w-[250px] justify-center text-center">
                    <span className="text-xl w-[170px] mx-auto">{t("SIGN_LANGUAGE")}</span>
                    <button className="rounded-full w-[80px] bg-Cgrey text-white font-bold">
                        {t("START")}
                    </button>
                </div>
             </div>
            </nav>
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