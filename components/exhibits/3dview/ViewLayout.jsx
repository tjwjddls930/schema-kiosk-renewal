import Viewpageframe from "@/components/pagelayout/Viewpageframe";
import Link from "next/link";
import Image from "next/image";

export default function Viewlayout({children}) {

    return(
        <Viewpageframe>
            <div className="h-screen w-screen">
                {children}
                <button className="absolute left-14 bottom-28">
                    <Link href="/paint">
                        <Image 
                            src="/img/exhibitpage/icons/뒤로가기_아이콘.png"
                            width="60"
                            height="60"
                            alt="back"
                            priority={true}
                        />
                    </Link>
                </button>
            </div>
        </Viewpageframe>
    )
};

