import Pageframe from "@/components/pagelayout/Pageframe";
import Link from "next/link";
import Image from "next/image";

export default function Awardlayout({children}) {

    return(
        <Pageframe>
            <div className="h-screen w-screen bg-Agrey">
                <div className="w-full py-10 px-16 flex flex-row justify-between">
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
                            priority={true}
                        />
                        <span className="text-Awhite text-xl font-bold mt-2">미술관 소개 </span>
                        <span className="text-Awhite text-xl font-bold mt-2">{'> 쉐마국제미술상'}</span>
                    </div>
                    <div>
                        <span className="text-Awhite textlg font-bold">모두를 위한 보편적인 스마트 디지털 전시 관람 시스템</span>
                    </div>
                </div>
                <div className="absolute left-16 bottom-48 h-[300px]">
                    <div className="flex flex-col space-y-2">
                        <div className="h-2 w-2 bg-Cpurple rounded-full"></div>
                        <div className="h-2 w-2 bg-Cpurple rounded-full"></div>
                        <div className="h-2 w-2 bg-Cpurple rounded-full"></div>
                    </div>
                </div>
                <div className="absolute left-24 top-64 h-[390px] w-6 rounded-r-xl bg-Cpurple"></div>
                {children}
                <div className="h-[150px] w-[30px] absolute right-14 bottom-80 animate-bounce">
                    <Image 
                        src="/img/intro/award/scroll_icon.png"
                        width="30"
                        height="30"
                        alt="scroll"
                        style={{
                            height: "auto",
                            width: "auto"
                        }}
                    />
                </div>
                <button className="absolute left-14 bottom-36">
                    <Link href="/intro">
                        <Image 
                            src="/img/intro/award/뒤로가기버튼_밝은버전.png"
                            width="60"
                            height="60"
                            alt="back"
                            priority={true}
                        />
                    </Link>
                </button>
            </div>
        </Pageframe>
    )
};