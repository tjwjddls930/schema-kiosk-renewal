import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Webpopup from "./Webpopup";

export default function ConnectButton() {
    const [popup, setPopup] = useState(false);
    const [web, setWeb] = useState(false);
    return(
        <div className="w-3/4 h-[500px] 2xl:h-3/4 flex flex-row mx-auto">
            {popup && (
                <div className="absolute top-0 left-0 h-[91%] 2xl:h-[94%] w-screen bg-Ablack bg-opacity-60 z-10"
                    onClick={()=>setPopup(!popup)}
                >
                    <div className="flex justify-between mx-auto pt-56 px-24">
                        <Link href="/artist">
                            <button className="w-[150px] h-16 2xl:w-[350px] 2xl:h-32 rounded-full bg-gradient-to-r from-Agradient to-Bgradient">
                                {'작가 보기'}
                            </button>
                        </Link>
                        <Link href="/viewpage">
                            <button className="w-[150px] h-16 2xl:w-[350px] 2xl:h-32 rounded-full bg-gradient-to-r from-Agradient to-Bgradient">
                                {'작품 보기'}
                            </button>
                        </Link>
                        {/* <>
                            <button className="w-[150px] h-16 2xl:w-[250px] 2xl:h-24 rounded-full bg-gradient-to-r from-Agradient to-Bgradient"
                                onClick={()=>{
                                    setWeb(!web)
                                    setPopup(popup)
                                }}
                            >
                                {'전시 설명문'}
                            </button>
                        </> */}
                    </div>
                    <span className="w-full flex mx-auto text-Awhite font-xl mt-4 2xl:font-4xl font-bold 2xl:mt-8">
                        {'전시 설명문'}
                    </span>
                    <Webpopup />                            
                </div>
            )}
            <div className="flex flex-col h-full w-1/2">
                <Link href="/artist">
                    <div className="h-[250px] 2xl:h-[600px] w-5/6 mx-auto">
                        <div className="flex flex-row space-x-4 justify-start 2xl:space-x-6 2xl:justify-center">
                            <span className="text-[150px] 2xl:text-[300px] font-bold text-Ablack drop-shadow-xl">{'01'}</span>
                            <div className="flex flex-col w-[170px] 2xl:w-[350px] 2xl:space-y-2 mr-4 pt-10 justify-start 2xl:justify-center">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-lg 2xl:text-2xl text-Agrey font-bold">{'Last exhibition'}</span>
                                <span className="text-2xl 2xl:text-4xl text-Ablack font-bold mb-5">{'지난 전시'}</span>
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'2009년부터 2023년까지의'}</span>                        
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'전시를 감상하실 수 있습니다.'}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 2xl:h-24 2xl:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1px] w-[400px] 2xl:h-[1.5px] 2xl:w-[700px] mx-auto" />
                    </div>
                </Link>
                <>
                    <div className="h-[250px] 2xl:h-[600px] w-5/6 mx-auto"
                        onClick={()=>setPopup(!popup)}
                    >
                        <div className="flex flex-row space-x-4 overflow-hidden justify-start 2xl:space-x-6 2xl:justify-center">
                            <span className="text-[150px] 2xl:text-[300px] font-bold text-Ablack drop-shadow-xl">{'02'}</span>
                            <div className="flex flex-col w-[170px] 2xl:w-[350px] 2xl:space-y-2 mr-4 pt-10 justify-start 2xl:justify-center">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-lg 2xl:text-2xl text-Agrey font-bold">{'Present exhibition'}</span>
                                <span className="text-2xl 2xl:text-4xl text-Ablack font-bold mb-5">{'현재 전시'}</span>
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'현재 진행중인 전시를'}</span>                        
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'감상하실 수 있습니다.'}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 2xl:h-24 2xl:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1.5px] w-[400px] 2xl:h-[1.5px] 2xl:w-[700px] mx-auto" />
                    </div>
                </>
            </div>
            <div className="flex flex-col h-full w-1/2">
                <Link href="/artist">
                    <div className="h-[250px] 2xl:h-[600px] w-5/6 mx-auto">
                        <div className="flex flex-row space-x-4 justify-start 2xl:space-x-6 2xl:justify-center">
                            <span className="text-[150px] 2xl:text-[300px] font-bold text-Ablack drop-shadow-xl">{'03'}</span>
                            <div className="flex flex-col w-[170px] 2xl:w-[350px] 2xl:space-y-2 pt-10 mr-4 justify-start 2xl:justify-center">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-lg 2xl:text-2xl text-Agrey font-bold">{'Scheduled exhibition'}</span>
                                <span className="text-2xl 2xl:text-4xl text-Ablack font-bold mb-5">{'예정 전시'}</span>
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'예정된 전시에 대한 정보를를'}</span>                        
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'얻을 수 있습니다다.'}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 2xl:h-24 2xl:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1.5px] w-[400px] 2xl:h-[1.5px] 2xl:w-[700px] mx-auto" />
                    </div>
                </Link>
                <Link href="/artist">
                    <div className="h-[250px] 2xl:h-[600px] w-5/6 mx-auto">
                        <div className="flex flex-row space-x-4 justify-start 2xl:space-x-6 2xl:justify-center">
                            <span className="text-[150px] 2xl:text-[300px] font-bold text-Ablack drop-shadow-xl">{'04'}</span>
                            <div className="flex flex-col w-[170px] 2xl:w-[350px] 2xl:space-y-2 pt-10 mr-4 justify-start 2xl:justify-center">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-lg 2xl:text-2xl text-Agrey font-bold">{'Collection tour'}</span>
                                <span className="text-2xl 2xl:text-4xl text-Ablack font-bold mb-5">{'소장품 관람'}</span>
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'미술관이 소장하고 있는 전시물을'}</span>                        
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'관람하실 수 있습니다.'}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 2xl:h-24 2xl:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1.5px] w-[400px] 2xl:h-[1.5px] 2xl:w-[700px] mx-auto" />
                    </div>
                </Link>
            </div>
        </div>
    )
}