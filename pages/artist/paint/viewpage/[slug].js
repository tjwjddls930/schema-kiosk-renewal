import Viewlayout from "@/components/exhibits/3dview/ViewLayout";
import Viewcontent from "@/components/exhibits/3dview/Viewcontent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { artistData } from "@/data/artistData";
import { paintData } from "@/data/paintData";

export default function Viewpage() {
    const [popup, setPopup] = useState(true);
    const [data, setData] = useState(null)
    const router = useRouter();
    const pid = router.query.slug; 
    const [current, setCurrent] = useState(pid);
    const [button, setButton] = useState(null);
 
    // console.log(artistData[pid])
    // console.log(window.innerHeight, window.innerWidth)
    // const length = artistData[].length;
    
    useEffect(()=> {
        // if(current) {
        //     setCurrent(current);
        // } else {
        //     setData(paintData[pid]);
        // }

        // if(button === "right") {
        //     setCurrent((prev)=> prev === length - 1 ? 0 : prev + 1);
        // }
        if(button) {
            router.replace(`/artist/paint/viewpage/${current}`)
        } else {
            setData(paintData[pid])
        }
    }, [current]);

    let length = paintData.length;

   function nextExhibit(e) {
        setButton(e.target.id)
        setCurrent(Number(pid) + 1 === length ? 0 : Number(pid) + 1);
    };

    function prevExhibit(e) {
        setButton(e.target.id)
        setCurrent(pid - 1 < 0 ? length - 1 : pid - 1);
    };
    function handleRefresh() {
        router.reload();
    };
    return(
        <>
           {data && (
            <Viewlayout pid={pid}>
            {/* 3D 콘텐츠 구역 */}
            <Viewcontent 
                url={data.imgname}
            />
            {/* 그림 넘기기 버튼 */}
            <div className="absolute h-[70px] w-[70px] left-40 bottom-80 2xl:h-[300px] 2xl:w-[300px] 2xl:left-80 2xl:top-1/2 2xl:transform 2xl:-translate-y-1/2">
                <button
                    id="left"
                    className="h-full w-full 2xl:h-[140px] 2xl:w-[140px]"
                    onClick={(e)=>prevExhibit(e)}
                >   
                    <img 
                        id="left"
                        src="/img/exhibitpage/icons/왼쪽버튼.png"
                        alt="left"
                    />
                </button>
            </div>
            <div className="absolute h-[70px] w-[70px] right-40 bottom-80 2xl:h-[300px] 2xl:w-[300px] 2xl:right-80 2xl:top-1/2 2xl:transform 2xl:-translate-y-1/2">
                <button
                    id="right"
                    className="h-full w-full 2xl:h-[140px] 2xl:w-[140px]"
                    onClick={(e)=>nextExhibit(e)}
                >   
                    <img 
                        id="right"
                        src="/img/exhibitpage/icons/오른쪽버튼.png"
                        alt="right"
                    />
                </button>
            </div>
            {popup && (
                <div className="absolute bg-Ablack bg-opacity-40 h-[91%] w-[600px] bottom-16 2xl:h-[94%] 2xl:w-[1500px] 2xl:bottom-28 left-1/2 transform -translate-x-1/2"
                    onClick={()=>setPopup(!popup)}
                >
                    <div className="w-5/6 flex flex-col space-y-32 2xl:space-y-[500px] px-4 mt-16 2xl:px-8 2xl:mt-48 mx-auto items-center justify-center text-center">
                        <div className="flex flex-col space-y-2">
                            <span className="text-Awhite font-bold text-2xl 2xl:text-5xl">{data.title}</span>
                            <span className="text-Dgrey font-bold text-xl 2xl:text-4xl">{''}</span>
                        </div>
                        <div className="flex flex-col space-y-2 mx-auto w-full 2xl:space-y-4">
                            <img 
                                className="h-20 w-20 animate-bounce mx-auto 2xl:h-40 2xl:w-40"
                                src="/img/exhibitpage/icons/화면확대_아이콘.png"
                                alt="toucn icon"
                            />
                            <span className="text-Dgrey font-bold text-base 2xl:text-2xl">{'확대해서 그림을 더 자세히 감상해보세요!'}</span>
                        </div>
                        <div className="flex flex-col w-full mx-auto">
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col space-y-2">
                                    <span className="font-bold text-Awhite text-lg 2xl:text-3xl">{data.name}</span>
                                    <span className="font-bold text-Awhite text-base 2xl:text-2xl">{data.overview}</span>
                                    <span className="font-bold text-Awhite text-base 2xl:text-2xl">{data.overview1}</span>
                                </div>
                                <span className="font-bold text-Awhite text-5xl 2xl:text-7xl">{data.order}{'.'}</span>
                            </div>
                            <div className="h-[1px] w-full bg-Awhite mt-3 2xl:mt-4"/>
                        </div>
                    </div>
                </div>
            )}
            <div className="h-[200px] w-[100px] absolute left-10 bottom-96 2xl:h-[950px] 2xl:w-[200px] 2xl:left-20 2xl:top-96">
                <div className="flex flex-col mx-auto text-center space-y-2 2xl:space-y-4">
                    <button 
                        className="h-20 w-20 ml-2 2xl:h-40 2xl:w-40 2xl:ml-4"
                        onClick={handleRefresh}
                    > 
                        <img
                            className="h-full w-full"
                            src="/img/exhibitpage/icons/감상모드_아이콘.png"
                            alt="감상모드"
                        />
                    </button>
                    <span className="text-Awhite text-xl font-bold 2xl:text-3xl">{'초기화'}</span>
                </div>
            </div>
            <div className="h-[130px] w-[100px] absolute left-10 bottom-72 2xl:h-[800px] 2xl:w-[200px] 2xl:left-20 2xl:bottom-96">
            <div className="flex flex-col mx-auto text-center space-y-2 2xl:space-y-4">
                <button className="h-20 w-20 ml-2 2xl:h-40 2xl:w-40 2xl:ml-4"> 
                        <img
                            className="h-full w-full"
                            src="/img/exhibitpage/icons/작품해설_아이콘.png"
                            alt="작품해설"
                        />
                    </button>
                    <span className="text-Awhite text-xl font-bold 2xl:text-3xl">{'작품해설'}</span>
            </div>
            </div>
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
    const pid = paintData.order;
    return {
      paths: [
        // String variant:
        `/artist/paint/viewpage/${pid}`,
        // Object variant:
        { params: { slug: `paint-${pid}`} },
        // { params: { slug: `paint-${pid}`, locale: 'ko'} },
        // { params: { slug: `paint-${pid}`, locale: 'en'} },
        // { params: { slug: `paint-${pid}`, locale: 'th'} }, 
        // { params: { slug: `paint-${pid}`, locale: 'vi'} }, 
        // { params: { slug: `paint-${pid}`, locale: 'zh'} },
      ],
      fallback: true,
    }
  }