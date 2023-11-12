import TopNavbar from "@/components/mainpage/Topnavbar";
import Navbar from "@/components/navbar/Navbar";
import Newbutton from '@/components/mainpage/Newbutton';
import { LanguageContext } from '@/contexts/LanguageContext';
import { useContext } from 'react';
import { FontsizeContext } from "@/contexts/FontsizeContext";
// import Newnavbar from "@/components/navbar/Newnavbar";

const topText = {
    KOR: "2023 사립박물관·미술관 디지털 전시관람 환경 개선 지원사업",
    ENG: "2023 Support project to improve digital exhibition viewing environment at private museums and art galleries",
    CH: "2023 支持改善私人博物馆和美术馆的数字展览观看环境的项目",
    TH: "2023 สนับสนุนโครงการปรับปรุงสภาพแวดล้อมในการชมนิทรรศการดิจิทัลที่พิพิธภัณฑ์ส่วนตัวและหอศิลป์",
    VI: "2023 Dự án hỗ trợ cải thiện môi trường xem triển lãm kỹ thuật số tại các bảo tàng và phòng trưng bày nghệ thuật tư nhân"
}

const bottomText = {
    KOR: (size)=> (
        <div className="mx-auto flex flex-row items-center">
            <span className={`text-Ablue ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"관람시간 안내"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"오전 10시 ~ 오후 6시"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"오후 5시 30분 입장 마감"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"매주 월요일 휴관"}</span>
        </div>
    ),
    ENG: (size) => (
        <div className="mx-auto flex flex-row items-center">
            <span className={`text-Ablue ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"Exhibit time guide"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"10AM ~ 6PM"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"Entry cloeses at 5:30PM"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"Closed every Monday"}</span>
        </div>
    ),
    CH: (size) => (
        <div className="mx-auto flex flex-row items-center">
            <span className={`text-Ablue ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"观赏时间信息"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"上午 10 点至下午 6 点"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"入场截止时间为下午 5:30"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"每周一休息"}</span>
        </div>
    ),
    TH: (size) => (
        <div className="mx-auto flex flex-row items-center">
            <span className={`text-Ablue ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"ข้อมูลเกี่ยวกับชั่วโมงการรับชม"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"10.00 - 18.00 น"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"ปิดรับเข้าเวลา 17.30 น"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"ปิดทุกวันจันทร์"}</span>
        </div>
    ),
    VI: (size) => (
        <div className="mx-auto flex flex-row items-center">
            <span className={`text-Ablue ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"Thông tin về giờ xem"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"10 giờ sáng - 6 giờ chiều"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"Cổng vào đóng lúc 5:30 chiều"}</span>
            <div className="mx-2 h-[12px] screen-w:h-[24px] w-[0.5px] border border-Cgrey">
            </div>
            <span className={`text-Bgrey ${size ? `screen-w:text-5xl` : `screen-w:text-4xl`}`}>{"Đóng cửa vào thứ Hai hàng tuần"}</span>
        </div>
    ),
};

export default function Mainpage() {
    const {language} = useContext(LanguageContext);
    const {fontsize} = useContext(FontsizeContext);
    return(
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-[url('/img/mainpage/kiosk_main_bg.png')]"
            style={{
                // opacity:0.5,
                zIndex: -1
            }}
            >
            </div>
            {/* 상단 로고 섹션 */}
            <TopNavbar />
            <div className="w-5/6 flex mx-auto text-center items-center justify-center">
                <span className="flex text-5xl text-Bgrey font-bold">
                    {topText[language]}
                </span>
            </div>
            {/* 중단 버튼 섹션 */}
            <Newbutton />
            {/* 하단 텍스트 */}
            <div className="flex flex-row space-x-4 text-md font-bold pt-7 screen-w:pt-9">
                {bottomText[language](fontsize)}
            </div>
            {/* navbar */}
            <Navbar 
                url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/KOR/schema-docent-intro-award-5-KOR.webm`}
                sign={"/video/sign/schema_sign_2.mp4"}
            /> 
            {/* <Newnavbar /> */}
        </div>       
    )
};