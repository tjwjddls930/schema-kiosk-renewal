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
                    <span className="text-xl 2xl:text-3xl text-Cgrey font-bold">Direction guidance</span>
                    <span className="text-2xl 2xl:text-4xl text-black font-bold mb-20">길 안내</span>
                    <span className="text-lg 2xl:text-2xl text-black font-bold">일반버스</span>
                    <span className="text-Cgrey font-bold text-lg">{'- '}<span className="text-black font-bold text-base 2xl:text-2xl">{'111번 '}</span><span className="text-Cgrey font-bold text-lg">{'(한국교통대증평캠퍼스 방면)'}</span></span>
                    <span className="text-Cgrey font-bold text-lg">{'- '}<span className="text-black font-bold text-base 2xl:text-2xl">{'115번 '}</span><span className="text-Cgrey font-bold text-lg">{'(충북보건과학대 방면)'}</span></span>
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
                        <span className="absolute top-24 left-28 text-lg text-Cpurple font-bold z-1">쉐마미술관</span>
                        <div className="absolute top-12 left-52 z-1">
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
                        <p className="absolute top-8 left-28 2xl:top-16 2xl:left-56 text-Awhite font-bold text-base 2xl:text-3xl">{'충북 청주시 청원구 내수읍 내수로'}<br/>{'241번지 쉐마미술관 (우)28152'}</p>
                        <p className="absolute top-24 left-28 2xl:top-40 2xl:left-56 text-Awhite font-bold text-sm 2xl:text-2xl">{'241, Naesu-ro, Naesu-eup, '}<br/>{'Cheongwon-gu Cheongju-si'}<br />{'Chungcheongbuk-do 28152'}<br />{'Republic of Korea'}</p>
                        <p className="absolute top-52 left-28 2xl:top-96 2xl:left-56 text-Awhite font-bold text-sm 2xl:text-2xl">{'043-221-3269'}<br/>{'schemaartmuseum@gmail.com'}</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-1/4 flex flex-row justify-end">
                <div className="w-1/4 h-full flex flex-col pl-2 pt-6">
                    <span className="text-black font-bold text-base mb-1 2xl:text-2xl 2xl:mb-2">{'고속버스'}</span>                
                    <span className="text-Cpurple font-bold text-sm mb-1 2xl:text-2xl 2xl:mb-2">{'청주여객터미널 북부정류장 (북청주)'}</span>                
                    <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-2xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-2xl">{'일반 111번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-2xl">{'(한국교통대증평캠퍼스 방면)'}</span></span>                
                    <span className="text-Cgrey font-bold text-sm 2xl:text-2xl">{'- '}<span className="text-black font-bold text-sm 2xl:text-2xl">{'115번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-2xl">{'(한국교통대증평캠퍼스 방면)'}</span></span>                
                </div>
                <div className="w-2/3 h-full flex flex-row space-x-2 pt-4 2xl:space-x-4 2xl:pt-6">
                    <div className="w-full flex flex-col">  
                        <span className="text-black font-bold text-base mb-1 2xl:text-2xl 2xl:mb-2">{'고속버스 (환승)'}</span>                
                        <span className="text-Cpurple font-bold text-sm mb-1 2xl:text-xl 2xl:mb-2">{'청주 시외버스터미널 (가경)'}</span>                
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-xl">{'좌석 105번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-xl">{'(가경세원3차아파트 방면)'}</span></span>                
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-xl">{'105-1번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-xl">{'(가경세원3차아파트 방면)'}</span></span>
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-xl">{'일반 513-2번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-xl">{'(가경세원3차아파트 방면)'}</span></span>    
                        <span className="text-Cgrey font-bold text-sm 2xl:text-xl">{'- '}<span className="text-black font-bold text-sm 2xl:text-xl">{'급행 747번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-xl">{'(고속버스터미널 방면)'}</span></span>    
                    </div>
                    <div className="w-full flex flex-col mt-6 2xl:mt-8">  
                        <span className="text-Cpurple font-bold text-sm mb-1 2xl:text-xl 2xl:mb-2">{'청주 고속버스터미널 (가경)'}</span>                
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-xl">{'일반 511번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-xl">{'(강서1동행정복지센터 방면)'}</span></span>                
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-xl">{'516번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-xl">{'(강서1동행정복지센터 방면)'}</span></span>
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-xl">{'517번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-xl">{'(강서1동행정복지센터 방면)'}</span></span>    
                        <span className="text-Cgrey font-bold text-sm 2xl:text-xl">{'- '}<span className="text-black font-bold text-sm 2xl:text-xl">{'급행 747번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-xl">{'(강서1동행정복지센터 방면)'}</span></span>    
                    </div>
                    <div className="w-full flex flex-col mt-8">
                        <span className="text-Cpurple font-bold text-sm mb-1 2xl:text-xl 2xl:mb-2">{'버스정류장 `청주대학교`에서 환승 후'}</span>                
                        <span className="text-Cgrey font-bold text-sm mb-1 2xl:text-xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-xl">{'일반 111번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-xl">{'(한국교통대증평캠퍼스 방면)'}</span></span>                
                        <span className="text-Cgrey font-bold text-sm 2xl:text-xl 2xl:mb-2">{'- '}<span className="text-black font-bold text-sm 2xl:text-xl">{'115번 '}</span><span className="text-Cgrey font-bold text-sm 2xl:text-xl">{'(충북보건과학대 방면)'}</span></span>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-40 left-40">
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
            <div className="absolute bottom-12 left-32 h-12 w-1/4 bg-Cpurple"/>
            <div className="absolute bottom-20 right-0 h-12 w-2/3 bg-Dpurple"/>
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