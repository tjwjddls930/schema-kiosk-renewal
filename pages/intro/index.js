import Pageframe from "@/components/pagelayout/Pageframe";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Intropage() {
    return(
        <Pageframe>
             <div className="h-screen w-screen bg-Dgrey flex flex-col p-10 mx-auto text-black">
                <Link href="/intro/structure">
                    미술관 소개 및 구조
                </Link>
                <Link href="/intro/career">
                    김재관 프로필 및 경력
                </Link>
                <Link href="/intro/award">
                    쉐마국제미술상
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