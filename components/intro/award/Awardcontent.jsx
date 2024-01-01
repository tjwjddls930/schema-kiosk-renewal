import { useContext } from "react";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import { LanguageContext } from "@/contexts/LanguageContext";
import { FontsizeContext } from "@/contexts/FontsizeContext";
import clsx from "clsx";

const individualText = {
    KOR: (orient, font) => (
        <div className={clsx(orient 
        ? `text-Awhite ${font ? "text-lg screen-w:text-[52px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[25%]` 
        : `text-Awhite ${font ? "text-lg screen-w:text-[54px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[250px]`)}>
            {"개인전"}
        </div>
    ),
    ENG: (orient, font) => (
        <div className={clsx(orient 
        ? `text-Awhite ${font ? "text-lg screen-w:text-[40px] screen-w:leading-tight" : "text-base screen-w:text-4xl"} font-bold w-[100px] screen-w:w-[25%]` 
        : `text-Awhite ${font ? "text-lg screen-w:text-[54px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[250px]`)}>
            {"Solo Exhibition"}
        </div>
    ),
    CH: (orient, font) => (
        <div className={clsx(orient 
        ? `text-Awhite ${font ? "text-lg screen-w:text-[52px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[25%]` 
        : `text-Awhite ${font ? "text-lg screen-w:text-[54px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[250px]`)}>
            {"个展"}
        </div>
    ),
    TH: (orient, font) => (
        <div className={clsx(orient 
        ? `text-Awhite ${font ? "text-lg screen-w:text-[40px] screen-w:leading-tight" : "text-base screen-w:text-4xl"} font-bold w-[100px] screen-w:w-[25%]` 
        : `text-Awhite ${font ? "text-lg screen-w:text-[54px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[250px]`)}>
            {"นิทรรศการเดี่ยว"}
        </div>
    ),
    VI:  (orient, font) => (
        <div className={clsx(orient 
        ? `text-Awhite ${font ? "text-lg screen-w:text-[52px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[25%]` 
        : `text-Awhite ${font ? "text-lg screen-w:text-[54px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[250px]`)}>
            {"triển lãm cá nhân"}
        </div>
    ),
};

const groupText = {
    KOR: (orient, font) => (
        <div className={clsx(orient 
        ? `text-Awhite ${font ? "text-lg screen-w:text-[54px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[25%]` 
        : `text-Awhite ${font ? "text-lg screen-w:text-[54px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[250px]`)}>
            {"단체전"}
        </div>
    ),
    ENG: (orient, font) => (
        <div className={clsx(orient 
        ? `text-Awhite ${font ? "text-lg screen-w:text-[40px] screen-w:leading-tight" : "text-base screen-w:text-4xl"} font-bold w-[100px] screen-w:w-[25%]` 
        : `text-Awhite ${font ? "text-lg screen-w:text-[54px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[250px]`)}>
            {"Group Exhibition"}
        </div>
    ),
    CH: (orient, font) => (
        <div className={clsx(orient 
        ? `text-Awhite ${font ? "text-lg screen-w:text-[54px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[25%]` 
        : `text-Awhite ${font ? "text-lg screen-w:text-[54px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[250px]`)}>
            {"群展"}
        </div>
    ),
    TH: (orient, font) => (
        <div className={clsx(orient 
        ? `text-Awhite ${font ? "text-lg screen-w:text-[40px] screen-w:leading-tight" : "text-base screen-w:text-4xl"} font-bold w-[100px] screen-w:w-[25%]` 
        : `text-Awhite ${font ? "text-lg screen-w:text-[54px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[250px]`)}>
            {"นิทรรศการกลุ่ม"}
        </div>
    ),
    VI: (orient, font) => (
        <div className={clsx(orient 
        ? `text-Awhite ${font ? "text-lg screen-w:text-[54px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[25%]` 
        : `text-Awhite ${font ? "text-lg screen-w:text-[54px] screen-w:leading-tight" : "text-base screen-w:text-5xl"} font-bold w-[100px] screen-w:w-[250px]`)}>
            {"triển lãm nhóm"}
        </div>
    ),
};

const Awardcontent = ({imgname, engname, name, career, timeline_i, timeline_g}) => {
    const {isPortrait} = useContext(ScreenOrientContext);
    const {language} = useContext(LanguageContext);
    const {fontsize} = useContext(FontsizeContext);
    return(
        <div className={clsx(isPortrait ? "w-full h-full mx-auto flex flex-col space-y-[200px] px-32 py-12 items-center" : "w-11/12 h-3/4 mx-auto px-20 py-12 screen-w:px-40 screen-w:py-16 lg:py-6 flex flex-row justify-between")}>
            <div className={clsx(isPortrait ? "flex flex-col screen-w:space-y-4 screen-w:w-11/12 screen-w:h-1/2 mx-auto" : "flex flex-col screen-w:space-y-4 screen-w:w-[40%] screen-w:h-1/2")}>
                <div className="h-1/2 w-1/2 screen-w:h-5/6 screen-w:w-5/6 flex">
                    <img 
                        src={`/img/intro/award/${imgname}`}
                        className="w-[250px] h-[250px] screen-w:w-auto screen-w:h-auto shadow-lg mb-4 border-4 border-Awhite flex"
                        alt="artist"
                    />
                </div>
                <div className="h-[2px] w-14 screen-w:w-28 bg-Ablue mt-4 mb-2"></div>
                <span className="text-xl screen-w:text-4xl text-Awhite">{engname}</span>
                <span className="font-bold text-screen-w screen-w:text-5xl text-Awhite mb-2">{name}</span>
                <p className="text-base screen-w:text-4xl text-Awhite">{career}</p>
            </div>
            <div
                className={clsx(isPortrait ? "flex flex-row space-x-12 h-[58%] screen-w:w-11/12 screen-w:h-3/4 overflow-auto scroll-smooth" : "flex flex-col space-y-12 h-[500px] screen-w:w-[58%] screen-w:h-1/2 overflow-auto scroll-smooth")}>
                <div className={clsx(isPortrait ? "flex flex-row space-x-2 screen-w:space-x-4 screen-w:w-full screen-w:overflow-auto screen-w:h-[1000px]" : "flex flex-row px-8 space-x-2 screen-w:space-x-4 screen-w:w-full screen-w:overflow-auto screen-w:h-[700px]")}>                       
                    {individualText[language](isPortrait, fontsize)}
                    <div className={clsx(isPortrait ? "screen-w:w-[75%] flex flex-col space-y-2 screen-w:space-y-5" : "flex flex-col space-y-2 screen-w:space-y-5")}>
                            {timeline_i.map((item, index)=>(
                            <div
                                key={index}
                                id={item.id}
                                className="flex flex-row space-x-2 screen-w:space-x-5">
                                <span
                                    key={item.id}
                                    className={clsx("text-Bblue font-bold", fontsize ? "text-base screen-w:text-[34px] screen-w:leading-tight" : "text-sm screen-w:text-3xl")}>
                                    {item.year}
                                </span>
                                <span
                                    key={item.order}
                                    className={clsx("text-Awhite font-bold", fontsize ? "text-base screen-w:text-[34px] screen-w:leading-tight" : "text-sm screen-w:text-3xl")}>
                                    {item.award}
                                </span>
                            </div>
                            ))}
                        </div>
                </div>
                <div className={clsx(isPortrait ? "flex flex-row px-8 space-x-2 screen-w:space-x-4 screen-w:w-full screen-w:overflow-auto screen-w:h-[1000px]" : "flex flex-row px-8 space-x-2 screen-w:space-x-4 screen-w:w-full screen-w:overflow-auto screen-w:h-[700px]")}>
                    {groupText[language](isPortrait, fontsize)}
                    <div className={clsx(isPortrait ? "screen-w:w-[75%] flex flex-col space-y-2 screen-w:space-y-5" : "flex flex-col space-y-2 screen-w:space-y-5")}>
                        {timeline_g.map((item, index)=>(
                        <div
                            key={index}
                            id={item.id}
                            className="flex flex-row space-x-2 screen-w:space-x-5">
                            <span
                                key={item.id}
                                className={clsx("text-Bblue font-bold", fontsize ? "text-base screen-w:text-[34px] screem-w:leading-tight" : "text-sm screen-w:text-3xl")}>
                                    {item.year}
                            </span>
                            <span
                                key={item.order}
                                className={clsx("text-Awhite font-bold", fontsize ? "text-base screen-w:text-[34px] screen-w:leading-tight" : "text-sm screen-w:text-3xl")}
                            >
                                {item.award}
                            </span>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Awardcontent;