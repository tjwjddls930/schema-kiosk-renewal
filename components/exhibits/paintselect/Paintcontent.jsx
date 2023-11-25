import { useState, useRef, useEffect, useContext } from "react";
import { allExhibits } from "@/data/pastExhibit";
import { useRouter } from "next/router";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import clsx from "clsx";
import { allExhibits_KOR } from "@/data/allExhibits_KOR";
import { allExhibits_ENG } from "@/data/allExhibits_ENG";
import { allExhibits_CH } from "@/data/allExhibits_CH";
import { allExhibits_TH } from "@/data/allExhibits_TH";
import { allExhibits_VI } from "@/data/allExhibits_VI";

const viewText = {
    KOR: "작품 감상하기",
    ENG: "View Art Work",
    CH: "欣赏工作",
    TH: "ชื่นชมผลงาน",
    VI: "Đánh giá cao công việc",
};

const individualText = {
    KOR: "주요 개인전",
    ENG: "Major Solo Exhibition",
    CH: "主要个展",
    TH: "นิทรรศการเดี่ยวครั้งสำคัญ",
    VI: "Triển lãm cá nhân lớn",
};

const groupText = {
    KOR: "주요 단체전",
    ENG: "Major Group Exhibitions",
    CH: "主要群展",
    TH: "นิทรรศการกลุ่มใหญ่",
    VI: "Triển lãm nhóm lớn",
};

const noteText = {
    KOR: "작가노트 보기",
    ENG: "View Artist's Notes",
    CH: "查看作者笔记",
    TH: "ดูบันทึกของผู้เขียน",
    VI: "Xem ghi chú của tác giả"
};

const inputData = {
    KOR: allExhibits_KOR,
    ENG: allExhibits_ENG,
    CH: allExhibits_CH,
    TH: allExhibits_TH,
    VI: allExhibits_VI,
};

const Paintcontent = () => {
    const {language} = useContext(LanguageContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    const maxScrollWidth = useRef(0);
    const carousel = useRef(null);
    const [current, setCurrent] = useState(0);
    const [data, setData] = useState(null);
    const [length, setLength] = useState(null);
    const router = useRouter();
    const pid = router.query.slug; 
    const {order, artist} = router.query;

    useEffect(()=> {
        // if(pid && order && artist && allExhibits?.[pid]?.exhibits?.[order]?.artist?.[artist]) {
        if(pid && order && artist && inputData?.[language]?.[pid]?.exhibits?.[order]?.artist?.[artist]) {
            setData(inputData[language][pid].exhibits[order].artist[artist]);
            setLength(inputData[language][pid].exhibits[order].artist[artist].paint.length);
        } else {
            setData(null);
            setLength(null);
        }
    }, [pid, order, artist, language])

    function nextExhibit() {
        // if(carousel.current !== null && carousel.current.offsetWidth * current <= maxScrollWidth.current) {
        //     setCurrent((prevState)=> prevState + 1);
        // }
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    function prevExhibit() {
        // if(current > 0) {
        //     setCurrent((prevState)=> prevState - 1);
        // }
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    
    useEffect(()=> {
        if(carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * current
        }
    }, [current]);

    useEffect(()=> {
        maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0;
    },[]);

    return(
       <>
        {data && (
            <div className="w-full flex flex-col space-y-1 screen-w:space-y-6">
                <div
                 ref={carousel} 
                 className={clsx(isPortrait ? "grid gap-6 grid-cols-3 w-[85%] h-[2000px] mx-auto items-center pt-72 overflow-x-auto overflow-y-hidden" : "h-2/3 w-full px-12 py-3 screen-w:pt-8 screen-w:px-16 flex flex-row overflow-x-auto overflow-y-hidden space-x-4")}>
                 {data.paint.map((item, index)=> (
                     <div
                            key={item.order} 
                            className="h-1/2 w-1/3 screen-w:h-[750px] screen-w:w-[850px] flex flex-col">
                            <div className="w-full flex justify-between p-2">
                                <div
                                    key={item.imgname} 
                                    className="flex flex-col space-y-1 screen-w:space-y-2">
                                    <span className="font-bold text-Ablack text-sm screen-w:text-screen-w">{item.title}</span>
                                    <span className="font-bold text-Cgrey text-xs screen-w:text-lg">{item.overview}</span>
                                    <span className="font-bold text-Cgrey text-xs screen-w:text-lg">{item.overview1}</span>
                                </div>
                                <span className="font-bold text-black text-3xl screen-w:text-6xl">{item.order}</span>
                            </div>
                            <div className="h-[1px] w-full bg-Cpurple mb-3"/>
                            <div className="relative group w-[850px] h-5/6">
                                <img 
                                    className={clsx(`shadow-xl flex mx-auto ${index === current ? "border-4 border-Awhite" : null}`)}
                                    src={`/img/exhibitpage/paintings/${item.imgname}`}
                                    alt="paintings"
                                    onClick={()=>router.push(`/artist/paint/viewpage/${item.order}?order=${order}&year=${pid}`)}
                                />
                                <div className="absolute h-20 screen-w:h-28 w-full bg-Ablack bg-opacity-50 bottom-0 left-0"
                                    onClick={()=>router.push(`/artist/paint/viewpage/${item.order}?order=${order}&year=${pid}`)}
                                >
                                    <div className="flex justify-between p-4 screen-w:p-6">
                                        <span className="font-bold text-base pt-2 screen-w:pt-4 text-Awhite screen-w:text-2xl">{viewText[language]}</span>
                                        <button className="bg-black rounded-full h-10 w-10 screen-w:h-18 screen-w:w-18 items-cetner text-center screen-w:pt-2">
                                            <img 
                                                src="/img/exhibitpage/icons/화살표버튼.png"
                                                alt="arrow"
                                            />
                                        </button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             {isPortrait ?
             <div className="h-[600px] w-11/12 screen-w:h-[700px] flex flex-col space-y-1 px-12 py-3 screen-w:space-y-5 screen-w:px-16 mx-auto">
                <div className="w-20 h-[1px] bg-Ablue mb-1 screen-w:mb-2" />
                <span className="text-sm screen-w:text-6xl font-bold text-Bgrey">{data.engname}</span>
                <span className="text-base screen-w:text-7xl font-bold text-black mb-2 screen-w:mb-4">{data.name}</span>
                <span className="text-xs screen-w:text-4xl font-bold text-black mb-2 screen-w:mb-4">{data.career}</span>
                <div className="flex h-full flex-row space-x-8 w-full mx-auto">
                    <div className="h-full w-1/2 mx-auto flex flex-col space-y-6">
                        <span className="text-sm screen-w:text-4xl text-Ablue font-bold">{individualText[language]}</span>
                        <div className="overflow-auto w-full h-[10%] screen-w:h-3/4 flex flex-col space-y-2">
                            {data.individual_exhibition.map((item)=> (
                                <span key={item.order} className="text-xs screen-w:text-3xl text-Cgrey font-bold">{item.exhibit}</span>
                            ))}
                        </div>
                    </div>
                    <div className="h-full w-1/2 mx-auto flex flex-col space-y-6">
                    <span className="text-sm screen-w:text-4xl text-Ablue font-bold mt-4">{groupText[language]}</span>
                        <div className="overflow-auto w-full h-[10%] screen-w:h-3/4 flex flex-col space-y-2">
                            {data.group_exhibition.map((item)=> (
                                <span key={item.order} className="text-xs screen-w:text-3xl text-Cgrey font-bold">{item.exhibit}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="h-8 w-[100px] text-sm screen-w:h-[100px] screen-w:w-[400px] screen-w:text-3xl font-bold text-Awhite rounded-md bg-gradient-to-r from-Bblue to-Ablue shadow-md">
                    {noteText[language]}
                </button>
            </div>
            :
            <div className="w-[30%] h-[600px] screen-w:w-[35%] screen-w:h-[700px] flex flex-col space-y-1 px-12 py-3 screen-w:space-y-5 screen-w:px-16">
                 <div className="w-20 h-[1px] bg-Ablue mb-1 screen-w:mb-2" />
                 <span className="text-sm screen-w:text-6xl font-bold text-Bgrey">{data.engname}</span>
                 <span className="text-base screen-w:text-7xl font-bold text-black mb-2 screen-w:mb-4">{data.name}</span>
                 <span className="text-xs screen-w:text-4xl font-bold text-black mb-2 screen-w:mb-4">{data.career}</span>
                 <span className="text-sm screen-w:text-4xl text-Ablue font-bold">{individualText[language]}</span>
                 <div className="overflow-auto w-full h-[10%] screen-w:h-1/2 flex flex-col space-y-1">
                     {data.individual_exhibition.map((item)=> (
                         <span key={item.order} className="text-xs screen-w:text-screen-w text-Cgrey font-bold">{item.exhibit}</span>
                     ))}
                 </div>
                 <span className="text-sm screen-w:text-4xl text-Ablue font-bold mt-4">{groupText[language]}</span>
                 <div className="overflow-auto w-full h-[10%] screen-w:h-1/2 flex flex-col space-y-1">
                     {data.group_exhibition.map((item)=> (
                         <span key={item.order} className="text-xs screen-w:text-screen-w text-Cgrey font-bold">{item.exhibit}</span>
                     ))}
                 </div>
                 <button className="h-8 w-[100px] text-sm screen-w:h-48 screen-w:w-[400px] screen-w:text-3xl font-bold text-Awhite rounded-md bg-gradient-to-r from-Bblue to-Ablue shadow-md">
                     {noteText[language]}
                </button>
             </div>
             }
             <div className="h-[30px] w-[300px] screen-w:w-[800px] absolute right-72 bottom-28 screen-w:bottom-72 screen-w:right-96">
                 <div className="flex flex-row space-x-2 screen-w:space-x-4">
                     <div className="h-2 w-2 screen-w:h-4 screen-w:w-4 bg-Ablue rounded-full" />
                     <div className="h-2 w-2 screen-w:h-4 screen-w:w-4 bg-Ablue rounded-full" />
                     <div className="h-2 w-2 screen-w:h-4 screen-w:w-4 bg-Ablue rounded-full" />
                 </div>
             </div>
             <button 
                 onClick={prevExhibit}
                 className="absolute w-[208px] h-16 screen-w:h-32 screen-w:w-[320px] text-xl font-bold text-Awhite bg-Ablue focus:bg-Bblue rounded-l-md bottom-28 right-52 screen-w:bottom-72 screen-w:right-80">
                    <svg 
                        id="left"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" 
                        className="w-8 h-8 screen-w:w-24 screen-w:h-24 text-Awhite flex mx-auto"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
             </button>
             <button 
                 onClick={nextExhibit}
                 className="absolute w-[208px] h-16 text-xl screen-w:h-32 screen-w:w-[320px] font-bold text-Awhite bg-Ablue focus:bg-Bblue rounded-r-md bottom-28 right-0 screen-w:bottom-72">
                    <svg 
                        id="right"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" 
                        className="w-8 h-8 screen-w:w-24 screen-w:h-24 text-Awhite flex mx-auto"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
             </button>
         </div>
        )
        }
       </>
    )
};

export default Paintcontent;