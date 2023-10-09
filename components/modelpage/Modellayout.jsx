import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Modelpageframe from "../pagelayout/Modelpageframe";
export default function Modellayout({children, pid}) {
    const router = useRouter();
    return(
        <Modelpageframe pid={pid}>
            <div className="h-screen w-screen">
                {children}
                <button className="absolute left-14 bottom-28 2xl:left-28 2xl:bottom-44"
                    onClick={()=> router.back()}
                >
                    {/* <Image 
                        src="/img/exhibitpage/icons/뒤로가기_아이콘.png"
                        width="60"
                        height="60"
                        alt="back"
                        priority={true}
                    /> */}
                    <img 
                        src="/img/exhibitpage/icons/뒤로가기_아이콘.png"
                        className="h-16 w-16 mx-auto 2xl:h-36 2xl:w-36"
                        alt="back"
                    />
                </button>
                <button className="absolute left-36 bottom-28 2xl:left-72 2xl:bottom-44">
                    <Link href="/main">
                        {/* <Image 
                            src="/img/exhibitpage/icons/뒤로가기_아이콘.png"
                            width="60"
                            height="60"
                            alt="back"
                            priority={true}
                        /> */}
                        <img 
                            src="/img/connectpage/홈버튼_화이트.png"
                            className="h-16 w-16 mx-auto 2xl:h-36 2xl:w-36"
                            alt="home"
                        />
                    </Link>
                </button>
            </div>
        </Modelpageframe>
    )
};

