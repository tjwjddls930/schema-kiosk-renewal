'use client'
import Screensaver from "@/components/docent/Screensaver";
import { useRouter } from "next/router";
import { Suspense } from "react";
export default function Home() {
    const router = useRouter();
    return(
        <div className="h-screen w-screen">
            <div 
                className="h-screen w-screen absolute top-0 left-0 opacity-0"
                onClick={()=> router.push("/digitaltwin")}
            >
            </div>
            <Suspense fallback={null}>
                <Screensaver videoUrl={"https://www.youtube.com/watch?v=Z9K0zY5gB4o"} />
            </Suspense>
        </div>
    )
};

