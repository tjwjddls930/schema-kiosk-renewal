import { useTranslation } from "next-i18next"
import Link from "next/link";

const Schemaintro = () => {
    const {t} = useTranslation('intro');
    return(
        <>
            <div className="h-2/3 w-full flex flex-row space-x-8 screen-w:py-8 screen-w:px-6">
                {/* 좌측 그림 및 텍스트 */}
                <div className="h-full w-[200px] screen-h:w-[400px] absolute left-0 top-0 opacity-90">
                    <img 
                        src="/img/intro/introduction/가로형_미술관소개_이미지_2.png"
                        className="h-full w-full"
                        alt="background"
                    />
                </div>
                <div className="w-[150px] screen-w:w-[300px] mx-auto">
                </div>
                <div className="h-5/6 w-[30%] flex flex-col space-y-4 screen-w:space-y-12 screen-w:px-16">
                    <div className="flex flex-col space-y-1 screen-w:space-y-6">
                        <div className="h-[2px] w-14 screen-w:w-36 bg-Cpurple"></div>
                        <span className="font-bold text-lg screen-w:text-6xl text-Cgrey">Schema Art Museum</span>
                        <span className="font-bold text-xl screen-w:text-8xl text-black">{t("NAME")}</span>
                    </div>
                    {/* <p className="text-Cgrey text-sm screen-w:text-5xl font-bold screen-w:leading-snug">
                        {'쉐마미술관은 그동안 대학 강단에서 30여 년간 교수로서의 길을 걸었던 서양화가 김재관 교수가 예술과 교육자로서의 열정과 지역 예술인들과 지역민들의 예술적 교감의 필요성을 인지하고, 고향 청주 근교에 2009년 6월 26일 설립한 사설 미술관으로써'}
                        <span className="text-Cpurple text-sm screen-w:text-5xl">{'충청북도 제 2011-01호 제1종 미술관'}</span> {'이며, 최근 한국박물관협회, 한국과학창의재단, 교육과학기술부로부터'}
                        <span className="text-Cpurple text-sm screen-w:text-5xl">{'박물'}</span>
                        <span className="text-Cpurple text-sm screen-w:text-5xl">{'관, 미술관 창제 프로그램 우수 운영기관으로 선정'}</span>{'되었습니다.'}
                    </p> */}
                    <p className="text-Cgrey text-sm screen-w:text-4xl font-bold screen-w:leading-snug">
                        {t("P1")}
                    </p>
                    <div className="mx-auto text-center flex flex-row space-x-6">
                        <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-screen-w rounded-full font-bold text-black text-base screen-w:text-4xl z-10">
                            {t("CIRCLE1")}
                        </div>
                        <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-screen-w rounded-full font-bold text-black text-base screen-w:text-4xl z-10">
                            {t("CIRCLE2")}
                        </div>
                        <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-screen-w rounded-full font-bold text-black text-base screen-w:text-4xl z-10">
                            {t("CIRCLE3")}
                        </div>
                    </div>

                    {/* <p className="text-Cgrey text-sm screen-w:text-5xl font-bold screen-w:leading-snug">
                        {'SCHEMA는 "격", "짜임", "계획"이라는 의미로 기하학적 구성요소로 이루어진 김재관 교수의 작품과 그 맥을 같이 하며, 미학적, 종교적 의미로서의 SCHEMA는 "하나님께 모든 것을 바친다."는 의미가 있습니다. 이는 미술관의 지역사회, 미술계에 봉사하고자 하는 열망으로 청주지역 뿐만 아니라'} 
                        <span className="text-Cpurple text-sm screen-w:text-5xl">{'현대미술'}</span>
                        <span className="text-Cpurple text-sm screen-w:text-5xl">{'의 격이 시대정신에 걸 맞는 창작 예술의 연구와 실천을 위한'}</span>
                        <span className="text-Cpurple text-sm screen-w:text-5xl">{'공간'}</span>{'이 될 수 있도록 최선의 역할을 하고자 합니다.'}
                    </p> */}
                    <p className="text-Cgrey text-sm screen-w:text-4xl font-bold screen-w:leading-snug">
                        {t("P2")} 
                    </p>
                </div>
                <div className="h-1/2 w-[30%] flex flex-row space-x-8 screen-w:px-8">
                    {/* <p className="text-Cgrey text-sm screen-w:text-5xl font-bold screen-w:pt-48 screen-w:leading-snug">
                        {'특히 이 지역 젊은 작가들에게 다양하고 새로운 현대미술의 정보를 제공하고 국내,외 현대미술의 창의적인 작품들로 구성된 기획전시를 통하여'}
                        <span className="text-Cpurple text-sm screen-w:text-5xl">{'지역 국제 교류센터'}</span>
                        {'로서의 역할을 하고자하며 예술가 뿐만 아니라 문화시민을 위해 제2의 교육기관으로 지역 사회단체의 문화예술교육 프로젝트뿐만 아니라 유소년, 청소냔, 어린이 등 '}
                        <span className="text-Cpurple text-sm screen-w:text-5xl">{'다양한 계층의 다양한 문화예술체험 교'}</span>
                        <span className="text-Cpurple text-sm screen-w:text-5xl">{'육기관'}</span>{'으로의 기능을 수행하고자 합니다.'}
                    </p> */}
                    {/* <p className="text-Cgrey text-sm screen-w:text-5xl font-bold screen-w:pt-48 screen-w:leading-snug">
                        {'향후 예술가뿐만 아니라 문화시민을 위한 사회교육, 어린이 예술체험교육의 다양한 프로그램 개발과 독창적인 전시기획으로 내실을 다지고, 지역사회와 함께하는 사업을 추진하는 공공 미술관으로서의 역할을 하고자 합니다.'}
                    </p> */}
                    <p className="text-Cgrey text-sm screen-w:text-4xl font-bold screen-w:pt-60 screen-w:leading-snug">
                        {t("P3")}
                    </p>
                </div>
                <div className="h-1/2 w-[30%] flex screen-w:px-8">
                    <p className="text-Cgrey text-sm screen-w:text-4xl font-bold screen-w:pt-60 screen-w:leading-snug">
                        {t("P4")}
                    </p>
                </div>

                <div className="absolute transform -translate-y-1/2 -translate-x-1/2 left-2/3 top-2/3 screen-w:h-[400px] screen-w:w-[800px]">
                    <div className="h-[100px] w-[400px] screen-w:h-[200px] screen-w:w-[600px] flex flex-row space-x-4 mx-auto">
                        <div className="h-2 w-2 screen-w:h-4 screen-w:w-4 bg-Cpurple rounded-full"></div>
                        <div className="h-2 w-2 screen-w:h-4 screen-w:w-4 bg-Cpurple rounded-full"></div>
                        <div className="h-2 w-2 screen-w:h-4 screen-w:w-4 bg-Cpurple rounded-full"></div>
                    </div>
                </div>

                <div className="absolute right-4 screen-w:h-[500px] screen-w:w-[950px] screen-w:right-8 transform -translate-y-1/2 top-2/3">
                    <img
                        className="h-[30px] w-[200px] screen-w:h-[110px] screen-w:w-[800px]"
                        src="/img/intro/introduction/schema_art_museum_typo.png"
                        alt="schema_image_1"
                    />
                </div>

                <div className="absolute right-0 bottom-0 screen-w:bottom-0">
                    <img 
                        className="h-[200px] w-[550px] screen-w:h-[810px] screen-w:w-[2250px]" 
                        src="/img/intro/introduction/schema_image_보정.png"
                        alt="schema_image_2"
                    />
                </div>
            </div>
        <button className="absolute left-6 bottom-20 screen-w:left-16 screen-w:bottom-44">
            <Link href="/intro">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:w-36 screen-w:h-36">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </Link>
        </button>
        <button className="absolute left-24 bottom-20 screen-w:left-60 screen-w:bottom-44">
            <Link href="/main">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-16 h-16 screen-w:w-36 screen-w:h-36">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </Link>
        </button>
    </>
    )
};

export default Schemaintro;
