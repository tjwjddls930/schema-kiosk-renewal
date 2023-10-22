import Pageframe from "../pagelayout/TallLayout";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/Navbar";

const Introlayout = ({children}) => {

    return(
        <>
            <div className="h-screen w-screen bg-Awhite">
                <div className="w-full py-6 px-12 screen-w:py-12 screen-w:px-20 flex flex-row justify-between">
                    <div className="flex flex-row z-10">
                        <Image 
                            className="mr-6"
                            src="/img/mainpage/schema-logo.png"
                            height="80"
                            width="160"
                            alt="logo"
                            style={{
                                width: "auto",
                                height: "auto"
                            }}
                        />
                        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">미술관 소개 </span>
                        <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'> 미술관 소개 및 구조'}</span>
                    </div>
                    <div>
                        <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
                    </div>
                </div>
                {children}
            </div>
            <Navbar 
                url={"/video/docent/blue-docent-test-02-removed.webm"}
                lang={"/intro/structure"} />
        </>
    )
};

export default Introlayout;