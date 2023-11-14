import Schemaintro from "@/components/intro/Schemaintro";
import Schemastructure from "@/components/intro/Schemastructure";
import Profile from "@/components/intro/career/Profile";
import Career from "@/components/intro/career/Career";
import Work from "@/components/intro/career/Work";
import Navbar from "@/components/navbar/Navbar";
export const introData_KOR = [
    {index: "main", title: "미술관 소개", component: <Schemaintro />,  docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/KOR/schema-docent-main-KOR.webm`},
    {index: "structure",title: "미술관 구조", component: <Schemastructure />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/KOR/schema-docent-intro-structure-KOR.webm`},    
];

export const introData_ENG = [
    {index: "main", title: "Introduction to the Museum", component: <Schemaintro />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/ENG/schema-docent-main-ENG.webm`},
    {index: "structure",title: "Structure of the Museum", component: <Schemastructure />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/ENG/schema-docent-intro-structure-ENG.webm`},    
];

export const introData_CH = [
    {index: "main", title: "博物馆简介", component: <Schemaintro />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/CH/schema-docent-main-CH.webm`},
    {index: "structure",title: "美术馆结构", component: <Schemastructure />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/CH/schema-docent-intro-structure-CH.webm`},    
];

export const introData_TH = [
    {index: "main", title: "ความรู้เบื้องต้นเกี่ยวกับพิพิธภัณฑ์", component: <Schemaintro />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/TH/schema-docent-main-TH.webm`},
    {index: "structure",title: "โครงสร้างพิพิธภัณฑ์ศิลปะ", component: <Schemastructure />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/TH/schema-docent-intro-structure-TH.webm`},    
];

export const introData_VI = [
    {index: "main", title: "Giới thiệu về bảo tàng", component: <Schemaintro />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/VI/schema-docent-main-VI.webm`},
    {index: "structure",title: "cấu trúc bảo tàng nghệ thuật", component: <Schemastructure />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/VI/schema-docent-intro-structure-VI.webm`},    
];

export const profileData_KOR = [
    {index: "career", title: "프로필", component: <Profile />,  docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/KOR/schema-docent-intro-career-KOR.webm`},
    {index: "career", title: "연도별 활동", component: <Career />,  docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/KOR/schema-docent-intro-career-KOR.webm`},
    {index: "artwork", title: "작품 세계관", component: <Work />,  docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/KOR/schema-docent-intro-artwork-KOR.webm`}
];

export const profileData_ENG = [
    {index: "career", title: "Profile", component: <Profile />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/ENG/schema-docent-intro-career-ENG.webm`},
    {index: "career", title: "Activities by year", component: <Career />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/ENG/schema-docent-intro-career-ENG.webm`},
    {index: "artwork", title: "Aspect of Art Work", component: <Work />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/ENG/schema-docent-intro-artwork-ENG.webm`}
];

export const profileData_CH = [
    {index: "career", title: "轮廓", component: <Profile />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/CH/schema-docent-intro-career-CH.webm`},
    {index: "career", title: "按年份划分的活动", component: <Career />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/CH/schema-docent-intro-career-CH.webm`},
    {index: "artwork", title: "工作世界观", component: <Work />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/CH/schema-docent-intro-artwork-CH.webm`}
];

export const profileData_TH = [
    {index: "career", title: "ประวัติโดยย่อ", component: <Profile />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/TH/schema-docent-intro-career-TH.webm`},
    {index: "career", title: "กิจกรรมแยกตามปี", component: <Career />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/TH/schema-docent-intro-career-TH.webm`},
    {index: "artwork", title: "มุมมองโลกการทำงาน", component: <Work />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/TH/schema-docent-intro-artwork-TH.webm`}
];

export const profileData_VI = [
    {index: "career", title: "hồ sơ", component: <Profile />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/VI/schema-docent-intro-career-VI.webm`},
    {index: "career", title: "Hoạt động theo năm", component: <Career />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/VI/schema-docent-intro-career-VI.webm`},
    {index: "artwork", title: "thế giới quan công việc", component: <Work />, docent: `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/VI/schema-docent-intro-artwork-VI.webm`}
];

