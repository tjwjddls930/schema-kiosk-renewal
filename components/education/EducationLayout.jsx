import Pageframe from "../pagelayout/Pageframe";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Soundguide from "../docent/Soundguide";

export default function EducationLayout({children}) {
    // const [popup, setPopup] = useState(false);
    // let videoUrl = ""
    return(
        <Pageframe>
            <div className="h-screen w-screen bg-Awhite">
            <div className="w-full py-10 px-16 flex flex-row justify-between">
                <div className="flex flex-row">
                        <Link href="/">
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
                        </Link>
                        <span className="text-Bgrey text-xl font-bold mt-2">{'교육 프로그램 '} </span>
                        <span className="text-Bgrey text-xl font-bold mt-2">{' > 교육 정보'}</span>
                    </div>
                    <div>
                        <span className="text-Bgrey text-md font-bold">모두를 위한 보편적인 스마트 디지털 전시 관람 시스템</span>
                    </div>
                </div>
                <div className="absolute top-28 left-28">
                    <Image 
                        src="/img/facilityguide/pathguide/acc_1.png"
                        height={80}
                        width={80}
                        alt="dot"
                        style={{
                            width:"auto",
                            height:"auto"
                        }}
                    />
                </div>
                {children}
                {/* {popup && (
                     <div className="absolute top-0 left-0 h-[91%] w-screen bg-Ablack bg-opacity-60 z-20">
                     <div className="flex mx-auto h-[530px] w-[530px] pt-40">
                         <Soundguide 
                             videoUrl={url}
                            //  volume={Number(volume)}
                             playing={true}
                             end={()=>setPopup(!popup)}
                         />
                     </div>
                 </div>
                )} */}
                <button
                    // onClick={()=> setPopup(!popup)} 
                    className="absolute h-14 w-[250px] text-center text-xl text-Awhite font-bold items-center bottom-48 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-Agradient to-Bgradient">
                    {'프로그램 내용 보기'}
                </button>
                <button className="absolute left-14 bottom-36">
                    <Link href="/education">
                        <Image 
                            src="/img/facilityguide/exhibitguide/뒤로가기버튼_어두운버전.png"
                            width="60"
                            height="60"
                            alt="back"
                        />
                    </Link>
                </button>
                <div className="absolute bottom-36 right-14">
                    <Image 
                        src="/img/facilityguide/pathguide/acc_2.png"
                        height={100}
                        width={180}
                        alt="dot2"
                        style={{
                            width:"auto",
                            height:"auto"
                        }}
                    />
                </div>
            </div>
        </Pageframe>
    )
};