import Pageframe from "@/components/pagelayout/Pageframe";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function IntroConnect({children}) {
    const {t} = useTranslation('common');
    return(
        <Pageframe>
        <div className="h-screen w-scree bg-[url('/img/intro/connectpage/미술관소개_배경이미지.png')] bg-cover bg-no-repeat">
        <div className="w-full flex flex-row justify-between p-14 font-pretendard_bold">
                <span className="text-2xl font-bold text-Agrey">
                    {'미술관 소개'}
                </span>
                <div className="h-[0.5px] flex flex-col mx-auto text-center items-center space-y-8">
                    <span className="text-Ablack font-bold text-3xl">{'김재관 및 미술관 정보 제공 서비스'}</span>
                    <span className="text-Cgrey font-bold text-xl">{t("MAIN_TOP_2")}</span>
                </div>
                <div className="flex flex-row space-x-2 text-black">
                    <Link href="/main">
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
            <div className="absolute transform -rotate-90 h-1 left-6 top-52 z-20">
                <span className="text-Apurple font-bold text-lg">Schema</span>
            </div>
            {children}
            <div className="absolute transform rotate-90 right-6 bottom-60">
                    <span className="text-Apurple font-bold text-lg">Art Museum</span>
            </div>
        </div>
    </Pageframe>
    )
}