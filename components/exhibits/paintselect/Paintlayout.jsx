import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/router";

const Paintlayout = ({children}) => {
    const router = useRouter();
    return(
        <div className="h-screen w-screen bg-Awhite">
            <div className="w-full py-6 px-12 screen-w:py-12 screen-w:px-20 flex flex-row justify-between">
                <div className="flex flex-row"
                    onClick={async()=>router.push("/main")}
                >
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
                    <span className="text-Cgrey text-base screen-w:text-xl mt-2">{'전시 안내 '} </span>
                    <span className="text-Cgrey text-base screen-w:text-xl mt-2">{' > 현재 전시'}</span>
                    <span className="text-Cgrey text-base screen-w:text-xl mt-2">{' > 작가 선택'}</span>
                    <span className="text-Cgrey text-base screen-w:text-xl font-bold mt-2">{' > 작품 선택'}</span>
                </div>
                <div>
                    <span className="text-Cgrey text-base screen-w:text-xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
                </div>
            </div>
            {children}
            <button className="absolute left-14 bottom-20 screen-w:bottom-40"
                onClick={async()=>router.back()}
            >
                {/* <Image 
                    src="/img/exhibitpage/icons/뒤로가기버튼_어두운버전.png"
                    width="60"
                    height="60"
                    alt="back"
                    priority={true}
                /> */}
                <img 
                    src="/img/exhibitpage/icons/뒤로가기버튼_어두운버전.png"
                    className="h-12 w-12 mx-auto screen-w:h-36 screen-w:w-36"
                    alt="back"
                />
            </button>
            <button className="absolute left-32 bottom-20 screen-w:left-60 screen-w:bottom-40"
                onClick={async()=>router.push("/main")}
            >
                {/* <Image 
                    src="/img/exhibitpage/icons/뒤로가기버튼_어두운버전.png"
                    width="60"
                    height="60"
                    alt="back"
                    priority={true}
                /> */}
                <img 
                    src="/img/connectpage/홈버튼_밝은화면용.png"
                    className="h-12 w-12 mx-auto screen-w:h-36 screen-w:w-36"
                    alt="home"
                />
            </button>
            <Navbar 
                url={"/video/docent/blue-docent-test-02-removed.webm"}
                lang={"/artist/paint"}
            />
        </div>
    )
};

export default Paintlayout;