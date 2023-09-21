import Viewlayout from "@/components/exhibits/3dview/ViewLayout";
import Viewcontent from "@/components/exhibits/3dview/Viewcontent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

export default function Viewpage() {
    const [popup, setPopup] = useState(true);

    return(
        <Viewlayout>

            {/* 3D 콘텐츠 구역 */}
            <Viewcontent />
            {popup && (
                <div className="absolute bg-black bg-opacity-40 h-[91%] w-[650px] bottom-20 left-1/2 transform -translate-x-1/2">
                    <div className="w-5/6 flex flex-col space-y-48 px-4 mt-16 mx-auto items-center justify-center text-center">
                        <div className="flex flex-col space-y-2">
                            <span className="text-Awhite font-bold text-3xl">{'유성'}</span>
                            <span className="text-Dgrey font-bold text-2xl">{'Meteor'}</span>
                        </div>
                        <div className="flex flex-col space-y-2 mx-auto w-full">
                            <img 
                                className="h-20 w-20 animate-bounce mx-auto"
                                src="/img/exhibitpage/icons/화면확대_아이콘.png"
                                alt="toucn icon"
                            />
                            <span className="text-Dgrey font-bold text-lg">{'확대해서 그림을 더 자세히 감상해보세요!'}</span>
                        </div>
                        <div className="flex flex-col w-full mx-auto">
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col space-y-2">
                                    <span className="font-bold text-Awhite text-xl">{'김대유'}</span>
                                    <span className="font-bold text-Awhite text-lg">{'117x91cm'}</span>
                                    <span className="font-bold text-Awhite text-lg">{'oil-on-canvas 2022'}</span>
                                </div>
                                <span className="font-bold text-Awhite text-5xl">{'01.'}</span>
                            </div>
                            <div className="h-[1px] w-full bg-Awhite mt-3"/>
                        </div>
                    </div>
                </div>
            )}
            <div className="h-[200px] w-[100px] absolute left-10 bottom-96">
                <div className="flex flex-col mx-auto text-center space-y-2">
                    <button 
                        className="h-24 w-24"
                        onClick={()=> setPopup(!popup)}
                    > 
                        <img
                            className="h-full w-full"
                            src="/img/exhibitpage/icons/감상모드_아이콘.png"
                            alt="감상모드"
                        />
                    </button>
                    <span className="text-Awhite text-xl font-bold">{'감상모드'}</span>
                </div>
            </div>
            <div className="h-[130px] w-[100px] absolute left-10 bottom-72">
               <div className="flex flex-col mx-auto text-center space-y-2">
                <button className="h-24 w-24"> 
                        <img
                            className="h-full w-full"
                            src="/img/exhibitpage/icons/작품해설_아이콘.png"
                            alt="감상모드"
                        />
                    </button>
                    <span className="text-Awhite text-xl font-bold">{'작품해설'}</span>
               </div>
            </div>
        </Viewlayout>
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
