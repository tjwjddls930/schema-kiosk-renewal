
export default function EducationContent() {
    let educationartist = [
        {order: "01", artist:"1기 이자연", location: "조각 실험실", time: "7월 9일, 7월 16일, 7월 23일, 7월 30일, 8월 6일(5회차)"},
        {order: "02", artist:"2기 김동우", location: "이미지 실험실", time: "'8월 20일, 8월 27일, 9월 3일, 9월 10일, 9월 17일(5회차)"},
        {order: "03", artist:"3기 최민솔", location: "형태 실험실", time: "9월 24일, 10월 8일, 10월 15일, 10월 22일, 10월 29일(5회차)"}
    ];

    // let educationdetail = [
    //     {order: "01", target: "교육대상", target1: "초등학교 1~3학년 (저학년)", length: "교육시간", length1: "매주 일요일 오전 10시 ~ 오후 1시", people: "참여인원", people1: "10명씩 3기수 진행(총 30명)", location: "교육장소", location1: "쉐마미술관 교육실 및 야외", host: "주최", host1: "충북문화재단, 충북문화예술교육지원센터", institution: "주관", institution1: "쉐마미술관", coop: "협력", coop1: "한국문화예술교육진흥원", support: "후원", support1: "충청북도, 문화체육관광부"}
    // ]
    return(
        <div className="h-3/4 w-[85%] flex flex-row mx-auto space-x-8">
            <div className="h-full w-1/4 z-10">
                <img 
                    src="/img/educationpage/education_1.png"
                    className="h-[450px] w-[300px] mx-auto shadow-xl"
                    alt="education"
                />
            </div>
            <div className="h-full w-3/4 flex flex-col space-y-6">
                <div className="flex flex-col space-y-2">
                    <div className="bg-Cpurple h-[1px] w-[70px]" />
                    <span className="text-xl font-bold text-Bgrey">{'2023 생애주기별 문화예술교육 지원사업 꿈다락문화예술학교'}</span>
                    <span className="text-screen-w font-bold text-Ablack">{'쉐마미술관아틀리에 VER.1'}</span>
                </div>
                <div className="bg-Dgrey bg-opacity-30 flex flex-row px-6 py-8 space-x-4 mx-auto h-[350px] w-full">
                    <div className="flex flex-col space-y-6">
                        {educationartist.map((item) => (
                        <div
                            key={item.order}
                            className="flex flex-col space-y-2">
                            <span className="text-Cpurple font-bold text-base">{item.artist}{'작가'}<span className="text-Dgrey">{' | '}</span><span className="text-lg text-Ablack font-bold">{item.location}</span></span>
                            <span className="text-base text-Bgrey font-bold mb-4">{item.time}</span>
                        </div>
                        ))}
                    </div>
                    <div className="bg-Cgrey w-[1px] h-[300px]" />
                    <div className="flex flex-row space-x-4">
                        <div className="flex flex-col space-y-3">
                            <span className="text-base text-Ablack font-bold">{'교육대상'}</span>
                            <span className="text-base text-Ablack font-bold">{'교육시간'}</span>
                            <span className="text-base text-Ablack font-bold">{'참여인원'}</span>
                            <span className="text-base text-Ablack font-bold">{'교육장소'}</span>
                            <span className="text-base text-Ablack font-bold">{'주최'}</span>
                            <span className="text-base text-Ablack font-bold">{'주관'}</span>
                            <span className="text-base text-Ablack font-bold">{'협력'}</span>
                            <span className="text-base text-Ablack font-bold">{'후원'}</span>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <span className="text-base text-Cgrey font-bold">{'초등학교 1~3학년 (저학년)'}</span>
                            <span className="text-base text-Cgrey font-bold">{'매주 일요일 오전 10시 ~ 오후 1시'}</span>
                            <span className="text-base text-Cgrey font-bold">{'10명씩 3기수 진행(총 30명)'}</span>
                            <span className="text-base text-Cgrey font-bold">{'쉐마미술관 교육실 및 야외'}</span>
                            <span className="text-base text-Cgrey font-bold">{'충북문화재단, 충북문화예술교육지원센터'}</span>
                            <span className="text-base text-Cgrey font-bold">{'쉐마미술관'}</span>
                            <span className="text-base text-Cgrey font-bold">{'한국문화예술교육진흥원'}</span>
                            <span className="text-base text-Cgrey font-bold">{'충청북도, 문화체육관광부'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}