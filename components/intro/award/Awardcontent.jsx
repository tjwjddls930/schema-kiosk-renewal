import { awardData } from "@/data/awardData"

const Awardcontent = ({imgname, engname, name, career, timeline_i, timeline_g}) => {
    return(
        <div className="w-11/12 h-3/4 mx-auto px-20 py-12 screen-w:px-40 screen-w:py-16 lg:py-6 flex flex-row justify-between">
            <div className="flex flex-col screen-w:space-y-4 screen-w:w-[40%] screen-w:h-1/2">
                <div className="border-4 border-Awhite h-[250px] w-[380px] screen-w:h-[1100px] screen-w:w-[1300px]">
                    <img 
                        src={`/img/intro/award/${imgname}`}
                        className="h-full w-full mx-auto shadow-lg mb-4"
                        alt="artist"
                    />
                </div>
                <div className="h-[2px] w-14 screen-w:w-28 bg-Cpurple mt-4 mb-2"></div>
                <span className="text-xl screen-w:text-4xl text-Awhite">{engname}</span>
                <span className="font-bold text-screen-w screen-w:text-5xl text-Awhite mb-2">{name}</span>
                <p className="text-base screen-w:text-4xl text-Awhite">{career}</p>
            </div>
            <div className="flex flex-col space-y-12 h-[500px] screen-w:w-[58%] screen-w:h-1/2 overflow-auto scroll-smooth">
                <div className="flex flex-row px-8 space-x-2 screen-w:space-x-4 screen-w:w-full screen-w:overflow-auto screen-w:h-[700px]">
                    <div className="text-Awhite text-lg screen-w:text-5xl font-bold w-[100px] screen-w:w-[250px]">
                        개인전
                    </div>
                    <div className="flex flex-col space-y-2 screen-w:space-y-5">
                            {timeline_i.map((item, index)=>(
                            <div className="flex flex-row space-x-2 screen-w:space-x-5">
                                <span
                                    key={index}
                                    className="text-Cpurple font-bold text-sm screen-w:text-3xl">
                                        {item.year}
                                </span>
                                <span
                                    key={item.order}
                                    className="text-Awhite font-bold text-sm screen-w:text-3xl"
                                >
                                    {item.award}
                                </span>
                            </div>
                            ))}
                        </div>
                </div>
                <div className="flex flex-row px-8 space-x-2 screen-w:space-x-4 screen-w:w-full screen-w:overflow-auto screen-w:h-[700px]">
                    <div className="text-Awhite text-lg screen-w:text-5xl font-bold w-[100px] screen-w:w-[250px]">
                        단체전
                    </div>
                    <div className="flex flex-col space-y-2 screen-w:space-y-5">
                            {timeline_g.map((item, index)=>(
                            <div className="flex flex-row space-x-2 screen-w:space-x-5">
                                <span
                                    key={index}
                                    className="text-Cpurple font-bold text-sm screen-w:text-3xl">
                                        {item.year}
                                </span>
                                <span
                                    key={item.order}
                                    className="text-Awhite font-bold text-sm screen-w:text-3xl"
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