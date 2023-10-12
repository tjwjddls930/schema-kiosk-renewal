import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Viewlayout({children, pid}) {
    const router = useRouter();
    function handleRefresh() {
        router.reload();
    };
    return(
        <div className="h-screen w-screen bg-[url('/img/exhibitpage/icons/작품관람_배경_1.png')] bg-cover bg-no-repeat">
            {children}
            <div className="h-[200px] w-[100px] absolute left-10 bottom-96 screen-w:h-[750px] screen-w:w-[200px] screen-w:left-24 screen-w:bottom-56">
                <div className="flex flex-col mx-auto text-center space-y-2 screen-w:space-y-4">
                    <button 
                        className="h-20 w-20 ml-2 screen-w:h-40 screen-w:w-40 screen-w:ml-4"
                        onClick={handleRefresh}
                    > 
                        <img
                            className="h-full w-full"
                            src="/img/exhibitpage/icons/감상모드_아이콘.png"
                            alt="감상모드"
                        />
                    </button>
                    <span className="text-Awhite text-xl font-bold screen-w:text-3xl">{'초기화'}</span>
                </div>
            </div>
            <div className="h-[130px] w-[100px] absolute left-10 bottom-72 screen-w:h-[600px] screen-w:w-[200px] screen-w:left-24 screen-w:bottom-24">
                <div className="flex flex-col mx-auto text-center space-y-2 screen-w:space-y-4">
                    <button className="h-20 w-20 ml-2 screen-w:h-40 screen-w:w-40 screen-w:ml-4"> 
                            <img
                                className="h-full w-full"
                                src="/img/exhibitpage/icons/작품해설_아이콘.png"
                                alt="작품해설"
                            />
                        </button>
                        <span className="text-Awhite text-xl font-bold screen-w:text-3xl">{'작품해설'}</span>
                </div>
            </div>
            <button className="absolute left-14 bottom-28 screen-w:left-28 screen-w:bottom-44"
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
                    className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                    alt="back"
                />
            </button>
            <button className="absolute left-36 bottom-28 screen-w:left-72 screen-w:bottom-44">
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
                        className="h-16 w-16 mx-auto screen-w:h-36 screen-w:w-36"
                        alt="home"
                    />
                </Link>
            </button>
        </div>
    )
};

