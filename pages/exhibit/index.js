import Pageframe from "@/components/pagelayout/Pageframe";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Exhibitpage() {
    return(
        <Pageframe>
             <div className="h-screen w-screen bg-Dgrey flex flex-col p-10 mx-auto text-black">
                <Link href="/exhibit/past">
                    지난 전시
                </Link>
                <Link href="/exhibit/present">
                    현재 전시
                </Link>
                <Link href="/exhibit/scheduled">
                    예정 전시
                </Link>
            </div>
        </Pageframe>
    );
};

export async function getStaticProps(context) {
    const {locale} = context;
    return{
        props: {
            ...(await serverSideTranslations(locale, ['common', 'navbar']))
        }
    }
};