import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import TopNavbar from "@/components/mainpage/Topnavbar";
import Navbar from "@/components/navbar/Navbar";
import Newbutton from '@/components/mainpage/Newbutton';
import { useTranslation } from 'next-i18next';

export default function Mainpage() {
    const {t} = useTranslation('common')
    return(
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-[url('/img/mainpage/키오스크_가로형_메인배경_1.png')]"
            style={{
                // opacity:0.5,
                zIndex: -1
            }}
            >
            </div>
            {/* 상단 로고 섹션 */}
            <TopNavbar />
            {/* 중단 버튼 섹션 */}
            <Newbutton />
            {/* 하단 텍스트 */}
            <div className="flex flex-row space-x-4 text-md font-bold pt-7 screen-w:pt-9">
                <div className="mx-auto flex flex-row items-center">
                    <span className="text-Ablue screen-w:text-4xl">{t("TIME_GUIDE")}</span>
                    <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
                    </div>
                    <span className="text-Bgrey screen-w:text-4xl">{t("TIME_GUIDE_1")}</span>
                    <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
                    </div>
                    <span className="text-Bgrey screen-w:text-4xl">{t("TIME_GUIDE_2")}</span>
                    <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
                    </div>
                    <span className="text-Bgrey screen-w:text-4xl">{t("TIME_GUIDE_3")}</span>
                </div>
            </div>
            {/* navbar */}
            <Navbar 
                url={"/video/docent/schema-docent-04.webm"}
                lang={"main"}
                sign={"/video/sign/schema_sign_2.mp4"}
                // fontsize={fontsize}
            /> 
        </div>       
    )
};

export async function getStaticProps(context) {
    const {locale} = context;
    return{
        props: {
            ...(await serverSideTranslations(locale, ['common', 'navbar']))
        }
    }
};