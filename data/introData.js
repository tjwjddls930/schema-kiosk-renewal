import Schemaintro from "@/components/intro/Schemaintro";
import Schemastructure from "@/components/intro/Schemastructure";
import Profile from "@/components/intro/career/Profile";
import Career from "@/components/intro/career/Career";
import Work from "@/components/intro/career/Work";
import Navbar from "@/components/navbar/Navbar";
export const introData_KOR = [
    {title: "미술관 소개", component: <Schemaintro />,  docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/KOR/schema-docent-main-KOR.webm`} />},
    {title: "미술관 구조", component: <Schemastructure />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/KOR/schema-docent-intro-structure-KOR.webm`} />},    
];

export const introData_ENG = [
    {title: "Introduction to the Museum", component: <Schemaintro />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/ENG/schema-docent-main-ENG.webm`} />},
    {title: "Structure of the Museum", component: <Schemastructure />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/ENG/schema-docent-intro-structure-ENG.webm`} />},    
];

export const introData_CH = [
    {title: "博物馆简介", component: <Schemaintro />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/CH/schema-docent-main-CH.webm`} />},
    {title: "美术馆结构", component: <Schemastructure />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/CH/schema-docent-intro-structure-CH.webm`} />},    
];

export const introData_TH = [
    {title: "ความรู้เบื้องต้นเกี่ยวกับพิพิธภัณฑ์", component: <Schemaintro />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/TH/schema-docent-main-TH.webm`} />},
    {title: "โครงสร้างพิพิธภัณฑ์ศิลปะ", component: <Schemastructure />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/TH/schema-docent-intro-structure-TH.webm`} />},    
];

export const introData_VI = [
    {title: "Giới thiệu về bảo tàng", component: <Schemaintro />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/VI/schema-docent-main-VI.webm`} />},
    {title: "cấu trúc bảo tàng nghệ thuật", component: <Schemastructure />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/VI/schema-docent-intro-structure-VI.webm`} />},    
];

export const profileData_KOR = [
    {title: "프로필", component: <Profile />,  docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/KOR/schema-docent-intro-career-KOR.webm`} />},
    {title: "연도별 활동", component: <Career />,  docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/KOR/schema-docent-intro-career-KOR.webm`} />},
    {title: "작품 세계관", component: <Work />,  docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/KOR/schema-docent-intro-artwork-KOR.webm`} />}
];

export const profileData_ENG = [
    {title: "Profile", component: <Profile />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/ENG/schema-docent-intro-career-ENG.webm`} />},
    {title: "Activities by year", component: <Career />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/ENG/schema-docent-intro-career-ENG.webm`} />},
    {title: "Aspect of Art Work", component: <Work />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/ENG/schema-docent-intro-artwork-ENG.webm`} />}
];

export const profileData_CH = [
    {title: "轮廓", component: <Profile />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/CH/schema-docent-intro-career-CH.webm`} />},
    {title: "按年份划分的活动", component: <Career />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/CH/schema-docent-intro-career-CH.webm`} />},
    {title: "工作世界观", component: <Work />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/CH/schema-docent-intro-artwork-CH.webm`} />}
];

export const profileData_TH = [
    {title: "ประวัติโดยย่อ", component: <Profile />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/TH/schema-docent-intro-career-TH.webm`} />},
    {title: "กิจกรรมแยกตามปี", component: <Career />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/TH/schema-docent-intro-career-TH.webm`} />},
    {title: "มุมมองโลกการทำงาน", component: <Work />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/TH/schema-docent-intro-artwork-TH.webm`} />}
];

export const profileData_VI = [
    {title: "hồ sơ", component: <Profile />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/VI/schema-docent-intro-career-VI.webm`} />},
    {title: "Hoạt động theo năm", component: <Career />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/VI/schema-docent-intro-career-VI.webm`} />},
    {title: "thế giới quan công việc", component: <Work />, docent: <Navbar url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/VI/schema-docent-intro-artwork-VI.webm`} />}
];

