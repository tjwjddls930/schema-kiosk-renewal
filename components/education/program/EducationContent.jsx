import { useState, useEffect } from "react";

const EducationContent = ({img, type, title, explanation, participate, time1, participate1, location, host, support}) => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        // Update the isClient state to true as this code will be executed only on client side
        setIsClient(true);
      }, []);

    return(
       <>
        {isClient && (
            <div className="h-3/4 w-[90%] flex flex-row mx-auto space-x-8 screen-w:space-x-12">
                <div className="flex h-2/3 w-[40%] z-10 items-center mx-auto">
                    <img 
                        // src="/img/educationpage/education_1.png"
                        src={img}
                        className="w-full mx-auto shadow-xl"
                        alt="education"
                    />
                </div>
                <div className="h-full w-[60%] flex flex-col space-y-6 screen-w:space-y-12">
                    <div className="w-3/4 flex flex-col space-y-2 screen-w:space-y-8">
                        <div className="bg-Ablue h-[1px] w-[70px] screen-w:w-[200px]" />
                        <span className="text-sm screen-w:text-6xl font-bold text-Bgrey">{type}</span>
                        <span className="text-base screen-w:text-7xl font-bold text-Ablack screen-w:leading-normal">{title}</span>
                    </div>
                    <div className="bg-Dgrey bg-opacity-30 flex flex-row justify-center px-6 py-8 space-x-4 screen-w:py-24 screen-w:space-x-8 mx-auto h-[60%] w-full">
                        <div className="w-1/2 h-full mx-auto overflow-auto scroll-smooth">
                            {/* {educationartist.map((item) => (
                            <div
                                key={item.order}
                                className="flex flex-col space-y-2 screen-w:space-y-8">
                                <span className="text-Bblue font-bold text-sm screen-w:text-4xl">{item.artist}{'작가'}<span className="text-Dgrey screen-w:text-3xl">{' | '}</span><span className="text-sm text-Ablack font-bold screen-w:text-4xl">{item.location}</span></span>
                                <span className="text-sm screen-w:text-4xl text-Bgrey font-bold mb-4">{item.time}</span>
                            </div>
                            ))} */}
                            <p className="text-Bgrey text-sm screen-w:text-4xl px-4 screen-w:px-12 leading-normal screen-w:leading-loose font-bold">
                                {explanation}
                            </p>
                        </div>
                        <div className="bg-Cgrey w-[1px] h-5/6" />
                        <div className="w-1/2 flex flex-row space-x-4 px-4">
                            <div className="w-1/4 flex flex-col space-y-3 text-xs screen-w:text-4xl screen-w:space-y-8 text-Ablack font-bold">
                                <span className="h-12">{'교육대상'}</span>
                                <span className="h-12">{'교육시간'}</span>
                                <span className="h-12">{'참여인원'}</span>
                                <span className="h-12">{'교육장소'}</span>
                                <span className="h-12">{'주최'}</span>
                                {/* <span>{'주관'}</span>
                                <span>{'협력'}</span> */}
                                <span className="h-12">{'후원'}</span>
                            </div>
                            <div className="w-3/4 flex flex-col space-y-3 text-xs screen-w:text-4xl screen-w:space-y-8 text-Cgrey font-bold">
                                {/* <span>{'초등학교 1~3학년 (저학년)'}</span>
                                <span>{'매주 일요일 오전 10시 ~ 오후 1시'}</span>
                                <span>{'10명씩 3기수 진행(총 30명)'}</span>
                                <span>{'쉐마미술관 교육실 및 야외'}</span>
                                <span>{'충북문화재단, 충북문화예술교육지원센터'}</span>
                                <span>{'쉐마미술관'}</span>
                                <span>{'한국문화예술교육진흥원'}</span>
                                <span>{'충청북도, 문화체육관광부'}</span> */}
                                <span className="h-12 whitespace-nowrap overflow-auto">{participate}</span>
                                <span className="h-12 whitespace-nowrap overflow-auto">{time1}</span>
                                <span className="h-12 whitespace-nowrap overflow-auto">{participate1}</span>
                                <span className="h-12 whitespace-nowrap overflow-auto">{location}</span>
                                <span className="h-12 whitespace-nowrap overflow-auto">{host}</span>
                                {/* <span>{'쉐마미술관'}</span>
                                <span>{'한국문화예술교육진흥원'}</span> */}
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