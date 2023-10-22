import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Newbutton = () => {
    const router = useRouter();
    const {t, i18n} = useTranslation(['common', 'navbar']);
    const [modal, setModal] = useState();
    const [id, setId] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const startAnimation = () => {
        setIsAnimating(true);
        // Simulate a delay for the animation to complete before navigating to another page
        setTimeout(() => {
          // Redirect to another page or perform other actions
          // For example, you can use Next.js router for navigation
          // Replace with your desired page URL
            router.pathname = '/intro'
        }, 1000); // Adjust the delay as needed
    }

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
             <section className="w-[65%] h-2/3 pt-14 px-14 flex flex-row space-x-5 screen-w:space-x-10 mx-auto items-end">
                <div className="w-[65%] screen-w:w-full h-3/4 relative shadow-md rounded-sm bg-[url('/img/mainpage/시설안내_배경_원본.jpg')] bg-cover bg-no-repeat bg-opacity-80 mx-auto"
                    onClick={async ()=>{
                        startAnimation
                        await router.push("/intro")}}
                >
                    <div className="absolute inset-0 w-full h-full bg-Ablue opacity-10" />
                    <button className="h-full w-full text-center text-Awhite bg-[url('/img/mainpage/미술관소개_도형.png')] bg-no-repeat bg-cover mx-auto z-10 hover:translate-y-2"
                        >
                        {isAnimating ? (
                            <div className="flex flex-row space-x-2 screen-w:space-x-4 w-full text-center justify-center">
                                <svg fill="currentColor" className="h-20 w-20 screen-w:h-32 screen-w:w-32 mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                    </path>
                                </svg>
                                <span className="font-bold text-lg screen-w:text-6xl screen-w:pt-6">{'loading'}</span>
                            </div>
                            ) 
                            : (<div className="flex flex-col space-y-2 screen-w:space-y-4">
                                <span className="font-bold text-lg screen-w:text-6xl">{t("MAIN_INTRO")}</span>
                                <span className="font-bold text-sm screen-w:text-4xl">{t("MAIN_INTRO_1")}</span>
                                <span className="font-bold text-sm screen-w:text-4xl">{t("MAIN_INTRO_2")}</span>
                            </div>)}
                        </button>
                </div>
                <div className="w-[65%] screen-w:w-full h-3/4 relative shadow-md rounded-sm bg-[url('/img/mainpage/전시안내_배경_원본.jpg')] bg-cover bg-no-repeat mx-auto"
                    onClick={()=>router.push("/exhibit")}
                >
                    <div className="absolute inset-0 w-full h-full bg-Cpurple opacity-10" />
                    <button className="w-full h-full text-center text-Awhite bg-[url('/img/mainpage/전시안내_도형.png')] bg-cover bg-no-repeat mx-auto z-10">
                        <div className="flex flex-col space-y-2 screen-w:space-y-4 z-30">
                            <span className="text-lg screen-w:text-6xl font-bold">{t("MAIN_EXHIBIT_GUIDE")}</span>
                            <span className="text-sm screen-w:text-4xl font-bold">{t("MAIN_EXHIBIT_GUIDE_1")}</span>
                        </div>
                    </button>
                </div>
                <div className="w-[65%] screen-w:w-full h-3/4 relative shadow-md rounded-sm bg-[url('/img/mainpage/교육프로그램_배경_원본.jpg')] bg-no-repeat bg-cover mx-auto"
                    onClick={()=>router.push("/education")}
                >
                    <div className="absolute inset-0 w-full h-full bg-Cpurple opacity-10" />
                    <button className="text-center text-Awhite h-full w-full mx-auto bg-[url('/img/mainpage/교육프로그램_도형.png')] bg-no-repeat bg-cover z-10">
                        <div className="flex flex-col space-y-2 screen-w:space-y-4">
                                <span className="text-lg screen-w:text-6xl font-bold">{t("MAIN_EDUCATION")}</span>
                                <span className="text-sm screen-w:text-4xl font-bold">{t("MAIN_EDUCATION_1")}</span>
                        </div>
                    </button>
                </div>
            </section>
            {/* 언어변경 버튼 */}
            <button 
                    className="absolute left-12 bottom-40 screen-w:left-24 screen-w:bottom-52 text-Bgrey space-y-4"
                    onClick={()=>setModal(!modal)}    
                >
                    <div className="flex flex-col screen-w:space-y-4">
                        <div className="border-4 border-Ablue rounded-full w-20 h-20 screen-w:w-40 screen-w:h-40 items-center bg-Awhite mx-auto">
                            <Image 
                                className="mx-auto pt-2.5 z-1 screen-w:pt-6"
                                src="/img/mainpage/언어변경_아이콘_1.png"
                                height="100"
                                width="100"
                                alt="language"
                            />
                        </div>
                        <span className="text-xl font-bold pt-2 screen-w:text-4xl">{t("LANGUAGE_CHANGE")}</span>
                    </div>
                </button>
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
                                            // onClick={(e)=>handleClick(e)} 
                                            onClick={(e)=>handleLanguage(e, "English")}   
                                        >
                                            <div className="h-1/2 w-full flex flex-col text-center space-y-4 screen-w:space-y-8">
                                                <span className="text-xl screen-w:text-6xl font-bold">English</span>
                                                <span className="text-lg screen-w:text-4xl font-bold">English</span>
                                            </div>
                                            {/* <Image 
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
                                            /> */}
                                             {/* <img 
                                                id="en"
                                                className="pt-3 screen-w:pt-14 mx-auto h-40 w-[100px] screen-w:h-60 screen-w:w-[300px]"
                                                src="/img/flags/usa.png"
                                                alt="usa"
                                                onClick={(e)=>handleLanguage(e, "English")}
                                            /> */}
                                            {/* <div className="absolute w-full h-16 screen-w:h-24 bottom-0 pt-1 screen-w:pt-3 bg-Dgrey text-black z-40 rounded-b-lg">
                                             
                                            </div> */}
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
                                            // onClick={(e)=>handleClick(e)}
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
                                            // onClick={(e)=>handleClick(e)}
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
                                            // onClick={(e)=>handleClick(e)}
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
        </>
    )
}

export default Newbutton;