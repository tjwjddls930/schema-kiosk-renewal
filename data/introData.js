import Schemaintro from "@/components/intro/Schemaintro";
import Schemastructure from "@/components/intro/Schemastructure";
import Profile from "@/components/intro/career/Profile";
import Career from "@/components/intro/career/Career";
export const introData = [
    {title: "미술관 소개", component: <Schemaintro />},
    {title: "미술관 구조", component: <Schemastructure />},    
];

export const careerData = [
    {title: "프로필", component: <Profile />},
    {title: "연도별 활동", component: <Career />}
];


