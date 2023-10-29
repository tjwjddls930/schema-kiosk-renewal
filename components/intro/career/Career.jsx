import { Suspense, useEffect, useState, useContext } from "react";
import Imageslider from "@/components/Imageslider";
import { careerData_KOR, careerData_ENG, careerData_CH, careerData_TH, careerData_VI } from "@/data/careerData";
import { LanguageContext } from "@/contexts/LanguageContext";

const inputData = {
    KOR: careerData_KOR,
    ENG: careerData_ENG,
    CH: careerData_CH,
    TH: careerData_TH,
    VI: careerData_VI,
};

const Career = ({}) => {
    const [isTouching, setIsTouching] = useState(false);
    const {language} = useContext(LanguageContext);

    useEffect(() => {
        const touchArea = document.getElementById('touch-area');
        // Add a touchstart event listener to the entire document
        touchArea.addEventListener('touchstart', handleTouchStart);
        // Add a touchend event listener to the entire document
        touchArea.addEventListener('touchend', handleTouchEnd);
    
        // Clean up the event listeners when the component unmounts
        return () => {
            touchArea.removeEventListener('touchstart', handleTouchStart);
            touchArea.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);
  
    const handleTouchStart = () => {
      setIsTouching(true);
    };
  
    const handleTouchEnd = () => {
      setIsTouching(false);
    };
    return(
        <div className="w-11/12 h-3/4 screen-w:h-[70%] mx-auto flex flex-row space-x-[50px] screen-w:space-x-[100px] justify-between">
            <div className="w-1/2 h-2/3 flex">
               <Suspense fallback={null}>
                <Imageslider />
               </Suspense>
            </div>
            <div className="w-1/2 h-3/4 flex flex-col space-y-4 screen-w:space-y-24">
                <div
                    id="touch-area" 
                    className="w-full h-[500px] screen-w:h-[1000px] flex flex-col space-y-2 screen-w:space-y-6 overflow-auto">
                    {inputData[language][0].activity.map((item, index)=>(
                        <div
                            key={index} 
                            className="flex flex-row space-x-2 screen-w:space-x-10">
                            <span
                                key={item.order} 
                                className="font-bold text-sm screen-w:text-4xl text-Ablue">{item.year}</span>
                            <span
                                key={item.index} 
                                className="font-bold text-sm screen-w:text-4xl text-Agrey">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-[150px] w-[30px] screen-w:h-[300px] screen-w:w-[100px] absolute right-14 bottom-56 screen-w:right-20 screen-w:transform screen-w:-translate-y-1/2 screen-w:bottom-1/2 animate-bounce">
                <img 
                    src="/img/intro/award/위아래스크롤_아이콘.png"
                    className={`h-20 w-20 screen-w:h-[300px] screen-w:w-[100px] transition-opacity ${isTouching ? "opacity-0" : "opacity-100"}`}
                    alt="scroll"
                />
            </div>
        </div>
    )
};

export default Career;