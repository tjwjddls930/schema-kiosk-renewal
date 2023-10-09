import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ConnectLayout from "@/components/connectingpage/ConnectLayout";
import ConnectButton from "@/components/connectingpage/ConnectButton";

export default function Exhibitpage() {
    return(
        <ConnectLayout>
            <ConnectButton />
        </ConnectLayout>
    );
};

export async function getStaticProps(context) {
    const {locale} = context;
    return{
        props: {
            ...(await serverSideTranslations(locale, ['common', 'navbar', 'connect']))
        }
    }
};