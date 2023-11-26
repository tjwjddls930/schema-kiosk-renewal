import {useContext, useState, useEffect} from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import { FontsizeContext } from "@/contexts/FontsizeContext";
import clsx from "clsx";
import { careerData_KOR, careerData_ENG, careerData_CH, careerData_TH, careerData_VI } from "@/data/careerData";

const inputData = {
    KOR: careerData_KOR,
    ENG: careerData_ENG,
    CH: careerData_CH,
    TH: careerData_TH,
    VI: careerData_VI,
};

const topText = {
    KOR: "김재관 기하학적 추상미술 반세기 – 창조적 궤적 Geo-Optical Art 1967~2023",
    ENG: "Jai-Kwan Kim’s Half Century of Geometric Abstract Art – Creative Trajectory Geo-Optical Art 1967~2023",
    CH: "Jai-Kwan Kim半个世纪的几何抽象艺术——创作轨迹地光艺术 1967~2023",
    TH: "ครึ่งศตวรรษของศิลปะนามธรรมเชิงเรขาคณิตของ Jai-kwan Kim – ศิลปะเชิงภูมิศาสตร์เชิงทัศนศาสตร์เชิงสร้างสรรค์ 1967~2023",
    VI: "Nửa thế kỷ nghệ thuật trừu tượng hình học của Jaegwan Kim – Nghệ thuật quang học quỹ đạo sáng tạo 1967~2023"
};

const mainText = {
    KOR: (font) => (
        <p className={clsx("text-Ablack  h-[1000px] overflow-auto", font ? "text-base screen-w:text-[52px] screen-w:leading-relaxed" : "text-sm screen-w:text-5xl screen-w:leading-normal")}>
            {"그리드와 방형에서 출발한 작가의 작품 세계는 몇 단계의 변화를 거쳐 진보된 면을 보여준다. 1970~80년대가 《관계》 연작을 빌려 ‘관계’의 수사학적 변주를 천착하는데 있었다면, 1990년대는 패턴의 반복에서 탈피하여 포스트모더니즘의 양식적 특징인 평면에서 일탈을 시도함으로써 《큐브》 연작을 통해 단일 구조가 아닌 분할된 구조들의 조합을 시도한다. 평면의 상징적 구조로서 ‘그리드’로 하여금 ‘일루젼’과 ‘비정형적 옵티컬리즘’을 추구하여 픽션의 공간을 연출하는 시각적 확장성을 제시한다. 2000년대 초기에서 최근에는 《큐브》 시리즈를 탈피하여 과거 70년대 후반부터 시작한 《관계》 시리즈를 복원하는 작업을 전개한다. 이는 과거로 회귀가 아니라 방법적 재발견을 모색하기 위해 자연과 공간 그리고 빛을 아우르는 기하학의 복합적 추상 형식을 꾀하고 있음을 볼 수 있다. 회화, 조각, 설치 등 다양한 장르를 넘나들며 작가만의 조형적 기조 방식으로 구축하고 있는 추상예술은 무한 상상의 세계로 이끌고 있다."}
        </p>
    ),
    ENG: (font) => (
        <p className={clsx("text-Ablack  h-[1000px] overflow-auto leading-relaxed", font ? "text-base screen-w:text-[52px] screen-w:leading-relaxed" : "text-sm screen-w:text-5xl screen-w:leading-normal")}>
            {"The artist's world of work, which started from grids and squares, shows progress through several stages of change. While the 1970s and 1980s explored the rhetorical variations of ‘relationships’ by borrowing the 《Relationship》 series, the 1990s attempted to break away from the repetition of patterns and deviate from the flat surface, a stylistic characteristic of postmodernism, with the 《Cube》 series. Through this, we attempt to combine divided structures rather than a single structure. As a symbolic structure of the flat surface, the ‘grid’ pursues ‘illusion’ and ‘atypical opticalism’ to present visual scalability that creates a space of fiction. In the early 2000s, work has been carried out to break away from the “Cube” series and restore the “Relationship” series that began in the late 1970s. It can be seen that this is not a return to the past, but a complex abstract form of geometry that encompasses nature, space, and light in order to seek methodological rediscovery. The abstract art created in the artist's unique formative style, crossing various genres such as painting, sculpture, and installation, leads to a world of infinite imagination."}
        </p>
    ),
    CH: (font) => (
        <p className={clsx("text-Ablack  h-[1000px] overflow-auto leading-relaxed", font ? "text-base screen-w:text-[52px] screen-w:leading-relaxed" : "text-sm screen-w:text-5xl screen-w:leading-normal")}>
            {"艺术家的工作世界从网格和正方形开始，通过几个阶段的变化展示了进步。 20世纪70年代和80年代借用《关系》系列探索“关系”的修辞变异，而90年代则试图以《立方体》摆脱模式的重复、背离平面这一后现代主义的风格特征。通过这个，我们尝试将分割的结构组合起来，而不是单一的结构。 “网格”作为平面的象征结构，追求“幻觉”和“非典型光学主义”，呈现视觉的可扩展性，创造一个虚构的空间。 2000年代初期，进行了脱离“立方体”系列并恢复1970年代末开始的“关系”系列的工作。可见，这并不是回到过去，而是一种包含自然、空间和光的复杂抽象几何形式，以寻求方法论上的重新发现。艺术家以独特的造型风格创作的抽象艺术，跨越绘画、雕塑、装置等多种流派，带来无限想象的世界。"}
        </p>
    ),
    TH: (font) => (
        <p className={clsx("text-Ablack  h-[1000px] overflow-auto leading-relaxed", font ? "text-base screen-w:text-[52px] screen-w:leading-relaxed" : "text-sm screen-w:text-5xl screen-w:leading-normal")}>
            {"โลกแห่งการทำงานของศิลปินซึ่งเริ่มต้นจากตารางและสี่เหลี่ยม แสดงให้เห็นความก้าวหน้าผ่านการเปลี่ยนแปลงหลายขั้นตอน ในขณะที่ทศวรรษปี 1970 และ 1980 สำรวจความแปรผันทางวาทศิลป์ของ 'ความสัมพันธ์' โดยการยืมชุด `ความสัมพันธ์` คริสต์ทศวรรษ 1990 พยายามที่จะแยกตัวออกจากรูปแบบซ้ำๆ และเบี่ยงเบนไปจากพื้นผิวเรียบ ซึ่งเป็นคุณลักษณะโวหารของลัทธิหลังสมัยใหม่ ด้วย `คิวบ์` ซีรีส์ ด้วยเหตุนี้ เราจึงพยายามรวมโครงสร้างที่แบ่งแยกมากกว่าโครงสร้างเดียว ในฐานะที่เป็นโครงสร้างเชิงสัญลักษณ์ของพื้นผิวเรียบ 'ตาราง' แสวงหา 'ภาพลวงตา' และ 'การมองเห็นที่ไม่ปกติ' เพื่อนำเสนอความสามารถในการปรับขนาดการมองเห็นที่สร้างพื้นที่แห่งนิยาย ในช่วงต้นทศวรรษ 2000 มีการดำเนินการเพื่อแยกตัวออกจากซีรีส์ `Cube` และฟื้นฟูซีรีส์ `Relationship` ที่เริ่มต้นในช่วงปลายทศวรรษ 1970 จะเห็นได้ว่านี่ไม่ใช่การกลับไปสู่อดีต แต่เป็นรูปแบบนามธรรมที่ซับซ้อนของเรขาคณิตที่ครอบคลุมธรรมชาติ พื้นที่ และแสง เพื่อที่จะแสวงหาการค้นพบระเบียบวิธีใหม่ ศิลปะนามธรรมที่สร้างขึ้นในสไตล์การจัดวางอันเป็นเอกลักษณ์ของศิลปิน ข้ามประเภทต่างๆ เช่น จิตรกรรม ประติมากรรม และการจัดวาง นำไปสู่โลกแห่งจินตนาการอันไม่มีที่สิ้นสุด"}
        </p>
    ),
    VI: (font) => (
        <p className={clsx("text-Ablack  h-[1000px] overflow-auto leading-relaxed", font ? "text-base screen-w:text-[52px] screen-w:leading-relaxed" : "text-sm screen-w:text-5xl screen-w:leading-normal")}>
            {"Thế giới công việc của người nghệ sĩ, bắt đầu từ những tấm lưới và hình vuông, cho thấy sự tiến bộ qua nhiều giai đoạn thay đổi. Trong khi những năm 1970 và 1980 khám phá các biến thể tu từ của 'các mối quan hệ' bằng cách mượn chuỗi 《Mối quan hệ》, thì những năm 1990 đã cố gắng thoát khỏi sự lặp lại của các khuôn mẫu và đi chệch khỏi bề mặt phẳng, một đặc điểm phong cách của chủ nghĩa hậu hiện đại, với 《Khối lập phương》 thông qua đó, chúng tôi cố gắng kết hợp các cấu trúc bị chia cắt thay vì một cấu trúc đơn lẻ. Là một cấu trúc mang tính biểu tượng của bề mặt phẳng, 'lưới' theo đuổi 'ảo ảnh' và 'thuyết quang học không điển hình' để thể hiện khả năng mở rộng hình ảnh tạo ra một không gian hư cấu. Vào đầu những năm 2000, công việc đã được thực hiện để tách khỏi loạt phim “Khối lập phương” và khôi phục loạt phim “Mối quan hệ” bắt đầu vào cuối những năm 1970. Có thể thấy, đây không phải là sự quay về quá khứ mà là một dạng hình học trừu tượng phức tạp bao trùm thiên nhiên, không gian và ánh sáng nhằm tìm kiếm sự khám phá lại về phương pháp luận. Nghệ thuật trừu tượng được tạo ra theo phong cách tạo hình độc đáo của nghệ sĩ, kết hợp nhiều thể loại khác nhau như hội họa, điêu khắc và sắp đặt, dẫn đến một thế giới của trí tưởng tượng vô tận."}
        </p>
    )
};
const titleText = {
    KOR: "작품세계의 형성과 해체",
    ENG: "Formation and dissolution of the world of work",
    CH: "工作世界的形成与解散",
    TH: "การก่อตัวและการล่มสลายของโลกแห่งการทำงาน",
    VI: "Sự hình thành và giải thể của thế giới việc làm"
};

const Work = () => {
    const {language} = useContext(LanguageContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    const {fontsize} = useContext(FontsizeContext);
    console.log(inputData[language]);

    return(
        <div className={clsx(isPortrait ? "": "p-6 screen-w:px-6 screen-w:pt-20 mx-auto items-center z-10")}>
            <div className="w-11/12 h-5/6 flex flex-row mx-auto space-x-16">
                <div className="w-[60%] h-full flex flex-col space-y-8 screen-w:space-y-16 mx-auto text-center">
                    <span className={clsx("font-bold text-Ablack", fontsize ? "text-lg screen-w:text-[64px] screen-w:leading-normal h-[150px]" : "text-base screen-w:text-6xl h-[100px]")}>{topText[language]}</span>
                    {mainText[language](fontsize)}
                </div>
                <div className="w-[40%] h-[1400px] flex flex-col space-y-16 mx-auto">
                    <span className={clsx("font-bold text-Ablack text-center", fontsize ? "text-lg screen-w:text-[64px] screen-w:leading-snug" : "text-base screen-w:text-6xl")}>{titleText[language]}</span>
                    <div className={clsx(isPortrait ? "w-3/4 screen-w:space-y-4 overflow-auto" : "w-full flex flex-col space-y-2 screen-w:space-y-4 overflow-auto")}>
                            {inputData[language][0].work.map((item, index)=>(
                                <div
                                    key={index} 
                                    className={clsx(isPortrait 
                                    ? "w-full h-full flex flex-row space-x-2 screen-w:space-x-10" 
                                    : "w-full flex flex-row space-x-2 screen-w:space-x-10")}>
                                    <span
                                        key={item.order} 
                                        className={clsx(isPortrait 
                                            ? `w-[15%] h-full font-bold text-Ablue ${fontsize ? "text-base screen-w:text-[40px] screen-w:leading-tight" : "text-sm screen-w:text-4xl"}` 
                                            : `w-[15%] font-bold text-Ablue ${fontsize ? "text-base screen-w:text-[40px] screen-w:leading-tight" : "text-sm screen-w:text-4xl"}`)}
                                    >
                                            {item.year}
                                    </span>
                                    <span
                                        key={item.year}
                                        className={clsx(isPortrait 
                                            ? `w-[85%] h-full font-bold text-Agrey ${fontsize ? "text-base screen-w:text-[40px] screen-w:leading-tight" : "text-sm screen-w:text-4xl"}` 
                                            : `w-[85%] font-bold text-Agrey ${fontsize ? "text-base screen-w:text-[40px] screen-w:leading-tight" : "text-sm screen-w:text-4xl"}`)}
                                    >
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    )
};

export default Work;