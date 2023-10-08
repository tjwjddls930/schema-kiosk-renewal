import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { artistData } from "@/data/artistData";
import { useRouter } from "next/router";

export default function Paintcontent() {
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
            <div className="w-full flex flex-row space-x-6">
             <div className="w-[30%] h-[600px] 2xl:w-[35%] 2xl:h-[700px] flex flex-col space-y-1 px-12 py-3 2xl:space-y-5 2xl:px-16 2xl:py-8">
                 <div className="w-20 h-[1px] bg-Cpurple mb-2" />
                 <span className="text-md 2xl:text-6xl font-bold text-Bgrey">{data.engname}</span>
                 <span className="text-lg 2xl:text-7xl font-bold text-black mb-4">{data.name}</span>
                 <span className="text-xs 2xl:text-4xl font-bold text-black mb-4">{data.career}</span>
                 <span className="text-base 2xl:text-4xl text-Cpurple font-bold">{'주요 개인전'}</span>
                 {/* {individual.map((item)=> (
                     <span key={item.order} className="text-xs 2xl:text-2xl text-Cgrey font-bold">{item.exhibit}</span>
                 ))} */}
                 <div className="overflow-auto w-full h-[20%] 2xl:h-1/2 flex flex-col space-y-1">
                     {data.individual_exhibition.map((item)=> (
                         <span key={item.order} className="text-xs 2xl:text-2xl text-Cgrey font-bold">{item.exhibit}</span>
                     ))}
                 </div>
                 <span className="text-base 2xl:text-4xl text-Cpurple font-bold mt-4">{'주요 단체전'}</span>
                 {/* {community.map((item)=> (
                     <span key={item.order} className="text-xs 2xl:text-2xl text-Cgrey font-bold">{item.exhibit}</span>
                 ))} */}
                 <div className="overflow-auto w-full h-[20%] 2xl:h-1/2 flex flex-col space-y-1">
                     {data.group_exhibition.map((item)=> (
                         <span key={item.order} className="text-xs 2xl:text-2xl text-Cgrey font-bold">{item.exhibit}</span>
                     ))}
                 </div>
             </div>
             <div
                 ref={carousel} 
                 className="h-2/3 w-2/3 2xl:w-3/4 flex flex-row overflow-auto space-x-4">
                 {data.paint.map((item, index)=> (
                     <div
                         key={item.order} 
                         className="h-[475px] w-[250px] 2xl:h-[800px] 2xl:w-[550px] flex flex-col">
                         <div className="w-[250px] 2xl:w-[550px] flex justify-between p-2">
                             <div
                                 key={item.imgname} 
                                 className="flex flex-col space-y-1 2xl:space-y-2">
                                 <span className="font-bold text-Ablack text-sm 2xl:text-2xl">{item.title}</span>
                                 <span className="font-bold text-Cgrey text-xs 2xl:text-lg">{item.overview}</span>
                                 <span className="font-bold text-Cgrey text-xs 2xl:text-lg">{item.overview1}</span>
                             </div>
                             <span className="font-bold text-black text-3xl 2xl:text-6xl">{item.order}</span>
                         </div>
                         <div className="h-[1px] w-full bg-Cpurple mb-3"/>
                         <div className="relative group">
                             <img 
                                 className={`h-[250px] 2xl:h-[550px] w-full shadow-xl ${index === current ? "border-4 border-Awhite" : null}`}
                                 src={`/img/exhibitpage/paintings/${item.imgname}`}
                                 alt="paintings"
                             />
                             <div className="absolute h-20 2xl:h-28 w-full bg-Ablack bg-opacity-50 bottom-0 left-0">
                                 <div className="flex justify-between p-4 2xl:p-6">
                                     <span className="font-bold pt-2 2xl:pt-4 text-Awhite 2xl:text-2xl">{'작품 감상하기'}</span>
                                     <Link href={`/artist/paint/viewpage/${item.order}`}>
                                         <button className="bg-black rounded-full h-10 w-10 2xl:h-18 2xl:w-18 items-cetner text-center 2xl:pt-2">
                                             <img 
                                                 src="/img/exhibitpage/icons/화살표버튼.png"
                                                 alt="arrow"
                                             />
                                         </button>
                                     </Link>    
                                 </div>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
             <button className="absolute h-12 w-[150px] text-lg 2xl:h-24 2xl:w-[300px] 2xl:text-3xl font-bold text-Awhite rounded-md bg-gradient-to-r from-Agradient to-Bgradient bottom-44 left-8 2xl:bottom-96 2xl:left-10 shadow-md">
                     {'작가노트 보기'}
             </button>
             <div className="h-[30px] w-[300px] 2xl:w-[800px] absolute right-72 bottom-28 2xl:bottom-72 2xl:right-96">
                 <div className="flex flex-row space-x-2 2xl:space-x-4">
                     <div className="h-2 w-2 2xl:h-4 2xl:w-4 bg-Cpurple rounded-full" />
                     <div className="h-2 w-2 2xl:h-4 2xl:w-4 bg-Cpurple rounded-full" />
                     <div className="h-2 w-2 2xl:h-4 2xl:w-4 bg-Cpurple rounded-full" />
                 </div>
             </div>
             <button 
                 // onClick={()=> prevExhibit()}
                 onClick={prevExhibit}
                 className="absolute w-[208px] h-16 2xl:h-32 2xl:w-[320px] text-xl font-bold text-Awhite bg-Cpurple focus:bg-Bpurple rounded-l-md bottom-28 right-52 2xl:bottom-72 2xl:right-80">
                     <img
                         className="h-8 w-8 2xl:h-12 2xl:w-12 mx-auto"
                         src="/img/exhibitpage/icons/왼쪽버튼.png"
                         alt="left"
                     />
             </button>
             <button 
                 // onClick={()=> nextExhibit()}
                 onClick={nextExhibit}
                 className="absolute w-[208px] h-16 text-xl 2xl:h-32 2xl:w-[320px] font-bold text-Awhite bg-Cpurple focus:bg-Bpurple rounded-r-md bottom-28 right-0 2xl:bottom-72">
                     <img 
                         className="h-8 w-8 2xl:h-12 2xl:w-12 mx-auto"
                         src="/img/exhibitpage/icons/오른쪽버튼.png"
                         alt="right"
                     />
             </button>
         </div>
        )
        }
       </>
    )
}