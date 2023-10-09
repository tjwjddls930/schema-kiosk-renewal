import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function IntroConnectContent() {
    const {t} = useTranslation('connect');
    return(
        <div className="h-screen w-screen px-28">
            <div className="h-full flex flex-row space-x-4 2xl:space-x-12 mx-auto pt-20 2xl:pt-72">
                <div className="h-[400px] w-full 2xl:w-[85%] flex 2xl:h-[600px] 2xl:mx-auto 2xl:flex 2xl:items-center 2xl:justify-center">
                    <Link href="/intro/structure">
                        <div className="flex flex-row space-x-4 overflow-hidden justify-start">
                            <span className="text-[100px] 2xl:text-[300px] font-bold text-Ablack drop-shadow-xl">{'01'}</span>
                            <div className="flex flex-col w-[200px] 2xl:w-[450px] mr-4 pt-10 justify-start">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-base 2xl:text-2xl text-Agrey font-bold">{'Art museum Introduction and Structure'}</span>
                                <span className="text-lg 2xl:text-4xl text-Ablack font-bold mb-5">{t("STRUCTURE")}</span>
                                <span className="text-sm 2xl:text-xl text-Cgrey font-bold">{t("STRUCTURE_EX1")}</span>                        
                                <span className="text-sm 2xl:text-xl text-Cgrey font-bold">{t("STRUCTURE_EX2")}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 2xl:h-24 2xl:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1px] w-[350px] 2xl:h-[1.5px] 2xl:w-[900px] mx-auto 2xl:flex 2xl:flex-1" />
                    </Link>
                </div>
                <div className="h-[400px] w-full 2xl:w-[85%] 2xl:h-[600px] 2xl:mx-auto 2xl:flex 2xl:items-center 2xl:justify-center">
                    <Link href="/intro/structure">
                        <div className="flex flex-row space-x-4 overflow-hidden justify-start 2xl:mx-auto">
                            <span className="text-[100px] 2xl:text-[300px] font-bold text-Ablack drop-shadow-xl">{'02'}</span>
                            <div className="flex flex-col w-[200px] 2xl:w-[450px] mr-4 pt-10 justify-start">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-base 2xl:text-2xl text-Agrey font-bold">{'Kim Jae-Kwan`s major career'}</span>
                                <span className="text-lg 2xl:text-4xl text-Ablack font-bold mb-5">{t("CAREER")}</span>
                                <span className="text-sm 2xl:text-xl text-Cgrey font-bold">{t("CAREER_EX1")}</span>                        
                                <span className="text-sm 2xl:text-xl text-Cgrey font-bold">{t("CAREER_EX2")}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 2xl:h-24 2xl:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1px] w-[350px] 2xl:h-[1.5px] 2xl:w-[900px] mx-auto 2xl:flex 2xl:flex-1" />
                    </Link>
                </div>
                <div className="h-[400px] w-full 2xl:w-[85%] 2xl:h-[600px] 2xl:mx-auto 2xl:flex 2xl:items-center 2xl:justify-center">
                    <Link href="/intro/award">
                        <div className="flex flex-row space-x-4 overflow-hidden justify-start">
                            <span className="text-[100px] 2xl:text-[300px] font-bold text-Ablack drop-shadow-xl">{'03'}</span>
                            <div className="flex flex-col w-[200px] 2xl:w-[450px] mr-4 pt-10 justify-start">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-base 2xl:text-2xl text-Agrey font-bold">{'Schema International Prized for Art'}</span>
                                <span className="text-lg 2xl:text-4xl text-Ablack font-bold mb-5">{t("AWARD")}</span>
                                <span className="text-sm 2xl:text-xl text-Cgrey font-bold">{t("AWARD_EX1")}</span>                        
                                <span className="text-sm 2xl:text-xl text-Cgrey font-bold">{t("AWARD_EX2")}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 2xl:h-24 2xl:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1px] w-[350px] 2xl:h-[1.5px] 2xl:w-[900px] mx-auto 2xl:flex 2xl:flex-1" />
                    </Link>
                </div>
            </div>
        </div>
    )
};