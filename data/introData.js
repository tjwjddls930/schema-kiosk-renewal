import Schemaintro from "@/components/intro/Schemaintro";
import Schemastructure from "@/components/intro/Schemastructure";
import Profile from "@/components/intro/career/Profile";
import Career from "@/components/intro/career/Career";
import Work from "@/components/intro/career/Work";
export const introData_KOR = [
    {title: "미술관 소개", component: <Schemaintro />},
    {title: "미술관 구조", component: <Schemastructure />},    
];

export const introData_ENG = [
    {title: "Introduction to the Museum", component: <Schemaintro />},
    {title: "Structure of the Museum", component: <Schemastructure />},    
];

export const introData_CH = [
    {title: "博物馆简介", component: <Schemaintro />},
    {title: "美术馆结构", component: <Schemastructure />},    
];

export const introData_TH = [
    {title: "ความรู้เบื้องต้นเกี่ยวกับพิพิธภัณฑ์", component: <Schemaintro />},
    {title: "โครงสร้างพิพิธภัณฑ์ศิลปะ", component: <Schemastructure />},    
];

export const introData_VI = [
    {title: "Giới thiệu về bảo tàng", component: <Schemaintro />},
    {title: "cấu trúc bảo tàng nghệ thuật", component: <Schemastructure />},    
];

export const profileData_KOR = [
    {title: "프로필", component: <Profile />},
    {title: "연도별 활동", component: <Career />},
    {title: "작품 세계관", component: <Work />}
];

export const profileData_ENG = [
    {title: "Profile", component: <Profile />},
    {title: "Activities by year", component: <Career />},
    {title: "Aspect of Art Work", component: <Work />}
];

export const profileData_CH = [
    {title: "轮廓", component: <Profile />},
    {title: "按年份划分的活动", component: <Career />},
    {title: "工作世界观", component: <Work />}
];

export const profileData_TH = [
    {title: "ประวัติโดยย่อ", component: <Profile />},
    {title: "กิจกรรมแยกตามปี", component: <Career />},
    {title: "มุมมองโลกการทำงาน", component: <Work />}
];

export const profileData_VI = [
    {title: "hồ sơ", component: <Profile />},
    {title: "Hoạt động theo năm", component: <Career />},
    {title: "thế giới quan công việc", component: <Work />}
];

