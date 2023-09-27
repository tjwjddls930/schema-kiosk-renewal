import Pageframe from "@/components/pagelayout/Pageframe";
import Link from "next/link";
import Image from "next/image";

export default function Artistlayout({children}) {

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
                        <span className="text-Awhite xl:text-xl lg:text-lg mt-2">{'전시 안내 '} </span>
                        <span className="text-Awhite xl:text-xl lg:text-lg mt-2">{' > 현재 전시'}</span>
                        <span className="text-Awhite xl:text-xl lg:text-lg font-bold mt-2">{' > 작가 선택'}</span>
                    </div>
                    <div>
                        <span className="text-Awhite text-md font-bold">모두를 위한 보편적인 스마트 디지털 전시 관람 시스템</span>
                    </div>
                </div>
                <div className="flex w-full items-center text-center text-Awhite text-xl mb-6">
                    <span className="mx-auto">{'전시에 참여한 작가를 선택해보세요!'}</span>
                </div>
                {children}
                <div className="absolute h-60 w-40 -top-[100px] left-1/2 right-0 transform -translate-x-1/2">
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
                <button className="absolute left-14 xl:bottom-36 lg:bottom-24">
                    <Link href="/exhibit">
                        <Image 
                            src="/img/exhibitpage/icons/뒤로가기_아이콘.png"
                            width="60"
                            height="60"
                            alt="back"
                            priority={true}
                        />
                    </Link>
                </button>
                <span className="absolute xl:bottom-60 lg:bottom-48 right-28 text-8xl w-1/12 font-bold text-Awhite opacity-50">{'/05'}</span>
            </div>
        </Pageframe>
    )
};