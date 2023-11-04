import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

const topText = {
    KOR: "교육프로그램 > 교육프로그램 상세",
    ENG: "Education Program > Education Program Detail",
    CH: "教育计划 > 教育计划详情",
    TH: "โปรแกรมการศึกษา > รายละเอียดโปรแกรมการศึกษา",
    VI: "Chương trình giáo dục > Chi tiết chương trình giáo dục"
};

const EducationLayout = ({children}) => {
    const router = useRouter();
    const {language} = useContext(LanguageContext);
 
    return(
        <div className="h-screen w-screen bg-Awhite">
            <div className="w-full p-10 screen-w:p-20 flex flex-row justify-between">
                <div className="flex flex-row z-10">
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
                    />
                    {/* <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'교육프로그램'}</span> */}
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{topText[language]}</span>
                </div>
                <div>
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'Smart Space SAM'}</span>
                </div>
            </div>
            <div className="absolute top-56 left-28">
                <Image 
                    src="/img/facilityguide/pathguide/acc_1.png"
                    height={200}
                    width={200}
                    alt="dot"
                    style={{
                        width:"auto",
                        height:"auto"
                    }}
                />
            </div>
            {children}
            {/* <button
                className="absolute h-10 w-[200px] screen-w:h-28 screen-w:w-[500px] text-center text-base screen-w:text-4xl text-Awhite font-bold items-center bottom-20 screen-w:bottom-56 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-Bblue to-Ablue">
                {'프로그램 내용 보기'}
            </button> */}

            <button className="absolute left-6 bottom-20 screen-w:left-16 screen-w:bottom-44"
                onClick={()=>router.back()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </button>
            <button className="absolute left-24 bottom-20 screen-w:left-60 screen-w:bottom-44"
                onClick={()=>router.push("/main")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-16 h-16 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </button>
        </div>
    )
};

export default EducationLayout;