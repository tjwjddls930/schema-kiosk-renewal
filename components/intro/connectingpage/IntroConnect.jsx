import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import { LanguageContext } from "@/contexts/LanguageContext";
import { useContext } from "react";
const topText = {
    KOR: () => (
        <div className="w-full flex flex-row justify-between p-10 screen-w:p-20 font-pretendard_bold">
            <span className="text-xl screen-w:text-5xl font-bold text-Agrey">
                {'미술관 소개'}
            </span>
            <span className="text-Agrey text-base screen-w:text-5xl font-bold">{'Smart Space SAM'}</span>
        </div>
    ),
    ENG: () => (
        <div className="w-full flex flex-row justify-between p-10 screen-w:p-20 font-pretendard_bold">
            <span className="text-xl screen-w:text-5xl font-bold text-Agrey">
                {'Museum Introduction'}
            </span>
            <span className="text-Agrey text-base screen-w:text-5xl font-bold">{'Smart Space SAM'}</span>
        </div>
    ),
    CH: () => (
        <div className="w-full flex flex-row justify-between p-10 screen-w:p-20 font-pretendard_bold">
            <span className="text-xl screen-w:text-5xl font-bold text-Agrey">
                {'博物馆简介'}
            </span>
            <span className="text-Agrey text-base screen-w:text-5xl font-bold">{'Smart Space SAM'}</span>
        </div>
    ),   
    TH: () => (
        <div className="w-full flex flex-row justify-between p-10 screen-w:p-20 font-pretendard_bold">
            <span className="text-xl screen-w:text-5xl font-bold text-Agrey">
                {'ความรู้เบื้องต้นเกี่ยวกับพิพิธภัณฑ์'}
            </span>
            <span className="text-Agrey text-base screen-w:text-5xl font-bold">{'Smart Space SAM'}</span>
        </div>
    ),
    VI: () => (
        <div className="w-full flex flex-row justify-between p-10 screen-w:p-20 font-pretendard_bold">
            <span className="text-xl screen-w:text-5xl font-bold text-Agrey">
                {'Giới thiệu về bảo tàng'}
            </span>
            <span className="text-Agrey text-base screen-w:text-5xl font-bold">{'Smart Space SAM'}</span>
        </div>
    ),
}

const IntroConnect = ({children}) => {
    const {language} = useContext(LanguageContext);
    return(
        <>
            <div className="h-screen w-screen bg-[url('/img/intro/connectpage/미술관소개_배경이미지.png')] bg-cover bg-no-repeat">
                {topText[language]()}
                {children}
                <button className="absolute left-14 bottom-20 screen-w:bottom-44">
                    <Link href="/main">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                            className="w-16 h-16 screen-w:w-36 screen-w:h-36 text-Ablack">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </button>
            </div>
            <Navbar />
        </>
    )
};

export default IntroConnect;