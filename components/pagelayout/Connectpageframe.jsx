import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Connectpageframe({children, url, text1, text2}) {
    const {t} = useTranslation('connect');
    return(
        <div className={`h-screen w-screen bg-no-repeat bg-cover bg-[url(${url})`}>
            <div className="w-full flex flex-row justify-between p-10 screen-w:p-20 font-pretendard_bold">
                    <span className="text-xl screen-w:text-4xl font-bold text-Agrey">
                        {text1}
                    </span>
                    <div className="h-[0.5px] flex flex-col mx-auto text-center items-center space-y-8">
                        <span className="text-Ablack font-bold text-xl screen-w:text-5xl">{text2}</span>
                        <span className="text-Cgrey font-bold text-lg screen-w:text-screen-w">{t("MAIN_TOP_2")}</span>
                    </div>
                    <div className="flex flex-row space-x-2 text-black">
                    </div>
                </div>
            {children}
            {/* home button */}
            <button className="absolute left-14 bottom-20 screen-w:bottom-40">
                    <Link href="/main">
                        <img 
                            src="/img/connectpage/홈버튼_밝은화면용.png"
                            className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                            alt="home"
                        />
                    </Link>
            </button>
        </div>
    )
};