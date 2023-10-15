import { useTranslation } from "next-i18next"

export default function Schemastructure() {
    const {t} = useTranslation('intro');
    let leftImages = [
        {
            src: "/img/intro/structure/쉐마_로비.jpg",
            name: "로비",
            engname: "Lobby",
            // text: "쉐마미술관의 로비는 약 20평의 공간으로 또 다른 전시공간으로도 사용 가능한 공간입니다."
            text: t("LOBBY_EX")
        },
        {
            src: "/img/intro/structure/쉐마_대전시실.jpg",
            name: "대전시실 ",
            engname: "Grand exhibition room",
            // text: "쉐마미술관의 가장 큰 전시실인 대전시실은 약 40평의 공간으로 12.4x10.6m로 설계되어 있습니다.",
            text: t("LARGE_EX")
        },
        {
            src: "/img/intro/structure/쉐마_소전시실.jpg",
            name: "소전시실",
            engname: "Small exhibition room",
            // text: "쉐마미술관의 두번째 전시실인 소전시실은 약 10평의 공간으로 6.3x5.4m로 설계되어 있습니다."
            text: t("SMALL_EX")
        },
        {
            src: "/img/intro/structure/쉐마_교육실.jpg",
            name: "교육실",
            engname: "Education room",
            // text: "쉐마미술관의 교육실은 약 13평의 공간으로 8x5.4m로 설계되어 있습니다."
            text: t("EDUCATION_EX")
        },
    ]
    return(
        <div className="h-2/3 w-full flex flex-row space-x-2 screen-w:space-x-8">
            <div className="w-1/2 flex flex-col space-y-2 screen-w:space-y-8 items-center text-center">
                <div className="shadow-lg screen-w:w-3/4">
                    <img 
                        className="h-[250px] w-[450px] screen-w:w-full screen-w:h-full mx-auto"
                        src="/img/intro/structure/쉐마_야외공간.jpg"
                        alt="outdoor"
                    />
                </div>
                <div className="w-[450px] screen-w:w-3/4 flex flex-row mx-auto">
                    <span className="text-lg screen-w:text-6xl font-bold text-Cpurple justify-start">{'야외공간 '} <span className="text-Cgrey opacity-30 screen-w:text-6xl">{'|'}</span> <span className="font-bold text-lg text-black screen-w:text-6xl">{' Outdoor'}</span></span>
                </div>
                <div className="w-[450px] screen-w:w-3/4 flex justify-start">
                    {/* <p className="text-sm text-Cgrey font-bold screen-w:text-4xl screen-w:leading-normal">
                        {'주변 야산으로 둘러싸여 아늑하게 자리 잡은 쉐마미술관은 정문에서부터 미술관 현관에 이르기까지 약 80m정도에 이르는 야외공간에 입체 또는 설치 작품을 보실 수 있는 공간입니다. 또한 쉐마미술관은 아름다운 경치를 자랑하며 사계절의 변화와 자연을 느낄 수 있는 공간입니다.'}
                    </p> */}
                    <p className="text-sm text-Cgrey font-bold screen-w:text-4xl screen-w:leading-normal">
                        {t("OUT_EX")}
                    </p>
                </div>
            </div>
            <div className="grid gap-6 grid-cols-2 screen-w:w-1/2 mx-auto">
                {
                    leftImages.map((img, index) => (
                        <div 
                            key={img.name}
                            className="flex flex-col space-y-2 screen-w:space-y-8">
                            <img 
                                key={img.name}
                                src={`${img.src}`}
                                alt=""
                                className="h-[120px] w-[320px] shadow-lg screen-w:h-[400px] screen-w:w-[500px] screen-w:mx-auto"
                            />
                            <div
                                className="w-[320px] flex flex-row mx-auto screen-w:w-3/4 screen-w:justify-start">
                                <span className="text-lg font-bold text-Cpurple justify-start screen-w:text-4xl">{img.name}<span className="text-Cgrey opacity-30 screen-w:text-4xl">{' | '}</span> <span className="font-bold text-lg text-black screen-w:text-4xl">{img.engname}</span></span>
                            </div>
                            <div
                                className="w-[320px] mx-auto screen-w:w-3/4 screen-w:justify-start">
                                <p className="text-sm text-Cgrey font-bold screen-w:text-3xl screen-w:leading-normal">
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
