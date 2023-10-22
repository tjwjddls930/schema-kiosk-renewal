import Link from "next/link";
import { useTranslation } from "next-i18next";
import Navbar from "@/components/navbar/Navbar";

const IntroConnect = ({children}) => {
    const {t} = useTranslation('common');
    return(
        <>
            <div className="h-screen w-screen bg-[url('/img/intro/connectpage/미술관소개_배경이미지.png')] bg-cover bg-no-repeat">
                <div className="w-full flex flex-row justify-between p-8 screen-w:p-14 font-pretendard_bold">
                    <span className="text-base screen-w:text-4xl font-bold text-Agrey">
                        {'미술관 소개'}
                    </span>
                    <span className="text-Agrey text-base screen-w:text-4xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
                </div>
                {children}
                <button className="absolute left-14 bottom-20 screen-w:bottom-40">
                    <Link href="/main">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                            className="w-16 h-16 screen-w:w-36 screen-w:h-36 text-Ablack">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </button>
            </div>
            <Navbar 
            url={"/video/docent/schema-docent-03.webm"}
            lang={"/intro/structure"} 
            />
        </>
    )
};

export default IntroConnect;