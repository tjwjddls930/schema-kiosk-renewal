import Schemaintro from "@/components/intro/Schemaintro";
import Schemastructure from "@/components/intro/Schemastructure";
import Profile from "@/components/intro/career/Profile";
import Career from "@/components/intro/career/Career";
export const introData = [
    {title: "미술관 소개", component: <Schemaintro />},
    {title: "미술관 구조", component: <Schemastructure />},    
];

export const profileData_KOR = [
    {title: "프로필", component: <Profile />},
    {title: "연도별 활동", component: <Career />}
];

export const profileData_ENG = [
    {title: "Profile", component: <Profile />},
    {title: "Activities by year", component: <Career />}
];

export const profileData_CH = [
    {title: "轮廓", component: <Profile />},
    {title: "按年份划分的活动", component: <Career />}
];

export const profileData_TH = [
    {title: "ประวัติโดยย่อ", component: <Profile />},
    {title: "กิจกรรมแยกตามปี", component: <Career />}
];

export const profileData_VI = [
    {title: "hồ sơ", component: <Profile />},
    {title: "Hoạt động theo năm", component: <Career />}
];

