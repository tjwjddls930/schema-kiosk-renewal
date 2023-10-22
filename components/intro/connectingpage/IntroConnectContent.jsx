import { useTranslation } from "next-i18next";
import Link from "next/link";

const IntroConnectContent = () => {
    const {t} = useTranslation('connect');
    return(
        <div className="h-3/4 screen-w:h-[90%] w-full px-28">
            <div className="h-5/6 flex flex-row space-x-4 screen-w:space-x-12 mx-auto pt-20 items-center">
                <div className="h-[400px] w-full flex flex-col items-center justify-center shadow-xl space-y-6 screen-w:space-y-12 screen-w:w-[85%] screen-w:h-[700px] screen-w:mx-auto">
                    <Link href="/intro/structure">
                        <div className="flex flex-row space-x-4 overflow-hidden justify-start">
                            <span className="text-[100px] screen-w:text-[300px] font-bold text-Ablack drop-shadow-xl">{'01'}</span>
                            <div className="flex flex-col w-[200px] screen-w:w-[450px] mr-4 pt-10 justify-start">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-base screen-w:text-screen-w text-Agrey font-bold">{'Art museum Introduction and Structure'}</span>
                                <span className="text-base screen-w:text-4xl text-Ablack font-bold mb-5">{t("STRUCTURE")}</span>
                                <span className="text-xs screen-w:text-xl text-Cgrey font-bold">{t("STRUCTURE_EX1")}</span>                        
                                <span className="text-xs screen-w:text-xl text-Cgrey font-bold">{t("STRUCTURE_EX2")}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-4">
                                <img 
                                    className="h-12 w-12 screen-w:h-24 screen-w:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1.5px] w-full mt-2 mx-auto screen-w:flex screen-w:flex-1" />
                    </Link>
                </div>
                <div className="h-[400px] w-full flex flex-col items-center justify-center shadow-xl space-y-6 screen-w:space-y-12 screen-w:w-[85%] screen-w:h-[700px]">
                    <Link href="/intro/career">
                        <div className="flex flex-row space-x-4 overflow-hidden justify-start screen-w:mx-auto">
                            <span className="text-[100px] screen-w:text-[300px] font-bold text-Ablack drop-shadow-xl">{'02'}</span>
                            <div className="flex flex-col w-[200px] screen-w:w-[450px] mr-4 pt-10 justify-start">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-base screen-w:text-screen-w text-Agrey font-bold">{'Kim Jae-Kwan`s major career'}</span>
                                <span className="text-base screen-w:text-4xl text-Ablack font-bold mb-5">{t("CAREER")}</span>
                                <span className="text-xs screen-w:text-xl text-Cgrey font-bold">{t("CAREER_EX1")}</span>                        
                                <span className="text-xs screen-w:text-xl text-Cgrey font-bold">{t("CAREER_EX2")}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-4">
                                <img 
                                    className="h-12 w-12 screen-w:h-24 screen-w:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1.5px] w-full mx-auto screen-w:flex screen-w:flex-1" />
                    </Link>
                </div>
                <div className="h-[400px] w-full flex flex-col space-y-6 items-center justify-center shadow-xl screen-w:space-y-12 screen-w:w-[85%] screen-w:h-[700px]">
                    <Link href="/intro/award">
                        <div className="flex flex-row space-x-4 overflow-hidden justify-start">
                            <span className="text-[100px] screen-w:text-[300px] font-bold text-Ablack drop-shadow-xl">{'03'}</span>
                            <div className="flex flex-col w-[200px] screen-w:w-[450px] mr-4 pt-10 justify-start">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-base screen-w:text-screen-w text-Agrey font-bold">{'Schema International Prized for Art'}</span>
                                <span className="text-base screen-w:text-4xl text-Ablack font-bold mb-5">{t("AWARD")}</span>
                                <span className="text-xs screen-w:text-xl text-Cgrey font-bold">{t("AWARD_EX1")}</span>                        
                                <span className="text-xs screen-w:text-xl text-Cgrey font-bold">{t("AWARD_EX2")}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-4">
                                <img 
                                    className="h-12 w-12 screen-w:h-24 screen-w:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1.5px] w-full mt-4 mx-auto screen-w:flex screen-w:flex-1" />
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default IntroConnectContent;