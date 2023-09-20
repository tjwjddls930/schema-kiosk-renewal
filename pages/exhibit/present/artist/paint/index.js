import Paintcontent from "@/components/exhibits/paintselect/Paintcontent";
import Paintlayout from "@/components/exhibits/paintselect/Paintlayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { paintData } from "@/data/paintData";

export default function Painselect() {
    return(
        <Paintlayout>
            <Paintcontent 
            />
        </Paintlayout>
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
