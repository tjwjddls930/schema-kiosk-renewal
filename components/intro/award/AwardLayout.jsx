import Pageframe from "@/components/pagelayout/TallLayout";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";

const Awardlayout = ({children}) => {

    return(
          <>
            <div className="h-screen w-screen bg-Agrey bg-opacity-50">
                <div className="w-full py-6 px-12 screen-w:py-12 screen-w:px-20 flex flex-row justify-between">
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
                        <span className="text-Awhite text-base screen-w:text-4xl font-bold mt-2">미술관 소개 </span>
                        <span className="text-Awhite text-base screen-w:text-4xl font-bold mt-2">{'> 쉐마국제미술상'}</span>
                    </div>
                    <div>
                        <span className="text-Awhite text-base screen-w:text-4xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
                    </div>
                </div>
                <div className="absolute left-16 bottom-24 h-[300px] screen-w:left-20 screen-w:bottom-80 screen-w:h-[1000px]">
                    <div className="flex flex-col space-y-2 screen-w:space-y-4">
                        <div className="h-2 w-2 screen-w:h-5 screen-w:w-5 bg-Bblue rounded-full"></div>
                        <div className="h-2 w-2 screen-w:h-5 screen-w:w-5 bg-Bblue rounded-full"></div>
                        <div className="h-2 w-2 screen-w:h-5 screen-w:w-5 bg-Bblue rounded-full"></div>
                    </div>
                </div>
                <div className="absolute left-24 top-56 h-[390px] screen-w:h-[1150px] w-6 screen-w:w-16 screen-w:top-80 screen-w:left-44 rounded-r-xl bg-Bblue"></div>
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                            className="w-16 h-16 screen-w:w-36 screen-w:h-36">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </button>
            </div>
            <Navbar 
                url={"/video/docent/schema-docent-01A.webm"}
                lang={"/intro/award"}
            />
          </>
    )
};

export default Awardlayout;