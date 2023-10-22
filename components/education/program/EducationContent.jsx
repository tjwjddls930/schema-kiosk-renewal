const EducationContent = () => {
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
            <div className="h-3/4 screen-w:h-full w-1/4 z-10">
                <img 
                    src="/img/educationpage/education_1.png"
                    className="h-full w-5/6 screen-w:h-5/6 mx-auto shadow-xl"
                    alt="education"
                />
            </div>
            <div className="h-full w-3/4 flex flex-col space-y-6 screen-w:space-y-12">
                <div className="w-3/4 flex flex-col space-y-2 screen-w:space-y-8">
                    <div className="bg-Ablue h-[1px] w-[70px] screen-w:w-[200px]" />
                    <span className="text-sm screen-w:text-6xl font-bold text-Bgrey">{'2023 생애주기별 문화예술교육 지원사업 꿈다락문화예술학교'}</span>
                    <span className="text-base screen-w:text-7xl font-bold text-Ablack">{'쉐마미술관아틀리에 VER.1'}</span>
                </div>
                <div className="bg-Dgrey bg-opacity-30 flex flex-row justify-center px-6 py-8 space-x-4 screen-w:py-24 screen-w:space-x-8 mx-auto h-2/3 w-full">
                    <div className="flex flex-col space-y-6">
                        {educationartist.map((item) => (
                        <div
                            key={item.order}
                            className="flex flex-col space-y-2 screen-w:space-y-8">
                            <span className="text-Bblue font-bold text-sm screen-w:text-4xl">{item.artist}{'작가'}<span className="text-Dgrey screen-w:text-3xl">{' | '}</span><span className="text-sm text-Ablack font-bold screen-w:text-4xl">{item.location}</span></span>
                            <span className="text-sm screen-w:text-4xl text-Bgrey font-bold mb-4">{item.time}</span>
                        </div>
                        ))}
                    </div>
                    <div className="bg-Cgrey w-[1px] h-full" />
                    <div className="flex flex-row space-x-4">
                        <div className="flex flex-col space-y-3 text-xs screen-w:text-4xl screen-w:space-y-8 text-Ablack font-bold">
                            <span>{'교육대상'}</span>
                            <span>{'교육시간'}</span>
                            <span>{'참여인원'}</span>
                            <span>{'교육장소'}</span>
                            <span>{'주최'}</span>
                            <span>{'주관'}</span>
                            <span>{'협력'}</span>
                            <span>{'후원'}</span>
                        </div>
                        <div className="flex flex-col space-y-3 text-xs screen-w:text-4xl screen-w:space-y-8 text-Cgrey font-bold">
                            <span>{'초등학교 1~3학년 (저학년)'}</span>
                            <span>{'매주 일요일 오전 10시 ~ 오후 1시'}</span>
                            <span>{'10명씩 3기수 진행(총 30명)'}</span>
                            <span>{'쉐마미술관 교육실 및 야외'}</span>
                            <span>{'충북문화재단, 충북문화예술교육지원센터'}</span>
                            <span>{'쉐마미술관'}</span>
                            <span>{'한국문화예술교육진흥원'}</span>
                            <span>{'충청북도, 문화체육관광부'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EducationContent;