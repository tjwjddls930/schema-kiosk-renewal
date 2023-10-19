import Pageframe from "../pagelayout/TallLayout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Soundguide from "../docent/Soundguide";
import { useRouter } from "next/router";

const EducationLayout = ({children}) => {
    const router = useRouter();
    // const [popup, setPopup] = useState(false);
    // let videoUrl = ""
    return(
        <div className="h-screen w-screen bg-Awhite">
            <div className="w-full p-10 screen-w:p-20 flex flex-row justify-between">
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
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'교육프로그램'}</span>
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'> 교육프로그램 상세'}</span>
                </div>
                <div>
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
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
                className="absolute h-10 w-[200px] screen-w:h-28 screen-w:w-[500px] text-center text-base screen-w:text-4xl text-Awhite font-bold items-center bottom-20 screen-w:bottom-56 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-Bblue to-Ablue">
                {'프로그램 내용 보기'}
            </button>

            <button className="absolute left-6 bottom-20 screen-w:left-16 screen-w:bottom-44"
                onClick={()=>router.back()}
            >
                <img 
                    src="/img/exhibitpage/icons/뒤로가기버튼_어두운버전.png"
                    className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                    alt="back"
                />    
            </button>
            <button className="absolute left-24 bottom-20 screen-w:left-60 screen-w:bottom-44"
                onClick={()=>router.push("/main")}
            >
                    <img 
                    src="/img/connectpage/홈버튼_밝은화면용.png"
                    className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                    alt="home"
                />
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
    )
};

export default EducationLayout;