import Screensaver from "./Screensaver";
import { modelData } from "@/data/modelData";
import { useRouter } from "next/router";
export default function Screensaverpage() {
    const router = useRouter();
    return(
        <div className="h-screen w-screen">
        <div 
            className="h-screen w-screen absolute top-0 left-0 opacity-0"
            // onClick={async ()=> router.push(`/modelpage/${modelData[0].order}`)}
            onClick={async ()=> router.push(`/digitaltwin`)}
        >
        </div>
        <Screensaver videoUrl={"https://www.youtube.com/watch?v=Z9K0zY5gB4o"} />
    </div>
    )

}