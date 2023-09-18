

export default function Exhibitlayout({order, type, title, time, artist, location, host, support, time1, artist1, location1, host1, support1, explanation, author}) {

    return(
        <div className="w-11/12 h-5/6 mx-auto p-10">
            {/* 전시 설명 컨테이너 */}
            <div className="flex flex-row space-x-12 justify-between">
                <div className="justify-start flex flex-row space-x-4">
                    <span className="text-9xl font-bold text-black">{order}</span>
                    <div className="flex flex-col space-y-2 mt-6">
                        <div className="bg-Cpurple h-[2px] w-[60px] rounded-full"></div>
                        <span className="text-3xl font-bold text-Cgrey">{type}</span>
                        <span className="text-4xl font-bold text-black">{title}</span>
                    </div>
                </div>
                <div className="flex flex-row justify-start space-x-4">
                    <div className="flex flex-col space-y-2">
                        <span className="text-Cpurple text-md font-bold">{time}</span>
                        <span className="text-Cpurple text-md font-bold">{artist}</span>
                        <span className="text-Cpurple text-md font-bold">{location}</span>
                        <span className="text-Cpurple text-md font-bold">{host}</span>
                        <span className="text-Cpurple text-md font-bold">{support}</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span className="text-Agrey text-md font-bold">{time1}</span>
                        <span className="text-Agrey text-md font-bold">{artist1}</span>
                        <span className="text-Agrey text-md font-bold">{location1}</span>
                        <span className="text-Agrey text-md font-bold">{host1}</span>
                        <span className="text-Agrey text-md font-bold">{support1}</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 w-[450px] justify-end">
                        <p className="text-black text-md font-bold">
                            {explanation}
                        </p>
                        <span className="text-Cgrey text-md font-bold">{author}</span>
                </div>
            </div>

        </div>
    )
};