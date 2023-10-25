import Viewlayout from "@/components/exhibits/3dview/ViewLayout";
import Viewcontent from "@/components/exhibits/3dview/Viewcontent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { pastpaintData } from "@/data/pastpaintData";
import Navbar from "@/components/navbar/Navbar";

export default function Viewpage() {
    const router = useRouter();
    const pid = router.query.slug;
    const [popup, setPopup] = useState(true);
    const [current, setCurrent] = useState(pid);
    const [button, setButton] = useState(null);
    const [data, setData] = useState(null)

    useEffect(()=> {
        if(button) {
            router.replace(`/pastexhibit/${current}`)
        } else {
            setData(pastpaintData[pid])
        }
    }, [current])

    let length = pastpaintData.length;

    function nextExhibit(e) {
        setButton(e.target.id)
        setCurrent(Number(pid) + 1 === length ? 0 : Number(pid) + 1);
    };

    function prevExhibit(e) {
        setButton(e.target.id)
        setCurrent(pid - 1 < 0 ? length - 1 : pid - 1);
    };

    return(
        <>
        {data && (
            <Viewlayout>
            {/* 3D 콘텐츠 구역 */}
            <Viewcontent 
                url={data.imgname}
                width={data.width}
                height={data.height}
            />
            {/* 그림 넘기기 버튼 */}
            <div className="absolute h-[70px] w-[70px] left-40 bottom-80 screen-w:h-[300px] screen-w:w-[300px] screen-w:left-96 screen-w:top-1/2 screen-w:transform screen-w:-translate-y-1/2">
                <button
                    id="left"
                    className="h-full w-full screen-w:h-[140px] screen-w:w-[140px]"
                    onClick={(e)=>prevExhibit(e)}
                >   
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" 
                        className="w-6 h-6 screen-w:w-40 screen-w:h-40 text-Awhite"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <div className="absolute h-[70px] w-[70px] right-40 bottom-80 screen-w:h-[300px] screen-w:w-[300px] screen-w:right-96 screen-w:top-1/2 screen-w:transform screen-w:-translate-y-1/2">
                <button
                    id="right"
                    className="h-full w-full screen-w:h-[140px] screen-w:w-[140px]"
                    onClick={(e)=>nextExhibit(e)}
                >   
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" 
                        className="w-6 h-6 screen-w:w-40 screen-w:h-40 text-Awhite"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            {popup && (
                <div className="absolute bg-Ablack bg-opacity-40 h-[91%] w-[600px] bottom-16 screen-w:h-[94%] screen-w:w-[1700px] screen-w:bottom-28 left-1/2 transform -translate-x-1/2"
                    onClick={()=>setPopup(!popup)}
                >
                    <div className="w-5/6 flex flex-col space-y-32 screen-w:space-y-[650px] px-4 mt-16 screen-w:px-8 screen-w:mt-48 mx-auto items-center justify-center text-center">
                        <div className="flex flex-col space-y-2">
                            <span className="text-Awhite font-bold text-screen-w screen-w:text-5xl">{data.title}</span>
                            <span className="text-Dgrey font-bold text-xl screen-w:text-4xl">{''}</span>
                        </div>
                        <div className="flex flex-col space-y-2 mx-auto w-full screen-w:space-y-4">
                            <img 
                                className="h-20 w-20 animate-bounce mx-auto screen-w:h-40 screen-w:w-40"
                                src="/img/exhibitpage/icons/화면확대_아이콘.png"
                                alt="toucn icon"
                            />
                            <span className="text-Dgrey font-bold text-base screen-w:text-screen-w">{'확대해서 그림을 더 자세히 감상해보세요!'}</span>
                        </div>
                        <div className="flex flex-col w-full mx-auto">
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col space-y-2">
                                    <span className="font-bold text-Awhite text-lg screen-w:text-3xl">{data.name}</span>
                                    <span className="font-bold text-Awhite text-base screen-w:text-screen-w">{data.overview}</span>
                                    <span className="font-bold text-Awhite text-base screen-w:text-screen-w">{data.overview1}</span>
                                </div>
                                <span className="font-bold text-Awhite text-5xl screen-w:text-7xl">{data.order}{'.'}</span>
                            </div>
                            <div className="h-[1px] w-full bg-Awhite mt-3 screen-w:mt-4"/>
                        </div>
                    </div>
                </div>
            )}
            <Navbar 
                url={"/video/docent/schema-docent-04.webm"}
                lang={"main"}
                sign={"/video/sign/schema_sign_2.mp4"}
                // fontsize={fontsize}
            />  
        </Viewlayout>
        )}
        </>
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

export async function getStaticPaths({locales}) {
    const pid = pastpaintData.order;
    return {
      paths: [
        // String variant:
        `/pastexhibit/${pid}`,
        // Object variant:
        { params: { slug: `paint-${pid}`} },
      ],
      fallback: true,
    }
  }


