
import { Suspense } from "react";
import { careerData } from "@/data/careerData";
import Imageslider from "@/components/Imageslider";

const Career = ({}) => {
    return(
        <div className="w-11/12 h-3/4 screen-w:h-[70%] mx-auto flex flex-row space-x-[50px] screen-w:space-x-[100px] justify-between">
            <div className="w-1/2 h-2/3 flex flex-col space-y-4 screen-w:space-y-[150px]">
               <Suspense fallback={null}>
                <Imageslider />
               </Suspense>
            </div>
            <div className="w-1/2 h-3/4 flex flex-col space-y-4 screen-w:space-y-24">
                <div className="w-full h-[500px] screen-w:h-[1000px] flex flex-col space-y-2 screen-w:space-y-6 overflow-auto">
                    {careerData[0].activity.map((item, index)=>(
                        <div
                            key={index} 
                            className="flex flex-row space-x-2 screen-w::space-x-8">
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
                    className="h-20 w-20 screen-w:h-[300px] screen-w:w-[100px]"
                    alt="scroll"
                />
            </div>
        </div>
    )
};

export default Career;