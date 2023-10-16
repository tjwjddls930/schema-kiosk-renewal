import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import TopNavbar from "@/components/mainpage/Topnavbar";
import Navbar from "@/components/navbar/Navbar";
import Mainpagelayout from "@/components/mainpage/Mainpagelayout";
import Mainpagebutton from "@/components/mainpage/Mainpagebutton";
import Newbutton from '@/components/mainpage/Newbutton';

export default function Mainpage() {

    return(
        <Mainpagelayout>
            {/* 상단 로고 섹션 */}
            <TopNavbar />
            {/* <Mainpagebutton /> */}
            <Newbutton />
            {/* navbar */}
            <Navbar 
                url={"/video/docent/schema-docent-04.webm"}
                lang={"main"}
                sign={"/video/sign/schema_sign_2.mp4"}
                // fontsize={fontsize}
            />  
        </Mainpagelayout>
        // <>
         
        // </>       
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