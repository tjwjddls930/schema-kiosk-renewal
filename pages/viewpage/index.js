import Viewlayout from "@/components/exhibits/3dview/ViewLayout";
import Viewcontent from "@/components/exhibits/3dview/Viewcontent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Viewpage() {
    const [popup, setPopup] = useState(true);
    const [current, setCurrent] = useState(0);
    const router = useRouter();
    // console.log(window.innerHeight, window.innerWidth)

    let paintdata = [
        {order: "01", title: "유성", imgname: "/img/exhibitpage/paintings/유성.jpg", overview: "117x91cm", overview1: "oil-on-canvas, 2022"},
        {order: "02", title: "그늘에서 빛나는", imgname: "/img/exhibitpage/paintings/그늘에서-빛나는.jpeg", overview: "45.5x37cm", overview1: "oil-on-canvas, 2022"},
        {order: "03", title: "조용한 기다림", imgname: "/img/exhibitpage/paintings/조용한-기다림.jpg", overview: "112x80.3cm", overview1: "oil-on-canvas, 2022"},
        {order: "04", title: "밤산책", imgname: "/img/exhibitpage/paintings/A-Night-Walk.jpg", overview: "162x130cm", overview1: "oil-on-canvas, 2022"},
        {order: "05", title: "That very moment of Falling", imgname: "/img/exhibitpage/paintings/That-very-moment-of-falling.jpg", overview: "104x91cm", overview1: "oil-on-canvas, 2021"},
        {order: "06", title: "내가 없는 골목", imgname: "/img/exhibitpage/paintings/내가-없는-골목.jpg", overview: "117x80.3cm", overview1: "oil-on-canvas, 2022"},
        {order: "07", title: "둘", imgname: "/img/exhibitpage/paintings/둘.jpg", overview: "31.8x40.9m", overview1: "oil-on-canvas, 2022"},
        {order: "08", title: "물 (Something Watery)", imgname: "/img/exhibitpage/paintings/물.jpg", overview: "65.1x50cm", overview1: "oil-on-linen, 2021"},
        {order: "09", title: "이후 (A Step Behind)", imgname: "/img/exhibitpage/paintings/이후.jpg", overview: "65.1x50cm", overview1: "oil-on-linen, 2020"},
        {order: "10", title: "흐르는 빛", imgname: "/img/exhibitpage/paintings/흐르는-빛.jpg", overview: "65.1x53cm", overview1: "oil-on-canvas, 2022"},
        {order: "11", title: "흔적", imgname: "/img/exhibitpage/paintings/흔적.jpg", overview: "112x194m", overview1: "oil-on-canvas, 2022"},
        {order: "12", title: "그림자 앞에서", imgname: "/img/exhibitpage/paintings/그림자-앞에서.jpg", overview: "60.6x45.5cm", overview1: "oil-on-canvas, 2021"},
    ];

    const length = paintdata.length;

    function nextExhibit() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    function prevExhibit() {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    
    function handleRefresh() {
        router.reload();
    }

    return(
        <Viewlayout>
            {/* 3D 콘텐츠 구역 */}
            <Viewcontent 
                url={paintdata[current].imgname}
            />
            {/* 그림 넘기기 버튼 */}
            <div className="absolute h-[70px] w-[70px] left-40 bottom-80 2xl:h-[300px] 2xl:w-[300px] 2xl:left-80 2xl:top-1/2 2xl:transform 2xl:-translate-y-1/2">
                <button
                    id="left"
                    className="h-full w-full 2xl:h-[140px] 2xl:w-[140px]"
                    onClick={()=>prevExhibit()}
                >   
                    <img 
                        src="/img/exhibitpage/icons/왼쪽버튼.png"
                        alt="left"
                    />
                </button>
            </div>
            <div className="absolute h-[70px] w-[70px] right-40 bottom-80 2xl:h-[300px] 2xl:w-[300px] 2xl:right-80 2xl:top-1/2 2xl:transform 2xl:-translate-y-1/2">
                <button
                    id="right"
                    className="h-full w-full 2xl:h-[140px] 2xl:w-[140px]"
                    onClick={()=>nextExhibit()}
                >   
                    <img 
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
                            <span className="text-Awhite font-bold text-2xl 2xl:text-5xl">{paintdata[current].title}</span>
                            <span className="text-Dgrey font-bold text-xl 2xl:text-4xl">{'Meteor'}</span>
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
                                    <span className="font-bold text-Awhite text-lg 2xl:text-3xl">{'김대유'}</span>
                                    <span className="font-bold text-Awhite text-base 2xl:text-2xl">{paintdata[current].overview}</span>
                                    <span className="font-bold text-Awhite text-base 2xl:text-2xl">{paintdata[current].overview1}</span>
                                </div>
                                <span className="font-bold text-Awhite text-5xl 2xl:text-7xl">{paintdata[current].order}{'.'}</span>
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
