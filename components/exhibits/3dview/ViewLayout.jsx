import Viewpageframe from "@/components/pagelayout/Viewpageframe";
import Link from "next/link";
import Image from "next/image";

export default function Viewlayout({children}) {

    return(
        <Viewpageframe>
            <div className="h-screen w-screen">
                {children}
                <button className="absolute left-14 bottom-28 2xl:left-24 2xl:bottom-40">
                    <Link href="/paint">
                        {/* <Image 
                            src="/img/exhibitpage/icons/뒤로가기_아이콘.png"
                            width="60"
                            height="60"
                            alt="back"
                            priority={true}
                        /> */}
                        <img 
                            src="/img/exhibitpage/icons/뒤로가기_아이콘.png"
                            className="h-16 w-16 mx-auto 2xl:h-24 2xl:w-24"
                            alt="back"
                        />
                    </Link>
                </button>
            </div>
        </Viewpageframe>
    )
};

