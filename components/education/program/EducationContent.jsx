import { useState, useEffect, useContext } from "react";
import Soundguide from "@/components/docent/Soundguide";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import { FontsizeContext } from "@/contexts/FontsizeContext";
import { educationData_KOR } from "@/data/educationData_KOR";
import { educationData_ENG } from "@/data/educationData_ENG";
import { educationData_CH } from "@/data/educationData_CH";
import { educationData_TH } from "@/data/educationData_TH";
import { educationData_VI } from "@/data/educationData_VI";
import { useRouter } from "next/router";
import clsx from "clsx";

const clipText = {
    KOR: "교육 영상",
    ENG: "Education Video",
    CH: "教育视频",
    TH: "วิดีโอการศึกษา",
    VI: "video giáo dục"
};

const dataText = {
    KOR: (font) => (
        <div className={clsx("w-1/2 flex flex-col space-y-3 screen-w:space-y-8 text-Ablack font-bold", font 
        ? "text-sm screen-w:text-5xl" 
        : "text-xs screen-w:text-4xl")}>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'교육대상'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'교육시간'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'참여인원'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'교육장소'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'주최'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'후원'}</span>
        </div>
    ),
    ENG: (font) => (
        <div className={clsx("w-1/2 flex flex-col space-y-3 screen-w:space-y-8 text-Ablack font-bold", font 
        ? "text-sm screen-w:text-5xl" 
        : "text-xs screen-w:text-4xl")}>            
            <span className={clsx("h-12", font ? "h-16" : "")}>{'Education Target'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'Time'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'Number of Participants'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'Location'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'Host'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'Support'}</span>
        </div>
    ),
    CH: (font) => (
        <div className={clsx("w-1/2 flex flex-col space-y-3 screen-w:space-y-8 text-Ablack font-bold", font 
        ? "text-sm screen-w:text-5xl" 
        : "text-xs screen-w:text-4xl")}>            <span className="h-12">{'教育目标'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'训练时间'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'参加人数'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'教育场所'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'主持人'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'支持'}</span>
        </div>
    ),
    TH: (font) => (
        <div className={clsx("w-1/2 flex flex-col space-y-3 screen-w:space-y-8 text-Ablack font-bold", font 
        ? "text-sm screen-w:text-5xl" 
        : "text-xs screen-w:text-4xl")}>            <span className="h-12">{'เป้าหมายทางการศึกษา'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'เวลาฝึกอบรม'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'จำนวนผู้เข้าร่วม'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'สถานที่ศึกษา'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'เจ้าภาพ'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'สนับสนุน'}</span>
        </div>
    ),
    VI: (font) => (
        <div className={clsx("w-1/2 flex flex-col space-y-3 screen-w:space-y-8 text-Ablack font-bold", font 
        ? "text-sm screen-w:text-5xl" 
        : "text-xs screen-w:text-4xl")}>            <span className="h-12">{'mục tiêu đào tạo'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'thời gian huấn luyện'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'Số lượng người tham gia'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'Nơi giáo dục'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'chủ nhà'}</span>
            <span className={clsx("h-12", font ? "h-16" : "")}>{'ủng hộ'}</span>
        </div>
    ),
};

const popupText = {
    KOR: "닫기",
    ENG: "Close",
    CH: "关闭",
    TH: "ปิด",
    VI: "đóng",
};

const inputData = {
  KOR: educationData_KOR,
  ENG: educationData_ENG,
  CH: educationData_CH,
  TH: educationData_TH,
  VI: educationData_VI
};
const EducationContent = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const pid = router.query.slug; // 'slug'([slug]) is the name of the dynamic parameter
    const {index} = router.query;
    const {language} = useContext(LanguageContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    const {fontsize} = useContext(FontsizeContext);
    const [popup, setPopup] = useState(false);
    const [video, setVideo] = useState(null);
    useEffect(() => {
        // Update the isClient state to true as this code will be executed only on client side
        setIsClient(true);
      }, []);

    return(
       <>
        {isClient && (
            <div className={clsx(isPortrait ? "h-3/4 w-[90%] flex flex-col mx-auto space-y-8 screen-w:space-y-12" : "h-3/4 w-[90%] flex flex-row mx-auto space-x-8 screen-w:space-x-12")}>
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
                            {popupText[language]}
                        </button>
                    </div>
                )}
                <div className={clsx(isPortrait ? "flex w-11/12 h-1/2 flex-col space-y-4 screen-w:space-y-12 text-center mx-auto" : "flex h-full w-[40%] flex-col space-y-4 screen-w:space-y-12 text-center")}>
                    <div className={clsx(isPortrait ? "flex h-[60%] w-full z-10 items-center mx-auto" : "flex h-[48%] w-full z-10 items-center mx-auto")}>
                        <img 
                            // src="/img/educationpage/education_1.png"
                            src={inputData[language][pid].education[index].img}
                            className="w-full h-full mx-auto shadow-xl"
                            alt="education"
                        />
                    </div>
                    <span className="font-bold text-Ablack text-base screen-w:text-7xl">{clipText[language]}</span>
                    <div className="flex flex-row space-x-2 screen-w:space-x-6 h-[28%] w-full z-10 items-center mx-auto overflow-auto scroll-smooth">
                    {inputData[language][pid].education[index].youtube.map((item, index)=> (
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
                <div className={clsx(isPortrait ? "h-1/2 w-11/12 flex flex-col space-y-6 screen-w:space-y-12 mx-auto" : "h-full w-[60%] flex flex-col space-y-6 screen-w:space-y-12")}>
                    <div className={clsx(isPortrait ? "w-full flex flex-col space-y-2 screen-w:space-y-8" : "w-3/4 flex flex-col space-y-2 screen-w:space-y-8")}>
                        <div className="bg-Ablue h-[1px] w-[70px] screen-w:w-[200px]" />
                        <span className={clsx("font-bold text-Bgrey", fontsize ? "text-base screen-w:text-[66px]" : "text-sm screen-w:text-6xl")}>{inputData[language][pid].education[index].type}</span>
                        <span className={clsx("font-bold text-Ablack screen-w:leading-normal", fontsize ? "text-lg screen-w:text-[80px]" : "text-base screen-w:text-7xl")}>{inputData[language][pid].education[index].title}</span>
                    </div>
                    <div className="bg-Dgrey bg-opacity-30 flex flex-row justify-center px-6 py-8 space-x-4 screen-w:py-24 screen-w:space-x-8 mx-auto h-[70%] w-full">
                        <div className="w-1/2 h-full mx-auto overflow-auto scroll-smooth">
                            <p className={clsx("text-Bgrey px-4 screen-w:px-12 leading-normal screen-w:leading-loose font-bold", fontsize ? "text-base screen-w:text-5xl" : "text-sm screen-w:text-4xl")}>
                                {inputData[language][pid].education[index].explanation}
                            </p>
                        </div>
                        <div className="bg-Cgrey w-[1px] h-[90%]" />
                        <div className="w-1/2 flex flex-row space-x-4 px-4">
                            {dataText[language](fontsize)}
                            <div className={clsx("w-1/2 flex flex-col space-y-3 screen-w:space-y-8 text-Cgrey font-bold", fontsize 
                            ? "text-sm screen-w:text-5xl" 
                            : "text-xs screen-w:text-4xl")}>
                                <span className={clsx("h-12 whitespace-nowrap overflow-auto", fontsize ? "screen-w:h-16" : "")}>{inputData[language][pid].education[index].participate}</span>
                                <span className={clsx("h-12 whitespace-nowrap overflow-auto", fontsize ? "screen-w:h-16" : "")}>{inputData[language][pid].education[index].time1}</span>
                                <span className={clsx("h-12 whitespace-nowrap overflow-auto", fontsize ? "screen-w:h-16" : "")}>{inputData[language][pid].education[index].participate1}</span>
                                <span className={clsx("h-12 whitespace-nowrap overflow-auto", fontsize ? "screen-w:h-16" : "")}>{inputData[language][pid].education[index].location}</span>
                                <span className={clsx("h-12 whitespace-nowrap overflow-auto", fontsize ? "screen-w:h-16" : "")}>{inputData[language][pid].education[index].host}</span>
                                <span className={clsx("h-12 whitespace-nowrap overflow-auto", fontsize ? "screen-w:h-16" : "")}>{inputData[language][pid].education[index].support}</span>
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