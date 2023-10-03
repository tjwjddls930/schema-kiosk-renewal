import Pageframe from "@/components/pagelayout/Pageframe";
import Link from "next/link";
import Image from "next/image";

export default function Paintlayout({children}) {

    return(
        <Pageframe>
            <div className="h-screen w-screen bg-Awhite">
                <div className="w-full xl:py-10 xl:px-16 lg:py-6 lg:px-12 flex flex-row justify-between">
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
                        <span className="text-Cgrey text-lg 2xl:text-xl mt-2">{'전시 안내 '} </span>
                        <span className="text-Cgrey text-lg 2xl:text-xl mt-2">{' > 현재 전시'}</span>
                        <span className="text-Cgrey text-lg 2xl:text-xl mt-2">{' > 작가 선택'}</span>
                        <span className="text-Cgrey text-lg 2xl:text-xl font-bold mt-2">{' > 작품 선택'}</span>
                    </div>
                    <div>
                        <span className="text-Cgrey text-base 2xl:text-xl font-bold">모두를 위한 보편적인 스마트 디지털 전시 관람 시스템</span>
                    </div>
                </div>
                {children}
                <div className="absolute h-60 w-60 left-10 bottom-48 2xl:bottom-56">
                    <Image 
                        src="/img/exhibitpage/icons/acc_2.png"
                        width="100"
                        height="100"
                        alt="acc"
                        priority={true}
                        style={{
                            height:"auto",
                            width: "auto"
                        }}
                    />
                </div>
                <div className="absolute h-20 w-40 left-36 bottom-4 2xl:bottom-20">
                    <Image 
                        src="/img/exhibitpage/icons/acc_1.png"
                        width="150"
                        height="50"
                        alt="acc"
                        priority={true}
                        style={{
                            height:"auto",
                            width: "auto"
                        }}
                    />
                </div>
                <button className="absolute left-14 bottom-20 2xl:bottom-40">
                    <Link href="/artist">
                        <Image 
                            src="/img/exhibitpage/icons/뒤로가기버튼_어두운버전.png"
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