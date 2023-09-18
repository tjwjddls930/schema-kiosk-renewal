
export default function Schemastructure() {

    let leftImages = [
        {
            src: "/img/intro/structure/쉐마_로비.jpg",
            name: "로비",
            engname: "Lobby",
            text: "쉐마미술관의 로비는 약 20평의 공간으로 또 다른 전시공간으로도 사용 가능한 공간입니다."
        },
        {
            src: "/img/intro/structure/쉐마_대전시실.jpg",
            name: "대전시실 ",
            engname: "Grand exhibition room",
            text: "쉐마미술관의 가장 큰 전시실인 대전시실은 약 40평의 공간으로 12.4x10.6m로 설계되어 있습니다."
        },
        {
            src: "/img/intro/structure/쉐마_소전시실.jpg",
            name: "소전시실",
            engname: "Small exhibition room",
            text: "쉐마미술관의 두번째 전시실인 소전시실은 약 10평의 공간으로 6.3x5.4m로 설계되어 있습니다."
        },
        {
            src: "/img/intro/structure/쉐마_교육실.jpg",
            name: "교육실",
            engname: "Education room",
            text: "쉐마미술관의 교육실은 약 13평의 공간으로 8x5.4m로 설계되어 있습니다."
        },
    ]
    return(
        <div className="h-2/3 w-full flex flex-row space-x-8">
            <div className="w-1/2 flex flex-col space-y-2 items-center text-center">
                <div className="shadow-lg">
                    <img 
                        className="h-[350px] w-[450px] mx-auto"
                        src="/img/intro/structure/쉐마_야외공간.jpg"
                        alt="outdoor"
                    />
                </div>
                <div className="w-[450px] flex flex-row mx-auto">
                    <span className="text-lg font-bold text-Cpurple justify-start">{'야외공간 '} <span className="text-Cgrey opacity-30">{'|'}</span> <span className="font-bold text-lg text-black">{' Outdoor'}</span></span>
                </div>
                <div className="w-[450px] mx-auto">
                    <p className="text-md text-Cgrey font-bold">
                        {'주변 야산으로 둘러싸여 아늑하게 자리 잡은 쉐마미술관은 정문에서부터 미술관 현관에 이르기까지 약 80m정도에 이르는 야외공간에 입체 또는 설치 작품을 보실 수 있는 공간입니다. 또한 쉐마미술관은 아름다운 경치를 자랑하며 사계절의 변화와 자연을 느낄 수 있는 공간입니다.'}
                    </p>
                </div>
            </div>
            <div className="grid gap-6 grid-cols-2">
                {
                    leftImages.map((img, index) => (
                        <div 
                            key={img.name}
                            className="flex flex-col space-y-2">
                            <img 
                                key={img.name}
                                src={`${img.src}`}
                                alt=""
                                className="h-[150px] w-[300px] shadow-lg"
                            />
                            <div
                                className="w-[300px] flex flex-row mx-auto">
                                <span className="text-lg font-bold text-Cpurple justify-start">{img.name}<span className="text-Cgrey opacity-30">{' | '}</span> <span className="font-bold text-lg text-black">{img.engname}</span></span>
                            </div>
                            <div
                                className="w-[300px] mx-auto">
                                <p className="text-md text-Cgrey font-bold">
                                    {img.text}
                                </p>    
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};
