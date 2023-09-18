import Pageframe from "@/components/pagelayout/Pageframe";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Mainpage() {
    const [modal, setModal] = useState();
    const [id, setId] = useState(null);
    function toggleModal () {
        setModal(!modal);
    };
    const {t, i18n} = useTranslation(['common', 'navbar']);
    const router = useRouter();
    function handleLanguage(e, lng, language) {
        // i18n.changeLanguage(lng);
        setId(e.target.id);
        window.localStorage.setItem('language', language);
        window.localStorage.setItem('i18n', lng);
        // router.replace('/main', undefined, {locale: lng});
    };
    useEffect(()=> {
        if(localStorage.getItem("language") === null || localStorage.getItem("i18n") === null) {
            handleLanguage("ko", "Korean");
        }
    },[]);

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
        <Pageframe>
            <div className="h-screen w-screen bg-[url('/img/mainpage/mainpage_bg_fix.png')]">
                {/* 상단 로고 섹션 */}
                <section className="w-full flex flex-row justify-between p-10 font-pretendard_bold">
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
                </section>
                {/* 중단 버튼 구역*/}
                <section className="w-4/5 h-3/2 pt-10 px-14 flex flex-row space-x-5 mx-auto">
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
                </section>
                {/* 중단 텍스트 */}
                <section className="flex flex-row space-x-4 text-md font-bold pt-7">
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
                </section>
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
                                            // onClick={(e)=>handleLanguage(e, "ko", "Korean")}
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
                                                // onClick={(e)=>handleLanguage(e, "ko", "Korean")}
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
                                            // onClick={(e)=>handleLanguage(e, "en", "English")}   
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
                                                // onClick={(e)=>handleLanguage(e, "en", "English")}
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
                                            // onClick={(e)=>handleLanguage(e, "zh", "Chinese")}
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
                                                // onClick={(e)=>handleLanguage(e, "zh", "Chinese")}
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
                                            // onClick={(e)=>handleLanguage(e, "th", "Thai")}
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
                                                // onClick={(e)=>handleLanguage(e, "th", "Thai")}
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
                                            // onClick={(e)=>handleLanguage(e, "vi", "Vietnamese")}
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
                                                // onClick={(e)=>handleLanguage(e, "vi", "Vietnamese")}
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
                                        onClick={()=> {
                                            changeLanguage(id)
                                        }}
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
        </Pageframe>

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