import { modelData } from "@/data/modelData";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { FontsizeContext } from "@/contexts/FontsizeContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import clsx from "clsx";
import { collection_KOR, collection_ENG, collection_CH, collection_TH, collection_VI } from "@/data/collectionData";

const exhibitButton = {
    KOR: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 mr-4 pt-10 justify-center">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Exhibition'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"전시 관람"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"현재 진행중인 전시를"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"감상하실 수 있습니다."}</span>
        </div>
    ),
    ENG: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 mr-4 pt-10 justify-center">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Exhibition'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"Exhibitions"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"You can enjoy the exhibition"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"currently underway."}</span>
        </div>
    ),
    CH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 mr-4 pt-10 justify-center">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Exhibition'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"观看展览"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"所有展览"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"您可以查看它。"}</span>
        </div>
    ),
    TH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 mr-4 pt-10 justify-center">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Exhibition'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"การชมนิทรรศการ"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"นิทรรศการทั้งหมด"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"คุณสามารถรับชมได้"}</span>
        </div>
    ),
    VI: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 mr-4 pt-10 justify-center">
            <div className="bg-Ablue h-[1px] w-[70px]" />
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
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Collection Tour'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"소장품 관람"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"미술관이 소장하고 있는 전시물을"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"관람하실 수 있습니다."}</span>
        </div> 
    ),
    ENG: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 mr-4 justify-center">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Collection Tour'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"Collection Tour"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"You can view the"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"museum’s collections."}</span>
        </div> 
    ),
    CH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 mr-4 justify-center">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Collection Tour'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"查看集合"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"博物馆拥有的展品"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"您可以查看它。"}</span>
        </div>
    ),
    TH: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 mr-4 justify-center">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Collection Tour'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"ดูคอลเลกชัน"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"นิทรรศการที่เป็นของพิพิธภัณฑ์"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"คุณสามารถดูได้"}</span>
        </div>
    ),
    VI: (size) => (
        <div className="flex flex-col w-[170px] screen-w:w-[60%] screen-w:space-y-6 pt-10 mr-4 justify-center">
            <div className="bg-Ablue h-[1px] w-[70px]" />
            <span className="text-base screen-w:text-5xl text-Agrey font-bold">{'Collection Tour'}</span>
            <span className={`text-screen-w text-Ablack font-bold mb-5 ${size ? `screen-w:text-7xl` : `screen-w:text-6xl`}`}>{"Xem bộ sưu tập"}</span>
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"Hiện vật thuộc quyền sở hữu của bảo tàng"}</span>                        
            <span className={`text-base text-Cgrey font-bold ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"Bạn có thể xem nó."}</span>
        </div>
    )
};

const popupText1 = {
    KOR: "외부 조형물 보기",
    ENG: "View the external sculpture",
    CH: "查看外部雕塑",
    TH: "Xem tác phẩm điêu khắc bên ngoài",
    VI: "Xem tác phẩm điêu khắc bên ngoài",
};
  
const popupText2 = {
    KOR: "소장 그림 보기",
    ENG: "View Collection Paintings",
    CH: "查看我们收藏的画作",
    TH: "ชมภาพวาดจากคอลเลกชันของเรา",
    VI: "Xem tranh từ bộ sưu tập của chúng tôi",
};
  
const popupText3 = {
    KOR: "닫기",
    ENG: "Close",
    CH: "关闭",
    TH: "ปิด",
    VI: "đóng",
};
  
const inputData = {
    KOR: collection_KOR,
    ENG: collection_ENG,
    CH: collection_CH,
    TH: collection_TH,
    VI: collection_VI,
};

const ConnectButton = () => {
    const router = useRouter();
    const {language} = useContext(LanguageContext);
    const {fontsize} = useContext(FontsizeContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    const [popup, setPopup] = useState(false);
    return(
        <div className={clsx(isPortrait ? "w-full h-[90%] flex flex-col space-y-4 screen-w:space-y-24 mx-auto justify-center items-center" : "w-3/4 h-3/4 flex flex-row space-x-4 screen-w:space-x-16 mx-auto items-center")}>
            {popup && inputData[language] && (
              <div className={clsx(isPortrait ? "absolute top-0 left-0 h-[92%] screen-w:h-[97.5%] w-screen bg-Ablack bg-opacity-60 z-20" : "absolute top-0 left-0 h-[91.5%] screen-w:h-[92.7%] w-screen bg-Ablack bg-opacity-60 z-20")}>
                <div className={clsx(isPortrait ? "w-5/6 h-5/6 flex flex-row space-x-4 screen-w:space-x-16 mx-auto items-end justify-center" : "w-5/6 h-5/6 flex flex-row space-x-4 screen-w:space-x-16 mx-auto items-center justify-center")}>
                  <button 
                    className={clsx(isPortrait ? "h-1/4 w-2/5 text-base screen-w:text-6xl text-Awhite font-bold rounded-lg bg-gradient-to-r from-Bblue to-Ablue" : "h-1/3 w-1/3 text-base screen-w:text-6xl text-Awhite font-bold rounded-lg bg-gradient-to-r from-Bblue to-Ablue")}
                    onClick={()=> router.push(`/modelpage/${modelData[0].order}`)}
                  >
                      {popupText1[language]}
                  </button>
                  <button
                    className={clsx(isPortrait ? "h-1/4 w-2/5 text-base screen-w:text-6xl text-Awhite font-bold rounded-lg bg-gradient-to-r from-Bblue to-Ablue" : "h-1/3 w-1/3 text-base screen-w:text-6xl text-Awhite font-bold rounded-lg bg-gradient-to-r from-Bblue to-Ablue")}
                    // onClick={()=> router.push(`/pastexhibit/${inputData[language][0][0].order}`)}
                    >
                      {popupText2[language]}
                  </button>
                
                </div>
                <button
                    onClick={()=>setPopup(!popup)}
                    className="absolute h-10 w-[200px] screen-w:h-28 screen-w:w-[500px] text-center text-base screen-w:text-4xl text-Awhite font-bold items-center bottom-28 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-Bblue to-Ablue">
                    {popupText3[language]}
                </button> 
              </div>
            )}
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
                onClick={()=> setPopup(!popup)}
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