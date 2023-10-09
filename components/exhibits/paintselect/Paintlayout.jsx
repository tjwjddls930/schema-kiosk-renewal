import Pageframe from "@/components/pagelayout/Pageframe";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";

export default function Paintlayout({children}) {
    const router = useRouter();
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
                <div className="absolute h-60 w-60 left-10 bottom-48 opacity-0 2xl:h-80 2xl:w-80 2xl:left-16 2xl:bottom-80 2xl:opacity-100">
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
                <div className="absolute h-20 w-40 left-36 bottom-4 opacity-0 2xl:opacity-100 2xl:bottom-20">
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
                <button className="absolute left-14 bottom-20 2xl:bottom-40"
                    onClick={()=>router.back()}
                >
                    <Link href="/artist">
                        {/* <Image 
                            src="/img/exhibitpage/icons/뒤로가기버튼_어두운버전.png"
                            width="60"
                            height="60"
                            alt="back"
                            priority={true}
                        /> */}
                        <img 
                            src="/img/exhibitpage/icons/뒤로가기버튼_어두운버전.png"
                            className="h-16 w-16 mx-auto 2xl:h-36 2xl:w-36"
                            alt="back"
                        />
                    </Link>
                </button>
                <button className="absolute left-32 bottom-20 2xl:left-60 2xl:bottom-40">
                    <Link href="/main">
                        {/* <Image 
                            src="/img/exhibitpage/icons/뒤로가기버튼_어두운버전.png"
                            width="60"
                            height="60"
                            alt="back"
                            priority={true}
                        /> */}
                        <img 
                            src="/img/connectpage/홈버튼_밝은화면용.png"
                            className="h-16 w-16 mx-auto 2xl:h-36 2xl:w-36"
                            alt="home"
                        />
                    </Link>
                </button>
                <Navbar 
                    url={"/video/docent/blue-docent-test-02-removed.webm"}
                    sign={"/video/sign/schema_sign_1.mp4"}
                    lang={"/artist/paint"}
                />
            </div>
        </Pageframe>
    )
};