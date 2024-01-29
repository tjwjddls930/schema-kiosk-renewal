import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { isMobile } from "react-device-detect";
import clsx from "clsx";

const iconText1 = {
    KOR: "초기화",
    ENG: "Reset",
    CH: "重置",
    TH: "รีเซ็ต",
    VI: "cài lại",
};

const iconText2 = {
    KOR: "작품해설",
    ENG: "Commentary on the Work",
    CH: "对作品的评论",
    TH: "ความเห็นเกี่ยวกับการทำงาน",
    VI: "Bình luận về tác phẩm",
};

const iconText3 = {
    KOR: "챗봇안내",
    ENG: "Chatbot Guide",
    CH: "聊天机器人信息",
    TH: "ข้อมูลแชทบอท",
    VI: "Thông tin Chatbot",
};

const popupText = {
    KOR: "닫기",
    ENG: "Close",
    CH: "关闭",
    TH: "ปิด",
    VI: "đóng",
};

const Viewlayout = ({children, data}) => {
    const {language} = useContext(LanguageContext)
    const router = useRouter();
    const [explain, setExplain] = useState(false);
    function handleRefresh() {
        router.reload();
    };
    return(
        <div className="h-screen w-screen bg-Awhite">
            {children}
            {/* 초기화 */}
            <div className={clsx("h-[200px] w-[100px] absolute bottom-80 screen-w:h-[750px] screen-w:w-[200px] screen-w:left-24 screen-w:bottom-[530px]", isMobile ? "left-2" : "left-10")}>
                <div className="flex flex-col mx-auto text-center space-y-2 screen-w:space-y-4">
                    <button 
                        className={clsx("screen-w:h-40 screen-w:w-40 screen-w:ml-4", isMobile ? "h-6 w-6 ml-8" : "h-12 w-12 ml-6")}
                        onClick={handleRefresh}
                    > 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="h-full w-full text-Ablack">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                    <span className="text-Ablack text-base font-bold screen-w:text-3xl">{iconText1[language]}</span>
                </div>
            </div>
            {/* 작품해설 */}
            <div className={clsx("h-[140px] w-[100px] absolute bottom-72 screen-w:h-[600px] screen-w:w-[200px] screen-w:left-24 screen-w:bottom-[430px]", isMobile ? "left-2" : "left-10")}>
                <div className="flex flex-col mx-auto text-center space-y-2 screen-w:space-y-4">
                    <button className={clsx("screen-w:h-40 screen-w:w-40 screen-w:ml-4", isMobile ? "h-6 w-6 ml-8" : "h-12 w-12 ml-6")}
                        onClick={()=> setExplain(!explain)}
                    > 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                            className="w-full h-full text-Ablack">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                    </button>
                    <span className="text-Ablack text-base font-bold screen-w:text-3xl">{iconText2[language]}</span>
            </div>
            </div>
            {explain && (
                <div className="absolute h-2/3 w-2/3 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-Ablack opacity-90 rounded-xl justify-center px-8 screen-w:px-12"
                    onClick={()=> setExplain(!explain)}
                >
                    <span className="flex h-full items-center jusitfy-center text-base screen-w:text-4xl font-bold screen-w:leading-relaxed">{data}</span>
                    <button
                        onClick={()=>setExplain(!explain)}
                        className="absolute h-10 w-[200px] screen-w:h-28 screen-w:w-[500px] text-center text-base screen-w:text-4xl text-Awhite font-bold items-center bottom-12 screen-w:bottom-28 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-Bblue to-Ablue z-10">
                    {popupText[language]}
                </button> 
                </div>
            )}
             {/* 챗봇안내 */}
             <div className={clsx("h-[140px] w-[100px] absolute bottom-48 screen-w:h-[600px] screen-w:w-[200px] screen-w:left-24 screen-w:bottom-40", isMobile ? "left-2" : "left-10")}>
                <div className="flex flex-col mx-auto text-center space-y-2 screen-w:space-y-4">
                    <button className={clsx("screen-w:h-40 screen-w:w-40 screen-w:ml-4", isMobile ? "h-6 w-6 ml-8" : "h-12 w-12 ml-6")}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-full h-full text-Ablack">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </button>
                        <span className="text-Ablack text-base font-bold screen-w:text-3xl">{iconText3[language]}</span>
                </div>
            </div>
            <button className={clsx("absolute left-16 bottom-28 screen-w:left-28 screen-w:bottom-44")}
                onClick={()=> router.back()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </button>
            <button className={clsx("absolute left-16 bottom-44 screen-w:left-28 screen-w:bottom-[340px]")}
                onClick={()=> router.push("/main")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </button>
        </div>
    )
};

export default Viewlayout;

