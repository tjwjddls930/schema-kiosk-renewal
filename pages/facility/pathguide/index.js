import FacilityLayout from "@/components/facility/FacilityLayout";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Pathguide() {

    return(
        <FacilityLayout>
            <div className="w-full h-1/3 flex flex-row justify-end">
                <div className="w-1/12 h-full flex flex-col-reverse">
                    <div className="flex flex-row-reverse">
                        <div className="h-12 w-2/5 border-Cpurple border-b-2"/>
                    </div>
                    <Image 
                        src="/img/facilityguide/pathguide/acc_1.png"
                        height={60}
                        width={60}
                        alt="dot"
                        style={{
                            width:"auto",
                            height:"auto"
                        }}
                    />
                </div>
                <div className="w-1/4 h-full flex flex-col justify-start shadow p-4">
                    <div className="bg-Cpurple h-[2.5px] w-[60px] rounded-full mb-4"></div>
                    <span className="text-lg 2xl:text-4xl text-Cgrey font-bold">Direction guidance</span>
                    <span className="text-xl 2xl:text-5xl text-black font-bold mb-20">길 안내</span>
                    <span className="text-base 2xl:text-3xl text-black font-bold">일반버스</span>
                    <span className="text-Cgrey font-bold text-base 2xl:text-3xl">{'- '}<span className="text-black font-bold text-base 2xl:text-3xl">{'111번 '}</span><span className="text-Cgrey font-bold text-base 2xl:text-3xl">{'(한국교통대증평캠퍼스 방면)'}</span></span>
                    <span className="text-Cgrey font-bold text-base 2xl:text-3xl">{'- '}<span className="text-black font-bold text-base 2xl:text-3xl">{'115번 '}</span><span className="text-Cgrey font-bold text-base 2xl:text-3xl">{'(충북보건과학대 방면)'}</span></span>
                </div>
                <div className="w-1/3 h-full items-center justify-center border-4 border-Awhite shadow-lg">
                    <div className="relative h-full w-full">
                        <Image 
                            src="/img/facilityguide/pathguide/쉐마_지도맵_보정.png"
                            className="pb-4"
                            alt="map"
                            priority={true}
                            sizes="(max-width: 400px), (max-height: 300px)"
                            fill={true}
                        />
                        <span className="absolute top-20 left-28 text-lg 2xl:top-60 2xl:left-96 2xl:text-3xl text-Cpurple font-bold z-1">쉐마미술관</span>
                        <div className="absolute top-8 left-52 z-1 2xl:top-56 2xl:left-[48%] 2xl:transform 2xl:-translate-x-[48%]">
                            <Image 
                                src="/img/facilityguide/pathguide/location_icon.png"
                                className="z-1"
                                height={120}
                                width={40}
                                style={{
                                    height: "auto",
                                    width: "auto"
                                }}
                                alt="location"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-full items-center justify-center shadow-lg border-b-4 border-Awhite">
                    <div className="relative h-full w-full">
                        <Image 
                            src="/img/facilityguide/pathguide/쉐마이미지_보정본.png"
                            alt="schema"
                            priority={true}
                            sizes="(max-width: 400px), (max-height: 300px)"
                            fill={true}
                        />
                        <p className="absolute top-4 left-28 2xl:top-24 2xl:left-56 text-Awhite font-bold text-base 2xl:text-4xl">{'충북 청주시 청원구 내수읍 내수로'}<br/>{'241번지 쉐마미술관 (우)28152'}</p>
                        <p className="absolute top-20 left-28 2xl:top-52 2xl:left-56 text-Awhite font-bold text-sm 2xl:text-3xl">{'241, Naesu-ro, Naesu-eup, '}<br/>{'Cheongwon-gu Cheongju-si'}<br />{'Chungcheongbuk-do 28152'}<br />{'Republic of Korea'}</p>
                        <p className="absolute top-48 left-28 2xl:top-96 2xl:left-56 text-Awhite font-bold text-sm 2xl:text-3xl">{'043-221-3269'}<br/>{'schemaartmuseum@gmail.com'}</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-1/4 flex flex-row justify-end">
                <div className="w-1/4 h-full flex flex-col pl-2 pt-6">
                    <span className="text-black font-bold text-base mb-1 2xl:text-3xl 2xl:mb-2">{'고속버스'}</span>                
                    <span className="text-Cpurple font-bold text-sm mb-1 2xl:text-3xl 2xl:mb-2">{'청주여객터미널 북부정류장 (북청주)'}</span>                
                    <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-3xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-3xl">{'일반 111번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'(한국교통대증평캠퍼스 방면)'}</span></span>                
                    <span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'- '}<span className="text-black font-bold text-sm 2xl:text-3xl">{'115번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'(한국교통대증평캠퍼스 방면)'}</span></span>                
                </div>
                <div className="w-2/3 h-full flex flex-row space-x-2 pt-4 2xl:space-x-4 2xl:pt-6">
                    <div className="w-full flex flex-col">  
                        <span className="text-black font-bold text-base mb-1 2xl:text-3xl 2xl:mb-2">{'고속버스 (환승)'}</span>                
                        <span className="text-Cpurple font-bold text-sm mb-1 2xl:text-3xl 2xl:mb-2">{'청주 시외버스터미널 (가경)'}</span>                
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-3xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-3xl">{'좌석 105번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'(가경세원3차아파트 방면)'}</span></span>                
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-3xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-3xl">{'105-1번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'(가경세원3차아파트 방면)'}</span></span>
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-3xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-3xl">{'일반 513-2번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'(가경세원3차아파트 방면)'}</span></span>    
                        <span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'- '}<span className="text-black font-bold text-sm 2xl:text-3xl">{'급행 747번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'(고속버스터미널 방면)'}</span></span>    
                    </div>
                    <div className="w-full flex flex-col mt-6 2xl:mt-8">  
                        <span className="text-Cpurple font-bold text-sm mb-1 2xl:text-3xl 2xl:mb-2">{'청주 고속버스터미널 (가경)'}</span>                
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-3xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-3xl">{'일반 511번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'(강서1동행정복지센터 방면)'}</span></span>                
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-3xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-3xl">{'516번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'(강서1동행정복지센터 방면)'}</span></span>
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-3xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-3xl">{'517번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'(강서1동행정복지센터 방면)'}</span></span>    
                        <span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'- '}<span className="text-black font-bold text-sm 2xl:text-3xl">{'급행 747번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'(강서1동행정복지센터 방면)'}</span></span>    
                    </div>
                    <div className="w-full flex flex-col mt-8">
                        <span className="text-Cpurple font-bold text-sm mb-1 2xl:text-3xl 2xl:mb-2">{'버스정류장 `청주대학교`에서 환승 후'}</span>                
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-3xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-3xl">{'일반 111번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'(한국교통대증평캠퍼스 방면)'}</span></span>                
                        <span className="text-Cgrey font-bold text-sm 2xl:text-3xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-3xl">{'115번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-3xl">{'(충북보건과학대 방면)'}</span></span>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-40 left-40 2xl:bottom-48">
                <Image 
                    src="/img/facilityguide/pathguide/acc_2.png"
                    height={80}
                    width={160}
                    alt="dot2"
                    style={{
                        width:"auto",
                        height:"auto"
                    }}
                />
            </div>
            <div className="absolute bottom-12 left-32 h-12 w-1/4 2xl:bottom-28 bg-Cpurple"/>
            <div className="absolute bottom-12 right-0 h-12 w-2/3 2xl:w-3/4 2xl:bottom-28 bg-Cpurple opacity-30"/>
        </FacilityLayout>
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