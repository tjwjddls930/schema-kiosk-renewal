import Pageframe from "@/components/pagelayout/Pageframe";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";

export default function Awardlayout({children}) {

    return(
        <Pageframe>
            <div className="h-screen w-screen bg-Agrey">
                <div className="w-full py-10 px-16 flex flex-row justify-between">
                    <div className="flex flex-row">
                        <Link href="/main">
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
                                priority={true}
                            />
                        </Link>
                        <span className="text-Awhite text-xl font-bold mt-2">미술관 소개 </span>
                        <span className="text-Awhite text-xl font-bold mt-2">{'> 쉐마국제미술상'}</span>
                    </div>
                    <div>
                        <span className="text-Awhite textlg font-bold">모두를 위한 보편적인 스마트 디지털 전시 관람 시스템</span>
                    </div>
                </div>
                <div className="absolute left-16 bottom-24 h-[300px] screen-w:left-20 screen-w:bottom-80 screen-w:h-[1000px]">
                    <div className="flex flex-col space-y-2 screen-w:space-y-4">
                        <div className="h-2 w-2 screen-w:h-5 screen-w:w-5 bg-Cpurple rounded-full"></div>
                        <div className="h-2 w-2 screen-w:h-5 screen-w:w-5 bg-Cpurple rounded-full"></div>
                        <div className="h-2 w-2 screen-w:h-5 screen-w:w-5 bg-Cpurple rounded-full"></div>
                    </div>
                </div>
                <div className="absolute left-24 top-56 h-[390px] screen-w:h-[1150px] w-6 screen-w:w-16 screen-w:top-80 screen-w:left-44 rounded-r-xl bg-Cpurple"></div>
                {children}
                <div className="h-[150px] w-[30px] screen-w:h-[300px] screen-w:w-[100px] absolute right-14 bottom-56 screen-w:right-20 screen-w:transform screen-w:-translate-y-1/2 screen-w:bottom-1/2 animate-bounce">
                    {/* <Image 
                        src="/img/intro/award/scroll_icon.png"
                        width="30"
                        height="30"
                        alt="scroll"
                        style={{
                            height: "auto",
                            width: "auto"
                        }}
                    /> */}
                    <img 
                        src="/img/intro/award/scroll_icon.png"
                        className="h-20 w-20 screen-w:h-[300px] screen-w:w-[100px]"
                        alt="scroll"
                    />
                </div>
                <button className="absolute left-14 bottom-20 screen-w:bottom-40">
                    <Link href="/intro">
                        {/* <Image 
                            src="/img/intro/award/뒤로가기버튼_밝은버전.png"
                            width="60"
                            height="60"
                            alt="back"
                            priority={true}
                        /> */}
                          <img 
                            src="/img/intro/award/뒤로가기버튼_밝은버전.png"
                            className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                            alt="home"
                        />
                    </Link>
                </button>
                <button className="absolute left-32 bottom-20 screen-w:left-60 screen-w:bottom-40">
                    <Link href="/main">
                        {/* <Image 
                            src="/img/exhibitpage/icons/뒤로가기버튼_어두운버전.png"
                            width="60"
                            height="60"
                            alt="back"
                            priority={true}
                        /> */}
                        <img 
                            src="/img/connectpage/홈버튼_화이트.png"
                            className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                            alt="home"
                        />
                    </Link>
                </button>
            </div>
            <Navbar 
                url={"/video/docent/schema-docent-01A.webm"}
                lang={"/intro/award"}
            />
        </Pageframe>
    )
};