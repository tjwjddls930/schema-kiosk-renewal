import Viewlayout from "@/components/exhibits/3dview/ViewLayout";
import Viewcontent from "@/components/exhibits/3dview/Viewcontent";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/Navbar";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import { LanguageContext } from "@/contexts/LanguageContext";
import clsx from "clsx";
import { paintList } from "@/data/paintData";
import { paintList_KOR } from "@/data/paintList_KOR";
import { paintList_ENG } from "@/data/paintList_ENG";
import { paintList_CH } from "@/data/paintList_CH";
import { paintList_TH } from "@/data/paintList_TH";
import { paintList_VI } from "@/data/paintList_VI";
import { isMobile } from "react-device-detect";

const inputData = {
    KOR: paintList_KOR,
    ENG: paintList_ENG,
    CH: paintList_CH,
    TH: paintList_TH,
    VI: paintList_VI,
};

const popupText = {
    KOR: "화면 터치 후 확대해 보세요!",
    ENG: "Touch the screen to zoom in!",
    CH: "触摸屏幕即可放大！",
    TH: "แตะที่หน้าจอเพื่อซูมเข้า!",
    VI: "Chạm vào màn hình để phóng to!",
};

export default function Viewpage() {
    const {isPortrait} = useContext(ScreenOrientContext);
    const {language} = useContext(LanguageContext);
    const router = useRouter();
    const {slug, order, year} = router.query;
    const [popup, setPopup] = useState(true);
    const [data, setData] = useState(null)
    
    useEffect(()=> {
        const mid = slug?.replace("", "");
        if(slug !== undefined && inputData?.[language]?.[year]?.[order]?.[mid]) {
            setData(inputData[language][year][order][mid]);
        }
    }, [slug, order, language])

    const changeExhibit = (offset) => {
        const currentIndex = Number(slug?.replace("", ""));
        let newIndex = currentIndex + offset;
        if (newIndex < 0) {
          newIndex = inputData[language][year][order].length - 1;
        } else if (newIndex >= inputData[language][year][order].length) {
          newIndex = 0;
        }
        router.replace(`/viewpage/${newIndex}?order=${order}&year=${year}`);
    };

    return(
        <>
        {data && (
            <Viewlayout>
            {/* 3D 콘텐츠 구역 */}
            {isPortrait 
            ? 
             <Viewcontent 
             url={data.imgname}
             width={data.width * 0.6}
             height={data.height * 0.6}
            />
            :
            <Viewcontent 
            url={data.imgname}
            width={data.width}
            height={data.height}
            />}
            {/* 그림 넘기기 버튼 */}
            <div className={clsx(isPortrait ? "absolute left-40 bottom-80 screen-w:left-44 screen-w:top-[62%] screen-w:transform screen-w:-translate-y-1/2" : "absolute h-[70px] w-[70px] left-40 bottom-80 screen-w:h-[300px] screen-w:w-[300px] screen-w:left-96 screen-w:top-1/2 screen-w:transform screen-w:-translate-y-1/2")}>
                <button
                    className="h-full w-full screen-w:h-[140px] screen-w:w-[140px]"
                >   
                    <svg 
                        id="left"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" 
                        className="w-12 h-12 screen-w:w-40 screen-w:h-40 text-Ablack"
                        onClick={()=>changeExhibit(-1)}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <div className={clsx(isPortrait ? "absolute right-40 bottom-80 screen-w:right-48 screen-w:top-[62%] screen-w:transform screen-w:-translate-y-1/2" : "absolute h-[70px] w-[70px] right-40 bottom-80 screen-w:h-[300px] screen-w:w-[300px] screen-w:right-96 screen-w:top-1/2 screen-w:transform screen-w:-translate-y-1/2")}>
                <button
                    className="h-full w-full screen-w:h-[140px] screen-w:w-[140px]"
                >   
                    <svg 
                        id="right"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" 
                        className="w-12 h-12 screen-w:w-40 screen-w:h-40 text-Ablack"
                        onClick={()=>changeExhibit(1)}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            {popup && (
                <div className={clsx(isPortrait ? "absolute bg-Ablack bg-opacity-40 h-[91%] w-[600px] bottom-16 screen-w:h-[97%] screen-w:w-[1500px] screen-w:bottom-28 left-1/2 transform -translate-x-1/2" : "absolute bg-Ablack bg-opacity-40 h-[91%] w-[600px] bottom-16 screen-w:h-[95%] screen-w:w-[1700px] screen-w:bottom-28 left-1/2 transform -translate-x-1/2")}
                    onClick={()=>setPopup(!popup)}
                >
                    <div className={clsx(isPortrait ? "w-5/6 h-5/6 flex flex-col space-y-32 screen-w:space-y-[650px] px-4 mt-16 screen-w:px-8 screen-w:mt-48 mx-auto items-center justify-end text-center" : "w-5/6 flex flex-col space-y-32 screen-w:space-y-[650px] px-4 mt-16 screen-w:px-8 screen-w:mt-48 mx-auto items-center justify-center text-center")}>
                        <div className="flex flex-col space-y-2">
                            <span className="text-Awhite font-bold text-screen-w screen-w:text-6xl">{data.title}</span>
                            <span className="text-Dgrey font-bold text-xl screen-w:text-5xl">{''}</span>
                        </div>
                        <div className="flex flex-col space-y-2 mx-auto w-full screen-w:space-y-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                className="h-20 w-20 animate-bounce mx-auto screen-w:h-40 screen-w:w-40 text-Awhite">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                            </svg>
                            <span className="text-Dgrey font-bold text-base screen-w:text-4xl">{popupText[language]}</span>
                        </div>
                        <div className="flex flex-col w-full mx-auto">
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col space-y-2">
                                    <span className="font-bold text-Awhite text-lg screen-w:text-3xl">{data.name}</span>
                                    <span className="font-bold text-Awhite text-base screen-w:text-3xl">{data.overview}</span>
                                    <span className="font-bold text-Awhite text-base screen-w:text-3xl">{data.overview1}</span>
                                </div>
                                <span className="font-bold text-Awhite text-5xl screen-w:text-7xl">{data.order}{'.'}</span>
                            </div>
                            <div className="h-[1px] w-full bg-Awhite mt-3 screen-w:mt-4"/>
                        </div>
                    </div>
                </div>
            )}
            {isMobile ? null : <Navbar />  }
        </Viewlayout>
        )}
        </>
    )
};

