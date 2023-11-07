import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

const topText = {
    KOR: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'전시 안내 > 현재 전시 > 작가 선택 > 작품 선택'} </span>
    ),
    ENG: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'Exhibition Information > Current Exhibition > Select Artist > Select Art Work'} </span>
    ),
    CH: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'展览信息 > 当前展览 > 精选艺术家 > 精选作品'} </span>
    ),
    TH: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'ข้อมูลนิทรรศการ > นิทรรศการปัจจุบัน > เลือกศิลปิน > เลือกผลงาน'} </span>
    ),
    VI: () => (
        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'Thông tin triển lãm > Triển lãm hiện tại > Chọn nghệ sĩ > Chọn tác phẩm'} </span>
    ),
}

const Paintlayout = ({children}) => {
    const {language} = useContext(LanguageContext);
    const router = useRouter();
    return(
        <div className="h-screen w-screen bg-Awhite">
            <div className="w-full py-6 px-12 screen-w:py-12 screen-w:px-20 flex flex-row justify-between">
                <div className="flex flex-row"
                    onClick={async()=>router.push("/main")}
                >
                    <Image 
                        className="mr-6"
                        src="/img/mainpage/schema-logo.png"
                        height="80"
                        width="160"
                        alt="logo"
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                        priority={true}
                    />
                    {topText[language]()}
                </div>
                <div>
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
                </div>
            </div>
            {children}
            <button className="absolute left-14 bottom-20 screen-w:bottom-40"
                onClick={async()=>router.back()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </button>
            <button className="absolute left-32 bottom-20 screen-w:left-60 screen-w:bottom-40"
                onClick={async()=>router.push("/main")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-16 h-16 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </button>
            <Navbar 
                url={"/video/docent/blue-docent-test-02-removed.webm"}
            />
        </div>
    )
};

export default Paintlayout;