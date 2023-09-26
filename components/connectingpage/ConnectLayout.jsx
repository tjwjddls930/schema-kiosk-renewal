import { useTranslation } from "next-i18next"
import Image from "next/image";
import Pageframe from "../pagelayout/Pageframe";
import Link from "next/link";

export default function ConnectLayout({children}) {
    const {t} = useTranslation('common');

    return(
        <Pageframe>
            <div className="h-screen w-scree bg-[url('/img/connectpage/connect_bg.png')] bg-cover">
            <div className="w-full flex flex-row justify-between p-10 font-pretendard_bold">
                    <span className="text-2xl font-bold text-Agrey">
                        {'전시 안내'}
                    </span>
                    <div className="h-[0.5px] flex flex-col mx-auto text-center items-center space-y-8">
                        <span className="text-Ablack font-bold text-3xl">{'스마트 디지털 전시 관람 서비스'}</span>
                        <span className="text-Cgrey font-bold text-xl">{t("MAIN_TOP_2")}</span>
                    </div>
                    <div className="flex flex-row space-x-2 text-black">
                        <Link href="/">
                            <Image 
                                src="/img/connectpage/홈버튼_밝은화면용.png"
                                width="50"
                                height="50"
                                alt="home"
                                style={{
                                    width:"auto",
                                    height:"auto"
                                }}
                            />
                        </Link>
                    </div>
                </div>
                <div className="absolute transform -rotate-90 h-1 left-40 top-52 z-20">
                    <span className="text-Apurple font-bold text-lg">Schema</span>
                </div>
                {children}
                <div className="absolute transform rotate-90 right-36 bottom-60">
                        <span className="text-Apurple font-bold text-lg">Art Museum</span>
                </div>
            </div>
        </Pageframe>
    )
}