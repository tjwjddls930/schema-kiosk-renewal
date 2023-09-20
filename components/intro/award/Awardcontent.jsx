// import { awardData } from "@/data/awardData"

export default function Awardcontent({imgname, engname, name, career}) {
    let timeline = [
        {order: 1, year: 2018, award: "Triple Artists Exhibition (쉐마미술관, 청주)"},
        {order: 2, year: 2016, award: "Eun Soo Lim Drawing (사라예보, 갤러리벨)"},
        {order: 3, year: 2013, award: "임은수 개인전 '지나가다' (갤러리 그림손그림손, 서울/ 쉐마미술관, 청주)"},
        {order: 4, year: 2010, award: "자인제노 갤러리 기획초대전 (자인제노 갤러리)"},
        {order: 5, year: 2009, award: "線 위의 線 (인사아트센터, 서울)"},
        {order: 6, year: 2007, award: "제 5회 올해의 좋은 작가 미술상 기획초대전 (무심갤러리, 청주)"},
        {order: 7, year: 2007, award: "나무 아래서 (갤러리 PICI, 서울)"},
        {order: 8, year: 2006, award: "당신의 초상 (무심 갤러리, 청주)"},
        {order: 9, year: 2006, award: "자라다-대전국제 아트페스티벌 (대전)"},
        {order: 10, year: 2005, award: "성원미술관 초대전(성원미술관, 홍천)"},
        {order: 11, year: 2002, award: "어떤 초월 (갤러리 타블로, 서울)"},
        {order: 12, year: 2001, award: "만남에 관한 보고서 (갤러리 신, 청주)"},
        {order: 13, year: 2001, award: "감추어지지 않는 것에 대하여 (스페이스 샘, 청주)"},
        {order: 14, year: 2000, award: "자라다 여성 작가 2인 초대전 (무심갤러이, 청주)"},
        {order: 15, year: 1997, award: "사람들 (청주 예술의 전당, 청주)"},
        {order: 16, year: 1995, award: "꽃을 밴 여인 (학천갤러이, 청주)"},
        {order: 17, year: 1992, award: "부드러운 수음자 (무심갤러리, 청주), (삼정미술관, 서울)"},
    ]
    
    return(
        <div className="w-11/12 h-3/4 mx-auto px-20 py-4 flex flex-row">
            <div className="flex flex-col">
                <div className="border-4 border-Awhite h-[400px] w-[530px]">
                    <img 
                        src={`/img/intro/award/${imgname}`}
                        className="h-[392px] w-[530px] mx-auto shadow-lg mb-4"
                        alt="artist"
                    />
                </div>
                <div className="h-[2px] w-14 bg-Cpurple mt-4 mb-2"></div>
                <span className="text-2xl text-Awhite">{engname}</span>
                <span className="font-bold text-3xl text-Awhite mb-2">{name}</span>
                <p className="text-md text-Awhite">{career}</p>
            </div>
            <div className="flex flex-col space-y-12 h-[500px] overflow-auto scroll-smooth">
                <div className="flex flex-row px-8 space-x-2">
                    <div className="flex-1 text-Awhite font-lg font-bold w-[100px]">
                        개인전
                    </div>
                    <div className="flex flex-col space-y-2">
                            {timeline.map((item)=>(
                                <span
                                    key={item.order}
                                    className="text-Cpurple font-bold text-md">{item.year}</span>
                            ))}
                        </div>
                        <div className="flex flex-col space-y-2">
                            {timeline.map((item)=> (
                                <span
                                    key={item.order}
                                    className="text-gray-300 font-bold text-md"
                                >
                                    {item.award}
                                </span>
                            ))}
                        </div>
                </div>
                <div className="flex flex-row px-8 space-x-2">
                    <div className="flex-1 text-Awhite font-lg font-bold w-[100px]">
                        단체전
                    </div>
                    <div className="flex flex-col space-y-2">
                            {timeline.map((item)=>(
                                <span
                                    key={item.order}
                                    className="text-Cpurple font-bold text-md">{item.year}</span>
                            ))}
                        </div>
                        <div className="flex flex-col space-y-2">
                            {timeline.map((item)=> (
                                <span
                                    key={item.order}
                                    className="text-gray-300 font-bold text-md"
                                >
                                    {item.award}
                                </span>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    )
}