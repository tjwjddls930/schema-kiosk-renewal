import Pageframe from "@/components/pagelayout/TallLayout";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Facility() {
    return(
        <Pageframe>
            <div className="h-screen w-screen bg-Dgrey flex flex-col p-10 mx-auto text-black">
                <Link href="/facility/exhibitguide">
                    전시관람 안내
                </Link>
                <Link href="/facility/pathguide">
                    길 안내 
                </Link>
            </div>
        </Pageframe>
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