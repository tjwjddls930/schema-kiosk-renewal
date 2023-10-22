import { useTranslation } from "next-i18next"
import Image from "next/image";
import Pageframe from "../pagelayout/TallLayout";
import Link from "next/link";
import Navbar from "../navbar/Navbar";

const ConnectLayout = ({children}) => {
    const {t} = useTranslation('common');

    return(
        <div className="h-screen w-screen bg-[url('/img/connectpage/connect_bg.png')] bg-cover">
            <div className="w-full flex flex-row justify-between p-10 screen-w:p-20 font-pretendard_bold">
                <span className="text-xl screen-w:text-4xl font-bold text-Agrey">
                    {'전시 안내'}
                </span>
                <span className="text-Agrey text-base screen-w:text-4xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
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
                    {/* <img 
                        src="/img/connectpage/홈버튼_밝은화면용.png"
                        className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                        alt="home"
                    /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-16 h-16 screen-w:w-36 screen-w:h-36 text-Ablack">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
            </button>
            <Navbar 
                url={"/video/docent/blue-docent-test-02-removed.webm"}
                lang={"exhibit"}
            />
        </div>
    )
};

export default ConnectLayout;