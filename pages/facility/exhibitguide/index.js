import FacilityLayout from "@/components/facility/FacilityLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Exhibitguide() {
    return(
        <FacilityLayout>
            <div className="h-20 w-10/12 screen-w:w-9/12 screen-w:h-48 flex flex-col bg-Awhite mx-auto items-center space-y-1 p-3 screen-w:space-y-4 screen-w:p-6">
                <div className="bg-Cpurple h-[2.5px] w-[60px] screen-w:w-[100px] rounded-full"></div>
                <span className="text-sm text-Cgrey font-bold screen-w:text-3xl">Exhibition guide</span>
                <span className="text-base text-black font-bold screen-w:text-5xl">전시관람 안내</span>
            </div>
                <div className="h-[55%] w-10/12 screen-w:w-9/12 flex flex-row space-x-6 mx-auto justify-center items-center py-6 px-3 bg-Dgrey bg-opacity-50 screen-w:space-x-32 screen-w:py-32 screen-w:px-12">
                    <div className="h-full flex flex-col">
                        <span className="text-black text-lg font-bold mb-2 screen-w:text-4xl screen-w:mb-4">관람시간</span>
                        <span className="text-Cpurple text-sm font-bold mb-1 screen-w:text-screen-w screen-w:mb-2">{'1,2월 동절기 | '}<span className="text-black text-sm screen-w:text-xl font-bold">오전 10시 ~ 오후 5시</span><span className="text-Cgrey text-md screen-w:text-xl font-bold">{'(오후 4시 30분 입장마감)'}</span></span>
                        <span className="text-black text-sm font-bold mb-4 screen-w:text-screen-w screen-w:mb-6">매주 일요일, 월요일 휴관</span>
                        <span className="text-Cpurple text-sm font-bold mb-1 screen-w:text-screen-w screen-w:mb-2">{'3 ~ 5월/10월 ~ 12월 | '}<span className="text-black text-md screen-w:text-xl font-bold">오전 9시 30분 ~ 오후 5시 30분</span><span className="text-Cgrey text-md screen-w:text-xl font-bold">{'(오후 5시 입장마감)'}</span></span>
                        <span className="text-black text-sm font-bold mb-4 screen-w:text-screen-w screen-w:mb-6">매주 월요일 휴관</span>
                        <span className="text-Cpurple text-sm font-bold mb-1 screen-w:text-screen-w screen-w:mb-2">{'6월 ~ 9월 | '}<span className="text-black text-md screen-w:text-xl font-bold">오전 10시 ~ 오후 6시</span><span className="text-Cgrey text-md screen-w:text-xl font-bold">{'(오후 5시 30분 입장마감)'}</span></span>
                        <span className="text-black text-sm font-bold mb-7 screen-w:text-screen-w screen-w:mb-9">매주 월요일 휴관</span>
                        <span className="text-black text-lg font-bold mb-2 screen-w:text-4xl screen-w:mb-4">도슨트 안내</span>
                        <span className="text-Bgrey text-sm font-bold mb-1 screen-w:text-screen-w screen-w:mb-2">도슨트를 원하시는 관람객께서는 사전에 미술관으로 연락주시기 바랍니다.</span>
                        <span className="text-Cgrey text-xs font-bold mb-3 screen-w:text-xl screen-w:mb-5">*미술관의 상황에 따라 진행이 어려울 수도 있습니다.</span>
                        <div className="text-base font-bold text-black h-10 w-[250px] screen-w:text-3xl screen-w:h-20 screen-w:w-[400px] bg-Awhite rounded-full text-center pt-1 screen-w:pt-2">{'문의 043-221-3269'}</div>
                    </div>
                    <div className="h-full flex flex-col">
                        <span className="text-black text-lg font-bold mb-2 screen-w:text-4xl screen-w:mb-4">관람료</span>
                        <span className="text-Cpurple text-sm font-bold mb-1 screen-w:text-screen-w screen-w:mb-2">{'성인 (19세 이상 64세 이하)'}<span className="text-Cgrey text-md screen-w:text-xl font-bold">{' | '}</span><span className="text-black text-md screen-w:text-xl font-bold">{'2,000원'}</span></span>
                        <span className="text-Cpurple text-sm font-bold mb-1 screen-w:text-screen-w screen-w:mb-2">{'청소년 (중, 고등학생 포함 13세 이상 18세 이하)'}<span className="text-Cgrey text-md screen-w:text-xl font-bold">{' | '}</span><span className="text-black text-md screen-w:text-xl font-bold">{'1,000원'}</span></span>
                        <span className="text-Cpurple text-sm font-bold mb-1 screen-w:text-screen-w screen-w:mb-2">{'어린이 (초등학생 포함 7세 이상 12세 이하'}<span className="text-Cgrey text-md screen-w:text-xl font-bold">{' | '}</span><span className="text-black text-md screen-w:text-xl font-bold">{'1,000원'}</span></span>
                        <span className="text-Cgrey text-xs font-bold mb-5 screen-w:text-xl screen-w:mb-7">* 기획전 또는 특별전의 경우 별도의 관람료가 책정될 수 있습니다.</span>

                        <span className="text-black text-lg font-bold mb-1 screen-w:text-4xl screen-w:mb-2">할인대상</span>
                        <span className="text-Bgrey text-sm font-bold mb-5 screen-w:text-screen-w screen-w:mb-7">{'단체 5인 이상 50% (방문 7일 전 예약 단체에 한함)'}</span>
                        <span className="text-black text-lg font-bold mb-1 screen-w:text-4xl screen-w:mb-2">무료대상</span>
                        <span className="text-Bgrey text-sm font-bold mb-1 screen-w:text-screen-w screen-w:mb-2">{'- 6세 이하 어린이, 65세 이상 어르신'}</span>
                        <span className="text-Bgrey text-sm font-bold mb-1 screen-w:text-screen-w screen-w:mb-2">{'- 장애인 복지법에 따른 장애인'}</span>
                        <span className="text-Bgrey text-sm font-bold mb-1 screen-w:text-screen-w screen-w:mb-2">{'- 국가유공자 등예우 및 지원에 관한 법률에 따른 국가 유공자와 유족'}</span>
                        <span className="text-Cgrey text-xs font-bold mb-1 screen-w:text-screen-w screen-w:mb-2">{' (신분증 또는 증명서류 제시자에 한함)'}</span>
                    </div>
                </div>
        </FacilityLayout>
    )
};

export async function getStaticProps(context) {
    const {locale} = context;
    return{
        props: {
            ...(await serverSideTranslations(locale, ['common', 'navbar']))
        }
    }
};