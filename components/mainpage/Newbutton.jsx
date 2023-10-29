import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { LanguageContext } from "@/contexts/LanguageContext";
import { FontsizeContext } from "@/contexts/FontsizeContext";

const languageChange = {
    KOR: (size) => (
        <span className={`text-xl font-bold pt-2 ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"언어 변경"}</span>
    ),
    ENG: (size) => (
        <span className={`text-xl font-bold pt-2 ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"Language Change"}</span>
    ),
    CH: (size) => (
        <span className={`text-xl font-bold pt-2 ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"改变语言"}</span>
    ),
    TH: (size) => (
        <span className={`text-xl font-bold pt-2 ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"เปลี่ยนภาษา"}</span>
    ),
    VI: (size) => (
        <span className={`text-xl font-bold pt-2 ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"thay đổi ngôn ngữ"}</span>
    ),
};

const introButton = {
    KOR: (size)=> (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"미술관 소개"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"김재관 및 미술관 소개"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"쉐마국제미술상"}</span>
        </div>
    ),
    ENG: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Museum Introduction"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Museum Introduction and Structure"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Jai-Kwan Kim Career Exprience"}</span>
        </div>
    ),
    CH: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"博物馆简介"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"博物馆简介及结构"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Jai-Kwan Kim 主要职业经历"}</span>
        </div>
    ),
    TH: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"ความรู้เบื้องต้นเกี่ยวกับพิพิธภัณฑ์"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"บทนำและโครงสร้างของพิพิธภัณฑ์"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"ประสบการณ์การทำงานระดับเมเจอร์ของแจกวาน คิม"}</span>
        </div>
    ),
    VI: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Giới thiệu về bảo tàng"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Giới thiệu và cấu trúc bảo tàng"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Jai-Kwan Kim Kinh nghiệm nghề nghiệp chính"}</span>
        </div>
    ),
};

const exhibitButton = {
    KOR: (size)=> (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"전시 안내"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"디지털 전시 관람 서비스"}</span>
        </div>
    ),
    ENG: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Exhibition Guide"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Digital Exhibition Service"}</span>
        </div>
    ),
    CH: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"展会信息"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"数字化观展服务"}</span>
        </div>
    ),
    TH: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"ข้อมูลนิทรรศการ"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"บริการชมนิทรรศการดิจิทัล"}</span>
        </div>
    ),
    VI: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Thông tin triển lãm"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Dịch vụ xem triển lãm kỹ thuật số"}</span>
        </div>
    ),
};

const chatbotButton = {
    KOR: (size)=> (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"챗봇 안내"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Chat GPT 채팅 안내 서비스"}</span>
        </div>
    ),
    ENG: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Chatbot Guide"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Chat GPT Chat Guide Service"}</span>
        </div>
    ),
    CH: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"聊天机器人指南"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Chat GPT 聊天信息服务"}</span>
        </div>
    ),
    TH: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"คู่มือแชทบอท"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"บริการข้อมูลแชท GPT แชท"}</span>
        </div>
    ),
    VI: (size) => (
        <div className={`flex flex-col space-y-2 z-30 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Hướng dẫn Chatbot"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Trò chuyện Dịch vụ thông tin trò chuyện GPT"}</span>
        </div>
    ),
};

const educationButton = {
    KOR: (size)=> (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"교육 프로그램"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"교육 프로그램 정보 제공 서비스"}</span>
    </div>
    ),
    ENG: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"Education Program"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Education Program Information Provision Service"}</span>
    </div>
    ),
    CH: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"教育计划"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"教育项目信息提供服务"}</span>
    </div>
    ),
    TH: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"โปรแกรมการศึกษา"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"บริการจัดหาข้อมูลโปรแกรมการศึกษา"}</span>
    </div>
    ),
    VI: (size) => (
        <div className={`flex flex-col space-y-2 ${size ? `screen-w:space-y-8` : `screen-w:space-y-4`}`}>
            <span className={`font-bold text-lg ${size ? `screen-w:text-8xl` : `screen-w:text-6xl`}`}>{"chương trình giáo dục"}</span>
            <span className={`font-bold text-sm ${size ? `screen-w:text-6xl` : `screen-w:text-4xl`}`}>{"Dịch vụ cung cấp thông tin chương trình giáo dục"}</span>
    </div>
    ),
}

const Newbutton = () => {
    const router = useRouter();
    const [modal, setModal] = useState();
    const {language, setLanguage} = useContext(LanguageContext);
    const {fontsize} = useContext(FontsizeContext);

    const changeLanguage = (lang) => {
        setLanguage(lang)
    };

    return(
        <>
             {/* 중단 버튼 구역*/}
             <section className="w-3/4 h-2/3 pt-14 px-14 flex flex-row space-x-5 screen-w:space-x-10 mx-auto items-end">
                <div className="w-[70%] screen-w:w-full h-3/4 relative shadow-md rounded-sm mx-auto bg-[url('/img/mainpage/미술관_소개.png')] bg-cover"
                    onClick={()=>{router.push("/intro")}}
                >
                    {/* <div className="absolute inset-0 w-full h-full bg-Ablue opacity-10" /> */}
                    <button className="h-full w-full text-center text-Awhite bg-[url('/img/mainpage/미술관소개_도형.png')] bg-no-repeat bg-cover mx-auto z-10 hover:translate-y-2"
                        >
                        {introButton[language](fontsize)}
                    </button>
                </div>
                <div className="w-[70%] screen-w:w-full h-3/4 relative shadow-md rounded-sm mx-auto bg-[url('/img/mainpage/전시_안내.png')] bg-cover bg-repeat"
                    onClick={()=>router.push("/exhibit")}
                >
                    {/* <div className="absolute inset-0 w-full h-full bg-Cpurple opacity-10" /> */}
                    <button className="w-full h-full text-center text-Awhite bg-[url('/img/mainpage/전시안내_도형.png')] bg-cover bg-no-repeat mx-auto z-10">
                        {exhibitButton[language](fontsize)}
                    </button>
                </div>
                <div className="w-[70%] screen-w:w-full h-3/4 relative shadow-md rounded-sm mx-auto bg-[url('/img/mainpage/ai_챗봇.png')] bg-cover bg-repeat"
                    onClick={()=>router.push("https://metalab-voice-gpt-v3.vercel.app/")}
                > 
                    {/* <div className="absolute inset-0 w-full h-full bg-Cpurple opacity-10" /> */}
                    <button className="w-full h-full text-center text-Awhite bg-[url('/img/mainpage/챗봇안내_도형.png')] bg-cover bg-no-repeat mx-auto z-10">
                        {chatbotButton[language](fontsize)}
                    </button>
                    </div>
                <div className="w-[70%] screen-w:w-full h-3/4 relative shadow-md rounded-sm mx-auto bg-[url('/img/mainpage/교육_프로그램.png')] bg-cover bg-repeat"
                    onClick={()=>router.push("/education")}
                >
                    {/* <div className="absolute inset-0 w-full h-full bg-Cpurple opacity-10" /> */}
                    <button className="text-center text-Awhite h-full w-full mx-auto bg-[url('/img/mainpage/교육프로그램_도형.png')] bg-no-repeat bg-cover z-10">
                        {educationButton[language](fontsize)}
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
                        {/* <span className="text-xl font-bold pt-2 screen-w:text-4xl">{languageChange[language]}</span> */}
                        {languageChange[language](fontsize)}
                    </div>
                </button>
                {modal && (
                    <div className="absolute top-0 h-screen w-screen bg-opacity-60 bg-Ablack z-10">
                        <div className="flex flex-col h-3/4 w-3/4 items-center mx-auto bg-Awhite rounded-lg z-20 mt-60 space-y-4 screen-w:space-y-6">
                            <span className="text-xl screen-w:text-6xl text-black font-bold mt-4 screen-w:mt-6">여러분의 언어를 선택해주세요!</span>
                            <span className="text-lg screen-w:text-5xl text-Cgrey font-bold">Please select your language</span>
                            <div className="flex flex-col space-y-6 w-full h-[700px] screen-w:space-y-24 screen-w:h-full bg-Bblue bg-opacity-30 rounded-b-lg py-6 screen-w:pt-56 items-center z-30">
                                <div className="flex flex-row mx-auto space-x-6 screen-w:space-x-24 z-40">
                                    {/* 한국어 */}
                                    <button
                                        className="h-[150px] w-[250px] screen-w:h-[300px] screen-w:w-[400px] z-40 bg-Awhite shadow-lg rounded-lg focus:bg-Bblue text-Ablack focus:text-Awhite"
                                    >
                                        <div
                                            id="ko" 
                                            className="flex h-full w-full items-center"
                                            onClick={()=> changeLanguage("KOR")}
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
                                            onClick={()=> changeLanguage("CH")}
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
        </>
    )
}

export default Newbutton;