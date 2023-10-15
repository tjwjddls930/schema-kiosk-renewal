import Pageframe from "../pagelayout/TallLayout";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/Navbar";

export default function Introlayout({children}) {

    return(
        <>
            <div className="h-screen w-screen bg-Agrey">
                <div className="w-full py-6 px-12 screen-w:py-12 screen-w:px-20 flex flex-row justify-between">
                    <div className="flex flex-row">
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
                        <span className="text-Awhite text-base screen-w:text-xl font-bold mt-2">미술관 소개 </span>
                        <span className="text-Awhite text-base screen-w:text-xl font-bold mt-2">{'> 미술관 소개 및 구조'}</span>
                    </div>
                    <div>
                        <span className="text-Awhite text-base screen-w:text-xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
                    </div>
                </div>
                {children}
                <button className="absolute left-6 bottom-20 screen-w:left-16 screen-w:bottom-44">
                    <Link href="/intro">
                        {/* <Image 
                            src="/img/facilityguide/exhibitguide/뒤로가기버튼_어두운버전.png"
                            width="60"
                            height="60"
                            alt="back"
                        /> */}
                        <img 
                        src="/img/facilityguide/exhibitguide/뒤로가기버튼_어두운버전.png"
                        className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                        alt="back"
                        />
                    </Link>
                </button>
                <button className="absolute left-24 bottom-20 screen-w:left-60 screen-w:bottom-44">
                    <Link href="/main">
                        <img 
                            src="/img/connectpage/홈버튼_밝은화면용.png"
                            className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                            alt="home"
                        />
                    </Link>
                </button>
            </div>
            <Navbar 
                url={"/video/docent/blue-docent-test-02-removed.webm"}
                lang={"/intro/structure"} />
        </>
    )
}