import ConnectLayout from "@/components/connectingpage/ConnectLayout";
import ConnectButton from "@/components/connectingpage/ConnectButton";
import Navbar from "@/components/navbar/Navbar";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

export default function Exhibitpage() {
    const {language} = useContext(LanguageContext);
    const [video, setVideo] = useState();
    useEffect(()=>{
        setVideo(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/${language}/schema-docent-collection-${language}.webm`)
    }, [language]);

    return(
        <ConnectLayout>
            <ConnectButton />
            <Navbar url={video} />
        </ConnectLayout>
    );
};