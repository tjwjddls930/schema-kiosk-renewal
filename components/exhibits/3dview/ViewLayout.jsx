import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Viewlayout = ({children, pid}) => {
    const router = useRouter();
    function handleRefresh() {
        router.reload();
    };
    return(
        <div className="h-screen w-screen bg-Awhite">
            {children}
            <div className="h-[200px] w-[100px] absolute left-10 bottom-96 screen-w:h-[750px] screen-w:w-[200px] screen-w:left-24 screen-w:bottom-56">
                <div className="flex flex-col mx-auto text-center space-y-2 screen-w:space-y-4">
                    <button 
                        className="h-20 w-20 ml-2 screen-w:h-40 screen-w:w-40 screen-w:ml-4"
                        onClick={handleRefresh}
                    > 
                        {/* <img
                            className="h-full w-full"
                            src="/img/exhibitpage/icons/감상모드_아이콘.png"
                            alt="감상모드"
                        /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="h-full w-full text-Ablack">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                    <span className="text-Ablack text-xl font-bold screen-w:text-3xl">{'초기화'}</span>
                </div>
            </div>
            <div className="h-[130px] w-[100px] absolute left-10 bottom-72 screen-w:h-[600px] screen-w:w-[200px] screen-w:left-24 screen-w:bottom-24">
                <div className="flex flex-col mx-auto text-center space-y-2 screen-w:space-y-4">
                    <button className="h-20 w-20 ml-2 screen-w:h-40 screen-w:w-40 screen-w:ml-4"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                            className="w-full h-full text-Ablack">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        </button>
                        <span className="text-Ablack text-xl font-bold screen-w:text-3xl">{'작품해설'}</span>
                </div>
            </div>
            <button className="absolute left-14 bottom-28 screen-w:left-28 screen-w:bottom-44"
                onClick={()=> router.back()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </button>
            <button className="absolute left-36 bottom-28 screen-w:left-72 screen-w:bottom-44">
                <Link href="/main">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-16 h-16 screen-w:w-36 screen-w:h-36 text-Ablack">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
            </button>
        </div>
    )
};

export default Viewlayout;

