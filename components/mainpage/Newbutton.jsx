import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { LanguageContext } from "@/contexts/LanguageContext";
import { FontsizeContext } from "@/contexts/FontsizeContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import clsx from "clsx";

const introButton = {
    KOR: (size)=> (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"미술관 소개"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"김재관 및 미술관 소개"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"쉐마국제미술상"}</span>
        </div>
    ),
    ENG: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Museum Introduction"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Museum Introduction and Structure"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Jai-Kwan Kim Career Exprience"}</span>
        </div>
    ),
    CH: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"博物馆简介"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"博物馆简介及结构"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Jai-Kwan Kim 主要职业经历"}</span>
        </div>
    ),
    TH: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"ความรู้เบื้องต้นเกี่ยวกับพิพิธภัณฑ์"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"บทนำและโครงสร้างของพิพิธภัณฑ์"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"ประสบการณ์การทำงานระดับเมเจอร์ของแจกวาน คิม"}</span>
        </div>
    ),
    VI: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Giới thiệu về bảo tàng"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Giới thiệu và cấu trúc bảo tàng"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Jai-Kwan Kim Kinh nghiệm nghề nghiệp chính"}</span>
        </div>
    ),
};

const exhibitButton = {
    KOR: (size)=> (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"전시 안내"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"디지털 전시 관람 서비스"}</span>
        </div>
    ),
    ENG: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Exhibition Guide"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Digital Exhibition Service"}</span>
        </div>
    ),
    CH: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"展会信息"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"数字化观展服务"}</span>
        </div>
    ),
    TH: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"ข้อมูลนิทรรศการ"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"บริการชมนิทรรศการดิจิทัล"}</span>
        </div>
    ),
    VI: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Thông tin triển lãm"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Dịch vụ xem triển lãm kỹ thuật số"}</span>
        </div>
    ),
};

const chatbotButton = {
    KOR: (size)=> (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"챗봇 안내"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Chat GPT 채팅 안내 서비스"}</span>
        </div>
    ),
    ENG: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Chatbot Guide"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Chat GPT Chat Guide Service"}</span>
        </div>
    ),
    CH: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"聊天机器人指南"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Chat GPT 聊天信息服务"}</span>
        </div>
    ),
    TH: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"คู่มือแชทบอท"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"บริการข้อมูลแชท GPT แชท"}</span>
        </div>
    ),
    VI: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Hướng dẫn Chatbot"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Trò chuyện Dịch vụ thông tin trò chuyện GPT"}</span>
        </div>
    ),
};

const educationButton = {
    KOR: (size)=> (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"교육 프로그램"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"교육 프로그램 정보 제공 서비스"}</span>
    </div>
    ),
    ENG: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Education Program"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Education Program Information Provision Service"}</span>
    </div>
    ),
    CH: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"教育计划"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"教育项目信息提供服务"}</span>
    </div>
    ),
    TH: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"โปรแกรมการศึกษา"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"บริการจัดหาข้อมูลโปรแกรมการศึกษา"}</span>
    </div>
    ),
    VI: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg animate-bounce ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"chương trình giáo dục"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Dịch vụ cung cấp thông tin chương trình giáo dục"}</span>
    </div>
    ),
}

const Newbutton = () => {
    const router = useRouter();
    const {language, setLanguage} = useContext(LanguageContext);
    const {fontsize} = useContext(FontsizeContext);
    const {isPortrait} = useContext(ScreenOrientContext)

    return(
        <>
             {/* 중단 버튼 구역*/}
             <section className={clsx(isPortrait ? 
                    "w-[95%] h-2/3 py-6 px-6 lg:pt-14 lg:px-14 flex flex-col space-y-5 screen-w:space-y-10 mx-auto items-center" 
                    : "w-2/3 h-1/2 screen-w:w-3/4 screen-w:h-[55%] pt-14 px-14 flex flex-row space-x-5 screen-w:space-x-10 mx-auto items-end")}>
                {isPortrait ?
                    <>
                        <div className="h-1/2 w-full flex flex-row space-x-5 screen-w:space-x-10 mx-auto items-end">
                            <div className="w-[70%] screen-w:w-full h-full relative shadow-md rounded-sm mx-auto bg-[url('/img/mainpage/intro_bg.jpg')] bg-cover bg-no-repeat"
                                onClick={()=>{router.push("/intro")}}
                            >
                                <div className="absolute inset-0 w-full h-full bg-Ablack opacity-10" />
                                <button className="h-full w-full text-center text-Awhite bg-[url('/img/mainpage/미술관소개_도형.png')] bg-no-repeat bg-cover mx-auto z-10"
                                    >
                                    {introButton[language](fontsize)}
                                </button>
                            </div>
                            <div className="w-[70%] screen-w:w-full h-full relative shadow-md rounded-sm mx-auto bg-[url('/img/mainpage/exhibit_bg.jpg')] bg-cover bg-no-repeat"
                                onClick={()=>router.push("/exhibit")}
                            >
                                <div className="absolute inset-0 w-full h-full bg-Ablack opacity-10" />
                                <button className="w-full h-full text-center text-Awhite bg-[url('/img/mainpage/전시안내_도형.png')] bg-cover bg-no-repeat mx-auto z-10">
                                    {exhibitButton[language](fontsize)}
                                </button>
                            </div>
                        </div>
                        <div className="h-1/2 w-full flex flex-row space-x-5 screen-w:space-x-10 mx-auto items-end">
                            <div className="w-[70%] screen-w:w-full h-full relative shadow-md rounded-sm mx-auto bg-[url('/img/intro/career/chat_bot_button_2.png')] bg-cover bg-no-repeat"
                                onClick={()=>router.push("https://schema-gpt-final-v1.vercel.app/")}
                            > 
                                <div className="absolute inset-0 w-full h-full bg-Ablack opacity-10" />
                                <button className="w-full h-full text-center text-Awhite bg-[url('/img/mainpage/챗봇안내_도형.png')] bg-cover bg-no-repeat mx-auto z-10">
                                    {chatbotButton[language](fontsize)}
                                </button>
                                </div>
                            <div className="w-[70%] screen-w:w-full h-full relative shadow-md rounded-sm mx-auto bg-[url('/img/mainpage/education_bg.jpg')] bg-cover bg-repeat"
                                onClick={()=>router.push("/education")}
                            >
                                <div className="absolute inset-0 w-full h-full bg-Ablack opacity-10" />
                                <button className="text-center text-Awhite h-full w-full mx-auto bg-[url('/img/mainpage/교육프로그램_도형.png')] bg-no-repeat bg-cover z-10">
                                    {educationButton[language](fontsize)}
                                </button>
                            </div>
                        </div>
                    </>
                    :
                    <>
                    <div className="w-[70%] screen-w:w-full h-full relative shadow-md rounded-sm mx-auto bg-[url('/img/mainpage/intro_bg.jpg')] bg-cover bg-no-repeat"
                        onClick={()=>{router.push("/intro")}}
                    >
                        <div className="absolute inset-0 w-full h-full bg-Ablack opacity-10" />
                        <button className="h-full w-full text-center text-Awhite bg-[url('/img/mainpage/미술관소개_도형.png')] bg-no-repeat bg-cover mx-auto z-10"
                            >
                            {introButton[language](fontsize)}
                        </button>
                    </div>
                    <div className="w-[70%] screen-w:w-full h-full relative shadow-md rounded-sm mx-auto bg-[url('/img/mainpage/exhibit_bg.jpg')] bg-cover bg-no-repeat"
                        onClick={()=>router.push("/exhibit")}
                    >
                        <div className="absolute inset-0 w-full h-full bg-Ablack opacity-10" />
                        <button className="w-full h-full text-center text-Awhite bg-[url('/img/mainpage/전시안내_도형.png')] bg-cover bg-no-repeat mx-auto z-10">
                            {exhibitButton[language](fontsize)}
                        </button>
                    </div>
                    <div className="w-[70%] screen-w:w-full h-full relative shadow-md rounded-sm mx-auto bg-[url('/img/intro/career/chat_bot_button_2.png')] bg-cover bg-no-repeat"
                        onClick={()=>router.push("https://schema-gpt-final-v1.vercel.app/")}
                    > 
                        <div className="absolute inset-0 w-full h-full bg-Ablack opacity-10" />
                        <button className="w-full h-full text-center text-Awhite bg-[url('/img/mainpage/챗봇안내_도형.png')] bg-cover bg-no-repeat mx-auto z-10">
                            {chatbotButton[language](fontsize)}
                        </button>
                        </div>
                    <div className="w-[70%] screen-w:w-full h-full relative shadow-md rounded-sm mx-auto bg-[url('/img/mainpage/education_bg.jpg')] bg-cover bg-repeat"
                        onClick={()=>router.push("/education")}
                    >
                        <div className="absolute inset-0 w-full h-full bg-Ablack opacity-10" />
                        <button className="text-center text-Awhite h-full w-full mx-auto bg-[url('/img/mainpage/교육프로그램_도형.png')] bg-no-repeat bg-cover z-10">
                            {educationButton[language](fontsize)}
                        </button>
                    </div>
                    </>
                }
            </section>
        </>
    )
}

export default Newbutton;