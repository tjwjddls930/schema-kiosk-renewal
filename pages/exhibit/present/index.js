import Pageframe from "@/components/pagelayout/Pageframe";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

export default function Presentpage() {
    return (
        <Pageframe>
            <div className="h-screen w-screen bg-Dgrey flex flex-col p-10 mx-auto text-black">
                <Link href="/exhibit/present/artist">
                    아티스트 선택
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