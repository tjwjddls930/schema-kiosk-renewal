import { useRouter } from "next/router";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { FontsizeContext } from "@/contexts/FontsizeContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import clsx from "clsx";

const structureButton = {
    KOR: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Art museum Introduction and Structure'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"미술관 소개 및 구조"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"미술관 구조에 대한"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"정보를 얻을 수 있습니다."}</span>
        </div>
    ),
    ENG: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Art museum Introduction and Structure'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"Art Museum introduction and structure"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"You can get information about"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"the structure of the museum"}</span>
        </div>
    ),
    CH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Art museum Introduction and Structure'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"博物馆简介及结构"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"关于博物馆的结构"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"您可以获得信息"}</span>
        </div>
    ),
    TH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Art museum Introduction and Structure'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"การแนะนำและโครงสร้างของพิพิธภัณฑ์"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"เกี่ยวกับโครงสร้างของพิพิธภัณฑ์"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"ท่านสามารถรับข้อมูล"}</span>
        </div>
    ),
    VI: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Art museum Introduction and Structure'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"Giới thiệu và cấu trúc bảo tàng"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"Về cấu trúc của bảo tàng"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"Bạn có thể nhận được thông tin"}</span>
        </div>
    ),
};

const careerButton = {
    KOR: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Kim Jae-Kwan`s major career'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"김재관 주요 경력"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"김재관 관장의 주요 경력과 활동사항"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"그리고 작품세계에 대해 자세히 알아볼 수 있습니다."}</span>
        </div>
    ),
    ENG: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Kim Jae-Kwan`s major career'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"Kim Jae-Kwan's Major Career"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"Kim Jae-Kwan's Major career and activities"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"And you can learn more about the world of work."}</span>
        </div>
    ),
    CH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Kim Jae-Kwan`s major career'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"Jaegwan Kim 主要职业经历"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"金宰宽导演的主要职业和活动"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"您还可以了解有关工作世界的更多信息."}</span>
        </div>
    ),
    TH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Kim Jae-Kwan`s major career'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"ประสบการณ์การทำงานระดับเมเจอร์ของแจกวาน คิม"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"อาชีพและกิจกรรมหลักของผู้กำกับแจกวานคิม"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"และคุณสามารถเรียนรู้เพิ่มเติมเกี่ยวกับโลกแห่งการทำงานได้"}</span>
        </div>
    ),
    VI: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Kim Jae-Kwan`s major career'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"Jaegwan Kim Kinh nghiệm nghề nghiệp chính"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"Sự nghiệp và hoạt động chính của đạo diễn Jaegwan Kim"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"Và bạn có thể tìm hiểu thêm về thế giới việc làm."}</span>
        </div>
    ),
};

const awardButton = {
    KOR: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Schema International Prized for Art'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"쉐마국제미술상"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"쉐마국제미술상의 수상작가들을"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"만나볼 수 있습니다."}</span>
        </div>
    ),
    ENG: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Schema International Prized for Art'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"Schema International Award For Art"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"You can meet award-winning authors"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"of Schema International Award for Art."}</span>
        </div>
    ),
    CH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Schema International Prized for Art'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"舍玛国际艺术奖"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"舍玛国际艺术奖获奖者"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"你可以看到。"}</span>
        </div>
    ),
    TH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Schema International Prized for Art'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"รางวัลศิลปะนานาชาติเชมา"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"ผู้ชนะรางวัล Shema International Art Award"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"คุณสามารถเห็นมัน"}</span>
        </div>
    ),
    VI: (size) => (
        <div className={`flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 justify-start`}>
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-sm screen-w:text-4xl text-Agrey font-bold">{'Schema International Prized for Art'}</span>
            <span className={`text-sm text-Ablack font-bold mb-5 ${size ? `screen-w:text-6xl` : `screen-w:text-5xl`}`}>{"Giải thưởng nghệ thuật quốc tế Shema"}</span>
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"Người đoạt giải Nghệ thuật Quốc tế Shema"}</span>                        
            <span className={`text-xs text-Cgrey font-bold ${size ? `screen-w:text-4xl` : `screen-w:text-3xl`}`}>{"Bạn có thể nhìn thấy nó."}</span>
        </div>
    ),
};

const IntroConnectContent = () => {
    const router = useRouter();
    const {language} = useContext(LanguageContext);
    const {fontsize} = useContext(FontsizeContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    return(
        // <div className="h-3/4 screen-w:h-[90%] w-full px-28"></div>
        <div className={clsx(isPortrait ? "h-[85%] w-[90%] flex flex-col space-y-4 screen-w:space-y-12 mx-auto items-center" : "h-5/6 w-[90%] flex flex-row space-x-4 screen-w:space-x-12 mx-auto items-center")}>
            <div className="flex h-1/3 lg:h-1/2 w-2/3 screen-w:h-2/3 screen-w:w-3/4 items-center justify-center shadow-xl"
                onClick={()=>router.push("/intro/structure")}
            >
                <div className="h-[60%] w-5/6 mx-auto">
                    <div className="flex flex-row h-full space-x-4 justify-start screen-w:space-x-6 screen-w:justify-center">
                        <span className="text-[100px] screen-w:text-[320px] font-bold text-Ablack drop-shadow-xl">{'01'}</span>
                        {structureButton[language](fontsize)}
                        <div className="flex flex-col-reverse pb-8">
                            <img 
                                className={clsx(isPortrait ? "h-12 w-12 screen-w:h-24 screen-w:w-24 animate-bounce" : "h-8 w-8 screen-w:h-24 screen-w:w-28 animate-bounce")}
                                src="/img/connectpage/arrow_icon.png"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className="bg-Ablack h-[1.5px] w-full mx-auto" />
                </div>
            </div>
            <div className="flex h-1/2 w-2/3 screen-w:h-2/3 screen-w:w-3/4 items-center justify-center shadow-xl"
                onClick={()=>router.push("/intro/career")}
            >
                <div className="h-[60%] w-5/6 mx-auto">
                    <div className="flex flex-row h-full space-x-4 justify-start screen-w:space-x-6 screen-w:justify-center">
                        <span className="text-[100px] screen-w:text-[320px] font-bold text-Ablack drop-shadow-xl">{'02'}</span>
                        {careerButton[language](fontsize)}
                        <div className="flex flex-col-reverse pb-8">
                            <img 
                                className={clsx(isPortrait ? "h-12 w-12 screen-w:h-24 screen-w:w-24 animate-bounce" : "h-8 w-8 screen-w:h-24 screen-w:w-28 animate-bounce")}
                                src="/img/connectpage/arrow_icon.png"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className="bg-Ablack h-[1.5px] w-full mx-auto" />
                </div>
            </div>
            <div className="flex h-1/2 w-2/3 screen-w:h-2/3 screen-w:w-3/4 items-center justify-center shadow-xl"
                onClick={()=>router.push("/intro/award")}
            >
                <div className="h-[60%] w-5/6 mx-auto">
                    <div className="flex flex-row h-full space-x-4 justify-start screen-w:space-x-6 screen-w:justify-center">
                        <span className="text-[100px] screen-w:text-[320px] font-bold text-Ablack drop-shadow-xl">{'03'}</span>
                        {awardButton[language](fontsize)}
                        <div className="flex flex-col-reverse pb-8">
                            <img 
                                className={clsx(isPortrait ? "h-12 w-12 screen-w:h-24 screen-w:w-24 animate-bounce" : "h-8 w-8 screen-w:h-24 screen-w:w-28 animate-bounce")}
                                src="/img/connectpage/arrow_icon.png"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className="bg-Ablack h-[1.5px] w-full mx-auto" />
                </div>
            </div>
        </div>
    )
};

export default IntroConnectContent;