import { modelData } from "@/data/modelData";
import { useRouter } from "next/router";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { FontsizeContext } from "@/contexts/FontsizeContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import clsx from "clsx";

const exhibitButton = {
    KOR: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 mr-4 pt-10 justify-center">
            <div className="bg-Cpurple h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Exhibition'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"전시 관람"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"현재 진행중인 전시를"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"감상하실 수 있습니다."}</span>
        </div>
    ),
    ENG: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 mr-4 pt-10 justify-center">
            <div className="bg-Cpurple h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Exhibition'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"Exhibitions"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"You can enjoy the exhibition"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"currently underway."}</span>
        </div>
    ),
    CH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 mr-4 pt-10 justify-center">
            <div className="bg-Cpurple h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Exhibition'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"观看展览"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"所有展览"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"您可以查看它。"}</span>
        </div>
    ),
    TH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 mr-4 pt-10 justify-center">
            <div className="bg-Cpurple h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Exhibition'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"การชมนิทรรศการ"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"นิทรรศการทั้งหมด"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"คุณสามารถรับชมได้"}</span>
        </div>
    ),
    VI: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 mr-4 pt-10 justify-center">
            <div className="bg-Cpurple h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Exhibition'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"Xem triển lãm"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"tất cả các cuộc triển lãm"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"Bạn có thể xem"}</span>
        </div>
    )
};

const collectionButton = {
    KOR: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 mr-4 justify-center">
            <div className="bg-Cpurple h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Collection Tour'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"소장품 관람"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"미술관이 소장하고 있는 전시물을"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"관람하실 수 있습니다."}</span>
        </div> 
    ),
    ENG: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 mr-4 justify-center">
            <div className="bg-Cpurple h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Collection Tour'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"Collection Tour"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"You can view the"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"museum’s collections."}</span>
        </div> 
    ),
    CH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 mr-4 justify-center">
            <div className="bg-Cpurple h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Collection Tour'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"查看集合"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"博物馆拥有的展品"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"您可以查看它。"}</span>
        </div>
    ),
    TH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 mr-4 justify-center">
            <div className="bg-Cpurple h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Collection Tour'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"ดูคอลเลกชัน"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"นิทรรศการที่เป็นของพิพิธภัณฑ์"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"คุณสามารถดูได้"}</span>
        </div>
    ),
    VI: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 mr-4 justify-center">
            <div className="bg-Cpurple h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Collection Tour'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"Xem bộ sưu tập"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"Hiện vật thuộc quyền sở hữu của bảo tàng"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"Bạn có thể xem nó."}</span>
        </div>
    )
};

const ConnectButton = () => {
    const router = useRouter();
    const {language} = useContext(LanguageContext);
    const {fontsize} = useContext(FontsizeContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    return(
        <div className={clsx(isPortrait ? "w-full h-[90%] flex flex-col space-y-4 screen-w:space-y-24 mx-auto justify-center items-center" : "w-3/4 h-3/4 flex flex-row space-x-4 screen-w:space-x-16 mx-auto items-center")}>
            <div className={clsx(isPortrait ? "flex h-[30%] w-3/4 items-center justify-center shadow-xl focus:shadow-none" : "flex h-2/3 w-3/4 items-center justify-center shadow-xl focus:shadow-none")}
                onClick={()=>router.push("/exhibittest")}
            >
                <div className={clsx(isPortrait ? "h-3/4 w-3/4 mx-auto" : "h-3/4 w-3/4 mx-auto")}>
                    <div className="flex flex-row space-x-4 justify-start screen-w:space-x-6 screen-w:justify-center">
                        <span className="text-[150px] screen-w:text-[350px] font-bold text-Ablack drop-shadow-xl">{'01'}</span>
                        {exhibitButton[language](fontsize)}
                        <div className="flex flex-col-reverse pb-8">
                            <img 
                                className="h-12 w-12 screen-w:h-24 screen-w:w-full"
                                src="/img/connectpage/arrow_icon.png"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className="bg-Ablack h-[1.5px] w-full mx-auto" />
                </div>
            </div>
            <div className={clsx(isPortrait ? "flex h-[30%] w-3/4 items-center justify-center shadow-xl focus:shadow-none" : "flex h-2/3 w-3/4 items-center shadow-xl focus:shadow-none")}
                onClick={async ()=> router.push(`/modelpage/${modelData[0].order}`)}
            >
                <div className={clsx(isPortrait ? "h-3/4 w-3/4 mx-auto" : "h-3/4 w-3/4 mx-auto")}>
                    <div className="flex flex-row space-x-4 justify-start screen-w:space-x-6 screen-w:justify-center">
                        <span className="text-[150px] screen-w:text-[350px] font-bold text-Ablack drop-shadow-xl">{'02'}</span>
                        {collectionButton[language](fontsize)}
                        <div className="flex flex-col-reverse pb-8">
                            <img 
                                className="h-12 w-12 screen-w:h-24 screen-w:w-full"
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

export default ConnectButton;