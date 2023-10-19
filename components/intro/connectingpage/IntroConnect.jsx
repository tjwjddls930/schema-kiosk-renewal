import Pageframe from "@/components/pagelayout/TallLayout";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";

const IntroConnect = ({children}) => {
    const {t} = useTranslation('common');
    return(
        <>
            <div className="h-screen w-screen bg-[url('/img/intro/connectpage/미술관소개_배경이미지.png')] bg-cover bg-no-repeat">
                <div className="w-full flex flex-row justify-between p-8 screen-w:p-14 font-pretendard_bold">
                    <span className="text-base screen-w:text-2xl font-bold text-Agrey">
                        {'미술관 소개'}
                    </span>
                    <span className="text-Agrey text-base screen-w:text-xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
                </div>
                {/* <div className="absolute transform -rotate-90 h-1 left-6 top-52 z-20">
                    <span className="text-Apurple font-bold text-lg">Schema</span>
                </div> */}
                {children}
                {/* <div className="absolute transform rotate-90 right-6 bottom-60">
                        <span className="text-Apurple font-bold text-lg">Art Museum</span>
                </div> */}
                <button className="absolute left-14 bottom-20 screen-w:bottom-40">
                    <Link href="/main">
                        {/* <Image 
                            src="/img/exhibitpage/icons/뒤로가기버튼_어두운버전.png"
                            width="60"
                            height="60"
                            alt="back"
                            priority={true}
                        /> */}
                        <img 
                            src="/img/connectpage/홈버튼_밝은화면용.png"
                            className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                            alt="home"
                        />
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