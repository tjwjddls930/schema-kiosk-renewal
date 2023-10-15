import { useTranslation } from "next-i18next"
import Image from "next/image";
import Pageframe from "../pagelayout/TallLayout";
import Link from "next/link";
import Navbar from "../navbar/Navbar";

export default function ConnectLayout({children}) {
    const {t} = useTranslation('common');

    return(
        // <Pageframe>
            
        // </Pageframe>
        <div className="h-screen w-screen bg-[url('/img/connectpage/connect_bg.png')] bg-cover">
            <div className="w-full flex flex-row justify-between p-10 screen-w:p-20 font-pretendard_bold">
                <span className="text-xl screen-w:text-4xl font-bold text-Agrey">
                    {'전시 안내'}
                </span>
                <span className="text-Agrey text-base screen-w:text-xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
            </div>
            {/* <div className="absolute transform -rotate-90 h-1 left-44 top-56">
                <span className="text-Apurple font-bold text-lg screen-w:text-screen-w">Schema</span>
            </div> */}
            {children}
            {/* <div className="absolute transform rotate-90 right-52 bottom-52 screen-w:right-36 screen-w:bottom-60">
                    <span className="text-Apurple font-bold text-lg screen-w:text-screen-w">Art Museum</span>
            </div> */}
            <button className="absolute left-14 bottom-20 screen-w:bottom-40">
                <Link href="/main">
                    <img 
                        src="/img/connectpage/홈버튼_밝은화면용.png"
                        className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                        alt="home"
                    />
                </Link>
            </button>
            <Navbar 
                url={"/video/docent/blue-docent-test-02-removed.webm"}
                lang={"exhibit"}
            />
        </div>
    )
}