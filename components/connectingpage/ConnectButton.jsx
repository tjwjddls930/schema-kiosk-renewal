import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { paintData } from "@/data/paintData";
import { modelData } from "@/data/modelData";

export default function ConnectButton() {
    const [popup, setPopup] = useState(false);
    const [future, setFuture] = useState(false);
    return(
        <div className="w-3/4 h-[500px] 2xl:h-3/4 flex flex-row mx-auto">
            {popup && (
                <div className="absolute top-0 left-0 h-[91%] 2xl:h-[94%] w-screen bg-Ablack bg-opacity-60 z-10"
                    onClick={()=>setPopup(!popup)}
                >
                    <div className="flex justify-between mx-auto items-center pt-16 px-16 2xl:pt-44 2xl:px-40">
                        <Link href="/artist">
                            <button className="w-[150px] h-16 2xl:w-[350px] 2xl:h-32 2xl:text-4xl rounded-full bg-gradient-to-r from-Agradient to-Bgradient">
                                {'작가 보기'}
                            </button>
                        </Link>
                        <span className="flex mx-auto text-Awhite font-xl mt-4 2xl:text-4xl font-bold 2xl:mt-12">
                        {'전시 설명문'}
                        </span>
                        <Link href={`/viewpage/${paintData[0].order}`}>
                            <button className="w-[150px] h-16 2xl:w-[350px] 2xl:h-32 2xl:text-4xl rounded-full bg-gradient-to-r from-Agradient to-Bgradient">
                                {'작품 보기'}
                            </button>
                        </Link>
                    </div>
                    <div className="absolute h-3/4 w-[70%] top-40 2xl:top-80 left-1/2 transform -translate-x-1/2 z-20"> 
                        <iframe 
                        className="w-full h-full touch-none border-none border-radius rounded-[20px]"
                        title="explanation"
                        src="https://schemaartmuseum.com/2023/09/09/%eb%a7%a4%eb%81%84%eb%9f%ac%ec%9a%b4-%eb%8f%8c%eb%b0%ad-2-2/"
                        />  
                    </div>                         
                </div>
            )}
            {future && (
                <div className="absolute top-0 left-0 h-[91%] 2xl:h-[94%] w-screen bg-Ablack bg-opacity-60 z-10"
                    onClick={()=>setFuture(!future)}
                >
                    <div className="absolute h-5/6 w-5/6 top-40 2xl:top-56 left-1/2 transform -translate-x-1/2 z-20"> 
                        <iframe 
                        className="w-full h-full touch-none border-none border-radius rounded-[20px]"
                        title="future"
                        src="https://schemaartmuseum.com/%ec%98%88%ec%a0%95%ec%a0%84%ec%8b%9c/"
                        />  
                    </div>                         
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
                        <div className="bg-Ablack h-[1px] w-[400px] 2xl:h-[1.5px] 2xl:w-[800px] mx-auto" />
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
                        <div className="bg-Ablack h-[1.5px] w-[400px] 2xl:h-[1.5px] 2xl:w-[800px] mx-auto" />
                    </div>
                </>
            </div>
            <div className="flex flex-col h-full w-1/2">
                <>
                    <div className="h-[250px] 2xl:h-[600px] w-5/6 mx-auto"
                        onClick={()=> setFuture(!future)}
                    >
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
                        <div className="bg-Ablack h-[1.5px] w-[400px] 2xl:h-[1.5px] 2xl:w-[800px] mx-auto" />
                    </div>
                </>
                <Link href={`/modelpage/${modelData[0].order}`}>
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
                        <div className="bg-Ablack h-[1.5px] w-[400px] 2xl:h-[1.5px] 2xl:w-[800px] mx-auto" />
                    </div>
                </Link>
            </div>
        </div>
    )
}