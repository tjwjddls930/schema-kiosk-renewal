import Image from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useState } from "react";

export default function LanguagePopup({json, href, modal}) {
    const { i18n } = useTranslation(json);    
    const [id, setId] = useState(null);
    const router = useRouter();
    function handleLanguage(e, language) {
        setId(e.target.id);
        window.localStorage.setItem('language', language);
    };

    function changeLanguage(lng) {
        i18n.changeLanguage(lng);
        router.replace(url, undefined, {locale:lng});
        setModal(!modal);
    };

    return(
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
                            onClick={() => setModal(!modal)}
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
    )
}