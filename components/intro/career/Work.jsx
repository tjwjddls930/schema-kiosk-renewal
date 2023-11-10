import {useContext, useState, useEffect} from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import clsx from "clsx";
import { careerData_KOR, careerData_ENG, careerData_CH, careerData_TH, careerData_VI } from "@/data/careerData";

const inputData = {
    KOR: careerData_KOR,
    ENG: careerData_ENG,
    CH: careerData_CH,
    TH: careerData_TH,
    VI: careerData_VI,
};

const topText = {
    KOR: "김재관 기하학적 추상미술 반세기 – 창조적 궤적 Geo-Optical Art",
    ENG: "Jai-Kwan Kim’s Half Century of Geometric Abstract Art – Creative Trajectory Geo-Optical Art",
    CH: "Jai-Kwan Kim半个世纪的几何抽象艺术——创作轨迹地光艺术",
    TH: "ครึ่งศตวรรษของศิลปะนามธรรมเชิงเรขาคณิตของ Jai-kwan Kim – ศิลปะเชิงภูมิศาสตร์เชิงทัศนศาสตร์เชิงสร้างสรรค์",
    VI: "Nửa thế kỷ nghệ thuật trừu tượng hình học của Jaegwan Kim – Nghệ thuật quang học quỹ đạo sáng tạo"
};

const Work = () => {
    const {language} = useContext(LanguageContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    console.log(inputData[language]);

    return(
        <div className={clsx(isPortrait ? "": "p-6 screen-w:px-6 screen-w:pt-20 mx-auto items-center z-10")}>
            <div className="w-11/12 h-5/6 flex flex-row mx-auto space-x-8">
                <div className="w-[60%] h-full flex flex-col space-y-16 mx-auto text-center">
                    <span className="text-6xl font-bold text-Ablack h-[100px]">{topText[language]}</span>
                    <p className="text-Ablack text-5xl h-[1000px] overflow-auto leading-relaxed">
                        {inputData[language][0].work[0].text}
                    </p>
                </div>
                <div className="w-1/2 h-full flex mx-auto">

                </div>
            </div>
        </div>
    )
};

export default Work;