import Pageframe from "../pagelayout/Pageframe";
import Link from "next/link";
import Image from "next/image";

export default function FacilityLayout({children}) {
    return( 
        <Pageframe>
             <div className="h-screen w-screen bg-[url('/img/facilityguide/exhibitguide/exhibitguide_bg.png')] bg-no-repeat bg-cover">
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
                        <span className="text-Cgrey text-xl font-bold mt-2">시설 안내 </span>
                        <span className="text-Agrey text-xl font-bold mt-2">{'> 관람 안내'}</span>
                    </div>
                    <div>
                        <span className="text-Cgrey text-lg 2xl:text-xl font-bold">모두를 위한 보편적인 스마트 디지털 전시 관람 시스템</span>
                    </div>
                </div>
                {children}
                <button className="absolute left-14 bottom-36">
                    <Link href="/facility">
                        <Image 
                            src="/img/facilityguide/exhibitguide/뒤로가기버튼_어두운버전.png"
                            width="60"
                            height="60"
                            alt="back"
                        />
                    </Link>
                </button>
            </div>
        </Pageframe>
    )

};
