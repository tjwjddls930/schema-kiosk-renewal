

export default function IntroConnectContent() {
    return(
        <div className="h-full w-[87%] mx-auto flex flex-row space-x-8 pt-20">
            <div className="h-[450px] w-[450px]">
                <div className="flex flex-row space-x-4 overflow-hidden justify-start">
                    <span className="text-[150px] font-bold text-Ablack drop-shadow-xl">{'01'}</span>
                    <div className="flex flex-col w-[200px] mr-4 pt-10 justify-start">
                        <div className="bg-Cpurple h-[1px] w-[70px]" />
                        <span className="text-lg text-Agrey font-bold">{'Art museum Introduction and Structure'}</span>
                        <span className="text-2xl text-Ablack font-bold mb-5">{'미술관 소개 및 구조'}</span>
                        <span className="text-base text-Cgrey font-bold">{'미술관 구조에 대한'}</span>                        
                        <span className="text-base text-Cgrey font-bold">{'정보를 얻을 수 있습니다.'}</span>
                    </div>
                    <div className="flex flex-col-reverse pb-8">
                        <img 
                            className="h-12 w-12"
                            src="/img/connectpage/arrow_icon.png"
                            alt="arrow"
                        />
                    </div>
                </div>
                <div className="bg-Ablack h-[1px] w-[280px] mx-auto" />
            </div>
            <div className="h-[450px] w-[450px] mx-auto">
                <div className="flex flex-row space-x-4 overflow-hidden justify-start">
                    <span className="text-[150px] font-bold text-Ablack drop-shadow-xl">{'02'}</span>
                    <div className="flex flex-col w-[200px] mr-4 pt-10 justify-start">
                        <div className="bg-Cpurple h-[1px] w-[70px]" />
                        <span className="text-lg text-Agrey font-bold">{'Kim Jae-Kwan`s major career'}</span>
                        <span className="text-2xl text-Ablack font-bold mb-5">{'김재관 주요 경력'}</span>
                        <span className="text-base text-Cgrey font-bold">{'김재관 총장의 주요 경력과 활동사항'}</span>                        
                        <span className="text-base text-Cgrey font-bold">{'그리고 작품세계에 대해 자세히 알아볼 수 있습니다.'}</span>
                    </div>
                    <div className="flex flex-col-reverse pb-8">
                        <img 
                            className="h-12 w-12"
                            src="/img/connectpage/arrow_icon.png"
                            alt="arrow"
                        />
                    </div>
                </div>
                <div className="bg-Ablack h-[1px] w-[280px] mx-auto" />
            </div>
            <div className="h-[450px] w-[450px] mx-auto">
                <div className="flex flex-row space-x-4 overflow-hidden justify-start">
                    <span className="text-[150px] font-bold text-Ablack drop-shadow-xl">{'03'}</span>
                    <div className="flex flex-col w-[200px] mr-4 pt-10 justify-start">
                        <div className="bg-Cpurple h-[1px] w-[70px]" />
                        <span className="text-lg text-Agrey font-bold">{'Schema International Prized for Art'}</span>
                        <span className="text-2xl text-Ablack font-bold mb-5">{'쉐마국제미술상'}</span>
                        <span className="text-base text-Cgrey font-bold">{'쉐마국제미술상의 수상작가들을'}</span>                        
                        <span className="text-base text-Cgrey font-bold">{'만나볼 수 있습니다.'}</span>
                    </div>
                    <div className="flex flex-col-reverse pb-8">
                        <img 
                            className="h-12 w-12"
                            src="/img/connectpage/arrow_icon.png"
                            alt="arrow"
                        />
                    </div>
                </div>
                <div className="bg-Ablack h-[1px] w-[280px] mx-auto" />
            </div>
        </div>
    )
};