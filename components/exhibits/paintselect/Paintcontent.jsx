import { useState, useRef, useEffect, useContext } from "react";
import Link from "next/link";
import { artistData } from "@/data/artistData";
import { useRouter } from "next/router";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import clsx from "clsx";

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

    useEffect(()=> {
        setData(artistData[pid]);
        if(artistData[pid]) {
            setLength(artistData[pid].paint.length);
        }
    }, [pid])

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
                 className={clsx(isPortrait ? "grid gap-6 grid-cols-3 w-[85%] h-[2000px] mx-auto items-center pt-72 overflow-auto" : "h-2/3 w-full px-12 py-3 screen-w:pt-8 screen-w:px-16 flex flex-row overflow-auto space-x-4")}>
                 {data.paint.map((item, index)=> (
                     <div
                            key={item.order} 
                            className="h-1/2 w-1/3 screen-w:h-[800px] screen-w:w-[550px] flex flex-col">
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
                            <div className="relative group">
                                <img 
                                    className={`h-[150px] screen-w:h-[550px] w-full shadow-xl ${index === current ? "border-4 border-Awhite" : null}`}
                                    src={`/img/exhibitpage/paintings/${item.imgname}`}
                                    alt="paintings"
                                />
                                <div className="absolute h-20 screen-w:h-28 w-full bg-Ablack bg-opacity-50 bottom-0 left-0">
                                    <Link href={`/artist/paint/viewpage/${item.order}`}>
                                        <div className="flex justify-between p-4 screen-w:p-6">
                                            <span className="font-bold text-base pt-2 screen-w:pt-4 text-Awhite screen-w:text-2xl">{viewText[language]}</span>
                                            <button className="bg-black rounded-full h-10 w-10 screen-w:h-18 screen-w:w-18 items-cetner text-center screen-w:pt-2">
                                                <img 
                                                    src="/img/exhibitpage/icons/화살표버튼.png"
                                                    alt="arrow"
                                                />
                                            </button> 
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             {isPortrait ?
             <div className="h-[600px] w-11/12 screen-w:h-[700px] flex flex-col space-y-1 px-12 py-3 screen-w:space-y-5 screen-w:px-16 mx-auto">
                <div className="w-20 h-[1px] bg-Cpurple mb-1 screen-w:mb-2" />
                <span className="text-sm screen-w:text-6xl font-bold text-Bgrey">{data.engname}</span>
                <span className="text-base screen-w:text-7xl font-bold text-black mb-2 screen-w:mb-4">{data.name}</span>
                <span className="text-xs screen-w:text-4xl font-bold text-black mb-2 screen-w:mb-4">{data.career}</span>
                <div className="flex h-full flex-row space-x-8 w-full mx-auto">
                    <div className="h-full w-1/2 mx-auto flex flex-col space-y-6">
                        <span className="text-sm screen-w:text-4xl text-Cpurple font-bold">{individualText[language]}</span>
                        <div className="overflow-auto w-full h-[10%] screen-w:h-3/4 flex flex-col space-y-2">
                            {data.individual_exhibition.map((item)=> (
                                <span key={item.order} className="text-xs screen-w:text-3xl text-Cgrey font-bold">{item.exhibit}</span>
                            ))}
                        </div>
                    </div>
                    <div className="h-full w-1/2 mx-auto flex flex-col space-y-6">
                    <span className="text-sm screen-w:text-4xl text-Cpurple font-bold mt-4">{groupText[language]}</span>
                        <div className="overflow-auto w-full h-[10%] screen-w:h-3/4 flex flex-col space-y-2">
                            {data.group_exhibition.map((item)=> (
                                <span key={item.order} className="text-xs screen-w:text-3xl text-Cgrey font-bold">{item.exhibit}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="h-8 w-[100px] text-sm screen-w:h-[100px] screen-w:w-[400px] screen-w:text-3xl font-bold text-Awhite rounded-md bg-gradient-to-r from-Agradient to-Bgradient shadow-md">
                    {noteText[language]}
                </button>
            </div>
            :
            <div className="w-[30%] h-[600px] screen-w:w-[35%] screen-w:h-[700px] flex flex-col space-y-1 px-12 py-3 screen-w:space-y-5 screen-w:px-16">
                 <div className="w-20 h-[1px] bg-Cpurple mb-1 screen-w:mb-2" />
                 <span className="text-sm screen-w:text-6xl font-bold text-Bgrey">{data.engname}</span>
                 <span className="text-base screen-w:text-7xl font-bold text-black mb-2 screen-w:mb-4">{data.name}</span>
                 <span className="text-xs screen-w:text-4xl font-bold text-black mb-2 screen-w:mb-4">{data.career}</span>
                 <span className="text-sm screen-w:text-4xl text-Cpurple font-bold">{individualText[language]}</span>
                 <div className="overflow-auto w-full h-[10%] screen-w:h-1/2 flex flex-col space-y-1">
                     {data.individual_exhibition.map((item)=> (
                         <span key={item.order} className="text-xs screen-w:text-screen-w text-Cgrey font-bold">{item.exhibit}</span>
                     ))}
                 </div>
                 <span className="text-sm screen-w:text-4xl text-Cpurple font-bold mt-4">{groupText[language]}</span>
                 <div className="overflow-auto w-full h-[10%] screen-w:h-1/2 flex flex-col space-y-1">
                     {data.group_exhibition.map((item)=> (
                         <span key={item.order} className="text-xs screen-w:text-screen-w text-Cgrey font-bold">{item.exhibit}</span>
                     ))}
                 </div>
                 <button className="h-8 w-[100px] text-sm screen-w:h-48 screen-w:w-[400px] screen-w:text-3xl font-bold text-Awhite rounded-md bg-gradient-to-r from-Agradient to-Bgradient shadow-md">
                     {noteText[language]}
                </button>
             </div>
             }
             <div className="h-[30px] w-[300px] screen-w:w-[800px] absolute right-72 bottom-28 screen-w:bottom-72 screen-w:right-96">
                 <div className="flex flex-row space-x-2 screen-w:space-x-4">
                     <div className="h-2 w-2 screen-w:h-4 screen-w:w-4 bg-Cpurple rounded-full" />
                     <div className="h-2 w-2 screen-w:h-4 screen-w:w-4 bg-Cpurple rounded-full" />
                     <div className="h-2 w-2 screen-w:h-4 screen-w:w-4 bg-Cpurple rounded-full" />
                 </div>
             </div>
             <button 
                 onClick={prevExhibit}
                 className="absolute w-[208px] h-16 screen-w:h-32 screen-w:w-[320px] text-xl font-bold text-Awhite bg-Cpurple focus:bg-Bpurple rounded-l-md bottom-28 right-52 screen-w:bottom-72 screen-w:right-80">
                     <img
                         className="h-8 w-8 screen-w:h-12 screen-w:w-12 mx-auto"
                         src="/img/exhibitpage/icons/left.png"
                         alt="left"
                     />
             </button>
             <button 
                 onClick={nextExhibit}
                 className="absolute w-[208px] h-16 text-xl screen-w:h-32 screen-w:w-[320px] font-bold text-Awhite bg-Cpurple focus:bg-Bpurple rounded-r-md bottom-28 right-0 screen-w:bottom-72">
                     <img 
                         className="h-8 w-8 screen-w:h-12 screen-w:w-12 mx-auto"
                         src="/img/exhibitpage/icons/right.png"
                         alt="right"
                     />
             </button>
         </div>
        )
        }
       </>
    )
};

export default Paintcontent;