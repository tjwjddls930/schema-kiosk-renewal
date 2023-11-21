import { careerData_KOR, careerData_ENG, careerData_CH, careerData_TH, careerData_VI } from "@/data/careerData";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import { FontsizeContext } from "@/contexts/FontsizeContext";
import { useContext } from "react";
import clsx from "clsx";

const inputData = {
    KOR: careerData_KOR,
    ENG: careerData_ENG,
    CH: careerData_CH,
    TH: careerData_TH,
    VI: careerData_VI,
};

const pageCareer = {
    KOR: (font) => (
        <div className={clsx("border-4 border-Ablack flex flex-col px-4 py-8 text-center screen-w:px-8 screen-w:py-16 text-Ablack font-bold", 
        font ? " w-[400px] h-[250px] screen-w:w-[850px] screen-w:h-[450px] space-y-2 screen-w:space-y-4 text-sm screen-w:text-5xl" : "w-[300px] h-[150px] screen-w:w-[750px] screen-w:h-[350px] space-y-1 screen-w:space-y-2 text-xs screen-w:text-4xl")}>
            <span>{'쉐마미술관 관장'}</span>
            <span>{'에스펙트 현대미술동인회 명예회장'}</span>
            <span>{'(사)한국사립미술관협회 회장 역임'}</span>
            <span>{'충청북도 박물관미술관진흥위원회 위원장'}</span>
        </div>
    ),
    ENG: (font) => (
        <div className={clsx("border-4 border-Ablack flex flex-col px-4 py-8 text-center screen-w:px-8 screen-w:py-16 text-Ablack font-bold",
        font ? "w-[400px] h-[250px] screen-w:w-[840px] screen-w:h-[490px] space-y-2 screen-w:space-y-4 text-sm screen-w:text-[40px] leading-none" : "w-[300px] h-[150px] screen-w:w-[800px] screen-w:h-[450px] space-y-1 screen-w:space-y-2 text-xs screen-w:text-4xl")}>
            <span>{'Director of Schema Museum of Art'}</span>
            <span>{'Honorary Chairman of Aspect Contemporary Art Association'}</span>
            <span>{'Served as President of the Korea Private Art Museum Association'}</span>
            <span>{'Chairman, Chungcheongbuk-do Museum and Art Museum Promotion Committee'}</span>
        </div>
    ),
    CH: (font) => (
        <div className={clsx("border-4 border-Ablack flex flex-col px-4 py-8 text-center screen-w:px-8 screen-w:py-16 text-Ablack font-bold",
        font ? "w-[400px] h-[250px] screen-w:w-[850px] screen-w:h-[450px] space-y-2 screen-w:space-y-4 text-sm screen-w:text-5xl" : "w-[300px] h-[150px] screen-w:w-[750px] screen-w:h-[350px] space-y-1 screen-w:space-y-2 text-xs screen-w:text-4xl")}>
            <span>{'图式艺术博物馆馆长'}</span>
            <span>{'纵观当代艺术协会名誉主席'}</span>
            <span>{'担任韩国私立美术馆协会会长'}</span>
            <span>{'忠清北道博物馆美术馆振兴委员会委员长'}</span>
        </div>
    ),
    TH: (font) => (
        <div className={clsx("border-4 border-Ablack flex flex-col px-4 py-8 text-center screen-w:px-8 screen-w:py-16 text-Ablack font-bold",
        font ? "w-[400px] h-[250px] screen-w:w-[850px] screen-w:h-[490px] space-y-2 screen-w:space-y-4 text-sm screen-w:text-[40px] leading-none" : "w-[300px] h-[150px] screen-w:w-[850px] screen-w:h-[400px] space-y-2 text-xs screen-w:text-4xl")}>
            <span>{'ผู้อำนวยการพิพิธภัณฑ์ศิลปะสคีมา'}</span>
            <span>{'ประธานกิตติมศักดิ์สมาคมศิลปะร่วมสมัยแอสเพค'}</span>
            <span>{'ดำรงตำแหน่งประธานสมาคมพิพิธภัณฑ์ศิลปะเอกชนแห่งเกาหลี'}</span>
            <span>{'ประธานคณะกรรมการส่งเสริมพิพิธภัณฑ์และหอศิลป์ชุงชองบุกโด'}</span>
        </div>
    ),
    VI: (font) => (
        <div className={clsx("border-4 border-Ablack flex flex-col px-4 py-8 text-center screen-w:px-8 screen-w:py-16 text-Ablack font-bold",
        font ? "w-[400px] h-[250px] screen-w:w-[850px] screen-w:h-[500px] space-y-2 screen-w:space-y-4 text-sm screen-w:text-[40px] leading-none" : "w-[300px] h-[150px] screen-w:w-[850px] screen-w:h-[450px] space-y-2 screen-w:space-y-4 text-xs screen-w:text-4xl")}>
            <span>{'Giám đốc Bảo tàng Nghệ thuật Schema'}</span>
            <span>{'Chủ tịch danh dự Hiệp hội nghệ thuật đương đại Aspect'}</span>
            <span>{'Từng là Chủ tịch Hiệp hội Bảo tàng Nghệ thuật Tư nhân Hàn Quốc'}</span>
            <span>{'Chủ tịch Ủy ban Xúc tiến Bảo tàng Nghệ thuật và Bảo tàng Chungcheongbuk-do'}</span>
        </div>
    ),
};

const educationText = {
    KOR: (orient, font) => (
        <span className={clsx(orient ? `w-[25%] font-bold ${font ? "text-base screen-w:text-[54px]" : "text-sm screen-w:text-5xl"} text-Ablack` : `w-[20%] font-bold ${font ? "text-base screen-w:text-[54px]" : "text-sm screen-w:text-5xl"} text-Ablack`)}>{"학력사항"}</span>
    ),
    ENG: (orient, font) => (
        <span className={clsx(orient ? `w-[25%] font-bold ${font ? "text-base screen-w:text-[42px]" : "text-sm screen-w:text-4xl"} text-Ablack` : `w-[20%] font-bold ${font ? "text-base screen-w:text-[54px]" : "text-sm screen-w:text-5xl"} text-Ablack`)}>{"Education"}</span>
    ),
    CH: (orient, font) => (
        <span className={clsx(orient ? `w-[25%] font-bold ${font ? "text-base screen-w:text-[42px]" : "text-sm screen-w:text-4xl"} text-Ablack` : `w-[20%] font-bold ${font ? "text-base screen-w:text-[54px]" : "text-sm screen-w:text-5xl"} text-Ablack`)}>{"教育史"}</span>
    ),
    TH: (orient, font) => (
        <span className={clsx(orient ? `w-[25%] font-bold ${font ? "text-base screen-w:text-[42px]" : "text-sm screen-w:text-4xl"} text-Ablack` : `w-[20%] font-bold ${font ? "text-base screen-w:text-[42px]" : "text-sm screen-w:text-4xl"} text-Ablack`)}>{"ประวัติการศึกษา"}</span>
    ),
    VI: (orient, font) => (
        <span className={clsx(orient ? `w-[25%] font-bold ${font ? "text-base screen-w:text-[42px]" : "text-sm screen-w:text-4xl"} text-Ablack` : `w-[20%] font-bold ${font ? "text-base screen-w:text-[42px] leading-none" : "text-sm screen-w:text-4xl"} text-Ablack`)}>{"Lịch sử giáo dục"}</span>
    )
};

const awardText = {
    KOR: (orient, font) => (
        <span className={clsx(orient ? `w-[25%] font-bold ${font ? "text-base screen-w:text-[54px]" : "text-sm screen-w:text-5xl"} text-Ablack` : `w-[20%] font-bold ${font ? "text-base screen-w:text-[54px]" : "text-sm screen-w:text-5xl"} text-Ablack`)}>{"수상경력"}</span>
    ),
    ENG: (orient, font) => (
        <span className={clsx(orient ? `w-[25%] font-bold ${font ? "text-base screen-w:text-[42px]" : "text-sm screen-w:text-4xl"} text-Ablack` : `w-[20%] font-bold ${font ? "text-base screen-w:text-[54px]" : "text-sm screen-w:text-5xl"} text-Ablack`)}>{"Awards"}</span>
    ),
    CH: (orient, font) => (
        <span className={clsx(orient ? `w-[25%] font-bold ${font ? "text-base screen-w:text-[44px]" : "text-sm screen-w:text-[40px]"} text-Ablack` : `w-[20%] font-bold ${font ? "text-base screen-w:text-[54px]" : "text-sm screen-w:text-5xl"} text-Ablack`)}>{"奖项"}</span>
    ),
    TH: (orient, font) => (
        <span className={clsx(orient ? `w-[25%] font-bold ${font ? "text-base screen-w:text-[42px]" : "text-sm screen-w:text-4xl"} text-Ablack` : `w-[20%] font-bold ${font ? "text-base screen-w:text-[42px]" : "text-sm screen-w:text-4xl"} text-Ablack`)}>{"รางวัล"}</span>
    ),
    VI: (orient, font) => (
        <span className={clsx(orient ? `w-[25%] font-bold ${font ? "text-base screen-w:text-[42px]" : "text-sm screen-w:text-4xl"} text-Ablack` : `w-[20%] font-bold ${font ? "text-base screen-w:text-[42px]" : "text-sm screen-w:text-4xl"} text-Ablack`)}>{"giải thưởng"}</span>
    )
};

const collectionText = {
    KOR: (orient, font) => (
        <div className="w-full flex flex-row space-x-8">
            <span className={clsx(orient 
                ? `w-[25%] font-bold text-Ablack ${font ? "text-base screen-w:text-[52px]" : "text-sm screen-w:text-5xl"}` 
                : `w-[20%] font-bold text-Ablack ${font ? "text-base screen-w:text-[52px]" : "text-sm screen-w:text-5xl"}`)}>
                    {'작품 소장'}
            </span>
            <span className={clsx(orient 
                ? `w-[75%] font-bold text-Agrey ${font ? "text-base screen-w:text-[40px]" : "text-sm screen-w:text-4xl"}` 
                : `w-[80%] font-bold text-Agrey ${font ? "text-base screen-w:text-[40px]" : "text-sm screen-w:text-4xl"}`)}>
                    {'국립현대미술관, 서울시립미술관, 부산시립미술관 등 다수'}
            </span>
        </div>
    ),
    ENG: (orient, font) => (
        <div className="w-full flex flex-row space-x-8">
            <span className={clsx(orient 
                ? `w-[25%] font-bold text-Ablack ${font ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"}` 
                : `w-[20%] font-bold text-Ablack ${font ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"}`)}>
                    {'Collection of Works'}
            </span>
            <span className={clsx(orient 
                ? `w-[75%] font-bold text-Agrey ${font ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"}` 
                : `w-[80%] font-bold text-Agrey ${font ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"}`)}>
                    {'National Museum of Modern and Contemporary Art, Seoul Museum of Art, Busan Museum of Art, etc.'}
            </span>
        </div>
    ),
    CH: (orient, font) => (
        <div className="w-full flex flex-row space-x-8">
            <span className={clsx(orient 
                ? `w-[25%] font-bold text-Ablack ${font ? "text-base screen-w:text-[40px]" : "text-sm screen-w:text-4xl"}` 
                : `w-[20%] font-bold text-Ablack ${font ? "text-base screen-w:text-[52px]" : "text-sm screen-w:text-5xl"}`)}>
                    {'作品集'}
            </span>
            <span className={clsx(orient 
                ? `w-[75%] font-bold text-Agrey ${font ? "text-base screen-w:text-[40px]" : "text-sm screen-w:text-4xl"}` 
                : `w-[80%] font-bold text-Agrey ${font ? "text-base screen-w:text-[40px]" : "text-sm screen-w:text-4xl"}`)}>
                    {'国立现代美术馆、首尔市立美术馆、釜山市立美术馆等'}
            </span>
        </div>
    ),
    TH: (orient, font) => (
        <div className="w-full flex flex-row space-x-8">
            <span className={clsx(orient 
                ? `w-[25%] font-bold text-Ablack ${font ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"}` 
                : `w-[20%] font-bold text-Ablack ${font ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"}`)}>
                    {'รวบรวมผลงาน'}
            </span>
            <span className={clsx(orient 
                ? `w-[75%] font-bold text-Agrey ${font ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"}` 
                : `w-[80%] font-bold text-Agrey ${font ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"}`)}>
                    {'พิพิธภัณฑ์ศิลปะสมัยใหม่และร่วมสมัยแห่งชาติ, พิพิธภัณฑ์ศิลปะโซล, พิพิธภัณฑ์ศิลปะปูซาน ฯลฯ'}
            </span>
        </div>
    ),
    VI: (orient, font) => (
        <div className="w-full flex flex-row space-x-8">
            <span className={orient 
                ? `w-[20%] font-bold text-Ablack ${font ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"}` 
                : `w-[20%] font-bold text-Ablack ${font ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"}`}>
                    {'tuyển tập tác phẩm'}
            </span>
            <span className={clsx("w-[80%] font-bold text-Agrey", font ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl")}>{'Bảo tàng Nghệ thuật Hiện đại và Đương đại Quốc gia, Bảo tàng Nghệ thuật Seoul, Bảo tàng Nghệ thuật Busan, v.v.'}</span>
        </div>
    )
};

const Profile = ({}) => {
    const {language} = useContext(LanguageContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    const {fontsize} = useContext(FontsizeContext);
    return(
        <div className={clsx(isPortrait ? "h-5/6 w-full p-6 screen-w:px-6 screen-w:pt-6 mx-auto items-center z-10" : "p-6 screen-w:px-6 screen-w:pt-12 mx-auto items-center z-10")}>
            <div className={clsx(isPortrait ? "w-11/12 h-3/4 screen-w:h-[70%] mx-auto flex flex-col space-y-[50px] screen-w:space-y-[100px]" : "w-11/12 h-3/4 screen-w:h-[70%] mx-auto flex flex-row space-x-[50px] screen-w:space-x-[100px] justify-between")}>
                {isPortrait ? 
                <div className="w-full h-1/2 items-center flex justify-between">
                    <div className="w-1/2 h-3/4 flex flex-col space-y-24 mx-auto items-start">
                        <div className="flex flex-col space-y-2 screen-w:space-y-8">
                            <div className="h-[0.5px] screen-w:h-[1px] bg-Ablue w-20 screen-w:w-32"/>
                            <span className={clsx("font-bold text-Agrey", fontsize ? "text-lg screen-w:text-7xl" : "text-base screen-w:text-6xl")}>{'Kim Jae-Kwan'}</span>
                            <span className={clsx("font-bold text-Ablack", fontsize ? "text-lg screen-w:text-8xl" : "text-base screen-w:text-7xl")}>{'김재관'}</span>
                        </div>
                        {pageCareer[language](fontsize)}
                    </div>
                    <div className="w-1/2 h-3/4 flex items-center">
                        <img 
                            src="/img/intro/career/김재관_관장님.png"
                            className="h-[550px] w-[450px] screen-w:h-[1700px] screen-w:w-[1400px] opacity-100 z-10"
                            alt="director"
                        />
                        </div>
                </div> : 
                <>
                    <div className="absolute bottom-4 transform -translate-x-1/2 left-[37%] screen-w:bottom-24">
                        <img 
                            src="/img/intro/career/김재관_관장님.png"
                            className="h-[550px] w-[450px] screen-w:h-[1600px] screen-w:w-[1300px] opacity-100 z-[999]"
                            alt="director"
                        />
                    </div>
                    <div className="w-1/2 h-3/4 flex flex-col space-y-4 screen-w:space-y-[150px]">
                        <div className="flex flex-col space-y-2 screen-w:space-y-8">
                            <div className="h-[0.5px] screen-w:h-[1px] bg-Ablue w-20 screen-w:w-32"/>
                            <span className={clsx("font-bold text-Agrey", fontsize ? "text-lg screen-w:text-7xl" : "text-base screen-w:text-6xl")}>{'Kim Jae-Kwan'}</span>
                            <span className={clsx("font-bold text-Ablack", fontsize ? "text-lg screen-w:text-8xl" : "text-base screen-w:text-7xl")}>{'김재관'}</span>
                        </div>
                        {pageCareer[language](fontsize)}
                    </div>
                </>}
                <div className={clsx(isPortrait ? "w-[97%] h-1/2 flex flex-row space-x-4 screen-w:space-x-8 mx-auto overflow-auto" : "w-1/2 h-3/4 flex flex-col space-y-4 screen-w:space-y-16")}>
                    <div className={clsx(isPortrait ? "w-full h-full flex flex-row space-x-6 screen-w:space-x-8 overflow-auto" : "w-full h-[30%] flex flex-row space-x-6 screen-w:space-x-12")}>
                        {educationText[language](isPortrait, fontsize)}
                        <div className={clsx(isPortrait ? "w-3/4 h-[1200px] flex flex-col space-y-2 screen-w:space-y-4 overflow-auto" : "w-[80%] flex flex-col space-y-2 screen-w:space-y-4")}>
                            {inputData[language][0].education.map((item, index)=>(
                                <div
                                    key={index} 
                                    className={clsx(isPortrait ? "w-full h-full flex flex-row space-x-2 screen-w:space-x-10" : "w-full flex flex-row space-x-2 screen-w:space-x-10")}>
                                    <span
                                        key={item.order} 
                                        className={clsx(isPortrait 
                                            ? `w-[15%] h-full font-bold text-Ablue ${fontsize ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"}` 
                                            : `w-[15%] font-bold ${fontsize ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"} text-Ablue`)}
                                    >
                                            {item.year}
                                    </span>
                                    <span
                                        key={item.year}
                                        className={clsx(isPortrait 
                                            ? `w-[85%] h-full font-bold ${fontsize ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"} text-Agrey` 
                                            : `w-[85%] font-bold ${fontsize ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"} text-Agrey`)}
                                    >
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={clsx(isPortrait ? "w-full h-full flex flex-row space-x-6 screen-w:space-x-8 overflow-auto" : "w-full h-[30%] flex flex-row space-x-6 screen-w:space-x-12")}>
                        {awardText[language](isPortrait, fontsize)}
                        <div className={clsx(isPortrait ? "w-3/4 h-[1200px] flex flex-col space-y-2 screen-w:space-y-4 overflow-auto" : "w-[80%] flex flex-col space-y-2 screen-w:space-y-4")}>
                            {inputData[language][0].award.map((item, index)=>(
                                <div 
                                    key={index}
                                    className={clsx(isPortrait ? "w-full h-full flex flex-row space-x-2 screen-w:space-x-10" : "w-full flex flex-row space-x-2 screen-w:space-x-10")}>
                                    <span
                                        key={item.order} 
                                        className={clsx(isPortrait 
                                            ? `w-[15%] h-full font-bold text-Ablue ${fontsize ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"}` 
                                            : `w-[15%] font-bold ${fontsize ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"} text-Ablue`)}
                                        >
                                            {item.year}
                                    </span>
                                    <span
                                        key={item.year}
                                        className={clsx(isPortrait 
                                            ? `w-[85%] h-full font-bold ${fontsize ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"} text-Agrey` 
                                            : `w-[85%] font-bold ${fontsize ? "text-base screen-w:text-[40px] leading-none" : "text-sm screen-w:text-4xl"} text-Agrey`)}
                                    >
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {collectionText[language](isPortrait, fontsize)}
                </div>
            </div>
        </div>
    )
};

export default Profile;