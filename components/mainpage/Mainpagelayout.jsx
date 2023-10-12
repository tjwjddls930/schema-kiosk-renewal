import { useTranslation } from "next-i18next";

export default function Mainpagelayout({children}) {
    const {t} = useTranslation('common');
    return(
        <div className="h-screen w-screen relative font-sans flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-[url('/img/mainpage/키오스크_가로형_메인배경.png')]"
                style={{
                    // opacity:0.5,
                    zIndex: -1
                }}
            >
            </div>
            {children}
            {/* 중단 텍스트 */}
            <div className="flex flex-row space-x-4 text-md font-bold pt-7 screen-w:pt-9">
                <div className="mx-auto flex flex-row items-center">
                    <span className="text-Bpurple screen-w:text-screen-w">{t("TIME_GUIDE")}</span>
                    <div className="mx-2 h-[12px] screen-w:h-[18px] w-[0.5px] border border-Cgrey">
                    </div>
                    <span className="text-Bgrey screen-w:text-screen-w">{t("TIME_GUIDE_1")}</span>
                    <div className="mx-2 h-[12px] screen-w:h-[18px] w-[0.5px] border border-Cgrey">
                    </div>
                    <span className="text-Bgrey screen-w:text-screen-w">{t("TIME_GUIDE_2")}</span>
                    <div className="mx-2 h-[12px] screen-w:h-[18px] w-[0.5px] border border-Cgrey">
                    </div>
                    <span className="text-Bgrey screen-w:text-screen-w">{t("TIME_GUIDE_3")}</span>
                </div>
            </div>
        </div>
    )
}