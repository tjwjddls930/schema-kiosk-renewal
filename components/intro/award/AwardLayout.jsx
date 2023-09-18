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
                        />
                        <span className="text-Awhite text-xl font-bold mt-2">미술관 소개 </span>
                        <span className="text-Awhite text-xl font-bold mt-2">{'> 쉐마국제미술상'}</span>
                    </div>
                    <div>
                        <span className="text-Awhite textlg font-bold">모두를 위한 보편적인 스마트 디지털 전시 관람 시스템</span>
                    </div>
                </div>
                {children}
                <button className="absolute left-14 bottom-36">
                    <Link href="/intro">
                        <Image 
                            src="/img/intro/award/뒤로가기버튼_밝은버전.png"
                            width="60"
                            height="60"
                            alt="back"
                        />
                    </Link>
                </button>
            </div>
        </Pageframe>
    )
}