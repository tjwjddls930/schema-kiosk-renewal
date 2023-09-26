import Pageframe from "@/components/pagelayout/Pageframe";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import IntroConnect from "@/components/intro/connectingpage/IntroConnect";
import IntroConnectContent from "@/components/intro/connectingpage/IntroConnectContent";

export default function Intropage() {
    return(
        <IntroConnect>
            <IntroConnectContent />
        </IntroConnect>
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