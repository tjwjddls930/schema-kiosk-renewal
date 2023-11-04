import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import clsx from "clsx";
import Link from "next/link";
import { useContext } from "react";

const data_KOR = [
    {
        src: "/img/intro/structure/쉐마_로비.jpg",
        name: "로비 ",
        engname: "Lobby",
        text: "쉐마미술관의 로비는 약 20평의 공간으로 또 다른 전시공간으로도 사용 가능한 공간입니다."
    },
    {
        src: "/img/intro/structure/쉐마_교육실.jpg",
        name: "교육실 ",
        engname: "Education room",
        text: "쉐마미술관의 교육실은 약 13평의 공간으로 8x5.4m로 설계되어 있습니다."
    },
    {
        src: "/img/intro/structure/쉐마_대전시실.jpg",
        name: "대전시실 ",
        engname: "Grand exhibition room",
        text: "쉐마미술관의 가장 큰 전시실인 대전시실은 약 40평의 공간으로 12.4x10.6m로 설계되어 있습니다.",
    },
    {
        src: "/img/intro/structure/쉐마_소전시실.jpg",
        name: "소전시실 ",
        engname: "Small exhibition room",
        text: "쉐마미술관의 두번째 전시실인 소전시실은 약 10평의 공간으로 6.3x5.4m로 설계되어 있습니다."
    },
];

const data_ENG = [
    {
        src: "/img/intro/structure/쉐마_로비.jpg",
        name: "Lobby",
        engname: "Lobby",
        text: "The lobby of the Schema Museum of Art is a space of approximately 20 pyeong that can also be used as another exhibition space."
    },
    {
        src: "/img/intro/structure/쉐마_교육실.jpg",
        name: "Education Room",
        engname: "Education room",
        text: "The Schema Museum of Art's education room is designed to be 8x5.4m with a space of approximately 13 pyeong."
    },
    {
        src: "/img/intro/structure/쉐마_대전시실.jpg",
        name: "Grand Exhibition Room ",
        engname: "Grand exhibition room",
        text: "The Daejeon Exhibition Hall, the largest exhibition hall of the Schema Museum of Art, is designed at 12.4x10.6m with a space of approximately 40 pyeong.",
    },
    {
        src: "/img/intro/structure/쉐마_소전시실.jpg",
        name: "Small Exhibition Room",
        engname: "Small exhibition room",
        text: "The small exhibition hall, the second exhibition hall of the Schema Museum of Art, is designed with a space of approximately 10 pyeong (6.3x5.4m)."
    },
];

const data_CH = [
    {
        src: "/img/intro/structure/쉐마_로비.jpg",
        name: "大堂 ",
        engname: "Lobby",
        text: "Schema美术馆的大厅面积约为20坪，可作为另一个展览空间。"
    },
    {
        src: "/img/intro/structure/쉐마_교육실.jpg",
        name: "训练室 ",
        engname: "Education room",
        text: "Schema美术馆的教育室设计为8x5.4m，空间约13坪。"
    },
    {
        src: "/img/intro/structure/쉐마_대전시실.jpg",
        name: "大田展览馆 ",
        engname: "Grand exhibition room",
        text: "大田展览馆是Schema美术馆最大的展览馆，设计尺寸为12.4x10.6m，空间约40坪。",
    },
    {
        src: "/img/intro/structure/쉐마_소전시실.jpg",
        name: "小展厅 ",
        engname: "Small exhibition room",
        text: "小展厅是Schema艺术博物馆的第二展厅，设计空间约为10坪（6.3x5.4m）。"
    },
];

const data_TH = [
    {
        src: "/img/intro/structure/쉐마_로비.jpg",
        name: "ล็อบบี้ ",
        engname: "Lobby",
        text: "ล็อบบี้ของพิพิธภัณฑ์ศิลปะสคีมามีขนาดประมาณ 20 พยอง และสามารถใช้เป็นพื้นที่จัดแสดงนิทรรศการอื่นได้"
    },
    {
        src: "/img/intro/structure/쉐마_교육실.jpg",
        name: "ห้องฝึกอบรม ",
        engname: "Education room",
        text: "ห้องการศึกษาของพิพิธภัณฑ์ศิลปะ Schema ได้รับการออกแบบให้มีขนาด 8x5.4 เมตร มีพื้นที่ประมาณ 13 พยอง"
    }, 
    {
        src: "/img/intro/structure/쉐마_대전시실.jpg",
        name: "หอนิทรรศการแทจอน ",
        engname: "Grand exhibition room",
        text: "หอนิทรรศการแทจอน ซึ่งเป็นหอนิทรรศการที่ใหญ่ที่สุดของพิพิธภัณฑ์ศิลปะสคีมา ได้รับการออกแบบที่ขนาด 12.4x10.6 ม. มีพื้นที่ประมาณ 40 พยอง",
    },
    {
        src: "/img/intro/structure/쉐마_소전시실.jpg",
        name: "ห้องนิทรรศการขนาดเล็ก ",
        engname: "Small exhibition room",
        text: "ห้องนิทรรศการขนาดเล็ก ซึ่งเป็นห้องนิทรรศการแห่งที่สองของพิพิธภัณฑ์ศิลปะสคีมา ได้รับการออกแบบโดยมีพื้นที่ประมาณ 10 พยอง (6.3x5.4 ม.)"
    },
];

const data_VI = [
    {
        src: "/img/intro/structure/쉐마_로비.jpg",
        name: "Sảnh ",
        engname: "Lobby",
        text: "Sảnh của Bảo tàng Nghệ thuật Schema có diện tích khoảng 20 pyeong và có thể được sử dụng làm không gian triển lãm khác."
    },
    {
        src: "/img/intro/structure/쉐마_교육실.jpg",
        name: "phòng đào tạo",
        engname: "Education room",
        text: "Phòng giáo dục của Bảo tàng Nghệ thuật Schema được thiết kế có kích thước 8x5,4m với không gian khoảng 13 pyeong."
    },
    {
        src: "/img/intro/structure/쉐마_대전시실.jpg",
        name: "Phòng triển lãm lớn ",
        engname: "Grand exhibition room",
        text: "Phòng triển lãm Daejeon, phòng triển lãm lớn nhất của Bảo tàng Nghệ thuật Schema, được thiết kế với kích thước 12,4x10,6m với không gian rộng khoảng 40 pyeong.",
    },
    {
        src: "/img/intro/structure/쉐마_소전시실.jpg",
        name: "Phòng triển lãm nhỏ ",
        engname: "Small exhibition room",
        text: "Phòng triển lãm nhỏ, phòng triển lãm thứ hai của Bảo tàng Nghệ thuật Schema, được thiết kế với không gian khoảng 10 pyeong (6,3x5,4m)."
    },
];

const outside = {
    KOR: "야외공간 ",
    ENG: "Outdoor ",
    CH: "室外空间",
    TH: "พื้นที่กลางแจ้ง",
    VI: "không gian ngoài trời",
};

const outsideText = {
    KOR: () => (
        <p className="text-sm text-Cgrey font-bold screen-w:text-4xl screen-w:leading-normal">
            {"주변 야산으로 둘러싸여 아늑하게 자리 잡은 쉐마미술관은 정문에서부터 미술관 현관에 이르기까지 약 80m정도에 이르는 야외공간에 입체 또는 설치 작품을 보실 수 있는 공간입니다. 또한 쉐마미술관은 아름다운 경치를 자랑하며 사계절의 변화와 자연을 느낄 수 있는 공간입니다."}
        </p>
    ),
    ENG: () => (
        <p className="text-sm text-Cgrey font-bold screen-w:text-4xl screen-w:leading-normal">
            {"The Schema Museum of Art, which is nestled comfortably surrounded by surrounding mountains, is a space where you can view three-dimensional or installation works in an outdoor space extending approximately 80 meters from the main entrance to the entrance of the museum. In addition, the Schema Museum of Art boasts beautiful scenery and is a space where you can feel the changes of the four seasons and nature."}
        </p>
    ),
    CH: () => (
        <p className="text-sm text-Cgrey font-bold screen-w:text-4xl screen-w:leading-normal">
            {"Schema艺术博物馆坐落在群山环抱之中，是一个可以在从主入口到博物馆入口约80米的户外空间中观赏三维或装置作品的空间。此外，图格玛艺术博物馆风景优美，是一个可以感受四季和自然变化的空间。"}
        </p>
    ),
    TH: () => (
        <p className="text-sm text-Cgrey font-bold screen-w:text-4xl screen-w:leading-normal">
            {"พิพิธภัณฑ์ศิลปะสคีมาซึ่งตั้งอยู่อย่างสะดวกสบายรายล้อมไปด้วยภูเขาโดยรอบ เป็นพื้นที่ที่คุณสามารถชมงานสามมิติหรืองานจัดวางในพื้นที่กลางแจ้งที่ทอดยาวประมาณ 80 เมตรจากทางเข้าหลักไปยังทางเข้าพิพิธภัณฑ์ นอกจากนี้ พิพิธภัณฑ์ศิลปะสเคมะยังมีทิวทัศน์ที่สวยงามและเป็นพื้นที่ที่คุณสามารถสัมผัสได้ถึงการเปลี่ยนแปลงของฤดูกาลทั้งสี่และธรรมชาติ"}
        </p>
    ),
    VI: () => (
        <p className="text-sm text-Cgrey font-bold screen-w:text-4xl screen-w:leading-normal">
            {"Bảo tàng Nghệ thuật Schema, ẩn mình thoải mái được bao quanh bởi những ngọn núi xung quanh, là không gian nơi bạn có thể xem các tác phẩm ba chiều hoặc sắp đặt trong không gian ngoài trời kéo dài khoảng 80 mét từ lối vào chính đến lối vào của bảo tàng. Ngoài ra, Bảo tàng Nghệ thuật Schema còn có phong cảnh tuyệt đẹp và là không gian nơi bạn có thể cảm nhận được sự thay đổi của bốn mùa và thiên nhiên."}
        </p>
    ),
};

const inputData = {
    KOR: data_KOR,
    ENG: data_ENG,
    CH: data_CH,
    TH: data_TH,
    VI: data_VI,
};

const Schemastructure = () => {
    const {language} = useContext(LanguageContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    return(
        <div className={clsx(isPortrait ? "p-6 screen-w:p-12 mx-auto items-center" : "p-6 screen-w:p-12 mx-auto items-center")}>
            <div className={clsx(isPortrait ? "h-2/3 w-full flex flex-col space-y-2 screen-w:space-y-8 screen-w:pt-6 screen-w:px-8" : "h-2/3 w-full flex flex-row space-x-2 screen-w:space-x-8 screen-w:pt-6 screen-w:px-8")}>
                <div className={clsx(isPortrait ? "w-[85%] h-1/2 flex flex-col space-y-2 screen-w:space-y-8 items-center mx-auto" : "w-[40%] flex flex-col space-y-2 screen-w:space-y-8 items-center")}>
                    <div className={clsx(isPortrait ? "flex shadow-lg screen-w:w-full screen-w:h-[55%]" : "flex shadow-lg screen-w:w-5/6 screen-w:h-[60%]")}>
                        <img 
                            className="h-[250px] w-[450px] screen-w:w-full screen-w:h-full mx-auto"
                            src="/img/intro/structure/쉐마_야외공간.jpg"
                            alt="outdoor"
                        />
                    </div>
                    <div className={clsx(isPortrait ? "w-[450px] screen-w:w-full flex flex-row mx-auto" : "w-[450px] screen-w:w-5/6 flex flex-row mx-auto")}>
                        <span className="text-lg screen-w:text-5xl font-bold text-Bblue justify-start">{outside[language]} <span className="text-Cgrey opacity-30 screen-w:text-5xl">{' |'}</span> <span className="font-bold text-lg text-black screen-w:text-5xl">{' Outdoor'}</span></span>
                    </div>
                    <div className={clsx(isPortrait ? "w-[450px] screen-w:w-full flex justify-start" : "w-[450px] screen-w:w-5/6 flex justify-start")}>
                        {outsideText[language]()}
                    </div>
                </div>
                <div className={clsx(isPortrait ? "grid gap-6 grid-cols-2 w-[85%] h-1/2 mx-auto items-center" : "grid gap-6 grid-cols-2 screen-w:w-[60%] mx-auto items-center")}>
                    {
                        inputData[language].map((img, index) => (
                            <div 
                                key={img.name}
                                className="flex flex-col space-y-2 screen-w:space-y-8 w-full h-full">
                                <img 
                                    key={img.name}
                                    src={`${img.src}`}
                                    alt=""
                                    className={clsx(isPortrait ? "h-[120px] w-[320px] shadow-lg screen-w:h-[550px] screen-w:w-[850px] screen-w:mx-auto" : "h-[120px] w-[320px] shadow-lg screen-w:h-[550px] screen-w:w-[850px] screen-w:mx-auto")}
                                />
                                <div
                                    className="w-[320px] flex flex-row mx-auto screen-w:w-[850px] screen-w:justify-start">
                                    <span className="text-lg font-bold text-Bblue justify-start screen-w:text-3xl">{img.name}<span className="text-Cgrey opacity-30 screen-w:text-3xl">{' | '}</span> <span className="font-bold text-lg text-black screen-w:text-3xl">{img.engname}</span></span>
                                </div>
                                <div
                                    className="w-[320px] mx-auto screen-w:w-[850px] screen-w:justify-start">
                                    <p className="text-sm text-Cgrey font-bold screen-w:text-3xl screen-w:leading-normal">
                                        {img.text}
                                    </p>    
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className="absolute left-6 bottom-20 screen-w:left-16 screen-w:bottom-44">
                    <Link href="/intro">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                            className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </Link>
                </button>
                <button className="absolute left-24 bottom-20 screen-w:left-60 screen-w:bottom-44">
                    <Link href="/main">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                            className="w-16 h-16 screen-w:w-36 screen-w:h-36 text-Ablack">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </button>
            </div>
    </div>
    )
};

export default Schemastructure;
