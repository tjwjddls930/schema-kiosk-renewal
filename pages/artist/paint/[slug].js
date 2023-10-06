import Paintcontent from "@/components/exhibits/paintselect/Paintcontent";
import Paintlayout from "@/components/exhibits/paintselect/Paintlayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { paintData } from "@/data/paintData";
import { artistData } from "@/data/artistData";

export default function Painselect() {
    
    return(
        <Paintlayout>
            <Paintcontent />
        </Paintlayout>
    )
};

export async function getStaticPaths({locales}) {
    const pid = artistData.order;
    return {
      paths: [
        // String variant:
        `/artist/paint/${pid}`,
        // Object variant:
        { params: { slug: `artist-${pid}`, locales: 'ko'} },
        { params: { slug: `artist-${pid}`, locales: 'en'} },
        { params: { slug: `artist-${pid}`, locales: 'th'} }, 
        { params: { slug: `artist-${pid}`, locales: 'vi'} }, 
        { params: { slug: `artist-${pid}`, locales: 'zh'} },
      ],
      fallback: true,
    }
  }

export async function getStaticProps(context) {
    const {locale} = context;
    return{
        props: {
            ...(await serverSideTranslations(locale, ['common', 'navbar']))
        }
    }
};
