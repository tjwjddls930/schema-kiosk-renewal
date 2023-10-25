import { useState, useEffect } from "react";
import Soundguide from "@/components/docent/Soundguide";

const EducationContent = ({img, clip, type, title, explanation, participate, time1, participate1, location, host, support}) => {
    const [isClient, setIsClient] = useState(false);
    const [popup, setPopup] = useState(false);
    const [video, setVideo] = useState(null);
    useEffect(() => {
        // Update the isClient state to true as this code will be executed only on client side
        setIsClient(true);
      }, []);
    console.log(video);
    return(
       <>
        {isClient && (
            <div className="h-3/4 w-[90%] flex flex-row mx-auto space-x-8 screen-w:space-x-12">
                {popup && (
                    <div className="absolute top-0 left-0 h-[91%] screen-w:h-[95%] w-screen bg-Ablack bg-opacity-60 z-20">
                        <div className="absolute transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 h-2/3 w-2/3">
                            {video && (
                            <Soundguide 
                                videoUrl={video}
                                playing={true}
                                end={()=>setPopup(!popup)}
                            />
                            )}
                        </div>
                        <button
                            onClick={()=>setPopup(!popup)}
                            className="absolute h-10 w-[200px] screen-w:h-28 screen-w:w-[500px] text-center text-base screen-w:text-4xl text-Awhite font-bold items-center bottom-28 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-Bblue to-Ablue">
                            {'닫기'}
                        </button>
                    </div>
                )}
                <div className="flex h-full flex-col space-y-4 screen-w:space-y-12 w-[40%] text-center">
                    <div className="flex h-[48%] w-full z-10 items-center mx-auto">
                        <img 
                            // src="/img/educationpage/education_1.png"
                            src={img}
                            className="w-full h-full mx-auto shadow-xl"
                            alt="education"
                        />
                    </div>
                    <span className="font-bold text-Ablack text-base screen-w:text-7xl">{'교육 영상'}</span>
                    <div className="flex flex-row space-x-2 screen-w:space-x-6 h-[28%] w-full z-10 items-center mx-auto overflow-auto scroll-smooth">
                    {clip.map((item, index)=> (
                        <img 
                            key={index}
                            src={item.thumbnail}
                            // onClick={()=>setPopup(!popup)}
                            onClick={()=> {
                                setVideo(item.url)
                                setPopup(!popup)
                            }}
                            className="w-[320px] h-[180px] screen-w:w-[720px] screen-w:h-full mx-auto shadow-xl"
                            alt="thumbnail"
                        />
                    ))}
                    </div>
                </div>
                <div className="h-full w-[60%] flex flex-col space-y-6 screen-w:space-y-12">
                    <div className="w-3/4 flex flex-col space-y-2 screen-w:space-y-8">
                        <div className="bg-Ablue h-[1px] w-[70px] screen-w:w-[200px]" />
                        <span className="text-sm screen-w:text-6xl font-bold text-Bgrey">{type}</span>
                        <span className="text-base screen-w:text-7xl font-bold text-Ablack screen-w:leading-normal">{title}</span>
                    </div>
                    <div className="bg-Dgrey bg-opacity-30 flex flex-row justify-center px-6 py-8 space-x-4 screen-w:py-24 screen-w:space-x-8 mx-auto h-[70%] w-full">
                        <div className="w-1/2 h-full mx-auto overflow-auto scroll-smooth">
                            <p className="text-Bgrey text-sm screen-w:text-4xl px-4 screen-w:px-12 leading-normal screen-w:leading-loose font-bold">
                                {explanation}
                            </p>
                        </div>
                        <div className="bg-Cgrey w-[1px] h-[90%]" />
                        <div className="w-1/2 flex flex-row space-x-4 px-4">
                            <div className="w-1/4 flex flex-col space-y-3 text-xs screen-w:text-4xl screen-w:space-y-8 text-Ablack font-bold">
                                <span className="h-12">{'교육대상'}</span>
                                <span className="h-12">{'교육시간'}</span>
                                <span className="h-12">{'참여인원'}</span>
                                <span className="h-12">{'교육장소'}</span>
                                <span className="h-12">{'주최'}</span>
                                <span className="h-12">{'후원'}</span>
                            </div>
                            <div className="w-3/4 flex flex-col space-y-3 text-xs screen-w:text-4xl screen-w:space-y-8 text-Cgrey font-bold">
                                <span className="h-12 whitespace-nowrap overflow-auto">{participate}</span>
                                <span className="h-12 whitespace-nowrap overflow-auto">{time1}</span>
                                <span className="h-12 whitespace-nowrap overflow-auto">{participate1}</span>
                                <span className="h-12 whitespace-nowrap overflow-auto">{location}</span>
                                <span className="h-12 whitespace-nowrap overflow-auto">{host}</span>
                                <span className="whitespace-nowrap overflow-auto">{support}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
       </>
    )
};

export default EducationContent;