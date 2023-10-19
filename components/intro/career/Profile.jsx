import { careerData } from "@/data/careerData";

const Profile = ({}) => {
    console.log(careerData[0].education)
    return(
        <div className="w-11/12 h-3/4 screen-w:h-[70%] mx-auto flex flex-row space-x-[50px] screen-w:space-x-[100px] justify-between">
            <div className="absolute bottom-4 transform -translate-x-1/2 left-[37%] screen-w:bottom-24">
                <img 
                    src="/img/intro/career/김재관_관장님.png"
                    className="h-[550px] w-[450px] screen-w:h-[1700px] screen-w:w-[1500px] opacity-80"
                    alt="director"
                />
            </div>
            <div className="w-1/2 h-3/4 flex flex-col space-y-4 screen-w:space-y-[150px]">
                <div className="flex flex-col space-y-2 screen-w:space-y-8">
                    <div className="h-[0.5px] screen-w:h-[1px] bg-Ablue w-20 screen-w:w-32"/>
                    <span className="font-bold text-lg screen-w:text-6xl text-Cgrey">{'Kim Jae-Kwan'}</span>
                    <span className="font-bold text-lg screen-w:text-7xl text-Ablack">{'김재관'}</span>
                </div>

                <div className="border-4 border-Ablack w-[300px] h-[150px] flex flex-col space-y-2 px-4 py-8 text-center screen-w:w-[750px] screen-w:h-[350px] screen-w:px-8 screen-w:py-16 text-Ablack text-xs screen-w:text-4xl font-bold">
                    <span>{'쉐마미술관 관장'}</span>
                    <span>{'에스펙트 현대미술동인회 명예회장'}</span>
                    <span>{'(사)한국사립미술관협회 회장 역임'}</span>
                    <span>{'충청북도 박물관미술관진흥위원회 위원장'}</span>
                </div>
            </div>
            <div className="w-1/2 h-3/4 flex flex-col space-y-4 screen-w:space-y-24">
                <div className="w-full h-[30%] flex flex-row space-x-6 screen-w:space-x-12">
                    <span className="font-bold text-base screen-w:text-5xl text-Ablack">{'학력사항'}</span>
                    <div className="ml-4 bg-Cgrey h-full w-[0.5px]"/>
                    <div className="flex flex-col space-y-2 screen-w:space-y-4">
                        {careerData[0].education.map((item)=>(
                            <span
                                key={item.order} 
                                className="font-bold text-sm screen-w:text-4xl text-Ablue">{item.year}</span>
                        ))}
                    </div>
                    <div className="flex flex-col space-y-w screen-w:space-y-4">
                        {careerData[0].education.map((item)=> (
                            <span
                                key={item.order}
                                className="font-bold text-sm screen-w:text-4xl text-Agrey"
                            >
                                {item.text}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-full h-[30%] flex flex-row space-x-6 screen-w:space-x-12">
                    <span className="font-bold text-base screen-w:text-5xl text-Ablack">{'수상경력'}</span>
                    <div className="ml-4 bg-Cgrey h-full w-[0.5px]"/>
                    <div className="flex flex-col space-y-2 screen-w:space-y-4">
                        {careerData[0].award.map((item)=>(
                            <span
                                key={item.order} 
                                className="font-bold text-sm screen-w:text-4xl text-Ablue">{item.year}</span>
                        ))}
                    </div>
                    <div className="flex flex-col space-y-w screen-w:space-y-4">
                        {careerData[0].award.map((item)=> (
                            <span
                                key={item.order}
                                className="font-bold text-sm screen-w:text-4xl text-Agrey"
                            >
                                {item.text}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-full flex flex-row space-x-6 screen-w:space-x-20">
                    <span className="font-bold text-Ablack text-base screen-w:text-5xl">{'작품 소장'}</span>
                    <span className="font-bold text-Agrey text-base screen-w:text-4xl">{'국립현대미술관, 서울시립미술관, 부산시립미술관 등 다수'}</span>
                </div>
            </div>
        </div>
    )
};

export default Profile;