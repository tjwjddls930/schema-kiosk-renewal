import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import { FontsizeContext } from "@/contexts/FontsizeContext";
import clsx from "clsx";

const name = {
    KOR: (font) => (
        <span className={clsx(`font-bold text-xl ${font ? "screen-w:text-8xl" : "screen-w:text-7xl"} text-Cgrey`)}>{"쉐마미술관"}</span>
    ),
    ENG: (font) => (
        <span className={clsx(`font-bold text-xl ${font ? "screen-w:text-7xl" : " screen-w:text-6xl"} text-Cgrey`)}>{"Schema Art Museum"}</span>
    ),
    CH: (font) => (
        <span className={clsx(`font-bold text-xl ${font ? "screen-w:text-8xl" : "screen-w:text-7xl"} text-Cgrey`)}>{"图式艺术博物馆"}</span>
    ),
    TH: (font) => (
        <span className={clsx(`font-bold text-xl ${font ? "screen-w:text-7xl" : "screen-w:text-6xl"} text-Cgrey`)}>{ "พิพิธภัณฑ์ศิลปะสคีมา"}</span>
    ),
    VI: (font) => (
        <span  className={clsx(`font-bold text-xl ${font ? "screen-w:text-6xl" : "screen-w:text-5xl"} text-Cgrey`)}>{"Bảo tàng nghệ thuật Schema"}</span>
    ),
};

const paragraph1 = {
    KOR: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[52px]" : "screen-w:text-5xl"} font-bold screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[44px]" : "screen-w:text-4xl"} font-bold screen-w:leading-snug`)}>
        {"쉐마미술관은 그 동안 대학 강단에서 30여 년간 교수로서의 길을 걸었던 서양화가 김재관 교수가 예술과 교육자로서의 열정과 지역 예술인들과 지역민들의 예술적 교감의 필요성을 인지하고, 고향 청주 근교에 2009년 6월 26일 설립한 사설 미술관으로써 충청북도 제 2011-01호 제 1종 미술관이며, 최근 한국박물관협회, 한국과학창의재단, 교육과학기술부로부터 박물관, 미술관 창제 프로그램 우수 운영기관으로 선정되었습니다."}
        </p>
    ),
    ENG: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[42px]" : "screen-w:text-4xl"} font-bold screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[35px]" : "screen-w:text-3xl"} font-bold screen-w:leading-snug`)}>
        {"Schema Museum of Art was founded in June 2009 near his hometown of Cheongju by Professor Kim Jae-gwan, a Western painter who had worked as a professor at a university for over 30 years, after recognizing his passion as an art and educator and the need for artistic communication between local artists and local residents. As a private art museum established on the 26th, it is the first type of art museum in Chungcheongbuk-do No. 2011-01, and was recently selected as an excellent operating institution for museum and art gallery creation programs by the Korea Museum Association, Korea Foundation for the Advancement of Science and Creativity, and the Ministry of Education, Science and Technology."}
        </p>
    ),
    CH: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[55px]" : "screen-w:text-5xl"} font-bold screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[44px]" : "screen-w:text-4xl"} font-bold screen-w:leading-snug`)}>
        {"Schema 美术馆是由在大学担任教授 30 多年的西方画家 Kim Jae-gwan 教授认识到自己对艺术和教育家的热情以及当地艺术家和当地居民之间艺术交流的需要。作为26日成立的私立美术馆，是忠清北道第2011-01号的第一个类型的美术馆，最近被选为优秀博物馆运营机构以及韩国博物馆协会、韩国科学技术创造基金会和教育科学技术部的美术馆创建计划。"}
        </p>
    ),
    TH: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[44px]" : "screen-w:text-4xl"} font-bold screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[35px]" : "screen-w:text-3xl"} font-bold screen-w:leading-snug`)}>
        {"Schema Museum of Art ก่อตั้งขึ้นในเดือนมิถุนายน พ.ศ. 2552 ใกล้กับบ้านเกิดของเขาที่ชองจู โดยศาสตราจารย์คิม แจกวาน จิตรกรชาวตะวันตกที่ทำงานเป็นอาจารย์ในมหาวิทยาลัยแห่งหนึ่งมานานกว่า 30 ปี หลังจากตระหนักถึงความหลงใหลในศิลปะและนักการศึกษาและความต้องการ เพื่อการสื่อสารทางศิลปะระหว่างศิลปินท้องถิ่นและคนในท้องถิ่นในฐานะพิพิธภัณฑ์ศิลปะส่วนตัวที่ก่อตั้งขึ้นเมื่อวันที่ 26 จึงเป็นพิพิธภัณฑ์ศิลปะประเภทแรกในชุงชองบุกโด เลขที่ 2011-01 และเมื่อเร็ว ๆ นี้ได้รับเลือกให้เป็นสถาบันปฏิบัติการที่ยอดเยี่ยมสำหรับพิพิธภัณฑ์และ โปรแกรมสร้างห้องแสดงงานศิลปะโดยสมาคมพิพิธภัณฑ์เกาหลี มูลนิธิเกาหลีเพื่อความก้าวหน้าของวิทยาศาสตร์และความคิดสร้างสรรค์ และกระทรวงศึกษาธิการ วิทยาศาสตร์ และเทคโนโลยี"}
        </p>
    ),
    VI: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[40px]" : "screen-w:text-4xl"} font-bold screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[34px]" : "screen-w:text-3xl"} font-bold screen-w:leading-snug`)}>
        {"Bảo tàng Nghệ thuật Schema được thành lập vào tháng 6 năm 2009 gần quê hương Cheongju của ông bởi Giáo sư Kim Jae-gwan, một họa sĩ phương Tây đã từng làm giáo sư tại một trường đại học trong hơn 30 năm, sau khi nhận ra niềm đam mê của ông là một nghệ thuật và nhà giáo dục cũng như nhu cầu để giao tiếp nghệ thuật giữa các nghệ sĩ địa phương và người dân địa phương. Là một bảo tàng nghệ thuật tư nhân được thành lập vào ngày 26, đây là loại hình bảo tàng nghệ thuật đầu tiên ở Chungcheongbuk-do số 2011-01, và gần đây đã được chọn là cơ quan điều hành xuất sắc cho bảo tàng và các chương trình sáng tạo phòng trưng bày nghệ thuật của Hiệp hội Bảo tàng Hàn Quốc, Quỹ vì sự tiến bộ của khoa học và sáng tạo Hàn Quốc và Bộ Giáo dục, Khoa học và Công nghệ."}
        </p>
    ),
};

const circle = {
    KOR: () => (
        <div className="mx-auto text-center flex flex-row space-x-6">
            <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-4xl z-10">
                {"격"}
            </div>
            <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-4xl z-10">
                {"짜임"}
            </div>
            <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-4xl z-10">
                {"계획"}
            </div>
        </div>
    ),
    ENG: () => (
        <div className="mx-auto text-center flex flex-row space-x-6">
            <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-3xl z-10">
                {"Class"}
            </div>
            <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-3xl z-10">
                {"Structure"}
            </div>
            <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-3xl z-10">
                {"Planning"}
            </div>
        </div>
    ),
    CH: () => (
        <div className="mx-auto text-center flex flex-row space-x-6">
            <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-4xl z-10">
                {"案件"}
            </div>
            <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-4xl z-10">
                {"编织"}
            </div>
            <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-4xl z-10">
                {"计划"}
            </div>
        </div>
    ),
    TH: () => (
        <div className="mx-auto text-center flex flex-row space-x-6">
            <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-4xl z-10">
                {"กรณี"}
            </div>
            <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-4xl z-10">
                {"สาน"}
            </div>
            <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-4xl z-10">
                {"วางแผน"}
            </div>
        </div>
    ),
    VI: () => (
        <div className="mx-auto text-center flex flex-row space-x-6">
            <div className="pt-7 screen-w:pt-14 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-3xl z-10">
                {"trường hợp"}
            </div>
            <div className="pt-7 screen-w:pt-16 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-3xl z-10">
                {"dệt"}
            </div>
            <div className="pt-7 screen-w:pt-16 h-20 w-20 screen-w:h-40 screen-w:w-40 shadow-xl rounded-full font-bold text-black text-base screen-w:text-3xl z-10">
                {"kế hoạch"}
            </div>
        </div>
    )
};

const paragraph2 = {
    KOR: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[52px]" : "screen-w:text-5xl"} font-bold screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[44px]" : "screen-w:text-4xl"} font-bold screen-w:leading-snug`)}>
        {"SCHEMA는 '격', '짜임', '계획'이라는 의미로 기하학적 구성요소로 이루어진 김재관 교수의 작품과 그 맥을 같이 하며, 미학적, 종교적 의미로서의 SCHEMA는 '하나님께 모든것을 바친다.'는 의미가 있습니다. 이는 미술관의 지역사회, 미술계에 봉사하고자 하는 열망으로 청주지역 뿐만 아니라 현대미술의 격이 세대정신에 걸맞는 창작 예술의 연구와 실천을 위한 공간이 될 수 있도록 최선의 역할을 하고자 합니다."} 
        </p>
    ),
    ENG: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[42px]" : "screen-w:text-4xl"} font-bold screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[35px]" : "screen-w:text-3xl"} font-bold screen-w:leading-snug`)}>
        {"SCHEMA, with its meaning of 'form', 'structure', and 'plan', is in line with Professor Kim Jae-gwan's work, which is composed of geometric elements. SCHEMA in its aesthetic and religious meaning means 'offering everything to God.' there is. This is the museum's desire to serve the local community and art world, and we aim to do our best to serve as a space for the research and practice of creative art that matches the spirit of the generation, not only in the Cheongju region but also in contemporary art."} 
        </p>
    ),
    CH: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[55px]" : "screen-w:text-5xl"} font-bold screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[44px]" : "screen-w:text-4xl"} font-bold screen-w:leading-snug`)}>
        {"SCHEMA的含义为“形式”、“结构”、“计划”，这与金在冠教授的作品中由几何元素组成的一致。SCHEMA的美学和宗教含义意味着“将一切奉献给上帝” .' 有。这是博物馆服务当地社区和艺术界的愿望，我们的目标是尽最大努力成为一个符合当代人精神的创意艺术研究和实践的空间，不仅在清州地区，而且在全世界范围内。在当代艺术中。"} 
        </p>
    ),
    TH: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[44px]" : "screen-w:text-4xl"} font-bold screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[35px]" : "screen-w:text-3xl"} font-bold screen-w:leading-snug`)}>
        {"SCHEMA ซึ่งมีความหมายว่า 'รูปแบบ' 'โครงสร้าง' และ 'แผน' สอดคล้องกับงานของศาสตราจารย์ Kim Jae-gwan ซึ่งประกอบด้วยองค์ประกอบทางเรขาคณิต SCHEMA ในความหมายเชิงสุนทรีย์และศาสนาหมายถึง 'การถวายทุกสิ่งแด่พระเจ้า .' มี. นี่คือความปรารถนาของพิพิธภัณฑ์ที่จะให้บริการชุมชนท้องถิ่นและโลกศิลปะ และเรามุ่งมั่นที่จะพยายามอย่างเต็มที่เพื่อเป็นพื้นที่สำหรับการวิจัยและการปฏิบัติด้านศิลปะสร้างสรรค์ที่ตรงกับจิตวิญญาณของคนรุ่น ไม่เพียงแต่ในภูมิภาคชองจูเท่านั้น แต่ยังรวมถึง ในศิลปะร่วมสมัย"} 
        </p>
    ),
    VI: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[40px]" : "screen-w:text-4xl"} font-bold screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[34px]" : "screen-w:text-3xl"} font-bold screen-w:leading-snug`)}>
        {"SCHEMA, với ý nghĩa là 'hình thức', 'cấu trúc' và 'kế hoạch', phù hợp với công trình của Giáo sư Kim Jae-gwan, bao gồm các yếu tố hình học. SCHEMA theo nghĩa thẩm mỹ và tôn giáo có nghĩa là 'dâng mọi thứ lên Chúa .' có đấy. Đây là mong muốn của bảo tàng trong việc phục vụ cộng đồng địa phương và thế giới nghệ thuật, đồng thời chúng tôi mong muốn nỗ lực hết mình để phục vụ như một không gian nghiên cứu và thực hành nghệ thuật sáng tạo phù hợp với tinh thần của thế hệ, không chỉ ở khu vực Cheongju mà còn trong nghệ thuật đương đại."} 
        </p>
    ),
};

const paragraph3 = {
    KOR: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[52px]" : "screen-w:text-5xl"} font-bold screen-w:pt-40 screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[44px]" : "screen-w:text-4xl"} font-bold screen-w:pt-36 screen-w:leading-snug`)}>
            {"특히 이 지역 젊은 작가들에게 다양하고 새로운 현대 미술의 정보를 제공하고 국내,외 현대미술의 창의적인 작품들로 구성된 기획전시를 통하여 지역 국제 교류센터로서의 역할을 하고자하며 예술가 뿐만 아니라 문화시민을 위해 제 2의 교육기관으로 지역 사회단체의 문화예술교육 프로젝트뿐만 아니라 유소년, 청소년, 어린이 등 다양한 계층의 다양한 문화 예술체험 교육기관으로의 기능을 수행하고자 합니다."}
        </p>
    ),
    ENG: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[42px]" : "screen-w:text-4xl"} font-bold screen-w:pt-40 screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[35px]" : "screen-w:text-3xl"} font-bold screen-w:pt-32 screen-w:leading-snug`)}>
            {"In particular, we aim to provide diverse and new information on modern art to young artists in the region and serve as a regional international exchange center through special exhibitions consisting of creative works of domestic and foreign contemporary art, and as a second cultural center for cultural citizens as well as artists. As an educational institution, we aim to perform not only the cultural and artistic education projects of local social groups, but also serve as an educational institution for various cultural and artistic experiences for youth, teenagers, and children."}
        </p>
    ),
    CH: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[55px]" : "screen-w:text-5xl"} font-bold screen-w:pt-40 screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[44px]" : "screen-w:text-4xl"} font-bold screen-w:pt-40 screen-w:leading-snug`)}>
            {"特别是，我们旨在为区域内的年轻艺术家提供多样化、新颖的当代艺术信息，并通过国内外当代艺术创作作品的专题展览，成为区域性的国际交流中心，并成为非区域性的第二个文化交流中心。不仅是艺术家，更是文化公民，作为一个教育机构，我们的目标不仅是为当地社会群体提供文化艺术教育项目，更是为青少年和儿童提供各种文化艺术体验的教育机构。"}
        </p>
    ),
    TH: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[44px]" : "screen-w:text-4xl"} font-bold screen-w:pt-40 screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[35px]" : "screen-w:text-3xl"} font-bold screen-w:pt-32 screen-w:leading-snug`)}>
            {"โดยเฉพาะอย่างยิ่ง เรามุ่งหวังที่จะให้ข้อมูลที่หลากหลายและใหม่เกี่ยวกับศิลปะสมัยใหม่แก่ศิลปินรุ่นเยาว์ในภูมิภาค และทำหน้าที่เป็นศูนย์แลกเปลี่ยนระหว่างประเทศระดับภูมิภาคผ่านนิทรรศการพิเศษที่ประกอบด้วยผลงานสร้างสรรค์ของศิลปะร่วมสมัยในประเทศและต่างประเทศ และเป็นศูนย์กลางวัฒนธรรมแห่งที่สองด้านวัฒนธรรม พลเมืองและศิลปิน ในฐานะสถาบันการศึกษา เรามุ่งมั่นที่จะดำเนินการไม่เพียงแต่โครงการการศึกษาด้านวัฒนธรรมและศิลปะของกลุ่มสังคมท้องถิ่นเท่านั้น แต่ยังทำหน้าที่เป็นสถาบันการศึกษาสำหรับประสบการณ์ทางวัฒนธรรมและศิลปะที่หลากหลายสำหรับเยาวชน วัยรุ่น และเด็ก ๆ"}
        </p>
    ),
    VI: (orient, font) => (
        <p className={clsx(orient  ? `text-Cgrey text-sm ${font ? "screen-w:text-[40px]" : "screen-w:text-4xl"} font-bold screen-w:pt-40 screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[34px]" : "screen-w:text-3xl"} font-bold screen-w:pt-32 screen-w:leading-snug`)}>
            {"Đặc biệt, chúng tôi mong muốn cung cấp thông tin đa dạng và mới mẻ về nghệ thuật hiện đại cho các nghệ sĩ trẻ trong khu vực và đóng vai trò là trung tâm trao đổi quốc tế trong khu vực thông qua các cuộc triển lãm đặc biệt bao gồm các tác phẩm sáng tạo về nghệ thuật đương đại trong và ngoài nước, đồng thời là trung tâm văn hóa thứ hai về văn hóa. Là một cơ sở giáo dục, chúng tôi mong muốn không chỉ thực hiện các dự án giáo dục văn hóa và nghệ thuật của các nhóm xã hội địa phương mà còn phục vụ như một cơ sở giáo dục mang lại những trải nghiệm văn hóa và nghệ thuật khác nhau cho thanh niên, thanh thiếu niên và trẻ em."}
        </p>
    ),
};

const paragraph4 = {
    KOR: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[52px]" : "screen-w:text-5xl"} font-bold screen-w:pt-40 screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[44px]" : "screen-w:text-4xl"} font-bold screen-w:pt-36 screen-w:leading-snug`)}>
            {"향후 예술가뿐만 아니라 문화시민을 위한 사회교육, 어린이 예술체험교육의 다양한 프로그램 개발과 독창적인 전시기획으로 내실을 다지고, 지역사회와 함께하는 사업을 추진하는 공공 미술관으로서의 역할을 하고자 합니다."}
        </p>
    ),
    ENG: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[42px]" : "screen-w:text-4xl"} font-bold screen-w:pt-40 screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[35px]" : "screen-w:text-3xl"} font-bold screen-w:pt-32 screen-w:leading-snug`)}>
            {"In the future, we plan to develop various programs for social education not only for artists but also for cultural citizens, and art experience education for children, as well as through creative exhibition planning, and play a role as a public art museum that promotes projects with the local community."}
        </p>
    ),
    CH: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[55px]" : "screen-w:text-5xl"} font-bold screen-w:pt-40 screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[44px]" : "screen-w:text-4xl"} font-bold screen-w:pt-40 screen-w:leading-snug`)}>
            {"未来，我们计划通过创意展览策划，开展各种针对艺术家、文化公民的社会教育、儿童艺术体验教育等项目，发挥公共美术馆的项目推动作用与当地社区。"}
        </p>
    ),
    TH: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[44px]" : "screen-w:text-4xl"} font-bold screen-w:pt-40 screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[35px]" : "screen-w:text-3xl"} font-bold screen-w:pt-32 screen-w:leading-snug`)}>
            {"ในอนาคต เราวางแผนที่จะพัฒนาโปรแกรมต่างๆ เพื่อการศึกษาทางสังคม ไม่เพียงแต่สำหรับศิลปินเท่านั้น แต่ยังสำหรับพลเมืองวัฒนธรรม และการศึกษาประสบการณ์ศิลปะสำหรับเด็ก ตลอดจนผ่านการวางแผนนิทรรศการเชิงสร้างสรรค์ และมีบทบาทเป็นพิพิธภัณฑ์ศิลปะสาธารณะที่ส่งเสริมโครงการต่างๆ กับชุมชนท้องถิ่น"}
        </p>
    ),
    VI: (orient, font) => (
        <p className={clsx(orient ? `text-Cgrey text-sm ${font ? "screen-w:text-[40px]" : "screen-w:text-4xl"} font-bold screen-w:pt-40 screen-w:leading-snug` : `text-Cgrey text-sm ${font ? "screen-w:text-[34px]" : "screen-w:text-3xl"} font-bold screen-w:pt-32 screen-w:leading-snug`)}>
            {"Trong tương lai, chúng tôi dự định phát triển nhiều chương trình giáo dục xã hội khác nhau không chỉ cho các nghệ sĩ mà còn cho các công dân văn hóa, giáo dục trải nghiệm nghệ thuật cho trẻ em, cũng như thông qua kế hoạch triển lãm sáng tạo và đóng vai trò là bảo tàng nghệ thuật công cộng thúc đẩy các dự án. với cộng đồng địa phương."}
        </p>
    ),
};

const Schemaintro = () => {
    const {language} = useContext(LanguageContext);
    const {fontsize} = useContext(FontsizeContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    return(
        <div className={clsx(isPortrait ? "screen-w:h-full p-6 screen-w:pt-40 screen-w:pl-[370px] mx-auto items-center" : "p-6 screen-w:p-8 mx-auto items-center")}>
            <div className={clsx(isPortrait ? "h-3/4 w-full flex flex-col space-y-8 screen-w:px-8 screen-w:py-6 items-center" : "h-2/3 w-full flex flex-row space-x-8 screen-w:p-4")}>
                {/* 좌측 그림 및 텍스트 */}
                <div className="h-full w-[200px] screen-w:w-[400px] absolute left-0 top-0 opacity-90">
                    <img 
                        src="/img/intro/introduction/가로형_미술관소개_이미지_2.png"
                        className="h-full w-full"
                        alt="background"
                    />
                </div>
                <div className="w-[150px] screen-w:w-[300px] mx-auto">
                </div>
                <div className={clsx(isPortrait ? "h-[30%] w-3/4 flex flex-col space-y-4 mx-auto" : "h-5/6 w-[30%] flex flex-col space-y-4 screen-w:space-y-12 screen-w:px-16")}>
                    <div className="flex flex-col space-y-1 screen-w:space-y-4">
                        <div className="h-[2px] w-14 screen-w:w-36 bg-Ablue"></div>
                        {name[language](fontsize)}
                    </div>
                    {paragraph1[language](isPortrait, fontsize)}
                    {circle[language]()}
                    {paragraph2[language](isPortrait, fontsize)}
                </div>
                <div className={clsx(isPortrait ? "h-[30%] w-3/4 flex flex-row space-x-8" : "h-1/2 w-[30%] flex flex-row space-x-8 screen-w:px-8")}>
                    {paragraph3[language](isPortrait, fontsize)}
                </div>
                <div className={clsx(isPortrait ? "h-[30%] w-3/4 flex" : "h-1/2 w-[30%] flex screen-w:px-8")}>
                    {paragraph4[language](isPortrait, fontsize)}
                </div>

                <div className={clsx(isPortrait ? "absolute transform -translate-y-1/2 -translate-x-1/2 left-[64%] top-[87.5%] screen-w:h-[200px] screen-w:w-[400px]" : "absolute transform -translate-y-1/2 -translate-x-1/2 left-2/3 top-2/3 screen-w:h-[400px] screen-w:w-[800px]")}>
                    <div className="h-[100px] w-[400px] screen-w:h-[200px] screen-w:w-[600px] flex flex-row space-x-4 mx-auto">
                        <div className="h-2 w-2 screen-w:h-4 screen-w:w-4 bg-Ablue rounded-full"></div>
                        <div className="h-2 w-2 screen-w:h-4 screen-w:w-4 bg-Ablue rounded-full"></div>
                        <div className="h-2 w-2 screen-w:h-4 screen-w:w-4 bg-Ablue rounded-full"></div>
                    </div>
                </div>

                <div className={clsx(isPortrait ? "absolute right-4 screen-w:h-[300px] screen-w:w-[750px] screen-w:right-8 transform -translate-y-1/2 top-[88.5%]" : "absolute right-4 screen-w:h-[500px] screen-w:w-[950px] screen-w:right-8 transform -translate-y-1/2 top-2/3")}>
                    <img
                        className="h-[30px] w-[200px] screen-w:h-[110px] screen-w:w-[800px]"
                        src="/img/intro/introduction/schema_art_museum_typo.png"
                        alt="schema_image_1"
                    />
                </div>

                <div className="absolute right-0 bottom-0 screen-w:bottom-0">
                    <img 
                        className={clsx(isPortrait ? "h-[200px] w-[550px] opacity-0" : "h-[200px] w-[550px] screen-w:h-[810px] screen-w:w-[2250px]" )}
                        src="/img/intro/introduction/schema_image_보정.png"
                        alt="schema_image_2"
                    />
                </div>
            </div>
        <button className="absolute left-6 bottom-20 screen-w:left-24 screen-w:bottom-44">
            <Link href="/intro">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Awhite">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </Link>
        </button>
        <button className="absolute left-24 bottom-20 screen-w:left-24 screen-w:bottom-80">
            <Link href="/main">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-16 h-16 screen-w:w-36 screen-w:h-36 text-Awhite">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </Link>
        </button>
    </div>
    )
};

export default Schemaintro;
