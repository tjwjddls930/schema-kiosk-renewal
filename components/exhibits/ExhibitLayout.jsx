import CoverflowCarousel from "../CoverflowCarousel";

const Exhibitlayout = ({order, type, title, time, artist, location, host, support, time1, artist1, location1, host1, support1, explanation, author, index, index1, children}) => {
    return(
        <>
        <div className="w-11/12 h-5/6 screen-w:h-[90%] mx-auto p-3 screen-w:px-10 screen-w:py-16">
            {/* 전시 설명 컨테이너 */}
            <div className="flex flex-row space-x-12 justify-between screen-w:space-x-40 screen-w:justify-center">
                <div className="justify-start flex flex-row space-x-4 w-1/3">
                    <span className="text-9xl screen-w:text-[250px] font-bold text-Ablack">{order}</span>
                    <div className="flex flex-col space-y-2 screen-w:space-y-8 mt-6">
                        <div className="bg-Ablue h-[2px] w-[60px] screen-w:w-[100px] rounded-full"></div>
                        <span className="text-xl screen-w:text-5xl font-bold text-Cgrey">{type}</span>
                        <span className="text-2xl screen-w:text-6xl font-bold text-Ablack">{title}</span>
                    </div>
                </div>
                <div className="flex flex-row justify-start space-x-4 screen-w:space-x-6 w-1/3">
                    <div className="flex flex-col space-y-2 screen-w:space-y-4 w-1/3">
                        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{time}</span>
                        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{artist}</span>
                        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{location}</span>
                        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{host}</span>
                        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{support}</span>
                    </div>
                    <div className="flex flex-col space-y-2 screen-w:space-y-4 w-2/3">
                        <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold">{time1}</span>
                        <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold whitespace-nowrap overflow-auto">{artist1}</span>
                        <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold">{location1}</span>
                        <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold">{host1}</span>
                        <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold">{support1}</span>
                    </div>
                </div>
                <div className="flex space-y-4 w-1/3 flex-col justify-end overflow-auto scroll-smooth">
                        <p className="h-[180px] screen-w:h-[450px] text-Ablack text-xs screen-w:text-4xl font-bold screen-w:leading-relaxed screen-w:truncate">
                            {explanation}
                            <br />
                            {author}
                        </p>
                        {/* <span className="text-Cgrey text-xs screen-w:text-4xl font-bold pt-2">{author}</span> */}
                </div>
            </div>
            {/* <CoverflowCarousel 
                index={index}
                // index1={index1}
            /> */}
            {children}
        </div>
    </>
    )
};

export default Exhibitlayout;