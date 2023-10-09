import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState } from "react";
import ReactSlider from "react-slider";
import Soundguide from "../docent/Soundguide";
import clsx from "clsx";
import ViewNavbar from "../navbar/3DpageNavbar";

export default function Modelpageframe({children, pid}) {
    const [volume, setVolume] = useState(Number(0.5));
    const [soundguide, setSoundguide] = useState(false);
    const [con, setCon] = useState(true);
    const {t, i18n} = useTranslation('navbar');

    return(
        <div className="w-screen h-screen bg-Ablack bg-cover bg-no-repeat">
            {children}
            {soundguide && (
                <div className="absolute bottom-20 right-4 h-[350px] w-[350px] z-20">
                    <Soundguide 
                        videoUrl={"/video/docent/blue-docent-test-02-removed.webm"}
                        volume={Number(volume)}
                        playing={true}
                        end={()=>setSoundguide(!soundguide)}
                    />
                </div>
            )}
            {/* navbar */}
            <ViewNavbar 
                url={"/video/docent/blue-docent-test-02-removed.webm"}
                // sign={"/video/sign/schema_sign_1.mp4"}
                lang={"viewpage"}
                pid={pid}
            />
        </div>
    )
};